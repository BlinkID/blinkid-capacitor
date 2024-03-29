import { Component } from '@angular/core';
import * as BlinkID from '@microblink/blinkid-capacitor';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  Results?: string;
  DocumentFront?: string;
  DocumentBack?: string;
  DocumentFace?: string;

  constructor() {}

  async scan() {

    const plugin = new BlinkID.BlinkIDPlugin();

    const blinkIdMultisideRecognizer = new BlinkID.BlinkIdMultiSideRecognizer();
    blinkIdMultisideRecognizer.returnFullDocumentImage = true;
    blinkIdMultisideRecognizer.returnFaceImage = true;

    // com.microblink.sample
    const licenseKeys: BlinkID.License = {
      ios: 'sRwCABVjb20ubWljcm9ibGluay5zYW1wbGUBbGV5SkRjbVZoZEdWa1QyNGlPakUzTURnd09EUTFNamM1TnpJc0lrTnlaV0YwWldSR2IzSWlPaUkwT1RabFpEQXpaUzAwT0RBeExUUXpZV1F0WVRrMU5DMDBNemMyWlRObU9UTTVNR1FpZlE9PTYmqMAMVMiFzaNDv15W9/CxDFVRDWRjok+uP0GtswDV4XTVGmhbivKDEb9Gtk2iMzf29qFWF8aUjIES4QSQFJG0xfBXZhluSk7lt4A959aHAZ0+BWgDnqZUPJAF2jZd0Pl2Kt1oDxLtqtf8V/RR+dPYzUV0PEA=',
      android: 'sRwCABVjb20ubWljcm9ibGluay5zYW1wbGUAbGV5SkRjbVZoZEdWa1QyNGlPakUzTURnd09EUTNNelkxTmprc0lrTnlaV0YwWldSR2IzSWlPaUkwT1RabFpEQXpaUzAwT0RBeExUUXpZV1F0WVRrMU5DMDBNemMyWlRObU9UTTVNR1FpZlE9PRIv5OawGAVdpvmuz+999CsJyIAgtV3h96BJo1Fq+xBZnKDoKhL01jBUrxC0E4+EeWoTuEtPPcDte2KHgjOP7Z4y+Mk9ihWDHTjgANWfFwG2Gd7HYJxgwcYQsTvICqS1CBklIILTfbXahwtD4ZKh0ghaxUJf7gU=',
      showTrialLicenseWarning: true
    };
 
    const settings = new BlinkID.BlinkIdOverlaySettings();

    const scanningResults = await plugin.scanWithCamera(
      settings,
      new BlinkID.RecognizerCollection([blinkIdMultisideRecognizer]),
      licenseKeys
    );

    if (scanningResults.length === 0) {
      return;
    }

    for (const result of scanningResults) {
      if (result instanceof BlinkID.BlinkIdMultiSideRecognizerResult) {

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

function getIdResultsString(result: BlinkID.BlinkIdMultiSideRecognizerResult) {
  return buildResult(result.firstName?.description, 'First name') +
      buildResult(result.lastName?.description, 'Last name') +
      buildResult(result.fullName?.description, 'Full name') +
      buildResult(result.localizedName?.description, 'Localized name') +
      buildResult(result.additionalNameInformation?.description, 'Additional name info') +
      buildResult(result.address?.description, 'Address') +
      buildResult(
          result.additionalAddressInformation?.description, 'Additional address info') +
      buildResult(
          result.additionalOptionalAddressInformation?.description, 'Additional optional address info') +
      buildResult(result.documentNumber?.description, 'Document number') +
      buildResult(
          result.documentAdditionalNumber?.description, 'Additional document number') +
      buildResult(result.sex?.description, 'Sex') +
      buildResult(result.issuingAuthority?.description, 'Issuing authority') +
      buildResult(result.nationality?.description, 'Nationality') +
      buildDateResult(result?.dateOfBirth, 'Date of birth') +
      buildIntResult(result?.age, 'Age') +
      buildDateResult(result?.dateOfIssue, 'Date of issue') +
      buildDateResult(result?.dateOfExpiry, 'Date of expiry') +
      buildResult(result.dateOfExpiryPermanent?.toString(),
          'Date of expiry permanent') +
      buildResult(result.maritalStatus?.description, 'Martial status') +
      buildResult(result.personalIdNumber?.description, 'Personal Id Number') +
      buildResult(result.profession?.description, 'Profession') +
      buildResult(result.race?.description, 'Race') +
      buildResult(result.religion?.description, 'Religion') +
      buildResult(result.residentialStatus?.description, 'Residential Status') +
      buildResult(result.processingStatus, "Processing status") +
      buildResult(result.recognitionMode, "Recognition mode") +
      buildDriverLicenceResult(result.driverLicenseDetailedInfo) +
      buildDataMatchResult(result.dataMatch) +
      buildAdditionalProcessingInfoResult(result.frontAdditionalProcessingInfo, "Front additional processing info") +
      buildAdditionalProcessingInfoResult(result.backAdditionalProcessingInfo, "Back additional processing info");
}

function getMrzResultsString(result: BlinkID.MrtdCombinedRecognizerResult) {
  const mrzResult = result.mrzResult;
  return buildResult(mrzResult?.primaryId, 'Primary ID') +
      buildResult(mrzResult?.secondaryId, 'Secondary ID') +
      buildResult(mrzResult?.gender, 'Gender') +
      buildResult(mrzResult?.issuer, 'Issuer') +
      buildResult(mrzResult?.nationality, 'Nationality') +
      buildDateResult(mrzResult?.dateOfBirth, 'Date of birth') +
      buildIntResult(mrzResult?.age, 'Age') +
      buildDateResult(mrzResult?.dateOfExpiry, 'Date of expiry') +
      buildResult(mrzResult?.documentCode, 'Document code') +
      buildResult(mrzResult?.documentType, 'Document type') +
      buildResult(mrzResult?.opt1, 'Optional 1') +
      buildResult(mrzResult?.opt2, 'Optional 2') +
      buildResult(mrzResult?.mrzText, 'MRZ Text');
}

function buildResult(result: any, key: string) {
  if (result && result !== '') {
    return `${key}: ${result}\n`;
  }
  return '';
}

function buildDateResult(result: any, key: string) {
  if (result && result.year !== 0) {
    return buildResult(`${result.day}.${result.month}.${result.year}`, key);
  }
  return '';
}

function buildIntResult(result: any, key: string) {
  if (result >= 0) {
    return buildResult(result.toString(), key);
  }
  return '';
}

function buildDataMatchResult(result?: BlinkID.DataMatchResult) {
  if (result == null) {
    return '';
  }

  return buildResult(result.states[0].state, "Data match date of birth") +
    buildResult(result.states[1].state, "Data match date Of Expiry") +
    buildResult(result.states[2].state, "Data match document Number") +
    buildResult(result.stateForWholeDocument, "Data match state for the whole document")
}

function buildAdditionalProcessingInfoResult(result?: BlinkID.AdditionalProcessingInfo, key?: string) {
if (result == null || result.missingMandatoryFields.length == 0) {
  return `${key}: ${"empty"}\n`
}

const missingMandatoryFields = result.missingMandatoryFields;
var additionalProcessingInfo = '';

if (missingMandatoryFields.length > 0) {
  additionalProcessingInfo = key + ":\n";

  for (var i = 0; i < missingMandatoryFields.length; i++) {
    additionalProcessingInfo += missingMandatoryFields[i] + "\n";
  }
}

return `${additionalProcessingInfo}\n`;
}

function buildDriverLicenceResult(result?: BlinkID.DriverLicenseDetailedInfo) {
  var licenceInfo = result;
  if (licenceInfo) {
      var vehicleClassesInfoString = '';
      if (licenceInfo.vehicleClassesInfo) {
        for (let i=0; i<licenceInfo.vehicleClassesInfo.length; i++) {
              vehicleClassesInfoString += buildResult(licenceInfo.vehicleClassesInfo[i].vehicleClass.description, 'Vehicle class') +  
              buildResult(licenceInfo.vehicleClassesInfo[i].licenceType.description, 'License type') +  
              buildDateResult(licenceInfo.vehicleClassesInfo[i].effectiveDate.description, 'Effective date') + 
              buildDateResult(licenceInfo.vehicleClassesInfo[i].expiryDate, 'Expiry date');
          }
      }
      return buildResult(licenceInfo.restrictions.description, "Restrictions") +
          buildResult(licenceInfo.endorsements.description, "Endorsements") +
          buildResult(licenceInfo.vehicleClass.description, "Vehicle class") +
          buildResult(licenceInfo.conditions.description, "Conditions") + 
          vehicleClassesInfoString;
  }
  return '';
}
