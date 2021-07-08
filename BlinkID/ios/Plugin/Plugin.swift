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
            self.bridge?.viewController.present(recognizerRunneViewController, animated: true, completion: nil)
        }
    }
    
    @objc func setLanguage(_ call: CAPPluginCall) {
        let language = call.getString("language") ?? "en"
        MBMicroblinkApp.shared().language = language
        call.resolve()
    }

    private func setLicenseKey(license: [String:Any]) {

        if (license["showTrialLicenseWarning"] != nil) {
            let showTrialLicenseWarning = license["showTrialLicenseWarning"] as! Bool
            MBMicroblinkSDK.shared().showTrialLicenseWarning = showTrialLicenseWarning
        }

        guard let iOSLicense = license["ios"] as? String else {
            pluginCall?.reject("You must provide iOS License for Microblink SDK")
            return
        }

        MBMicroblinkSDK.shared().setLicenseKey(iOSLicense) { (licenseError) in
        }
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

		var isDocumentCaptureRecognizer = false

            for recognizerIndex in 0..<recognizerListCount {
                guard let resultDict = recognizerCollection?.recognizerList[recognizerIndex].serializeResult() else {
                    return
                }
                resultJson.append(resultDict as NSDictionary)
            }

            if (!isDocumentCaptureRecognizer) {
		pluginCall?.resolve([
			"cancelled": false,
			"resultList": resultJson
		])
		}

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