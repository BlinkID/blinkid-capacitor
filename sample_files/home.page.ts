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
      ios: 'sRwAAAEVY29tLm1pY3JvYmxpbmsuc2FtcGxl1BIcP4FpSuS/38KlOx6IMzWbmaGEGiaL7eNSyKVwZjeUMW3Ax8aKh+quw2aZ4K4wKk+HtsAqjaGiGJSKWfeqZ/hXXpX3Kd7PRq/86AF3lpVWOZPN6FzUB6FVm7jYfVBUag4hYYxvq70616zMDQyaAItml02PvEL8OKbKbBxEYmVzBVpq3ew4JoHyRAaOJQfc9WEKrP4HYd8q4s15+HB/KO24IUVBabZggHMj2hOyAEM7p9dWpA/Q+n6C49w35xLfmcJrjSP0qE25bdTUMMEwhu6xiYmYdtMrqJkwCEIjzEQ04bEB3XWskZl3+AD5kUQH8qyhuEELR/mvbmvwxMBpwpM=',
      android: 'sRwAAAAVY29tLm1pY3JvYmxpbmsuc2FtcGxlU9kJdZhZkGlTu9XHO8NDZ5etowTvAoM3PXg5QKNOMEzS+WzcCNYkGg0p7csI0R/oydYtBy2pDTTG1MHqYaFvnxUnpSu1mcXUVUOiddboBBWBXu6Z9Pq5iYIdZ3/HuZFmW1V4PK7S0WiUzzlYDHFNMH+KnaDNnJawX7D7X1S7i9KriklziYyNkX59wv1uOaExxS7FuftzTBtqxMjzOmuwglSXXzrqUE4uwNnAijs9b9Jqr/2Y72qkE+SiBY45N5E0BLpG9ex0NFT/uiLhmd1BEZBrKWouCOPogSmKBE30mawHpesSS/4XsjAZH8a5FqQdsL4QXbeYeHsAcSyDhoiwPw0="',
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
      buildResult(
          result.additionalOptionalAddressInformation, 'Additional optional address info') +
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
      buildDriverLicenceResult(result.driverLicenseDetailedInfo) +
      buildResult(result.dataMatchDetailedInfo.dataMatchResult, "Data match result") +
      buildResult(result.dataMatchDetailedInfo.dateOfExpiry, "dateOfExpiry") +
      buildResult(result.dataMatchDetailedInfo.dateOfBirth, "dateOfBirth") +
      buildResult(result.dataMatchDetailedInfo.documentNumber, "documentNumber");
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
    var vehicleClassesInfoString = '';
    if (result.vehicleClassesInfo) {
      for (let i=0; i<result.vehicleClassesInfo.length; i++) {
            vehicleClassesInfoString += buildResult(result.vehicleClassesInfo[i].vehicleClass, 'Vehicle class') + 
            buildResult(result.vehicleClassesInfo[i].licenceType, 'License type') + 
            buildDateResult(result.vehicleClassesInfo[i].effectiveDate, 'Effective date') + 
            buildDateResult(result.vehicleClassesInfo[i].expiryDate, 'Expiry date');
        }
    }
    return buildResult(result.restrictions, 'Restrictions') +
        buildResult(result.endorsements, 'Endorsements') +
        buildResult(result.vehicleClass, 'Vehicle class') +
        buildResult(result.conditions, 'Conditions') + vehicleClassesInfoString;
  }
  return '';
}
