package com.microblink.blinkid.capacitor;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.util.Base64;

import androidx.activity.result.ActivityResult;
import androidx.annotation.NonNull;

import com.microblink.blinkid.MicroblinkSDK;
import com.microblink.blinkid.entities.recognizers.RecognizerBundle;
import com.microblink.blinkid.intent.IntentDataTransferMode;
import com.microblink.blinkid.uisettings.UISettings;
import com.microblink.blinkid.capacitor.overlays.OverlaySettingsSerializers;
import com.microblink.blinkid.capacitor.recognizers.RecognizerSerializers;
import com.microblink.blinkid.locale.LanguageUtils;
import com.microblink.blinkid.directApi.DirectApiErrorListener;
import com.microblink.blinkid.directApi.RecognizerRunner;
import com.microblink.blinkid.recognition.RecognitionSuccessType;
import com.microblink.blinkid.view.recognition.ScanResultListener;
import com.microblink.blinkid.hardware.orientation.Orientation;
import com.microblink.blinkid.metadata.recognition.FirstSideRecognitionCallback;
import com.microblink.blinkid.recognition.RecognitionSuccessType;
import com.microblink.blinkid.metadata.MetadataCallbacks;
import com.getcapacitor.annotation.ActivityCallback;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;


@CapacitorPlugin(name="BlinkIDCapacitorPlugin")
public class MicroblinkPlugin extends Plugin {

    private static final String CANCELLED = "cancelled";
    private static final String RESULT_LIST = "resultList";

    private RecognizerBundle recognizerBundle;
    private RecognizerRunner recognizerRunner;
    private boolean mFirstSideScanned;

    @PluginMethod
    public void scanWithCamera(PluginCall call) {
        JSObject jsOverlaySettings = call.getObject("overlaySettings");
        JSObject jsRecognizerCollection = call.getObject("recognizerCollection");
        JSObject jsLicenses = call.getObject("license");

        setLicense(jsLicenses);
        setLanguage(jsOverlaySettings);

        recognizerBundle = RecognizerSerializers.INSTANCE.deserializeRecognizerCollection(jsRecognizerCollection);
        UISettings uiSettings = OverlaySettingsSerializers.INSTANCE.getOverlaySettings(getContext(), jsOverlaySettings, recognizerBundle);


        startActivityForResult(call, "handleScanResult", uiSettings);
    }

    @PluginMethod
    public void scanWithDirectApi(PluginCall call) {
        //DirectAPI processing
        JSObject jsRecognizerCollection = call.getObject("recognizerCollection");
        JSObject jsLicenses = call.getObject("license");
        String jsFrontImage = call.getString("frontImage");
        String jsBackImage = call.getString("backImage");
        setLicense(jsLicenses);
        ScanResultListener mScanResultListenerBackSide = new ScanResultListener() {
            @Override
            public void onScanningDone(@NonNull RecognitionSuccessType recognitionSuccessType) {
                mFirstSideScanned = false;
                handleDirectApiResult(recognitionSuccessType, call);
            }
            @Override
            public void onUnrecoverableError(@NonNull Throwable throwable) {
                call.reject(throwable.getMessage());
            }
        };

        FirstSideRecognitionCallback  mFirstSideRecognitionCallback = new FirstSideRecognitionCallback() {
            @Override
            public void onFirstSideRecognitionFinished() {
                mFirstSideScanned = true;
            }
        };

        ScanResultListener mScanResultListenerFrontSide = new ScanResultListener() {
            @Override
            public void onScanningDone(@NonNull RecognitionSuccessType recognitionSuccessType) {
                if (mFirstSideScanned) {
                    //multiside recognizer used
                    try {
                        if (!jsBackImage.isEmpty()) {
                            processImage(jsBackImage, mScanResultListenerBackSide, call);
                        } else if (recognitionSuccessType != RecognitionSuccessType.UNSUCCESSFUL){
                            handleDirectApiResult(recognitionSuccessType, call);
                        } else {
                            handleDirectApiError("Could not extract the information from the front image and the back image is empty!", call);
                        }
                    } catch (Exception e) {
                        throw new RuntimeException(e);
                    }
                } else if (!mFirstSideScanned && recognitionSuccessType != RecognitionSuccessType.UNSUCCESSFUL){
                    //singleside recognizer used
                    handleDirectApiResult(recognitionSuccessType, call);
                } else {
                    mFirstSideScanned = false;
                    handleDirectApiError("Could not extract the information with DirectAPI!", call);
                }
            }
            @Override
            public void onUnrecoverableError(@NonNull Throwable throwable) {
                handleDirectApiError(throwable.getMessage(), call);
            }
        };

        setupRecognizerRunner(jsRecognizerCollection, mFirstSideRecognitionCallback, call);
        if (!jsFrontImage.isEmpty()) {
            processImage(jsFrontImage, mScanResultListenerFrontSide, call);
        } else {
            handleDirectApiError("First side image is empty!", call);
        }
    }
    private void setupRecognizerRunner(JSONObject jsonRecognizerCollection, FirstSideRecognitionCallback mFirstSideRecognitionCallback, PluginCall call) {
        if (recognizerRunner != null) {
            recognizerRunner.terminate();
        }

        recognizerBundle = RecognizerSerializers.INSTANCE.deserializeRecognizerCollection(jsonRecognizerCollection);

        try {
            recognizerRunner = RecognizerRunner.getSingletonInstance();
        } catch (Exception e) {
            handleDirectApiError("DirectAPI not support: " + e.getMessage(), call);
        }
        
        MetadataCallbacks metadataCallbacks = new MetadataCallbacks();
        metadataCallbacks.setFirstSideRecognitionCallback(mFirstSideRecognitionCallback);
        recognizerRunner.setMetadataCallbacks(metadataCallbacks);
        recognizerRunner.initialize(getContext(), recognizerBundle, new DirectApiErrorListener() {
            @Override
            public void onRecognizerError(@NonNull Throwable throwable) {
                handleDirectApiError("Failed to initialize recognizer with DirectAPI: " + throwable.getMessage(), call);
            }
        });
    }

    private void processImage(String base64Image, ScanResultListener scanResultListener, PluginCall call) {
        Bitmap image = base64ToBitmap(base64Image);
        if (image != null) {
            recognizerRunner.recognizeBitmap(
                    base64ToBitmap(base64Image),
                    Orientation.ORIENTATION_LANDSCAPE_RIGHT,
                    scanResultListener
            );
        } else {
            handleDirectApiError("Could not decode the Base64 image!", call);
        }
    }

    private void handleDirectApiResult(RecognitionSuccessType recognitionSuccessType, PluginCall call) {
        if (recognitionSuccessType != RecognitionSuccessType.UNSUCCESSFUL) {
            JSObject result = new JSObject();
            try {
                result.put(CANCELLED, false);
            } catch (Exception e) {
                throw new RuntimeException(e);
            }
            try {
                JSONArray resultList = RecognizerSerializers.INSTANCE.serializeRecognizerResults(recognizerBundle.getRecognizers());
                result.put(RESULT_LIST, resultList);
                call.resolve(result);
            } catch(Exception e) {
                throw new RuntimeException(e);
            }

        } else {
            handleDirectApiError("Unexpected error with DirectAPI", call);
        }
    }

    private void handleDirectApiError(String errorMessage, PluginCall call) {
        call.reject(errorMessage);
        if (recognizerRunner != null) {
            recognizerRunner.resetRecognitionState(true);
        }
    }
    
    @ActivityCallback
    private void handleScanResult(PluginCall call, ActivityResult activityResult) {
        int resultCode = activityResult.getResultCode();
        if (resultCode == Activity.RESULT_CANCELED) {
            JSObject obj = new JSObject();
            obj.put(CANCELLED, true);
            call.resolve(obj); 
        } else if (resultCode == Activity.RESULT_OK) {
            Intent data = activityResult.getData();
        
            JSObject result = new JSObject();
            result.put(CANCELLED, false);

            recognizerBundle.loadFromIntent(data);
            JSONArray resultList = RecognizerSerializers.INSTANCE.serializeRecognizerResults(recognizerBundle.getRecognizers());
            result.put(RESULT_LIST, resultList);

            call.resolve(result);
        } else {
            call.reject("Unexpected error");
        }
    }

    private void setLicense(JSObject jsonLicense) {
        MicroblinkSDK.setShowTrialLicenseWarning(
                jsonLicense.optBoolean("showTrialLicenseKeyWarning", true)
        );
        String androidLicense = jsonLicense.getString("android");
        String licensee = jsonLicense.optString("licensee", null);
        Context context = getContext();
        if (licensee == null) {
            MicroblinkSDK.setLicenseKey(androidLicense, context);
        } else {
            MicroblinkSDK.setLicenseKey(androidLicense, licensee, context);
        }
        MicroblinkSDK.setIntentDataTransferMode(IntentDataTransferMode.PERSISTED_OPTIMISED);
    }

    private void setLanguage(JSONObject jsonOverlaySettings) {
        try {
            LanguageUtils.setLanguageAndCountry(jsonOverlaySettings.getString("language"),
                    jsonOverlaySettings.getString("country"),
                    getContext());
        } catch (Exception e) {}
    }

    private Bitmap base64ToBitmap(String base64String) {
        byte[] decodedBytes = Base64.decode(base64String, Base64.DEFAULT);
        return BitmapFactory.decodeByteArray(decodedBytes, 0, decodedBytes.length);
    }

    private void startActivityForResult(PluginCall call, String callbackMethod, UISettings settings) {
        Activity activity = getActivity();
        Intent intent = new Intent(activity, settings.getTargetActivity());
        settings.saveToIntent(intent);
        startActivityForResult(call, intent, callbackMethod);
    }
}