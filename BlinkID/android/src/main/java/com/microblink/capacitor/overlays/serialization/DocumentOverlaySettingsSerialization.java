package com.microblink.capacitor.overlays.serialization;

import android.content.Context;

import com.microblink.entities.recognizers.RecognizerBundle;;
import com.microblink.uisettings.DocumentUISettings;
import com.microblink.uisettings.UISettings;
import com.microblink.capacitor.overlays.OverlaySettingsSerialization;
import com.microblink.capacitor.overlays.OverlaySerializationUtils;

import org.json.JSONObject;

public final class DocumentOverlaySettingsSerialization implements OverlaySettingsSerialization {
    @Override
    public UISettings createUISettings(Context context, JSONObject jsonUISettings, RecognizerBundle recognizerBundle) {
        DocumentUISettings settings = new DocumentUISettings(recognizerBundle);
        OverlaySerializationUtils.prepareCommonUiSettings(context, jsonUISettings, settings);
        return settings;
    }

    @Override
    public String getJsonName() {
        return "DocumentOverlaySettings";
    }
}