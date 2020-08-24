import Foundation
import Capacitor
import Microblink

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(BlinkIdCapacitorPlugin)
public class BlinkIdCapacitorPlugin: CAPPlugin {
    
    var pluginCall: CAPPluginCall?
    var recognizerCollection: MBRecognizerCollection?
    
    @objc func scanWithCamera(_ call: CAPPluginCall) {
        
        defer {
            // Reference plugin call for resolving scanning result
            pluginCall = call
        }
        
        guard let overlaySettingsObject = call.getObject("overlaySettings") else {
            call.reject("Must provide overlay settings!")
            return
        }
        
        guard let recognizerCollectionObject = call.getObject("recognizerCollection") else {
            call.reject("Must provide recognizer collection!")
            return
        }
        guard let licensesObject = call.getObject("licenses") else {
            call.reject("Must provide license!")
            return
        }
        
        setLicenseKey(licenses: licensesObject)
                
        recognizerCollection = MBRecognizerSerializers.sharedInstance()?.deserializeRecognizerCollection(recognizerCollectionObject)
        
        guard let overlayVC = MBOverlaySettingsSerializers.sharedInstance()?.createOverlayViewController(overlaySettingsObject, recognizerCollection: recognizerCollection, delegate: self) else {
            call.reject("Unsupported overlay view controller!")
            return
        }
        
        guard let recognizerRunneViewController: UIViewController =
            MBViewControllerFactory.recognizerRunnerViewController(withOverlayViewController: overlayVC) else {
                return
        }
        recognizerRunneViewController.modalPresentationStyle = .fullScreen
        
        DispatchQueue.main.async {
          self.bridge.viewController.present(recognizerRunneViewController, animated: true, completion: nil)
        }
    }
    
    private func setLicenseKey(licenses: [String:Any]?) {
        
        guard let licenses = licenses else {
            pluginCall?.reject("Licenses cannot be nil!")
            return
        }
        
        if (licenses["showTimeLimitedLicenseKeyWarning"] != nil) {
            let showTimeLimitedLicenseKeyWarning = licenses["showTimeLimitedLicenseKeyWarning"] as! Bool
            MBMicroblinkSDK.shared().showLicenseKeyTimeLimitedWarning = showTimeLimitedLicenseKeyWarning
        }
        
        guard let iOSLicense = licenses["ios"] as? String else {
            pluginCall?.reject("You must provide iOS License for Microblink SDK")
            return
        }
        
        MBMicroblinkSDK.shared().setLicenseKey(iOSLicense)
    }
    
    @objc func setLicenses(_ call: CAPPluginCall) {
        guard let licenses = call.getObject("licenses") else {
            call.reject("Licenses cannot be nil!")
            return
        }
         
        if (licenses["showTimeLimitedLicenseKeyWarning"] != nil) {
            let showTimeLimitedLicenseKeyWarning = licenses["showTimeLimitedLicenseKeyWarning"] as! Bool
            MBMicroblinkSDK.shared().showLicenseKeyTimeLimitedWarning = showTimeLimitedLicenseKeyWarning
        }
        
        guard let iOSLicense = licenses["ios"] as? String else {
            call.reject("You must provide iOS License for Microblink SDK")
            return
        }
        
        MBMicroblinkSDK.shared().setLicenseKey(iOSLicense)
    }
}

extension BlinkIdCapacitorPlugin: MBOverlayViewControllerDelegate {
    
    public func overlayViewControllerDidFinishScanning(_ overlayViewController: MBOverlayViewController!, state: MBRecognizerResultState) {
        
        if (state != .empty) {
            overlayViewController.recognizerRunnerViewController?.pauseScanning()
            
            guard let recognizerListCount = recognizerCollection?.recognizerList.count else {
                return
            }
            
            var resultJson = [Any]()
            
            for recognizerIndex in 0..<(recognizerListCount-1) {
                resultJson.append(recognizerCollection?.recognizerList[recognizerIndex].serializeResult() as Any)
            }
            
            pluginCall?.resolve([
              "cancelled": false,
              "scanningResult": resultJson
            ])
            
            DispatchQueue.main.async {
                defer {
                    self.recognizerCollection = nil
                }
                overlayViewController.dismiss(animated: true, completion: nil)
            }
        }
    }
    
    public func overlayDidTapClose(_ overlayViewController: MBOverlayViewController!) {
        defer {
            pluginCall = nil
        }
        
        overlayViewController.dismiss(animated: true, completion: nil)
    }
}
