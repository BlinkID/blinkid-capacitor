package com.microblink.blinkid.capacitor.overlays.serialization;

import android.content.Context;

import com.microblink.blinkid.entities.recognizers.RecognizerBundle;
import com.microblink.blinkid.fragment.overlay.blinkid.reticleui.ReticleOverlayStrings;
import com.microblink.blinkid.uisettings.BlinkIdUISettings;
import com.microblink.blinkid.uisettings.UISettings;
import com.microblink.blinkid.capacitor.overlays.OverlaySettingsSerialization;
import com.microblink.blinkid.capacitor.SerializationUtils;
import com.microblink.blinkid.capacitor.overlays.OverlaySerializationUtils;
import com.microblink.blinkid.locale.LanguageUtils;
import com.microblink.blinkid.hardware.camera.VideoResolutionPreset;
import com.microblink.blinkid.uisettings.CameraSettings;

import org.json.JSONObject;

import static com.microblink.blinkid.capacitor.SerializationUtils.getStringFromJSONObject;

public final class BlinkIdOverlaySettingsSerialization implements OverlaySettingsSerialization {
    @Override
    public UISettings createUISettings(Context context, JSONObject jsonUISettings, RecognizerBundle recognizerBundle) {
        BlinkIdUISettings settings = new BlinkIdUISettings(recognizerBundle);

        OverlaySerializationUtils.prepareCommonUiSettings(context, jsonUISettings, settings);

        boolean requireDocumentSidesDataMatch = jsonUISettings.optBoolean("requireDocumentSidesDataMatch", true);
        settings.setDocumentDataMatchRequired(requireDocumentSidesDataMatch);

        boolean showNotSupportedDialog = jsonUISettings.optBoolean("showNotSupportedDialog", true);
        settings.setShowNotSupportedDialog(showNotSupportedDialog);

        boolean showFlashlightWarning = jsonUISettings.optBoolean("showFlashlightWarning", true);
        settings.setShowFlashlightWarning(showFlashlightWarning);

        boolean showMandatoryFieldsMissing = jsonUISettings.optBoolean("showMandatoryFieldsMissing", true);
        settings.setShowMandatoryFieldsMissing(showMandatoryFieldsMissing);

        boolean showOnboardingInfo = jsonUISettings.optBoolean("showOnboardingInfo", true);
        settings.setShowOnboardingInfo(showOnboardingInfo);

        boolean showIntroductionDialog = jsonUISettings.optBoolean("showIntroductionDialog", false);
        settings.setShowIntroductionDialog(showIntroductionDialog);

        boolean showTorchButton = jsonUISettings.optBoolean("showTorchButton", true);
        settings.setShowTorchButton(showTorchButton);

        boolean showCancelButton = jsonUISettings.optBoolean("showCancelButton", true);
        settings.setShowCancelButton(showCancelButton);

        long onboardingButtonTooltipDelay = jsonUISettings.optLong("onboardingButtonTooltipDelay", 12000);
        settings.setShowTooltipTimeIntervalMs(onboardingButtonTooltipDelay);

        long backSideScanningTimeoutMilliseconds = jsonUISettings.optLong("backSideScanningTimeoutMilliseconds", 17000);
        settings.setBackSideScanningTimeoutMs(backSideScanningTimeoutMilliseconds);

        int videoResolutionPreset = jsonUISettings.optInt("androidCameraResolutionPreset", VideoResolutionPreset.VIDEO_RESOLUTION_DEFAULT.ordinal());
        
        boolean androidLegacyCameraApi = jsonUISettings.optBoolean("setAndroidLegacyCameraApi", false);

        settings.setCameraSettings(new CameraSettings.Builder()
                .setVideoResolutionPreset(VideoResolutionPreset.values()[videoResolutionPreset])
                .setForceLegacyApi(androidLegacyCameraApi)
                .build());

        ReticleOverlayStrings.Builder overlasStringsBuilder = new ReticleOverlayStrings.Builder(context);

        String firstSideInstructionsText = getStringFromJSONObject(jsonUISettings, "firstSideInstructionsText");
        if (firstSideInstructionsText != null) {
            overlasStringsBuilder.setFirstSideInstructionsText(firstSideInstructionsText);
        }
        String flipInstructions = getStringFromJSONObject(jsonUISettings, "flipInstructions");
        if (flipInstructions != null) {
            overlasStringsBuilder.setFlipInstructions(flipInstructions);
        }
        String errorMoveCloser = getStringFromJSONObject(jsonUISettings, "errorMoveCloser");
        if (errorMoveCloser != null) {
            overlasStringsBuilder.setErrorMoveCloser(errorMoveCloser);
        }
        String errorMoveFarther = getStringFromJSONObject(jsonUISettings, "errorMoveFarther");
        if (errorMoveFarther != null) {
            overlasStringsBuilder.setErrorMoveFarther(errorMoveFarther);
        }
        String sidesNotMatchingTitle = getStringFromJSONObject(jsonUISettings, "sidesNotMatchingTitle");
        if (sidesNotMatchingTitle != null) {
            overlasStringsBuilder.setSidesNotMatchingTitle(sidesNotMatchingTitle);
        }
        String sidesNotMatchingMessage = getStringFromJSONObject(jsonUISettings, "sidesNotMatchingMessage");
        if (sidesNotMatchingMessage != null) {
            overlasStringsBuilder.setSidesNotMatchingMessage(sidesNotMatchingMessage);
        }
        String unsupportedDocumentTitle = getStringFromJSONObject(jsonUISettings, "unsupportedDocumentTitle");
        if (unsupportedDocumentTitle != null) {
            overlasStringsBuilder.setUnsupportedDocumentTitle(unsupportedDocumentTitle);
        }
        String unsupportedDocumentMessage = getStringFromJSONObject(jsonUISettings, "unsupportedDocumentMessage");
        if (unsupportedDocumentMessage != null) {
            overlasStringsBuilder.setUnsupportedDocumentMessage(unsupportedDocumentMessage);
        }
        String recognitionTimeoutTitle = getStringFromJSONObject(jsonUISettings, "recognitionTimeoutTitle");
        if (recognitionTimeoutTitle != null) {
            overlasStringsBuilder.setRecognitionTimeoutTitle(recognitionTimeoutTitle);
        }
        String recognitionTimeoutMessage = getStringFromJSONObject(jsonUISettings, "recognitionTimeoutMessage");
        if (recognitionTimeoutMessage != null) {
            overlasStringsBuilder.setRecognitionTimeoutMessage(recognitionTimeoutMessage);
        }
        String retryButtonText = getStringFromJSONObject(jsonUISettings, "retryButtonText");
        if (retryButtonText != null) {
            overlasStringsBuilder.setRetryButtonText(retryButtonText);
        }
        String scanBarcodeText = getStringFromJSONObject(jsonUISettings, "scanBarcodeText");
        if (scanBarcodeText != null) {
            overlasStringsBuilder.setBackSideBarcodeInstructions(scanBarcodeText);
        }
        String errorDocumentTooCloseToEdge = getStringFromJSONObject(jsonUISettings, "errorDocumentTooCloseToEdge");
        if (errorDocumentTooCloseToEdge != null) {
            overlasStringsBuilder.setErrorDocumentTooCloseToEdge(errorDocumentTooCloseToEdge);
        }
        String errorBlurDetected = getStringFromJSONObject(jsonUISettings, "errorBlurDetected");
        if (errorBlurDetected != null) {
            overlasStringsBuilder.setErrorBlurDetected(errorBlurDetected);
        }
        String errorGlareDetected = getStringFromJSONObject(jsonUISettings, "errorGlareDetected");
        if (errorGlareDetected != null) {
            overlasStringsBuilder.setErrorGlareDetected(errorGlareDetected);
        }
        String topPageInstructions = getStringFromJSONObject(jsonUISettings, "topPageInstructions");
        if (topPageInstructions != null) {
            overlasStringsBuilder.setTopPageInstructions(topPageInstructions);
        }
        String leftPageInstructions = getStringFromJSONObject(jsonUISettings, "leftPageInstructions");
        if (leftPageInstructions != null) {
            overlasStringsBuilder.setLeftPageInstructions(leftPageInstructions);
        }
        String rightPageInstructions = getStringFromJSONObject(jsonUISettings, "rightPageInstructions");
        if (rightPageInstructions != null) {
            overlasStringsBuilder.setRightPageInstructions(rightPageInstructions);
        }
        String turnTopPageInstructions = getStringFromJSONObject(jsonUISettings, "turnTopPageInstructions");
        if (turnTopPageInstructions != null) {
            overlasStringsBuilder.setTurnTopPageInstructions(turnTopPageInstructions);
        }
        String turnLeftPageInstructions = getStringFromJSONObject(jsonUISettings, "turnLeftPageInstructions");
        if (turnLeftPageInstructions != null) {
            overlasStringsBuilder.setTurnLeftPageInstructions(turnLeftPageInstructions);
        }
        String turnRightPageInstructions = getStringFromJSONObject(jsonUISettings, "turnRightPageInstructions");
        if (turnRightPageInstructions != null) {
            overlasStringsBuilder.setTurnRightPageInstructions(turnRightPageInstructions);
        }
        String errorScanningWrongPageTop = getStringFromJSONObject(jsonUISettings, "errorScanningWrongPageTop");
        if (errorScanningWrongPageTop != null) {
            overlasStringsBuilder.setErrorScanningWrongPageTop(errorScanningWrongPageTop);
        }
        String errorScanningWrongPageLeft = getStringFromJSONObject(jsonUISettings, "errorScanningWrongPageLeft");
        if (errorScanningWrongPageLeft != null) {
            overlasStringsBuilder.setErrorScanningWrongPageLeft(errorScanningWrongPageLeft);
        }
        String errorScanningWrongPageRight = getStringFromJSONObject(jsonUISettings, "errorScanningWrongPageRight");
        if (errorScanningWrongPageRight != null) {
            overlasStringsBuilder.setErrorScanningWrongPageRight(errorScanningWrongPageRight);
        }

        String language = getStringFromJSONObject(jsonUISettings, "language");
        if (language != null) {
            String country = getStringFromJSONObject(jsonUISettings, "country");
            if (country != null) {
                LanguageUtils.setLanguageAndCountry(language, country, context);
            } else {
                LanguageUtils.setLanguageAndCountry(language, "", context);
            }
        }

        settings.setStrings(overlasStringsBuilder.build());

        return settings;
    }

    @Override
    public String getJsonName() {
        return "BlinkIdOverlaySettings";
    }
}