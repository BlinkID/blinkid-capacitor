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
      ios: 'sRwAAAEVY29tLm1pY3JvYmxpbmsuc2FtcGxl1BIcP4FpSuS/38JVPpankFQ/Bcr7WvDAxkCq8h6GBBsKnan7jmJz5oRDF0VOwEv8zcz2tsAexgAWBzhWNxEvz2I2UYi7CSHjlbw0ppsdoL5WCQPrg6i+aiCRIxht1V8ObYlBvqTi69Pk0HXXwmpcIt7r01khjOlXdS7Mdn89IcW2R6bcYVIjID87iTpDG+SNFZ6ITQQsyv/c7VfkyEQ/2zl2J0Yln6a1OYGNCIDhfZjlTxK4H8ovNrrwvgR66jsKv0WBx2LLajjYOVdsMLueajw8caSpUlRtSpzCMAQB3FgD5OYEhDugRChfESwa4C8tAv7h9QUzU8TMpJeg7paXnee6MA==',
      android: 'sRwAAAAVY29tLm1pY3JvYmxpbmsuc2FtcGxlU9kJdZhZkGlTu9U3Potlw+N+WELcAfo3ZNjCGrjwPbX72/Lj68v4Wsf9m+5MlNQBduVAB4w8aalo+BzHOMQomzhSX//WJlF+gsu8YbPc7YiWkKgmlubu9m4LOLM6yAaUWSoHauvy6imEIN0XB9ZOLRv/lN9+3zro2jbDglRX6TXDbLNjkYIUAZfmXEBW+smfQ0606630P6TBTps2nV8Dr/ZQcQ8H18tQOsG6nzFEbJoddztEOcWCp1pzNP8wHf3W848HxYiOqjTcXoA6GxzAJKyv6U2JUFZqlkiLNWok/qY6++srGoDsh0LXCu8xVwi/2MM8/DZ3Qqa9HkHIdJ6amkeifQ==',
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
