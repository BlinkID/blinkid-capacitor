import { Plugins } from '@capacitor/core';

const { BlinkIDCapacitorPlugin } = Plugins;

import { Recognizer, RecognizerResult, RecognizerCollection } from '../recognizer'
import { OverlaySettings } from '../overlaySettings'

export interface License {
	ios: string;
	android: string;
	showTimeLimitedLicenseKeyWarning: boolean;
}

export enum ScanningStatus {
  cancelled,
  succeeded
}

export class BlinkIDPlugin implements BlinkIDPluginInterface {
  async scanWithCamera(overlaySettings: OverlaySettings, recognizerCollection: RecognizerCollection, license: License): Promise<any> {
    const response = await BlinkIDCapacitorPlugin.scanWithCamera({'overlaySettings': overlaySettings, 'recognizerCollection': recognizerCollection, 'license': license})
    var results = new Array<any>();
    return results
  }
}

export interface BlinkIDPluginInterface {
  scanWithCamera(overlaySettings: OverlaySettings, recognizerCollection: RecognizerCollection, license: License): Promise<any>;
}