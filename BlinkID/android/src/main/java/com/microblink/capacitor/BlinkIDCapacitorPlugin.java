package com.microblink.capacitor;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;

import com.microblink.MicroblinkSDK;
import com.microblink.entities.recognizers.RecognizerBundle;
import com.microblink.intent.IntentDataTransferMode;
import com.microblink.uisettings.UISettings;
import com.microblink.uisettings.ActivityRunner;
import com.microblink.capacitor.overlays.OverlaySettingsSerializers;
import com.microblink.capacitor.recognizers.RecognizerSerializers;
import com.getcapacitor.JSObject;
import com.getcapacitor.JSArray;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;

import org.json.JSONArray;


@NativePlugin(requestCodes = {
        BlinkIDCapacitorPlugin.REQUEST_CODE
})
public class BlinkIDCapacitorPlugin extends Plugin {

    static final int REQUEST_CODE = 1453;

    private static final String CANCELLED = "cancelled";
    private static final String RESULT_LIST = "resultList";

    private RecognizerBundle recognizerBundle;


    @PluginMethod
    public void scanWithCamera(PluginCall call) {
        JSObject jsOverlaySettings = call.getObject("overlaySettings");
        JSObject jsRecognizerCollection = call.getObject("recognizerCollection");
        JSObject jsLicenses = call.getObject("license");

        saveCall(call);

        Activity activity = getActivity();
        setLicense(jsLicenses);

        recognizerBundle = RecognizerSerializers.INSTANCE.deserializeRecognizerCollection(jsRecognizerCollection);
        UISettings uiSettings = OverlaySettingsSerializers.INSTANCE.getOverlaySettings(getContext(), jsOverlaySettings, recognizerBundle);

        ActivityRunner.startActivityForResult(activity, REQUEST_CODE, uiSettings);
    }

    private void setLicense(JSObject jsonLicense) {
        MicroblinkSDK.setShowTimeLimitedLicenseWarning(
                jsonLicense.optBoolean("showTimeLimitedLicenseKeyWarning", true)
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


    @Override
    protected void handleOnActivityResult(int requestCode, int resultCode, Intent data) {
        super.handleOnActivityResult(requestCode, resultCode, data);

        PluginCall savedCall = getSavedCall();
        if (savedCall == null) {
            return;
        }

        if (resultCode == Activity.RESULT_OK) {
            JSObject result = new JSObject();
            result.put(CANCELLED, false);

            if (requestCode == REQUEST_CODE) {
                recognizerBundle.loadFromIntent(data);
                JSONArray resultList = RecognizerSerializers.INSTANCE.serializeRecognizerResults(recognizerBundle.getRecognizers());
                result.put(RESULT_LIST, resultList);
            }
            savedCall.success(result);
        } else if (resultCode == Activity.RESULT_CANCELED) {
            JSObject obj = new JSObject();
            obj.put(CANCELLED, true);
            savedCall.success(obj);
        } else {
            savedCall.error("Unexpected error");
        }
    }
}