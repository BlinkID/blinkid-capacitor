package com.microblink.blinkid.capacitor.recognizers.serialization;

import com.microblink.blinkid.entities.recognizers.Recognizer;
import com.microblink.blinkid.capacitor.recognizers.RecognizerSerialization;
import com.microblink.blinkid.capacitor.SerializationUtils;

import org.json.JSONException;
import org.json.JSONObject;

public final class BlinkIdMultiSideRecognizerSerialization implements RecognizerSerialization {

    @Override
    public Recognizer<?> createRecognizer(JSONObject jsonObject) {
        com.microblink.blinkid.entities.recognizers.blinkid.generic.BlinkIdMultiSideRecognizer recognizer = new com.microblink.blinkid.entities.recognizers.blinkid.generic.BlinkIdMultiSideRecognizer();
        recognizer.setAdditionalAnonymization(BlinkIDSerializationUtils.deserializeClassAnonymizationSettings(jsonObject.optJSONArray("additionalAnonymization")));
        recognizer.setAllowBarcodeScanOnly(jsonObject.optBoolean("allowBarcodeScanOnly", false));
        recognizer.setAllowUncertainFrontSideScan(jsonObject.optBoolean("allowUncertainFrontSideScan", false));
        recognizer.setAllowUnparsedMrzResults(jsonObject.optBoolean("allowUnparsedMrzResults", false));
        recognizer.setAllowUnverifiedMrzResults(jsonObject.optBoolean("allowUnverifiedMrzResults", true));
        recognizer.setAnonymizationMode(com.microblink.blinkid.entities.recognizers.blinkid.generic.AnonymizationMode.values()[jsonObject.optInt("anonymizationMode", 3)]);
        recognizer.setBlurStrictnessLevel(com.microblink.blinkid.entities.recognizers.blinkid.generic.imageanalysis.StrictnessLevel.values()[jsonObject.optInt("blurStrictnessLevel", 1)]);
        recognizer.setClassFilter(BlinkIDSerializationUtils.deserializeClassFilter(jsonObject.optJSONObject("classFilter")));
        recognizer.setCombineFrameResults(jsonObject.optBoolean("combineFrameResults", true));
        recognizer.setCustomClassRules(BlinkIDSerializationUtils.deserializeCustomClassRules(jsonObject.optJSONArray("customClassRules")));
        recognizer.setEnableBlurFilter(jsonObject.optBoolean("enableBlurFilter", true));
        recognizer.setEnableGlareFilter(jsonObject.optBoolean("enableGlareFilter", true));
        recognizer.setFaceImageDpi(jsonObject.optInt("faceImageDpi", 250));
        recognizer.setFullDocumentImageDpi(jsonObject.optInt("fullDocumentImageDpi", 250));
        recognizer.setFullDocumentImageExtensionFactors(SerializationUtils.deserializeExtensionFactors(jsonObject.optJSONObject("fullDocumentImageExtensionFactors")));
        recognizer.setGlareStrictnessLevel(com.microblink.blinkid.entities.recognizers.blinkid.generic.imageanalysis.StrictnessLevel.values()[jsonObject.optInt("glareStrictnessLevel", 1)]);
        recognizer.setMaxAllowedMismatchesPerField(jsonObject.optInt("maxAllowedMismatchesPerField", 0));
        recognizer.setPaddingEdge((float)jsonObject.optDouble("paddingEdge", 0.0));
        recognizer.setRecognitionModeFilter(BlinkIDSerializationUtils.deserializeRecognitionModeFilter(jsonObject.optJSONObject("recognitionModeFilter")));
        recognizer.setReturnFaceImage(jsonObject.optBoolean("returnFaceImage", false));
        recognizer.setReturnFullDocumentImage(jsonObject.optBoolean("returnFullDocumentImage", false));
        recognizer.setReturnSignatureImage(jsonObject.optBoolean("returnSignatureImage", false));
        recognizer.setSaveCameraFrames(jsonObject.optBoolean("saveCameraFrames", false));
        recognizer.setScanCroppedDocumentImage(jsonObject.optBoolean("scanCroppedDocumentImage", false));
        recognizer.setScanPassportDataPageOnly(jsonObject.optBoolean("scanPassportDataPageOnly", true));
        recognizer.setSignatureImageDpi(jsonObject.optInt("signatureImageDpi", 250));
        recognizer.setSkipUnsupportedBack(jsonObject.optBoolean("skipUnsupportedBack", false));
        recognizer.setValidateResultCharacters(jsonObject.optBoolean("validateResultCharacters", true));
        return recognizer;
    }

    @Override
    public JSONObject serializeResult(Recognizer<?> recognizer) {
        com.microblink.blinkid.entities.recognizers.blinkid.generic.BlinkIdMultiSideRecognizer.Result result = ((com.microblink.blinkid.entities.recognizers.blinkid.generic.BlinkIdMultiSideRecognizer)recognizer).getResult();
        JSONObject jsonResult = new JSONObject();
        try {
            SerializationUtils.addCommonRecognizerResultData(jsonResult, result);
            jsonResult.put("additionalAddressInformation", BlinkIDSerializationUtils.serializeStringResult(result.getAdditionalAddressInformation()));
            jsonResult.put("additionalNameInformation", BlinkIDSerializationUtils.serializeStringResult(result.getAdditionalNameInformation()));
            jsonResult.put("additionalOptionalAddressInformation", BlinkIDSerializationUtils.serializeStringResult(result.getAdditionalOptionalAddressInformation()));
            jsonResult.put("address", BlinkIDSerializationUtils.serializeStringResult(result.getAddress()));
            jsonResult.put("age", result.getAge());
            jsonResult.put("backAdditionalProcessingInfo", BlinkIDSerializationUtils.serializeAdditionalProcessingInfo(result.getBackAdditionalProcessingInfo()));
            jsonResult.put("backCameraFrame", SerializationUtils.encodeImageBase64(result.getBackCameraFrame()));
            jsonResult.put("backImageAnalysisResult", BlinkIDSerializationUtils.serializeImageAnalysisResult(result.getBackImageAnalysisResult()));
            jsonResult.put("backProcessingStatus", SerializationUtils.serializeEnum(result.getBackProcessingStatus()));
            jsonResult.put("backVizResult", BlinkIDSerializationUtils.serializeVizResult(result.getBackVizResult()));
            jsonResult.put("barcodeCameraFrame", SerializationUtils.encodeImageBase64(result.getBarcodeCameraFrame()));
            jsonResult.put("barcodeResult", BlinkIDSerializationUtils.serializeBarcodeResult(result.getBarcodeResult()));
            jsonResult.put("barcodeStepUsed", result.isBarcodeStepUsed());
            jsonResult.put("bloodType", BlinkIDSerializationUtils.serializeStringResult(result.getBloodType()));
            jsonResult.put("classInfo", BlinkIDSerializationUtils.serializeClassInfo(result.getClassInfo()));
            jsonResult.put("dataMatch", BlinkIDSerializationUtils.serializeDataMatchResult(result.getDataMatch()));
            jsonResult.put("dateOfBirth", BlinkIDSerializationUtils.serializeDateResult(result.getDateOfBirth()));
            jsonResult.put("dateOfExpiry", BlinkIDSerializationUtils.serializeDateResult(result.getDateOfExpiry()));
            jsonResult.put("dateOfExpiryPermanent", result.isDateOfExpiryPermanent());
            jsonResult.put("dateOfIssue", BlinkIDSerializationUtils.serializeDateResult(result.getDateOfIssue()));
            jsonResult.put("dependentsInfo", BlinkIDSerializationUtils.serializeDependentInfo(result.getDependentsInfo()));
            jsonResult.put("documentAdditionalNumber", BlinkIDSerializationUtils.serializeStringResult(result.getDocumentAdditionalNumber()));
            jsonResult.put("documentNumber", BlinkIDSerializationUtils.serializeStringResult(result.getDocumentNumber()));
            jsonResult.put("documentOptionalAdditionalNumber", BlinkIDSerializationUtils.serializeStringResult(result.getDocumentOptionalAdditionalNumber()));
            jsonResult.put("documentSubtype", BlinkIDSerializationUtils.serializeStringResult(result.getDocumentSubtype()));
            jsonResult.put("driverLicenseDetailedInfo", BlinkIDSerializationUtils.serializeDriverLicenseDetailedInfo(result.getDriverLicenseDetailedInfo()));
            jsonResult.put("eligibilityCategory", BlinkIDSerializationUtils.serializeStringResult(result.getEligibilityCategory()));
            jsonResult.put("employer", BlinkIDSerializationUtils.serializeStringResult(result.getEmployer()));
            jsonResult.put("expired", result.isExpired());
            jsonResult.put("faceImage", SerializationUtils.encodeImageBase64(result.getFaceImage()));
            jsonResult.put("faceImageLocation", SerializationUtils.serializeRectangle(result.getFaceImageLocation()));
            jsonResult.put("faceImageSide", BlinkIDSerializationUtils.serializeSide(result.getFaceImageSide()));
            jsonResult.put("fathersName", BlinkIDSerializationUtils.serializeStringResult(result.getFathersName()));
            jsonResult.put("firstName", BlinkIDSerializationUtils.serializeStringResult(result.getFirstName()));
            jsonResult.put("frontAdditionalProcessingInfo", BlinkIDSerializationUtils.serializeAdditionalProcessingInfo(result.getFrontAdditionalProcessingInfo()));
            jsonResult.put("frontCameraFrame", SerializationUtils.encodeImageBase64(result.getFrontCameraFrame()));
            jsonResult.put("frontImageAnalysisResult", BlinkIDSerializationUtils.serializeImageAnalysisResult(result.getFrontImageAnalysisResult()));
            jsonResult.put("frontProcessingStatus", SerializationUtils.serializeEnum(result.getFrontProcessingStatus()));
            jsonResult.put("frontVizResult", BlinkIDSerializationUtils.serializeVizResult(result.getFrontVizResult()));
            jsonResult.put("fullDocumentBackImage", SerializationUtils.encodeImageBase64(result.getFullDocumentBackImage()));
            jsonResult.put("fullDocumentFrontImage", SerializationUtils.encodeImageBase64(result.getFullDocumentFrontImage()));
            jsonResult.put("fullName", BlinkIDSerializationUtils.serializeStringResult(result.getFullName()));
            jsonResult.put("issuingAuthority", BlinkIDSerializationUtils.serializeStringResult(result.getIssuingAuthority()));
            jsonResult.put("lastName", BlinkIDSerializationUtils.serializeStringResult(result.getLastName()));
            jsonResult.put("localizedName", BlinkIDSerializationUtils.serializeStringResult(result.getLocalizedName()));
            jsonResult.put("manufacturingYear", BlinkIDSerializationUtils.serializeStringResult(result.getManufacturingYear()));
            jsonResult.put("maritalStatus", BlinkIDSerializationUtils.serializeStringResult(result.getMaritalStatus()));
            jsonResult.put("mothersName", BlinkIDSerializationUtils.serializeStringResult(result.getMothersName()));
            jsonResult.put("mrzResult", BlinkIDSerializationUtils.serializeMrzResult(result.getMrzResult()));
            jsonResult.put("nationality", BlinkIDSerializationUtils.serializeStringResult(result.getNationality()));
            jsonResult.put("personalIdNumber", BlinkIDSerializationUtils.serializeStringResult(result.getPersonalIdNumber()));
            jsonResult.put("placeOfBirth", BlinkIDSerializationUtils.serializeStringResult(result.getPlaceOfBirth()));
            jsonResult.put("processingStatus", SerializationUtils.serializeEnum(result.getProcessingStatus()));
            jsonResult.put("profession", BlinkIDSerializationUtils.serializeStringResult(result.getProfession()));
            jsonResult.put("race", BlinkIDSerializationUtils.serializeStringResult(result.getRace()));
            jsonResult.put("recognitionMode", SerializationUtils.serializeEnum(result.getRecognitionMode()));
            jsonResult.put("religion", BlinkIDSerializationUtils.serializeStringResult(result.getReligion()));
            jsonResult.put("remarks", BlinkIDSerializationUtils.serializeStringResult(result.getRemarks()));
            jsonResult.put("residencePermitType", BlinkIDSerializationUtils.serializeStringResult(result.getResidencePermitType()));
            jsonResult.put("residentialStatus", BlinkIDSerializationUtils.serializeStringResult(result.getResidentialStatus()));
            jsonResult.put("scanningFirstSideDone", result.isScanningFirstSideDone());
            jsonResult.put("sex", BlinkIDSerializationUtils.serializeStringResult(result.getSex()));
            jsonResult.put("signatureImage", SerializationUtils.encodeImageBase64(result.getSignatureImage()));
            jsonResult.put("specificDocumentValidity", BlinkIDSerializationUtils.serializeStringResult(result.getSpecificDocumentValidity()));
            jsonResult.put("sponsor", BlinkIDSerializationUtils.serializeStringResult(result.getSponsor()));
            jsonResult.put("vehicleOwner", BlinkIDSerializationUtils.serializeStringResult(result.getVehicleOwner()));
            jsonResult.put("vehicleType", BlinkIDSerializationUtils.serializeStringResult(result.getVehicleType()));
            jsonResult.put("visaType", BlinkIDSerializationUtils.serializeStringResult(result.getVisaType()));
        } catch (JSONException e) {
            // see https://developer.android.com/reference/org/json/JSONException
            throw new RuntimeException(e);
        }
        return jsonResult;
    }

    @Override
    public String getJsonName() {
        return "BlinkIdMultiSideRecognizer";
    }

    @Override
    public Class<?> getRecognizerClass() {
        return com.microblink.blinkid.entities.recognizers.blinkid.generic.BlinkIdMultiSideRecognizer.class;
    }
}