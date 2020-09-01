# BlinkID SDK Capacitor plugin

This repository contains [Capacitor](https://capacitorjs.com) wrappers for BlinkID native SDKs ([iOS](https://github.com/BlinkID/blinkid-ios)
and [Android](https://github.com/BlinkID/blinkid-android)). Not all features of native SDKs are available. However, the wrapper is open source so you can add features that you need. For 100% of features and maximum control, consider using native SDKs.

## Minimum software requirements

Package depends on [BlinkID SDK](https://microblink.com/products/blinkid) and it is required to download and install [BlinkID iOS SDK](https://github.com/BlinkID/blinkid-ios) and [BlinkID Android SDK](https://github.com/BlinkID/blinkid-android). For more information on how to do that, please check our [Platform specifics](#platform-specifics) section.

### Capacitor

BlinkID plugin is developed with Capacitor version 2.4.0.
For help with Capacitor, view official [documentation](https://capacitorjs.com/docs).

### iOS

BlinkID Capacitor plugin supports iOS 11.0 or newer.

### Android

BlinkID Capacitor plugin support Android Android 5.0 (API level 21) or newer.

## Getting Started

To get started, first create empty project if needed:

```shell
ionic start project_name --capacitor
```

Install blinkid-capacitor package:

```shell
npm install --save blinkid-capacitor
```

### Quick start with sample app

Sample app is built with latest [Ionic framework](https://ionicframework.com) and it uses [Angular](https://angular.io). To try BlinkID plugin, you can generate a minimal sample application. To do so run `./initIonicDemoApp.sh` script.

To run sample application:

* iOS
	* Open the app in XCode by running ```npx cap open ios``` from the sample app's root directory
	* Open info.plist and add corresponding permissions to the app
		* Privacy - Camera Usage Description: To Take Photos and Video
	* Open `Signing & Capabilities` and set your Team
	* Press `Run`

* Android
	* Open the app in Android Studio by running ```npx cap open android``` from the sample app's root directory
	* Press `Run`

### Plugin usage

1. Import blinkid-capacitor package

	```typescript
	import { Component } from '@angular/core';
	import * as BlinkID from 'blinkid-capacitor';
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

To initialize BlinkID framework for use with iOS, after you've added the dependency to `blinkid-capacitor` to your, go to `NameOfYourProject/ios`and run `pod install`.
Our `blinkid-capacitor` depends on the latest [PPBlinkID pod](https://cocoapods.org/pods/PPBlinkID) so it will be installed automatically.

#### Android

To use BlinkID plugin on Android you need to add the plugin to the MainActivity.java. Note that our [script](https://github.com/BlinkID/blinkid-capacitor/blob/feature/ios-capacitor/initIonicDemoApp.sh) does this automatically.

```java
public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    // Initializes the Bridge
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      // Additional plugins you've installed go here
      // Ex: add(TotallyAwesomePlugin.class);
      add(com.microblink.capacitor.BlinkIDCapacitorPlugin.class);
    }});
  }
}
```


## Licensing

- [Generate](https://microblink.com/login?url=/customer/generatedemolicence) a **free trial license key** to start using the SDK in your app (registration required)
- Get information about pricing and licensing of [BlinkID](https://microblink.com/blinkid)
