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

    const licenseKeys: BlinkID.Licenses = {
      ios: 'sRwAAAEQaW8uaW9uaWMuc3RhcnRlctOOXHJ8cZk7ufDmqgoofWxXk8xN56gLofT/CuVhdpQ6cM4+FALHNqjvQIhC4SVx6Bhr+cAtPXGqUUSlgHsnHFF184jqfj2pS3h/t88v05xzvRuqllhRIRED63t6VoYar0uq20hydzt3Z56O9RcNL2MxeAVl+A6cI9L0yVAOKJp9zCrbt8dyz78bOyptp+ZK5Gr8czSlNyENh8vePEF1lkwCfvZ09jHIO9wzJ8RTWb8Ag61H8YkDfkhncxPTHP9M5tnZUYBHVL8C',
      android: 'sRwAAAAQaW8uaW9uaWMuc3RhcnRlcllSTd5TI1Nktn18BfZbW8EcY04UttzTXWKQ+BBbEEqnsoDp9umwexkqKqa2+FSaripQtlblOMrfE9SUSguKIMfQ2ZVVECXNQHyi8y7yoe/swzU9qZqCymqXFsN0Xs2BfqhIimw5OPWYQ2WqeXM7FFrFsygKIhXWlz0GuK3BGMNH08CD8kG6plPIYu+0NMPkd17lYnmRor9oWuzG6QR9tLoYb1FNYMa/SLIlJ2ctQ/PzTiE7o0J3VtWgNUMpfm9VdfQ7gDABrfqFWcMzgrApb2/O6+nGMbmUq2NP9aosFVgXmFBPYr/afQ5keFPyeLu0HFPNYeP77SZYvuKwt/GUlXd6OOQKPmr10Gv+HJh98d+j/pZmy7A4EXSGiBqe00fQKtn9eTp2FUQEhr2216wCbxoQ7EjXN16CV/2pTaCV/LKLcBLSSs420K0ttI0XAnilcBj3SoYD0NkM3nZoMk60h1FVTtyC2EF9h9ObERY6lhVbeX/UFYP/pDTlwmJOeOHD',
      showTimeLimitedLicenseKeyWarning: true
    };

    const scanningResults = await BlinkIDPlugin.scanWithCamera({
      overlaySettings: new BlinkID.BlinkIdOverlaySettings(),
      recognizerCollection: new BlinkID.RecognizerCollection([blinkIdCombinedRecognizer/*, mrtdSuccessFrameGrabber*/]),
      licenses: licenseKeys
    });
  }
}
