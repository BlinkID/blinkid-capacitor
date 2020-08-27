/** Base class for all overlay settings objects */
export class OverlaySettings {
    /** type of the overlay settings object */
    overlaySettingsType: string;

    /** whether front camera should be used instead of the default camera */
    useFrontCamera: boolean;

    /** whether beep sound will be played on successful scan */
    enableBeep: boolean;

    /** (optional) if default overlay contains textual information, text will be localized to this language. Otherwise device langauge will be used */
        /** example: "en" */
    language: string;

    /** (optional) to be used with language variable, it defines the country locale */
        /** example: "US" to use "en_US" on Android and en-US on iOS */
    country: string;

    constructor(overlaySettingsType: string) {
        this.overlaySettingsType = overlaySettingsType;
        this.useFrontCamera = false;
        this.enableBeep = false;
        this.language = null;
        this.country = null;
    }
}