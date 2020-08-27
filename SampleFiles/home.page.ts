import { Component } from '@angular/core';

import { Plugins } from '@capacitor/core';
import * as BlinkID from 'blinkid-capacitor';

const { BlinkIDPlugin } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  async scan() {

    const blinkIdCombinedRecognizer = new BlinkID.BlinkIdCombinedRecognizer();
    blinkIdCombinedRecognizer.returnFullDocumentImage = true;
    blinkIdCombinedRecognizer.returnFaceImage = true;

    const licenseKeys: BlinkID.License = {
      ios: 'sRwAAAEQaW8uaW9uaWMuc3RhcnRlctOOXHJ8cZk7ufDmqgoofWxXk8xN56gLofT/CuVhdpQ6cM4+FALHNqjvQIhC4SVx6Bhr+cAtPXGqUUSlgHsnHFF184jqfj2pS3h/t88v05xzvRuqllhRIRED63t6VoYar0uq20hydzt3Z56O9RcNL2MxeAVl+A6cI9L0yVAOKJp9zCrbt8dyz78bOyptp+ZK5Gr8czSlNyENh8vePEF1lkwCfvZ09jHIO9wzJ8RTWb8Ag61H8YkDfkhncxPTHP9M5tnZUYBHVL8C',
      android: 'sRwAAAAQaW8uaW9uaWMuc3RhcnRlcllSTd79IlNktn18BfaTuKfqfr7jOa+dC+iDV4UiZ1q2fykQJVlioifT7FaIQlA7PZkgWIUtb4qQALAQMLrYr1TqjUpYt6n6+GL8D6zKc+3eK95BvrKiTchV29i3qHHRPzmcwbmjVIG4mNWvAp7rhZueA5tpU0ywt6wP7PM1MEQCjm1Dd169k1j8Jk58KQ9EptoXkDUUhdjs+lvvS3Ipee7QH/go61UYbOUnH2nZOfKTAe4FrXFFH04PLUQxoNONVQDaF7uD7rw=',
      showTimeLimitedLicenseKeyWarning: true
    };

    const scanningResults = await BlinkIDPlugin.scanWithCamera({
      overlaySettings: new BlinkID.BlinkIdOverlaySettings(),
      recognizerCollection: new BlinkID.RecognizerCollection([blinkIdCombinedRecognizer/*, mrtdSuccessFrameGrabber*/]),
      licenses: licenseKeys
    });
  }
}
