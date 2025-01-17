import { Recognizer, RecognizerResult } from '../recognizer'
import {
    Date,
    Point,
    Quadrilateral,
    MrtdDocumentType,
    MrzResult,
    DocumentFaceDetectorType,
    Country,
    Region,
    Type,
    DocumentImageColorStatus,
    ImageAnalysisResult,
    VizResult,
    BarcodeResult,
    ProcessingStatus,
    AnonymizationMode,
    RecognitionModeFilter,
    DriverLicenseDetailedInfo,
    VehicleClassInfo,
    BarcodeType,
    RecognitionMode,
    IdBarcodeDocumentType,
    DataMatchState,
    ClassInfo,
    BarcodeElements,
    BarcodeElementKey,
    Rectangle,
    Side,
    ClassAnonymizationSettings,
    DateResult,
    StringResult,
    AdditionalProcessingInfo,
    DocumentSide,
    DataMatchResult,
    StrictnessLevel,
    CustomClassRules,
    DependentInfo,
    ClassFilter,
    
    
    ImageExtensionFactors,
} from '../types'

/* tslint:disable:no-unused-variable */

/**
 * Result object for BlinkIdMultiSideRecognizer.
 */
export class BlinkIdMultiSideRecognizerResult extends RecognizerResult {

    
    /**
     * The additional address information of the document owner.
     */
    additionalAddressInformation?: StringResult;
    
    /**
     * The additional name information of the document owner.
     */
    additionalNameInformation?: StringResult;
    
    /**
     * The one more additional address information of the document owner.
     */
    additionalOptionalAddressInformation?: StringResult;
    
    /**
     * The address of the document owner.
     */
    address?: StringResult;
    
    /**
     * The current age of the document owner in years. It is calculated difference
         * between now and date of birth. Now is current time on the device.
         * @return current age of the document owner in years or -1 if date of birth is unknown.
     */
    age?: number;
    
    /**
     * Additional info on processing of the back side.
     */
    backAdditionalProcessingInfo?: AdditionalProcessingInfo;
    
    /**
     * The back raw camera frame.
     */
    backCameraFrame?: string;
    
    /**
     * Defines possible color and moire statuses determined from scanned back image.
     */
    backImageAnalysisResult?: ImageAnalysisResult;
    
    /**
     * Status of the last back side recognition process.
     */
    backProcessingStatus?: ProcessingStatus;
    
    /**
     * Defines the data extracted from the back side visual inspection zone.
     */
    backVizResult?: VizResult;
    
    /**
     * The barcode raw camera frame.
     */
    barcodeCameraFrame?: string;
    
    /**
     * Defines the data extracted from the barcode.
     */
    barcodeResult?: BarcodeResult;
    
    /**
     * This member indicates whether the barcode scanning step was utilized during the
         * process.
         * If the barcode scanning step was executed: a parsable barcode image will be stored in the
         * `barcodeCameraFrame`.
         * If the barcode scanning step was not executed: a parsable barcode image will be stored in the
         * `fullDocumentImage`.
     */
    barcodeStepUsed?: boolean;
    
    /**
     * The blood type of the document owner.
     */
    bloodType?: StringResult;
    
    /**
     * The classification information.
     */
    classInfo?: ClassInfo;
    
    /**
     * Detailed info on data match.
     */
    dataMatch?: DataMatchResult;
    
    /**
     * The date of birth of the document owner.
     */
    dateOfBirth?: Date;
    
    /**
     * The date of expiry of the document.
     */
    dateOfExpiry?: Date;
    
    /**
     * Determines if date of expiry is permanent.
     */
    dateOfExpiryPermanent?: boolean;
    
    /**
     * The date of issue of the document.
     */
    dateOfIssue?: Date;
    
    /**
     * The additional number of the document.
     */
    documentAdditionalNumber?: StringResult;
    
    /**
     * Returns DataMatchStateSuccess if data from scanned parts/sides of the document match,
         * DataMatchStateFailed otherwise. For example if date of expiry is scanned from the front and back side
         * of the document and values do not match, this method will return DataMatchStateFailed. Result will
         * be DataMatchStateSuccess only if scanned values for all fields that are compared are the same.
     */
    documentDataMatch?: DataMatchState;
    
    /**
     * The document number.
     */
    documentNumber?: StringResult;
    
    /**
     * The one more additional number of the document.
     */
    documentOptionalAdditionalNumber?: StringResult;
    
    /**
     * The transcription of the document subtype.
     */
    documentSubtype?: StringResult;
    
    /**
     * The driver license detailed info.
     */
    driverLicenseDetailedInfo?: DriverLicenseDetailedInfo;
    
    /**
     * The manufacturing year..
     */
    eligibilityCategory?: StringResult;
    
    /**
     * The employer of the document owner.
     */
    employer?: StringResult;
    
    /**
     * Checks whether the document has expired or not by comparing the current
         * time on the device with the date of expiry.
         * 
         * @return true if the document has expired, false in following cases:
         * document does not expire (date of expiry is permanent)
         * date of expiry has passed
         * date of expiry is unknown and it is not permanent
     */
    expired?: boolean;
    
    /**
     * face image from the document if enabled with returnFaceImage property.
     */
    faceImage?: string;
    
    /**
     * face image location from the document if enabled with returnFaceImage property.
     */
    faceImageLocation?: Rectangle;
    
    /**
     * side of document that face image is located on if enabled with returnFaceImage property.
     */
    faceImageSide?: Side;
    
    /**
     * The father's name of the document owner.
     */
    fathersName?: StringResult;
    
    /**
     * The first name of the document owner.
     */
    firstName?: StringResult;
    
    /**
     * Additional info on processing of the front side.
     */
    frontAdditionalProcessingInfo?: AdditionalProcessingInfo;
    
    /**
     * The front raw camera frame.
     */
    frontCameraFrame?: string;
    
    /**
     * Defines possible color and moire statuses determined from scanned front image.
     */
    frontImageAnalysisResult?: ImageAnalysisResult;
    
    /**
     * Status of the last front side recognition process.
     */
    frontProcessingStatus?: ProcessingStatus;
    
    /**
     * Defines the data extracted from the front side visual inspection zone.
     */
    frontVizResult?: VizResult;
    
    /**
     * back side image of the document if enabled with returnFullDocumentImage property.
     */
    fullDocumentBackImage?: string;
    
    /**
     * front side image of the document if enabled with returnFullDocumentImage property.
     */
    fullDocumentFrontImage?: string;
    
    /**
     * The full name of the document owner.
     */
    fullName?: StringResult;
    
    /**
     * The issuing authority of the document.
     */
    issuingAuthority?: StringResult;
    
    /**
     * The last name of the document owner.
     */
    lastName?: StringResult;
    
    /**
     * The localized name of the document owner.
     */
    localizedName?: StringResult;
    
    /**
     * The manufacturing year.
     */
    manufacturingYear?: StringResult;
    
    /**
     * The marital status of the document owner.
     */
    maritalStatus?: StringResult;
    
    /**
     * The mother's name of the document owner.
     */
    mothersName?: StringResult;
    
    /**
     * The data extracted from the machine readable zone
     */
    mrzResult?: MrzResult;
    
    /**
     * The nationality of the documet owner.
     */
    nationality?: StringResult;
    
    /**
     * The personal identification number.
     */
    personalIdNumber?: StringResult;
    
    /**
     * The place of birth of the document owner.
     */
    placeOfBirth?: StringResult;
    
    /**
     * Defines status of the last recognition process.
     */
    processingStatus?: ProcessingStatus;
    
    /**
     * The profession of the document owner.
     */
    profession?: StringResult;
    
    /**
     * The race of the document owner.
     */
    race?: StringResult;
    
    /**
     * Recognition mode used to scan current document.
     */
    recognitionMode?: RecognitionMode;
    
    /**
     * The religion of the document owner.
     */
    religion?: StringResult;
    
    /**
     * The remarks on the residence permit.
     */
    remarks?: StringResult;
    
    /**
     * The residence permit type.
     */
    residencePermitType?: StringResult;
    
    /**
     * The residential stauts of the document owner.
     */
    residentialStatus?: StringResult;
    
    /**
     * Returns true if recognizer has finished scanning first side and is now scanning back side,
         * false if it's still scanning first side.
     */
    scanningFirstSideDone?: boolean;
    
    /**
     * The sex of the document owner.
     */
    sex?: StringResult;
    
    /**
     * image of the signature if enabled with returnSignatureImage property.
     */
    signatureImage?: string;
    
    /**
     * The specific document validity.
     */
    specificDocumentValidity?: StringResult;
    
    /**
     * The sponsor of the document owner.
     */
    sponsor?: StringResult;
    
    /**
     * The vehicle owner.
     */
    vehicleOwner?: StringResult;
    
    /**
     * The eligibility category.
     */
    vehicleType?: StringResult;
    
    /**
     * The visa type.
     */
    visaType?: StringResult;
    
    /**
     * The dependents info.
     */
    dependentsInfo?: DependentInfo[];
    

    constructor(nativeResult: any) {
        super(nativeResult.resultState);
        
        /**
         * The additional address information of the document owner.
         */
        this.additionalAddressInformation = nativeResult.additionalAddressInformation;
        
        /**
         * The additional name information of the document owner.
         */
        this.additionalNameInformation = nativeResult.additionalNameInformation;
        
        /**
         * The one more additional address information of the document owner.
         */
        this.additionalOptionalAddressInformation = nativeResult.additionalOptionalAddressInformation;
        
        /**
         * The address of the document owner.
         */
        this.address = nativeResult.address;
        
        /**
         * The current age of the document owner in years. It is calculated difference
         * between now and date of birth. Now is current time on the device.
         * @return current age of the document owner in years or -1 if date of birth is unknown.
         */
        this.age = nativeResult.age;
        
        /**
         * Additional info on processing of the back side.
         */
        this.backAdditionalProcessingInfo = nativeResult.backAdditionalProcessingInfo;
        
        /**
         * The back raw camera frame.
         */
        this.backCameraFrame = nativeResult.backCameraFrame;
        
        /**
         * Defines possible color and moire statuses determined from scanned back image.
         */
        this.backImageAnalysisResult = nativeResult.backImageAnalysisResult;
        
        /**
         * Status of the last back side recognition process.
         */
        this.backProcessingStatus = nativeResult.backProcessingStatus;
        
        /**
         * Defines the data extracted from the back side visual inspection zone.
         */
        this.backVizResult = nativeResult.backVizResult;
        
        /**
         * The barcode raw camera frame.
         */
        this.barcodeCameraFrame = nativeResult.barcodeCameraFrame;
        
        /**
         * Defines the data extracted from the barcode.
         */
        this.barcodeResult = nativeResult.barcodeResult;
        
        /**
         * This member indicates whether the barcode scanning step was utilized during the
         * process.
         * If the barcode scanning step was executed: a parsable barcode image will be stored in the
         * `barcodeCameraFrame`.
         * If the barcode scanning step was not executed: a parsable barcode image will be stored in the
         * `fullDocumentImage`.
         */
        this.barcodeStepUsed = nativeResult.barcodeStepUsed;
        
        /**
         * The blood type of the document owner.
         */
        this.bloodType = nativeResult.bloodType;
        
        /**
         * The classification information.
         */
        this.classInfo = nativeResult.classInfo;
        
        /**
         * Detailed info on data match.
         */
        this.dataMatch = nativeResult.dataMatch;
        
        /**
         * The date of birth of the document owner.
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /**
         * The date of expiry of the document.
         */
        this.dateOfExpiry = nativeResult.dateOfExpiry != null ? new Date(nativeResult.dateOfExpiry) : null;
        
        /**
         * Determines if date of expiry is permanent.
         */
        this.dateOfExpiryPermanent = nativeResult.dateOfExpiryPermanent;
        
        /**
         * The date of issue of the document.
         */
        this.dateOfIssue = nativeResult.dateOfIssue != null ? new Date(nativeResult.dateOfIssue) : null;
        
        /**
         * The additional number of the document.
         */
        this.documentAdditionalNumber = nativeResult.documentAdditionalNumber;
        
        /**
         * Returns DataMatchStateSuccess if data from scanned parts/sides of the document match,
         * DataMatchStateFailed otherwise. For example if date of expiry is scanned from the front and back side
         * of the document and values do not match, this method will return DataMatchStateFailed. Result will
         * be DataMatchStateSuccess only if scanned values for all fields that are compared are the same.
         */
        this.documentDataMatch = nativeResult.documentDataMatch;
        
        /**
         * The document number.
         */
        this.documentNumber = nativeResult.documentNumber;
        
        /**
         * The one more additional number of the document.
         */
        this.documentOptionalAdditionalNumber = nativeResult.documentOptionalAdditionalNumber;
        
        /**
         * The transcription of the document subtype.
         */
        this.documentSubtype = nativeResult.documentSubtype;
        
        /**
         * The driver license detailed info.
         */
        this.driverLicenseDetailedInfo = nativeResult.driverLicenseDetailedInfo;
        
        /**
         * The manufacturing year..
         */
        this.eligibilityCategory = nativeResult.eligibilityCategory;
        
        /**
         * The employer of the document owner.
         */
        this.employer = nativeResult.employer;
        
        /**
         * Checks whether the document has expired or not by comparing the current
         * time on the device with the date of expiry.
         * 
         * @return true if the document has expired, false in following cases:
         * document does not expire (date of expiry is permanent)
         * date of expiry has passed
         * date of expiry is unknown and it is not permanent
         */
        this.expired = nativeResult.expired;
        
        /**
         * face image from the document if enabled with returnFaceImage property.
         */
        this.faceImage = nativeResult.faceImage;
        
        /**
         * face image location from the document if enabled with returnFaceImage property.
         */
        this.faceImageLocation = nativeResult.faceImageLocation;
        
        /**
         * side of document that face image is located on if enabled with returnFaceImage property.
         */
        this.faceImageSide = nativeResult.faceImageSide;
        
        /**
         * The father's name of the document owner.
         */
        this.fathersName = nativeResult.fathersName;
        
        /**
         * The first name of the document owner.
         */
        this.firstName = nativeResult.firstName;
        
        /**
         * Additional info on processing of the front side.
         */
        this.frontAdditionalProcessingInfo = nativeResult.frontAdditionalProcessingInfo;
        
        /**
         * The front raw camera frame.
         */
        this.frontCameraFrame = nativeResult.frontCameraFrame;
        
        /**
         * Defines possible color and moire statuses determined from scanned front image.
         */
        this.frontImageAnalysisResult = nativeResult.frontImageAnalysisResult;
        
        /**
         * Status of the last front side recognition process.
         */
        this.frontProcessingStatus = nativeResult.frontProcessingStatus;
        
        /**
         * Defines the data extracted from the front side visual inspection zone.
         */
        this.frontVizResult = nativeResult.frontVizResult;
        
        /**
         * back side image of the document if enabled with returnFullDocumentImage property.
         */
        this.fullDocumentBackImage = nativeResult.fullDocumentBackImage;
        
        /**
         * front side image of the document if enabled with returnFullDocumentImage property.
         */
        this.fullDocumentFrontImage = nativeResult.fullDocumentFrontImage;
        
        /**
         * The full name of the document owner.
         */
        this.fullName = nativeResult.fullName;
        
        /**
         * The issuing authority of the document.
         */
        this.issuingAuthority = nativeResult.issuingAuthority;
        
        /**
         * The last name of the document owner.
         */
        this.lastName = nativeResult.lastName;
        
        /**
         * The localized name of the document owner.
         */
        this.localizedName = nativeResult.localizedName;
        
        /**
         * The manufacturing year.
         */
        this.manufacturingYear = nativeResult.manufacturingYear;
        
        /**
         * The marital status of the document owner.
         */
        this.maritalStatus = nativeResult.maritalStatus;
        
        /**
         * The mother's name of the document owner.
         */
        this.mothersName = nativeResult.mothersName;
        
        /**
         * The data extracted from the machine readable zone
         */
        this.mrzResult = nativeResult.mrzResult != null ? new MrzResult(nativeResult.mrzResult) : null;
        
        /**
         * The nationality of the documet owner.
         */
        this.nationality = nativeResult.nationality;
        
        /**
         * The personal identification number.
         */
        this.personalIdNumber = nativeResult.personalIdNumber;
        
        /**
         * The place of birth of the document owner.
         */
        this.placeOfBirth = nativeResult.placeOfBirth;
        
        /**
         * Defines status of the last recognition process.
         */
        this.processingStatus = nativeResult.processingStatus;
        
        /**
         * The profession of the document owner.
         */
        this.profession = nativeResult.profession;
        
        /**
         * The race of the document owner.
         */
        this.race = nativeResult.race;
        
        /**
         * Recognition mode used to scan current document.
         */
        this.recognitionMode = nativeResult.recognitionMode;
        
        /**
         * The religion of the document owner.
         */
        this.religion = nativeResult.religion;
        
        /**
         * The remarks on the residence permit.
         */
        this.remarks = nativeResult.remarks;
        
        /**
         * The residence permit type.
         */
        this.residencePermitType = nativeResult.residencePermitType;
        
        /**
         * The residential stauts of the document owner.
         */
        this.residentialStatus = nativeResult.residentialStatus;
        
        /**
         * Returns true if recognizer has finished scanning first side and is now scanning back side,
         * false if it's still scanning first side.
         */
        this.scanningFirstSideDone = nativeResult.scanningFirstSideDone;
        
        /**
         * The sex of the document owner.
         */
        this.sex = nativeResult.sex;
        
        /**
         * image of the signature if enabled with returnSignatureImage property.
         */
        this.signatureImage = nativeResult.signatureImage;
        
        /**
         * The specific document validity.
         */
        this.specificDocumentValidity = nativeResult.specificDocumentValidity;
        
        /**
         * The sponsor of the document owner.
         */
        this.sponsor = nativeResult.sponsor;
        
        /**
         * The vehicle owner.
         */
        this.vehicleOwner = nativeResult.vehicleOwner;
        
        /**
         * The eligibility category.
         */
        this.vehicleType = nativeResult.vehicleType;
        
        /**
         * The visa type.
         */
        this.visaType = nativeResult.visaType;
        
        /**
         * The dependents info.
         */
        this.dependentsInfo = nativeResult.dependentsInfo;
        
    }
}

/**
 * Recognizer which can scan front and back side of the United States driver license.
 */
export class BlinkIdMultiSideRecognizer extends Recognizer {

    
    /**
     * Additional anonymization settings.
     */
    additionalAnonymization: ClassAnonymizationSettings[];
    
    /**
     * Allows barcode recognition to proceed even if the initial extraction fails.
         * This only works for still images - video feeds will ignore this setting.
         * If the barcode recognition is successful, the recognizer will still end in a valid state.
         * This setting is applicable only to photo frames. For multi-side recognizers, it is permitted only for the back side.
         * 
         * 
     */
    allowBarcodeScanOnly: boolean;
    
    /**
     * Proceed with scanning the back side even if the front side result is uncertain.
         * This only works for still images - video feeds will ignore this setting.
         * 
         * 
     */
    allowUncertainFrontSideScan: boolean;
    
    /**
     * Defines whether returning of unparsed MRZ (Machine Readable Zone) results is allowed
         * 
         * 
     */
    allowUnparsedMrzResults: boolean;
    
    /**
     * Defines whether returning unverified MRZ (Machine Readable Zone) results is allowed
         * Unverified MRZ is parsed, but check digits are incorrect
         * 
         * 
     */
    allowUnverifiedMrzResults: boolean;
    
    /**
     * Defines whether sensitive data should be removed from images, result fields or both.
         * The setting only applies to certain documents
         * 
         * 
     */
    anonymizationMode: AnonymizationMode;
    
    /**
     * Strictness level for blur detection.
         * 
         * 
     */
    blurStrictnessLevel: StrictnessLevel;
    
    /**
     * Sets the ClassFilter that can determine whether the document should be processed or filtered out.
     */
    classFilter: ClassFilter;
    
    /**
     * Enables the aggregation of data from multiple frames.
         * Disabling this setting will yield higher-quality captured images, but it may slow down the scanning process due to the additional effort required to find the optimal frame.
         * Enabling this setting will simplify the extraction process, but the extracted data will be aggregated from multiple frames instead of being sourced from a single frame.
         * 
         * 
     */
    combineFrameResults: boolean;
    
    /**
     * Get custom class rules.
     */
    customClassRules: CustomClassRules[];
    
    /**
     * Skip processing of the blurred frames.
         * 
         * 
     */
    enableBlurFilter: boolean;
    
    /**
     * Skip processing of the glared frames.
         * 
         * 
     */
    enableGlareFilter: boolean;
    
    /**
     * Property for setting DPI for face images
         * Valid ranges are [100,400]. Setting DPI out of valid ranges throws an exception
         * 
         * 
     */
    faceImageDpi: number;
    
    /**
     * Property for setting DPI for full document images
         * Valid ranges are [100,400]. Setting DPI out of valid ranges throws an exception
         * 
         * 
     */
    fullDocumentImageDpi: number;
    
    /**
     * Image extension factors for full document image.
         * 
         * @see ImageExtensionFactors
         * 
     */
    fullDocumentImageExtensionFactors: ImageExtensionFactors;
    
    /**
     * Strictness level for glare detection.
         * 
         * 
     */
    glareStrictnessLevel: StrictnessLevel;
    
    /**
     * Configure the number of characters per field that are allowed to be inconsistent in data match.
         * 
         * 
     */
    maxAllowedMismatchesPerField: number;
    
    /**
     * Pading is a minimum distance from the edge of the frame and is defined as a percentage of the frame width. Default value is 0.0f and in that case
         * padding edge and image edge are the same.
         * Recommended value is 0.02f.
         * 
         * 
     */
    paddingEdge: number;
    
    /**
     * Enable or disable recognition of specific document groups supported by the current license.
         * 
         * 
     */
    recognitionModeFilter: RecognitionModeFilter;
    
    /**
     * Sets whether face image from ID card should be extracted
         * 
         * 
     */
    returnFaceImage: boolean;
    
    /**
     * Sets whether full document image of ID card should be extracted.
         * 
         * 
     */
    returnFullDocumentImage: boolean;
    
    /**
     * Sets whether signature image from ID card should be extracted.
         * 
         * 
     */
    returnSignatureImage: boolean;
    
    /**
     * Configure the recognizer to save the raw camera frames.
         * This significantly increases memory consumption.
         * 
         * 
     */
    saveCameraFrames: boolean;
    
    /**
     * Configure the recognizer to only work on already cropped and dewarped images.
         * This only works for still images - video feeds will ignore this setting.
         * 
         * 
     */
    scanCroppedDocumentImage: boolean;
    
    /**
     * Scan only the data page ( page containing MRZ ) of the passport.
         * If set to `false`, it will be required to scan the second page of certain passports.
         * 
         * 
     */
    scanPassportDataPageOnly: boolean;
    
    /**
     * Property for setting DPI for signature images
         * Valid ranges are [100,400]. Setting DPI out of valid ranges throws an exception
         * 
         * 
     */
    signatureImageDpi: number;
    
    /**
     * Skip back side capture and processing step when back side of the document is not supported
         * 
         * 
     */
    skipUnsupportedBack: boolean;
    
    /**
     * Defines whether result characters validatation is performed.
         * If a result member contains invalid character, the result state cannot be valid
         * 
         * 
     */
    validateResultCharacters: boolean;
    

    constructor() {
        super('BlinkIdMultiSideRecognizer');
        
        /**
         * Additional anonymization settings.
         */
        this.additionalAnonymization = [];
        
        /**
         * Allows barcode recognition to proceed even if the initial extraction fails.
         * This only works for still images - video feeds will ignore this setting.
         * If the barcode recognition is successful, the recognizer will still end in a valid state.
         * This setting is applicable only to photo frames. For multi-side recognizers, it is permitted only for the back side.
         * 
         * 
         */
        this.allowBarcodeScanOnly = false;
        
        /**
         * Proceed with scanning the back side even if the front side result is uncertain.
         * This only works for still images - video feeds will ignore this setting.
         * 
         * 
         */
        this.allowUncertainFrontSideScan = false;
        
        /**
         * Defines whether returning of unparsed MRZ (Machine Readable Zone) results is allowed
         * 
         * 
         */
        this.allowUnparsedMrzResults = false;
        
        /**
         * Defines whether returning unverified MRZ (Machine Readable Zone) results is allowed
         * Unverified MRZ is parsed, but check digits are incorrect
         * 
         * 
         */
        this.allowUnverifiedMrzResults = true;
        
        /**
         * Defines whether sensitive data should be removed from images, result fields or both.
         * The setting only applies to certain documents
         * 
         * 
         */
        this.anonymizationMode = AnonymizationMode.FullResult;
        
        /**
         * Strictness level for blur detection.
         * 
         * 
         */
        this.blurStrictnessLevel = StrictnessLevel.Normal;
        
        /**
         * Sets the ClassFilter that can determine whether the document should be processed or filtered out.
         */
        this.classFilter = new ClassFilter();
        
        /**
         * Enables the aggregation of data from multiple frames.
         * Disabling this setting will yield higher-quality captured images, but it may slow down the scanning process due to the additional effort required to find the optimal frame.
         * Enabling this setting will simplify the extraction process, but the extracted data will be aggregated from multiple frames instead of being sourced from a single frame.
         * 
         * 
         */
        this.combineFrameResults = true;
        
        /**
         * Get custom class rules.
         */
        this.customClassRules = [];
        
        /**
         * Skip processing of the blurred frames.
         * 
         * 
         */
        this.enableBlurFilter = true;
        
        /**
         * Skip processing of the glared frames.
         * 
         * 
         */
        this.enableGlareFilter = true;
        
        /**
         * Property for setting DPI for face images
         * Valid ranges are [100,400]. Setting DPI out of valid ranges throws an exception
         * 
         * 
         */
        this.faceImageDpi = 250;
        
        /**
         * Property for setting DPI for full document images
         * Valid ranges are [100,400]. Setting DPI out of valid ranges throws an exception
         * 
         * 
         */
        this.fullDocumentImageDpi = 250;
        
        /**
         * Image extension factors for full document image.
         * 
         * @see ImageExtensionFactors
         * 
         */
        this.fullDocumentImageExtensionFactors = new ImageExtensionFactors();
        
        /**
         * Strictness level for glare detection.
         * 
         * 
         */
        this.glareStrictnessLevel = StrictnessLevel.Normal;
        
        /**
         * Configure the number of characters per field that are allowed to be inconsistent in data match.
         * 
         * 
         */
        this.maxAllowedMismatchesPerField = 0;
        
        /**
         * Pading is a minimum distance from the edge of the frame and is defined as a percentage of the frame width. Default value is 0.0f and in that case
         * padding edge and image edge are the same.
         * Recommended value is 0.02f.
         * 
         * 
         */
        this.paddingEdge = 0.0;
        
        /**
         * Enable or disable recognition of specific document groups supported by the current license.
         * 
         * 
         */
        this.recognitionModeFilter = new RecognitionModeFilter();
        
        /**
         * Sets whether face image from ID card should be extracted
         * 
         * 
         */
        this.returnFaceImage = false;
        
        /**
         * Sets whether full document image of ID card should be extracted.
         * 
         * 
         */
        this.returnFullDocumentImage = false;
        
        /**
         * Sets whether signature image from ID card should be extracted.
         * 
         * 
         */
        this.returnSignatureImage = false;
        
        /**
         * Configure the recognizer to save the raw camera frames.
         * This significantly increases memory consumption.
         * 
         * 
         */
        this.saveCameraFrames = false;
        
        /**
         * Configure the recognizer to only work on already cropped and dewarped images.
         * This only works for still images - video feeds will ignore this setting.
         * 
         * 
         */
        this.scanCroppedDocumentImage = false;
        
        /**
         * Scan only the data page ( page containing MRZ ) of the passport.
         * If set to `false`, it will be required to scan the second page of certain passports.
         * 
         * 
         */
        this.scanPassportDataPageOnly = true;
        
        /**
         * Property for setting DPI for signature images
         * Valid ranges are [100,400]. Setting DPI out of valid ranges throws an exception
         * 
         * 
         */
        this.signatureImageDpi = 250;
        
        /**
         * Skip back side capture and processing step when back side of the document is not supported
         * 
         * 
         */
        this.skipUnsupportedBack = false;
        
        /**
         * Defines whether result characters validatation is performed.
         * If a result member contains invalid character, the result state cannot be valid
         * 
         * 
         */
        this.validateResultCharacters = true;
        

	this.createResultFromNative = (nativeResult: any) => { return new BlinkIdMultiSideRecognizerResult(nativeResult); };
    }
}