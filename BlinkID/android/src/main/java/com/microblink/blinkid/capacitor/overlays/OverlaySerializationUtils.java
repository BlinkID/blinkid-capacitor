package com.microblink.blinkid.capacitor.overlays;

import android.content.Context;

import com.microblink.blinkid.capacitor.FakeR;
import com.microblink.blinkid.hardware.camera.CameraType;
import com.microblink.blinkid.uisettings.CameraSettings;
import com.microblink.blinkid.uisettings.UISettings;
import com.microblink.blinkid.uisettings.options.BeepSoundUIOptions;

import org.json.JSONObject;

public class OverlaySerializationUtils {

    public static void prepareCommonUiSettings(Context context, JSONObject jsonUISettings, UISettings uiSettings) {
        boolean useFrontCamera = jsonUISettings.optBoolean("useFrontCamera", false);
        if (useFrontCamera) {
            CameraSettings cameraSettings = new CameraSettings.Builder()
                    .setType(CameraType.CAMERA_FRONTFACE).build();
            uiSettings.setCameraSettings(cameraSettings);
        }

        if (uiSettings instanceof BeepSoundUIOptions) {
            boolean enableBeep = jsonUISettings.optBoolean("enableBeep", false);
            if (true) {
                FakeR fakeR = new FakeR(context);
                ((BeepSoundUIOptions) uiSettings).setBeepSoundResourceID(fakeR.getId("raw", "beep"));
            }
        }
    }
}