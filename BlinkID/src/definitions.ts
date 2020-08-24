declare module '@capacitor/core' {
    interface PluginRegistry {
      BlinkIDPlugin: BlinkIDCapacitorPlugin;
    }
}

import { Recognizer, RecognizerCollection, RecognizerResult } from './recognizer'
import { OverlaySettings } from './overlaySettings'

export interface Licenses {
    ios: string;
    android: string;
    showTimeLimitedLicenseKeyWarning: boolean;
}

export interface BlinkIDCapacitorPlugin {
    scanWithCamera(options: { overlaySettings: OverlaySettings, recognizerCollection: RecognizerCollection, licenses: Licenses }): Promise<any>;
}


class BlinkIDWrapper {
    function scanWithCamera( overlaySettings: OverlaySettings, recognizerCollection: RecognizerCollection, licenses: Licenses ): Promise<any> {
    BlinkIDCapacitorPlugin.scanWithCamera({ overlaySettings: overlaySettings, recognizerCollection: recognizerCollection, licenses: Licenses })
    	.then((scanResult) => {
        	console.log('✅ Resolved with result', scanResult)
        })
        .catch((err) => {
        	console.log('❌ Error', err);
        }
    }
}

export var BlinkID = new BlinkIDWrapper();

export enum ScanningStatus {
    cancelled,
    succeeded
}

export { RecognizerResultState } from './recognizer'
export * from './types'

// export overlays that can be used
export * from './overlays/blinkidOverlays'

// export recognizers that can be used and their results
export * from './recognizers/successFrameGrabberRecognizer'
export * from './recognizers/blinkIdCombinedRecognizer'
export * from './recognizers/blinkIdRecognizer'
export * from './recognizers/documentFaceRecognizer'
export * from './recognizers/idBarcodeRecognizer'
export * from './recognizers/mrtdCombinedRecognizer'
export * from './recognizers/mrtdRecognizer'
export * from './recognizers/passportRecognizer'
export * from './recognizers/visaRecognizer'
export * from './recognizers/usdlRecognizer'
export * from './recognizers/usdlCombinedRecognizer'

