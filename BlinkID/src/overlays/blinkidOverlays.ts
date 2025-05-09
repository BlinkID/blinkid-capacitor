import { OverlaySettings } from '../overlaySettings'
import {
    AndroidCameraResolutionPreset,
    iOSCameraResolutionPreset
} from '../types'

/**
 * Class for setting up document overlay.
 * Document overlay is best suited for recognizers that perform ID document scanning.
 */
export class DocumentOverlaySettings extends OverlaySettings {
    constructor() {
        super('DocumentOverlaySettings');
    }
}

/**
 * Class for setting up BlinkId overlay.
 * BlinkId overlay is best suited for recognizers that perform ID document scanning.
 */
export class BlinkIdOverlaySettings extends OverlaySettings {

    /**
    * String: message that is shown while scanning first side of the document.
    * If null, default value will be used.
    */
    firstSideInstructionsText: string;
    /**
     * String: instructions to flip document, shown when scanning of the first side is done, before scanning the second
     * side of the document.
     * If null, default value will be used.
     */
    flipInstructions: string;
    /**
     * String: instructions for the user to move the document closer.
     * If null, default value will be used.
     */
    errorMoveCloser: string;
    /**
     * String: instructions for the user to move the document farther.
     * If null, default value will be used.
     */
    errorMoveFarther: string;
    /**
     * String: title of the dialog, which is shown when scanned document sides are not from the same document.
     * If null, default value will be used.
     */
    sidesNotMatchingTitle: string;
    /**
     * String: message inside dialog, which is shown when scanned document sides are not from the same document.
     * If null, default value will be used.
     */
    sidesNotMatchingMessage: string;
    /**
     * String: title of the dialog, which is shown when unsupported document is scanned.
     * If null, default value will be used.
     */
    unsupportedDocumentTitle: string;
    /**
     * String: message inside dialog, which is shown when unsupported document is scanned.
     * If null, default value will be used.
     */
    unsupportedDocumentMessage: string;
    /**
     * String: title of the dialog, which is shown on timeout when scanning is stuck on the back document side.
     * If null, default value will be used.
     */
    recognitionTimeoutTitle: string;
    /**
     * String: message inside dialog, which is shown on timeout when scanning is stuck on the back document side.
     * If null, default value will be used.
     */
    recognitionTimeoutMessage: null;
    /**
     * String: text of the "retry" button inside dialog, which is shown on timeout when scanning is stuck on the back
     * document side.
     */
    retryButtonText: string;

    /**
    * If true, BlinkIdMultiSideRecognizer will check if sides do match when scanning is finished
    * Default: true
    */
    requireDocumentSidesDataMatch: boolean;

    /**
    * Defines whether Document Not Supported dialog will be displayed in UI.
    *
    * Default: true
    */
    showNotSupportedDialog: boolean;

    /**
    * Defines whether glare warning will be displayed when user turn on a flashlight
    *
    * Default: true
    */
    showFlashlightWarning: boolean;

    /**
    * Option to configure back side scanning timeout.
    *
    * Default: 17000
    */
    backSideScanningTimeoutMilliseconds: number;

    /**
     * Message that is shown while scanning the barcode.
     * If null, default value will be used.
     */
    scanBarcodeText: string;

    /**
    * Instructions for the user to move the document from the edge.
    * If null, default value will be used.
    */
    errorDocumentTooCloseToEdge: string;

    /**
     * String: title of the dialog which is shown when the data on the document is not matching.
     * If null, default value will be used.
    */
    showOnboardingInfo: boolean;

    /**
    * Defines whether introduction dialog is turned on by default.
    *
    * Default: false
    */
    showIntroductionDialog: boolean;
    
    /**
    * Option to configure onboarding button tooltip delay time.
    *
    * Default: 12000
    */
    onboardingButtonTooltipDelay: number;

    /**
    * Option to configure the language of the UI
    * 
    * Default: The language set on the device. If the language is not supported, the English language will be used.
    */
    language: string;

    /**
    * Option to set the country locale, used with the language variable
    * 
    * Default: The country locale set on the device
    */
    country: string;

    /**
    * Defines whether torch button used for turning the flashlight on and off is shown on the screen during the scanning session.
    *
    * Default: true
    */
    showTorchButton: boolean;

    /**
    * Defines whether exit (cancel) button used for cancelling the scan is shown on the screen during the scanning session.
    *
    * Default: true
    */
    showCancelButton: boolean;

    /**
    * String: instructions for the user when blur has been detected on the document.
    * If null, default value will be used.
    */
    errorBlurDetected: string;

    /**
    * String: instructions for the user when glare has been detected on the document.
    * If null, default value will be used.
    */
    errorGlareDetected: string;

    /**
    * Defines possible iOS device camera video resolution preset.
    * 
    * Default: PresetOptimal
    */
    iosCameraResolutionPreset: iOSCameraResolutionPreset;

    /**
    * Defines possible Android device camera video resolution preset.
    * 
    * Default: PresetDefault
    */
    androidCameraResolutionPreset: AndroidCameraResolutionPreset;

    /**
    * Option to set whether legacy camera API should be used even on Lollipop devices that support newer Camera2 API.
    * WARNING: This setting should only be used if the new Camera2 API is not working on the device. This setting should not be applied to all devices.
    * Default: false
    */
    enableAndroidLegacyCameraApi: boolean;

    /**
    * String: Instructions to scan the passport, shown when scanning of the first side is done, before
    * scanning the second side of the document.
    * 
    * If null, default value will be used.
    */
    topPageInstructions: string;

    /**
    * String: Instructions to scan the passport, shown when scanning of the first side is done, before scanning the second
    * side of the document.
    * 
    * If null, default value will be used.
    */
    leftPageInstructions: string;

    /**
    * String: Instructions to scan the passport, shown when scanning of the first side is done, before scanning the second
    * side of the document.
    * 
    * If null, default value will be used.
    */
    rightPageInstructions: string;

    /**
    * String: Instructions to scan the passport, shown when scanning of the first side is done, before scanning the second
    * side of the document.
    * 
    * If null, default value will be used.
    */
    turnTopPageInstructions: string;

    /**
    * String: Instructions to scan the passport, shown when scanning of the first side is done, before scanning the second
    * side of the document.
    * 
    * If null, default value will be used.
    */
    turnLeftPageInstructions: string;

    /**
    * String: Instructions to scan the passport, shown when scanning of the first side is done, before scanning the second
    * side of the document.
    * 
    * If null, default value will be used.
    */
    turnRightPageInstructions: string;

    /**
    * String: Instructions for the user when wrong side of passport is being scanned.
    * 
    * If null, default value will be used.
    */
    errorScanningWrongPageTop: string;

    /**
    * String: Instructions for the user when wrong side of passport is being scanned.
    * 
    * If null, default value will be used.
    */
    errorScanningWrongPageLeft: string;

    /**
    * String: Instructions for the user when wrong side of passport is being scanned.
    * 
    * If null, default value will be used.
    */
    errorScanningWrongPageRight: string;

    constructor() {
        super('BlinkIdOverlaySettings');
        /**
        * String: message that is shown while scanning first side of the document.
        * If null, default value will be used.
        */
        this.firstSideInstructionsText = null;
        /**
        * String: instructions to flip document, shown when scanning of the first side is done, before scanning the second
        * side of the document.
        * If null, default value will be used.
        */
        this.flipInstructions = null;
        /**
        * String: instructions for the user to move the document closer.
        * If null, default value will be used.
        */
        this.errorMoveCloser = null;
        /**
        * String: instructions for the user to move the document farther.
        * If null, default value will be used.
        */
        this.errorMoveFarther = null;
        /**
        * String: title of the dialog, which is shown when scanned document sides are not from the same document.
        * If null, default value will be used.
        */
        this.sidesNotMatchingTitle = null;
        /**
        * String: message inside dialog, which is shown when scanned document sides are not from the same document.
        * If null, default value will be used.
        */
        this.sidesNotMatchingMessage = null;
        /**
        * String: title of the dialog, which is shown when unsupported document is scanned.
        * If null, default value will be used.
        */
        this.unsupportedDocumentTitle = null;
        /**
        * String: message inside dialog, which is shown when unsupported document is scanned.
        * If null, default value will be used.
        */
        this.unsupportedDocumentMessage = null;
        /**
        * String: title of the dialog, which is shown on timeout when scanning is stuck on the back document side.
        * If null, default value will be used.
        */
        this.recognitionTimeoutTitle = null;
        /**
        * String: message inside dialog, which is shown on timeout when scanning is stuck on the back document side.
        * If null, default value will be used.
        */
        this.recognitionTimeoutMessage = null;
        /**
        * String: text of the "retry" button inside dialog, which is shown on timeout when scanning is stuck on the back
        * document side.
        */
        this.retryButtonText = null;

        /**
        * If true, BlinkIdCombinedRecognizer will check if sides do match when scanning is finished
        * Default: true
        */
        this.requireDocumentSidesDataMatch = true;

        /**
        * Defines whether Document Not Supported dialog will be displayed in UI.
        *
        * Default: true
        */
        this.showNotSupportedDialog = true;

        /**
        * Defines whether glare warning will be displayed when user turn on a flashlight
        *
        * Default: true
        */
        this.showFlashlightWarning = true;

        /**
        * Option to configure back side scanning timeout.
        *
        * Default: 17000
        */
        this.backSideScanningTimeoutMilliseconds = 17000;

        /**
        * Message that is shown while scanning the barcode.
        * If null, default value will be used.
        */
        this.scanBarcodeText = null;

        /**
        * Instructions for the user to move the document from the edge.
        * If null, default value will be used.
        */
        this.errorDocumentTooCloseToEdge = null;

        /**
        * String: title of the dialog which is shown when the data on the document is not matching.
        * If null, default value will be used.
        */
        this.showOnboardingInfo = true;

        /**
        * Defines whether introduction dialog is turned on by default.
        *
        * Default: false
        */
        this.showIntroductionDialog = false;

        /**
        * Option to configure onboarding button tooltip delay time.
        *
        * Default: 12000
        */
        this.onboardingButtonTooltipDelay = 12000;

         /** 
         * (optional) if default overlay contains textual information, text will be localized to this language. Otherwise device langauge will be used 
         * 
         * example: "en" 
         */
         this.language = null;

         /**
         * (optional) to be used with language variable, it defines the country locale 
         * 
         * example: "US" to use "en_US" on Android and en-US on iOS 
         */
         this.country = null;

        /**
        * Defines whether torch button used for turning the flashlight on and off is shown on the screen during the scanning session.
        *
        * Default: true
        */
        this.showTorchButton = true;

        /**
        * Defines whether exit (cancel) button used for cancelling the scan is shown on the screen during the scanning session.
        *
        * Default: true
        */
        this.showCancelButton = true;

        /**
        * String: instructions for the user when blur has been detected on the document.
        * If null, default value will be used.
        */
        this.errorBlurDetected = null;

        /**
        * String: instructions for the user when glare has been detected on the document.
        * If null, default value will be used.
        */
        this.errorGlareDetected = null;

        /**
        * Defines possible iOS device camera video resolution preset.
        * 
        * Default: PresetOptimal
        */
        this.iosCameraResolutionPreset = iOSCameraResolutionPreset.PresetOptimal;

        /**
        * Defines possible Android device camera video resolution preset.
        * 
        * Default: PresetDefault
        */
        this.androidCameraResolutionPreset = AndroidCameraResolutionPreset.PresetDefault;

        /**
        * Option to set whether legacy camera API should be used even on Lollipop devices that support newer Camera2 API.
        * 
        * Default: false
        */
        this.enableAndroidLegacyCameraApi = false;

        /**
        * String: Instructions to scan the passport, shown when scanning of the first side is done, before
        * scanning the second side of the document.
        * 
        * If null, default value will be used.
        */
        this.topPageInstructions = null;

        /**
        * String: Instructions to scan the passport, shown when scanning of the first side is done, before scanning the second
        * side of the document.
        * 
        * If null, default value will be used.
        */
        this.leftPageInstructions = null;

        /**
        * String: Instructions to scan the passport, shown when scanning of the first side is done, before scanning the second
        * side of the document.
        * 
        * If null, default value will be used.
        */
        this.rightPageInstructions = null;

        /**
        * String: Instructions to scan the passport, shown when scanning of the first side is done, before scanning the second
        * side of the document.
        * 
        * If null, default value will be used.
        */
        this.turnTopPageInstructions = null;

        /**
        * String: Instructions to scan the passport, shown when scanning of the first side is done, before scanning the second
        * side of the document.
        * 
        * If null, default value will be used.
        */
        this.turnLeftPageInstructions = null;

        /**
        * String: Instructions to scan the passport, shown when scanning of the first side is done, before scanning the second
        * side of the document.
        * 
        * If null, default value will be used.
        */
        this.turnRightPageInstructions = null;

        /**
        * String: Instructions for the user when wrong side of passport is being scanned.
        * 
        * If null, default value will be used.
        */
        this.errorScanningWrongPageTop = null;

        /**
        * String: Instructions for the user when wrong side of passport is being scanned.
        * 
        * If null, default value will be used.
        */
        this.errorScanningWrongPageLeft = null;

        /**
        * String: Instructions for the user when wrong side of passport is being scanned.
        * 
        * If null, default value will be used.
        */
        this.errorScanningWrongPageRight = null;
    }
}

/**
 * Class for setting up document verification overlay.
 * Document verification overlay is best suited for combined recognizers - recognizer that perform scanning of both sides of ID documents.
 */
export class DocumentVerificationOverlaySettings extends OverlaySettings {

    /**
     * String: splash message that is shown before scanning the first side of the document, while starting camera.
     * If null, default value will be used.
     */
    firstSideSplashMessage: string;
    /**
     * String: splash message that is shown before scanning the second side of the document, while starting camera.
     * If null, default value will be used.
     */
    secondSideSplashMessage: string;
    /**
    * String: splash message that is shown after scanning the document.
    * If null, default value will be used.
    */
    scanningDoneSplashMessage: string;
    /**
     * String: user instructions that are shown above camera preview while the first side of the
     * document is being scanned.
     * If null, default value will be used.
     */
    firstSideInstructions: string;
    /**
     * String: user instructions that are shown above camera preview while the second side of the
     * document is being scanned.
     * If null, default value will be used.
     */
    secondSideInstructions: string;
    /**
     * String: glare message that is shown if glare was detected while scanning document.
     * If null, default value will be used.
     */
    glareMessage: string;

    constructor() {
        super('DocumentVerificationOverlaySettings');
        /**
         * String: splash message that is shown before scanning the first side of the document, while starting camera.
         * If null, default value will be used.
         */
        this.firstSideSplashMessage = null;
        /**
         * String: splash message that is shown before scanning the second side of the document, while starting camera.
         * If null, default value will be used.
         */
        this.secondSideSplashMessage = null;
        /**
        * String: splash message that is shown after scanning the document.
        * If null, default value will be used.
        */
        this.scanningDoneSplashMessage = null;
        /**
         * String: user instructions that are shown above camera preview while the first side of the
         * document is being scanned.
         * If null, default value will be used.
         */
        this.firstSideInstructions = null;
        /**
         * String: user instructions that are shown above camera preview while the second side of the
         * document is being scanned.
         * If null, default value will be used.
         */
        this.secondSideInstructions = null;
        /**
         * String: glare message that is shown if glare was detected while scanning document.
         * If null, default value will be used.
         */
        this.glareMessage = null;
    }
}
