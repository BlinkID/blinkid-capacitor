# BlinkID SDK Capacitor plugin

AI-driven ID scanning software for cross-platform apps built with Capacitor. Keep in mind that for full access to all features and functionalities, you’ll be better off using one of our native SDKs ([iOS](https://github.com/BlinkID/blinkid-ios)
and [Android](https://github.com/BlinkID/blinkid-android)). Not all features of native SDKs are available. However, the wrapper is open source so you can add the features that you need.

Depending on your use case you can choose the recognizer that fits your needs:

* BlinkID recognizer
	* Scans and extracts data from the front side of the document as well as any machine readable travel document (MRTD). View list of supported documents [here](https://github.com/BlinkID/blinkid-capacitor/blob/master/documentation/BlinkIDRecognizer.md)
* BlinkID combined recognizer
	* For scanning both sides of the supported document as well as any machine readable travel document. Passports and travel visas included. Here’s a [list of documents](https://github.com/BlinkID/blinkid-capacitor/blob/master/documentation/BlinkIDRecognizer.md) that you can scan with BlinkID. For more details about the extracted fields click [here](https://github.com/BlinkID/blinkid-capacitor/blob/master/documentation/BlinkIDRecognizerResult.md).
* BlinkID IDBarcode recognizer
	* Extract data from various barcodes found on identity documents. You can find a list of supported documents [here](https://github.com/BlinkID/blinkid-capacitor/blob/master/documentation/IdBarcodeRecognizer.md).

Below, you'll find everything you need to add BlinkID in your Capacitor iOS or Android app ⬇️

## Minimum software requirements

Package depends on [BlinkID SDK](https://microblink.com/products/blinkid) and it is required to download and install [BlinkID iOS SDK](https://github.com/BlinkID/blinkid-ios) and [BlinkID Android SDK](https://github.com/BlinkID/blinkid-android). For more information on how to do that, please check our [Platform specifics](#platform-specifics) section.

### Capacitor

BlinkID plugin is developed with Capacitor version 3.2.0.
For help with Capacitor, view official [documentation](https://capacitorjs.com/docs).

### iOS

BlinkID Capacitor plugin supports iOS 12.0 or newer.

### Android

BlinkID Capacitor plugin support Android Android 5.0 (API level 21) or newer.

## Getting Started

To get started, first create empty project if needed:

```shell
ionic start project_name --capacitor
```

Install blinkid-capacitor package:

```shell
npm install --save @microblink/blinkid-capacitor
```

### Quick start with sample app

Sample app is built with latest [Ionic framework](https://ionicframework.com) and it uses [Angular](https://angular.io). To try BlinkID plugin, you can generate a minimal sample application. To do so run `./initIonicSampleApp.sh` script.

To run sample application:

* iOS
	* Open the app in Xcode by running ```npx cap open ios``` from the sample app's root directory
	* Open info.plist and add corresponding permissions to the app
		* Privacy - Camera Usage Description: To Take Photos and Video
	* Open `Signing & Capabilities` and set your Team
	* Press `Run`

* Android
	* Run the app by executing ```npx cap run android``` from the sample app's root directory

### Plugin usage

1. Import blinkid-capacitor package

	```typescript
	import * as BlinkID from '@microblink/blinkid-capacitor';
	```

2. Initialize plugin

	```typescript
	const plugin = new BlinkID.BlinkIDPlugin();
	```
	
3. Perform scanning by calling the method `plugin.scanWithCamera()` and pass `RecognizerCollection`, `OverlaySettings` you wish to use and license keys. To find out more about licensing, click
 [here](#licensing).
 
	 ```typescript
	async scan() {
		 	
	 	// Initialize plugin
		const plugin = new BlinkID.BlinkIDPlugin();
		
		// Initialize wanted recognizer
		const blinkIdCombinedRecognizer = new BlinkID.BlinkIdCombinedRecognizer();
		blinkIdCombinedRecognizer.returnFullDocumentImage = true;
		blinkIdCombinedRecognizer.returnFaceImage = true;
	
		// Initialize license 
		const licenseKeys: BlinkID.License = {
	  		ios: '<your_ios_license>',
	  		android: '<your_android_license>',
	  		showTimeLimitedLicenseKeyWarning: true
		};
		
		// Perform scan and gather results
		const scanningResults = await plugin.scanWithCamera(
			new BlinkID.BlinkIdOverlaySettings(),
			new BlinkID.RecognizerCollection([blinkIdCombinedRecognizer]),
			licenseKeys
		);
  	}
	 ```
	
4. When scanning is completed, variable `scanningResults` will contain a list of non-empty `RecognizerResults` from recognizers set in `RecognizerCollection`. You can then access each result individually. If the scanning is manually closed, the method will return an empty list.

For more information please refer to our sample files in [SampleFiles folder](https://github.com/BlinkID/blinkid-capacitor/tree/master/SampleFiles) and  sample application source code.

### Available API

All available recognizers can be found inside `BlinkID/src/recognizers`.

All available overlays can be found inside `BlinkID/src/overlays`.

### Platform specifics

Plugin implementation is in folder `src`, while platform specific implementations are in `android` and `ios` folders.

#### iOS

To initialize BlinkID framework for use with iOS, after you've added the dependency to `@microblink/blinkid-capacitor` to your project, go to `NameOfYourProject/ios`and run `pod install`.
Our `@microblink/blinkid-capacitor` depends on the latest [PPBlinkID pod](https://cocoapods.org/pods/PPBlinkID) so it will be installed automatically.

#### Android

BlinkID plugin on Android is ready to use after you've added the dependency.


## Licensing

- A valid license key is required to initialize scanning. You can request a **free trial license key**, after you register, at [Microblink Developer Hub](https://account.microblink.com/signin)
- Get information about pricing and licensing of [BlinkID](https://microblink.com/blinkid)
