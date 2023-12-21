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
