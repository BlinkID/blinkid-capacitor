import { Component } from '@angular/core';
import * as BlinkID from '@microblink/blinkid-capacitor';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  Results: string;
  DocumentFront: string;
  DocumentBack: string;
  DocumentFace: string;

  constructor() {}

  async scan() {

    const plugin = new BlinkID.BlinkIDPlugin();

    const blinkIdCombinedRecognizer = new BlinkID.BlinkIdCombinedRecognizer();
    blinkIdCombinedRecognizer.returnFullDocumentImage = true;
    blinkIdCombinedRecognizer.returnFaceImage = true;

    // com.microblink.sample
    const licenseKeys: BlinkID.License = {
      ios: 'sRwAAAEVY29tLm1pY3JvYmxpbmsuc2FtcGxl1BIcP4FpSuS/38JVPZ6LMS08lcu81gG/oGTKny4tPf7qrukqKTjEn5zpgzJ+z8Qhf/DzQ+rgwne5bcqvcoqY9n4fo3osaFDX1BWka1tEEmpAAJzfiZJ3MtOzdOFqyuHybzz0DWj3kemWYgJeWFbRIYQGWV56Kig9qio3d1akBWMa1wOs2mUL5Oj2w6IHS1v5E78nnjxynAgVsGKI2TqPsZFjmXfdsxg7uVP3z8ZEDYO+rOhCH3AxCk5DG++7aXGZ8HijRmvDt7z/jQfYcAApgzTTA8dDjOJ5fhMxCOKkxyzr21KjaKhDevT6NZjxp5tmbsM5A8lZ',
      android: 'sRwAAAAVY29tLm1pY3JvYmxpbmsuc2FtcGxlU9kJdZhZkGlTu9U3PWNHZAAPMfggO8eqRqstS/pzAj03JIRM4oKtZHC3x01wMUK/j4ZjCEdfIGTcuaz8sIaJY3rE/o43J+8GQMgTkoKu3qCjqowrQgNT6JqiD7Vkth1TDhdjv3bJq5BmewGdyJzVnT8yk+wCV8XBqqY4dJozSfZRgmgAp2O/WnXfveCTpHqnHjH50fCLTgertIHJs6ekk8FxHtWKkoiXixZnkLppqxjn1bc4l51VAaXaf+HhlAYSYVgQZJpk+n8CtNfemcGHw4sNq2xYGQ1o4cZVjhJEOCuP3PeujhkDHtfD42bu2dJVXPQUoj6eCnw=',
      showTrialLicenseWarning: true
    };

    const scanningResults = await plugin.scanWithCamera(
      new BlinkID.BlinkIdOverlaySettings(),
      new BlinkID.RecognizerCollection([blinkIdCombinedRecognizer]),
      licenseKeys
    );

    if (scanningResults.length === 0) {
      return;
    }

    for (const result of scanningResults) {
      if (result instanceof BlinkID.BlinkIdCombinedRecognizerResult) {
        this.Results = getIdResultsString(result);
        this.DocumentFront = result.fullDocumentFrontImage ? `data:image/jpg;base64,${result.fullDocumentFrontImage}` : undefined;
        this.DocumentBack = result.fullDocumentBackImage ? `data:image/jpg;base64,${result.fullDocumentBackImage}` : undefined;
        this.DocumentFace = result.faceImage ? `data:image/jpg;base64,${result.faceImage}` : undefined;
      } else if (result instanceof BlinkID.MrtdCombinedRecognizerResult) {
        this.Results = getMrzResultsString(result);
        this.DocumentFront = result.fullDocumentFrontImage ? `data:image/jpg;base64,${result.fullDocumentFrontImage}` : undefined;
        this.DocumentBack = result.fullDocumentBackImage ? `data:image/jpg;base64,${result.fullDocumentBackImage}` : undefined;
        this.DocumentFace = result.faceImage ? `data:image/jpg;base64,${result.faceImage}` : undefined;
      }
    }
  }
}

function getIdResultsString(result: BlinkID.BlinkIdCombinedRecognizerResult) {
  return buildResult(result.firstName, 'First name') +
      buildResult(result.lastName, 'Last name') +
      buildResult(result.fullName, 'Full name') +
      buildResult(result.localizedName, 'Localized name') +
      buildResult(result.additionalNameInformation, 'Additional name info') +
      buildResult(result.address, 'Address') +
      buildResult(
          result.additionalAddressInformation, 'Additional address info') +
      buildResult(result.documentNumber, 'Document number') +
      buildResult(
          result.documentAdditionalNumber, 'Additional document number') +
      buildResult(result.sex, 'Sex') +
      buildResult(result.issuingAuthority, 'Issuing authority') +
      buildResult(result.nationality, 'Nationality') +
      buildDateResult(result.dateOfBirth, 'Date of birth') +
      buildIntResult(result.age, 'Age') +
      buildDateResult(result.dateOfIssue, 'Date of issue') +
      buildDateResult(result.dateOfExpiry, 'Date of expiry') +
      buildResult(result.dateOfExpiryPermanent.toString(),
          'Date of expiry permanent') +
      buildResult(result.maritalStatus, 'Martial status') +
      buildResult(result.personalIdNumber, 'Personal Id Number') +
      buildResult(result.profession, 'Profession') +
      buildResult(result.race, 'Race') +
      buildResult(result.religion, 'Religion') +
      buildResult(result.residentialStatus, 'Residential Status') +
      buildDriverLicenceResult(result.driverLicenseDetailedInfo);
}

function getMrzResultsString(result: BlinkID.MrtdCombinedRecognizerResult) {
  const mrzResult = result.mrzResult;
  return buildResult(mrzResult.primaryId, 'Primary ID') +
      buildResult(mrzResult.secondaryId, 'Secondary ID') +
      buildResult(mrzResult.gender, 'Gender') +
      buildResult(mrzResult.issuer, 'Issuer') +
      buildResult(mrzResult.nationality, 'Nationality') +
      buildDateResult(mrzResult.dateOfBirth, 'Date of birth') +
      buildIntResult(mrzResult.age, 'Age') +
      buildDateResult(mrzResult.dateOfExpiry, 'Date of expiry') +
      buildResult(mrzResult.documentCode, 'Document code') +
      buildResult(mrzResult.documentType, 'Document type') +
      buildResult(mrzResult.opt1, 'Optional 1') +
      buildResult(mrzResult.opt2, 'Optional 2') +
      buildResult(mrzResult.mrzText, 'MRZ Text');
}

function buildResult(result, key) {
  if (result && result !== '') {
    return `${key}: ${result}\n`;
  }
  return '';
}

function buildDateResult(result, key) {
  if (result && result.year !== 0) {
    return buildResult(`${result.day}.${result.month}.${result.year}`, key);
  }
  return '';
}

function buildIntResult(result, key) {
  if (result >= 0) {
    return buildResult(result.toString(), key);
  }
  return '';
}

function buildDriverLicenceResult(result) {
  if (result) {
    return buildResult(result.restrictions, 'Restrictions') +
        buildResult(result.endorsements, 'Endorsements') +
        buildResult(result.vehicleClass, 'Vehicle class') +
        buildResult(result.conditions, 'Conditions');
  }
  return '';
}
