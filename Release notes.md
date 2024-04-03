## 6.6.0

- We have updated the plugin to [Android SDK v6.5.0](https://github.com/BlinkID/blinkid-android/releases/tag/v6.5.0) and [iOS SDK v6.5.0](https://github.com/BlinkID/blinkid-ios/releases/tag/v6.5.0)
- Updated the SDK with new regions and types, which can be found in the native documentation for [iOS](https://github.com/BlinkID/blinkid-ios/releases/tag/v6.6.0) and [Android](https://github.com/BlinkID/blinkid-android/releases/tag/v6.6.0).
- Added settings `showCancelButton` and `showTorchButton` in `BlinkIdOverlaySettings` with which the ‘Cancel’ and ‘Torch’ buttons in the scanning UI can be shown or hidden.
- Fixed issue with setting the SDK language for Android.

### Major API update

- We have introduced the **DirectAPI** method of scanning, which allows the SDK to extract the document information from static images without the need to use the device’s camera and our UI.
- Usage:
    - The `scanWithDirectApi` method requires four parameters:
    - `license`, the licenses for iOS and Android required to unlock the SDK
    - `RecognizerCollection`, which is a collection of Recognizers used for document scanning.
    - `frontImage`, which would represent the front image of the document in the Base64 format string
    - `backImage`,  which would represent the back image of the document in the Base64 format string
    - the `backImage` parameter is optional when using the `BlinkIdSingleSideRecognizer`, and can be passed as `null` or an empty string (`””`).
- An example of its usage can be found in the [sample application](https://github.com/BlinkID/blinkid-react-native/blob/master/sample_files/index.js) , both for the Multiside and Singleside scanning. 
- More information about the DirectAPI scanning can be found here in the native documentation for [iOS](https://github.com/BlinkID/blinkid-ios?tab=readme-ov-file#direct-api-processing) and [Android](https://github.com/BlinkID/blinkid-android?tab=readme-ov-file#direct-api).
- We still recommend using our ‘regular’ way of scanning with the camera, as static images can sometimes be in lower-quality which can cause SDK extraction error. It would be best to use the `scanWithDirectApi` method when using the device’s camera is not an option.

## 6.5.0
- We have updated the plugin to [Android SDK v6.5.0](https://github.com/BlinkID/blinkid-android/releases/tag/v6.5.0) and [iOS SDK v6.5.0](https://github.com/BlinkID/blinkid-ios/releases/tag/v6.5.0)
- Added `cardOrientation` property to `ImageAnalysisResult`
- Fixed issue with the SDK localization

## 6.4.0
- We have updated the plugin to [Android SDK v6.4.0](https://github.com/BlinkID/blinkid-android/releases/tag/v6.4.0) and [iOS SDK v6.4.0](https://github.com/BlinkID/blinkid-ios/releases/tag/v6.4.0)

### Breaking API changes

- The plugin was built with v5.6.0 Capacitor
- The SDK we can scan IDs with Arabic and Cyrillic scripts.
- Renamed `BlinkIdRecognier` to **`BlinkIdSingleSideRecognizer`**
- Renamed `BlinkIdCombinedRecognizer` to **`BlinkIdMultiSideRecognizer`**
- Added new classes: `StringResult`, `DateResult`, `Date`
    - If a recognizer supports multiple alphabets, its result class will return `StringResult` for results that previously returned `String`.
- `DataMatchResult` and `DataMatchDetailedInfo` are now merged into `DataMatchResult`
- Added new `ClassAnonymizationSettings` setting that enables custom anonymization for any field per country, region, and type of document
- Added new  `AdditionalProcessingInfo` result type that provides information about `missingMandatoryFields`, `invalidCharacterFields`, and `extraPresentFields`
- Added support for a lot of new documents, which can be found [here](https://github.com/BlinkID/blinkid-android/blob/master/documentation/BlinkIDRecognizer.md)
- Added new values to `Country`, `Region` and `Type` enums.

## 5.17.0

We have updated plugin to [Android SDK v5.17.0](https://github.com/BlinkID/blinkid-android/releases/tag/v5.17.0) and [iOS SDK v5.17.0](https://github.com/BlinkID/blinkid-ios/releases/tag/v5.17.0)

## 5.16.0

We have updated plugin to [Android SDK v5.16.0](https://github.com/BlinkID/blinkid-android/releases/tag/v5.16.0) and [iOS SDK v5.15.0](https://github.com/BlinkID/blinkid-ios/releases/tag/v5.16.0)

## 5.15.0

We have updated plugin to [Android SDK v5.15.0](https://github.com/BlinkID/blinkid-android/releases/tag/v5.15.0) and [iOS SDK v5.15.0](https://github.com/BlinkID/blinkid-ios/releases/tag/v5.15.0)

## 5.14.0

We have updated plugin to [Android SDK v5.14.0](https://github.com/BlinkID/blinkid-android/releases/tag/v5.14.0) and [iOS SDK v5.14.0](https://github.com/BlinkID/blinkid-ios/releases/tag/v5.14.0)

## 5.13.0

- We have updated plugin to [Android SDK v5.13.0](https://github.com/BlinkID/blinkid-android/releases/tag/v5.13.0) and [iOS SDK v5.13.0](https://github.com/BlinkID/blinkid-ios/releases/tag/v5.13.0)
- Upgraded to [Capacitor v3](https://capacitorjs.com/docs/updating/3-0)

## 5.12.0

We have updated plugin to [Android SDK v5.12.0](https://github.com/BlinkID/blinkid-android/releases/tag/v5.12.0) and [iOS SDK v5.12.0](https://github.com/BlinkID/blinkid-ios/releases/tag/v5.12.0)

## 5.11.0

We have updated plugin to [Android SDK v5.11.0](https://github.com/BlinkID/blinkid-android/releases/tag/v5.11.0) and [iOS SDK v5.11.0](https://github.com/BlinkID/blinkid-ios/releases/tag/v5.11.0)

## 5.10.0

We have updated plugin to [Android SDK v5.10.0](https://github.com/BlinkID/blinkid-android/releases/tag/v5.10.0) and [iOS SDK v5.10.0](https://github.com/BlinkID/blinkid-ios/releases/tag/v5.10.0)


## 5.9.0

We have updated plugin to [Android SDK v5.9.0](https://github.com/BlinkID/blinkid-android/releases/tag/v5.9.0) and [iOS SDK v5.9.0](https://github.com/BlinkID/blinkid-ios/releases/tag/v5.9.0)
