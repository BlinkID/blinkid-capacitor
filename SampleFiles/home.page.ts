import { Component } from '@angular/core';

import { Plugins } from '@capacitor/core';
import * as BlinkID from 'blinkid-capacitor';
import { BlinkIDPlugin } from 'blinkid-capacitor';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  async scan() {
    const blinkIdPlugin = new BlinkIDPlugin();

    var blinkIdCombinedRecognizer = new BlinkID.BlinkIdCombinedRecognizer();
    blinkIdCombinedRecognizer.returnFullDocumentImage = true;
    blinkIdCombinedRecognizer.returnFaceImage = true;

    const licenseKeys: BlinkID.License = {
      ios: 'sRwAAAEQaW8uaW9uaWMuc3RhcnRlctOOXHJ8cZk7ufDmqgoofWxXk8xN56gLofT/CuVhdpQ6cM4+FALHNqjvQIhC4SVx6Bhr+cAtPXGqUUSlgHsnHFF184jqfj2pS3h/t88v05xzvRuqllhRIRED63t6VoYar0uq20hydzt3Z56O9RcNL2MxeAVl+A6cI9L0yVAOKJp9zCrbt8dyz78bOyptp+ZK5Gr8czSlNyENh8vePEF1lkwCfvZ09jHIO9wzJ8RTWb8Ag61H8YkDfkhncxPTHP9M5tnZUYBHVL8C',
      android: 'sRwAAAAWY29tLmJsaW5raWRyZWFjdG5hdGl2ZYouOuuUS2CbdVuoF2lsSqeObkzyko/0kah+gpMcK/G18fQtB1vAoiuyDojRyY6xOLlJYAFwGuepBKDJPqdsQh11RxKSLANRLDH0lWJzgo3EKRae9NXAoKPUJ0nqUy7uIP8eAVkFelNILVRy3pkWJjY5o/vRLn7sf2cNsdmt/ZvzUw1545pLHgT7LqOxSRg+81p0/koApvVMnJ+yI9QJgHNwa9AFNDOYEKCiow/J1dJjx+yGL1crnvfaOLv7ndLUisX496v+w9k=',
      showTimeLimitedLicenseKeyWarning: true
    }

    const scanningResults = await blinkIdPlugin.scanWithCamera(
      new BlinkID.BlinkIdOverlaySettings(),
      new BlinkID.RecognizerCollection([blinkIdCombinedRecognizer/*, mrtdSuccessFrameGrabber*/]),
      licenseKeys
    );
  }
}
