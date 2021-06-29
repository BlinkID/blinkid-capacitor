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
      ios: 'sRwAAAEVY29tLm1pY3JvYmxpbmsuc2FtcGxl1BIcP4FpSuS/38JVPpainJO1WzdIJ24F63b5aVT4QkKUj+ppNwJ5iAa9djcFVGyp21bUe04tik0Aehq2bgeT1buWvQynWaNmDP1w8tXmnxJ6RT5OHkd6f2nYLtu8rZKgU6c1RsMhAUDv6CF0zFKMTAvpZp1aQRQlJPuYeyEocfX/+MrJj0fGB6c9vIbUdEzyzyjxSKhttdeaqiAejtbbUP3gUfc/FZQyiM8mYU29HQpEzBEOYibaOj2hwENRxINHxs1Ggc9dRqdysImztckco7b++i0K8f4AgT6/8tZ9qcyfwaPuy3x/gz26j5K1B7ciSxoRnV2SBQnYocUuFptXiPT7Ug==',
      android: 'sRwAAAAVY29tLm1pY3JvYmxpbmsuc2FtcGxlU9kJdZhZkGlTu9U3ORtDZCu0vFoxWJyF0dnv88NTiJO9pmEXPFZB9pVlO146QMSXVLAnYzACtQkatIeij7DU7ncIxLPulqRre/pOorG7HaWypuPGrotFAut0fJMJSckpf7QQC5N/97MV4Mdjk/JA6zeC83V0JqSEIMBisJRSeL4H1BqrcrDqhZpMjddPQQ+e8XVAmL2WxPsTubyqQDFvU6VSGE2nVIxbsXfpKApGRPSD7d+m46zsK6X86hMuMIu9sdtABD0AS0Bzm8HpaJZWkP51L6Ag9Dor9Iqluw0RTm+WgsQzycLBJ80iJwxryFiKOWtiPlvxQPAqn16CDT7J6h/z',
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
