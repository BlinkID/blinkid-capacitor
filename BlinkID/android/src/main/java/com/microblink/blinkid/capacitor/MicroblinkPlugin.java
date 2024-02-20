package com.microblink.blinkid.capacitor;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;

import androidx.activity.result.ActivityResult;

import com.microblink.blinkid.MicroblinkSDK;
import com.microblink.blinkid.entities.recognizers.RecognizerBundle;
import com.microblink.blinkid.intent.IntentDataTransferMode;
import com.microblink.blinkid.uisettings.UISettings;
import com.microblink.blinkid.capacitor.overlays.OverlaySettingsSerializers;
import com.microblink.blinkid.capacitor.recognizers.RecognizerSerializers;
import com.microblink.blinkid.locale.LanguageUtils;
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

    private void startActivityForResult(PluginCall call, String callbackMethod, UISettings settings) {
        Activity activity = getActivity();
        Intent intent = new Intent(activity, settings.getTargetActivity());
        settings.saveToIntent(intent);
        startActivityForResult(call, intent, callbackMethod);
    }

}