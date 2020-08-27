import Foundation
import Capacitor
import Microblink

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(BlinkIDCapacitorPlugin)
public class BlinkIDCapacitorPlugin: CAPPlugin {

    var pluginCall: CAPPluginCall?
    var recognizerCollection: MBRecognizerCollection?

    @objc func scanWithCamera(_ call: CAPPluginCall) {

        defer {
            // Reference plugin call for resolving scanning result
            pluginCall = call
        }

        guard let licensesObject = call.getObject("license") else {
            call.reject("Must provide license for Microblink SDK!")
            return
        }

        guard let overlaySettingsObject = call.getObject("overlaySettings") else {
            call.reject("Must provide overlay settings!")
            return
        }

        guard let recognizerCollectionObject = call.getObject("recognizerCollection") else {
            call.reject("Must provide recognizer collection!")
            return
        }

        let jsonOverlaySettings = sanitizeDictionary(overlaySettingsObject)
        let jsonRecognizerCollection = sanitizeDictionary(recognizerCollectionObject)
        guard let jsonLicense = sanitizeDictionary(licensesObject) else {
            call.reject("Must provide license keys for Microblink SDK!")
            return
        }

        setLicenseKey(license: jsonLicense)

        recognizerCollection = MBRecognizerSerializers.sharedInstance()?.deserializeRecognizerCollection(jsonRecognizerCollection)

        DispatchQueue.main.async {
            guard let overlayVC = MBOverlaySettingsSerializers.sharedInstance()?.createOverlayViewController(jsonOverlaySettings, recognizerCollection: self.recognizerCollection, delegate: self) else {
                call.reject("Unsupported overlay view controller!")
                return
            }

            guard let recognizerRunneViewController: UIViewController =
                MBViewControllerFactory.recognizerRunnerViewController(withOverlayViewController: overlayVC) else {
                    return
            }
            recognizerRunneViewController.modalPresentationStyle = .fullScreen
            self.bridge.viewController.present(recognizerRunneViewController, animated: true, completion: nil)
        }
    }

    private func setLicenseKey(license: [String:Any]) {

        if (license["showTimeLimitedLicenseKeyWarning"] != nil) {
            let showTimeLimitedLicenseKeyWarning = license["showTimeLimitedLicenseKeyWarning"] as! Bool
            MBMicroblinkSDK.shared().showLicenseKeyTimeLimitedWarning = showTimeLimitedLicenseKeyWarning
        }

        guard let iOSLicense = license["ios"] as? String else {
            pluginCall?.reject("You must provide iOS License for Microblink SDK")
            return
        }

        MBMicroblinkSDK.shared().setLicenseKey(iOSLicense)
    }

    private func sanitizeDictionary(_ dictionary: [String : Any]) -> [String : Any]? {
        var mutableDictionary = dictionary
        for key in dictionary.keys {
            if let aMutableDictionary = mutableDictionary[key] as? NSNull {
                if aMutableDictionary == NSNull() {
                    mutableDictionary[key] = nil
                }
            }
        }
        return mutableDictionary
    }
}

extension BlinkIDCapacitorPlugin: MBOverlayViewControllerDelegate {

    public func overlayViewControllerDidFinishScanning(_ overlayViewController: MBOverlayViewController!, state: MBRecognizerResultState) {

        defer {
        	recognizerCollection = nil
            pluginCall = nil
        }

        if (state != .empty) {
            overlayViewController.recognizerRunnerViewController?.pauseScanning()

            guard let recognizerListCount = recognizerCollection?.recognizerList.count else {
                return
            }

            var resultJson = [NSDictionary]()

            for recognizerIndex in 0..<recognizerListCount {
                guard let resultDict = recognizerCollection?.recognizerList[recognizerIndex].serializeResult() else {
                    return
                }
                resultJson.append(resultDict as NSDictionary)
            }

            pluginCall?.resolve([
              "cancelled": false,
              "resultList": resultJson
            ])

            DispatchQueue.main.async {
                overlayViewController.dismiss(animated: true, completion: nil)
            }
        }
    }

    public func overlayDidTapClose(_ overlayViewController: MBOverlayViewController!) {
        defer {
        	recognizerCollection = nil
            pluginCall = nil
        }

        overlayViewController.dismiss(animated: true, completion: nil)
    }
}