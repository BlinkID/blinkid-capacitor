import { Recognizer, RecognizerResult } from '../recognizer'
import {
    Date,
    Point,
    Quadrilateral,
    MrtdDocumentType,
    MrzResult,
    DocumentFaceDetectorType,
    ImageExtensionFactors,
    DataMatchResult,
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
    BarcodeType,
    RecognitionMode,
    IdBarcodeDocumentType,
    ClassInfo,
    BarcodeElements,
    BarcodeElementKey,
    
    
} from '../types'

/* tslint:disable:no-unused-variable */

/**
 * Result object for BlinkIdRecognizer.
 */
export class BlinkIdRecognizerResult extends RecognizerResult {

    
    /**
     * The additional address information of the document owner.
     */
    additionalAddressInformation: string;
    
    /**
     * The additional name information of the document owner.
     */
    additionalNameInformation: string;
    
    /**
     * The address of the document owner.
     */
    address: string;
    
    /**
     * The current age of the document owner in years. It is calculated difference
         * between now and date of birth. Now is current time on the device.
         * @return current age of the document owner in years or -1 if date of birth is unknown.
     */
    age: number;
    
    /**
     * Defines the data extracted from the barcode.
     */
    barcodeResult: BarcodeResult;
    
    /**
     * The classification information.
     */
    classInfo: ClassInfo;
    
    /**
     * The date of birth of the document owner.
     */
    dateOfBirth: Date;
    
    /**
     * The date of expiry of the document.
     */
    dateOfExpiry: Date;
    
    /**
     * Determines if date of expiry is permanent.
     */
    dateOfExpiryPermanent: boolean;
    
    /**
     * The date of issue of the document.
     */
    dateOfIssue: Date;
    
    /**
     * The additional number of the document.
     */
    documentAdditionalNumber: string;
    
    /**
     * The document number.
     */
    documentNumber: string;
    
    /**
     * The one more additional number of the document.
     */
    documentOptionalAdditionalNumber: string;
    
    /**
     * The driver license detailed info.
     */
    driverLicenseDetailedInfo: DriverLicenseDetailedInfo;
    
    /**
     * The employer of the document owner.
     */
    employer: string;
    
    /**
     * Checks whether the document has expired or not by comparing the current
         * time on the device with the date of expiry.
         * 
         * @return true if the document has expired, false in following cases:
         * document does not expire (date of expiry is permanent)
         * date of expiry has passed
         * date of expiry is unknown and it is not permanent
     */
    expired: boolean;
    
    /**
     * face image from the document if enabled with returnFaceImage property.
     */
    faceImage: string;
    
    /**
     * The first name of the document owner.
     */
    firstName: string;
    
    /**
     * full document image if enabled with returnFullDocumentImage property.
     */
    fullDocumentImage: string;
    
    /**
     * The full name of the document owner.
     */
    fullName: string;
    
    /**
     * Defines possible color and moire statuses determined from scanned image.
     */
    imageAnalysisResult: ImageAnalysisResult;
    
    /**
     * The issuing authority of the document.
     */
    issuingAuthority: string;
    
    /**
     * The last name of the document owner.
     */
    lastName: string;
    
    /**
     * The localized name of the document owner.
     */
    localizedName: string;
    
    /**
     * The marital status of the document owner.
     */
    maritalStatus: string;
    
    /**
     * The data extracted from the machine readable zone
     */
    mrzResult: MrzResult;
    
    /**
     * The nationality of the documet owner.
     */
    nationality: string;
    
    /**
     * The personal identification number.
     */
    personalIdNumber: string;
    
    /**
     * The place of birth of the document owner.
     */
    placeOfBirth: string;
    
    /**
     * Defines status of the last recognition process.
     */
    processingStatus: ProcessingStatus;
    
    /**
     * The profession of the document owner.
     */
    profession: string;
    
    /**
     * The race of the document owner.
     */
    race: string;
    
    /**
     * Recognition mode used to scan current document.
     */
    recognitionMode: RecognitionMode;
    
    /**
     * The religion of the document owner.
     */
    religion: string;
    
    /**
     * The residential stauts of the document owner.
     */
    residentialStatus: string;
    
    /**
     * The sex of the document owner.
     */
    sex: string;
    
    /**
     * image of the signature if enabled with returnSignatureImage property.
     */
    signatureImage: string;
    
    /**
     * Defines the data extracted from the visual inspection zone
     */
    vizResult: VizResult;
    

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
         * Defines the data extracted from the barcode.
         */
        this.barcodeResult = nativeResult.barcodeResult;
        
        /**
         * The classification information.
         */
        this.classInfo = nativeResult.classInfo;
        
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
         * The document number.
         */
        this.documentNumber = nativeResult.documentNumber;
        
        /**
         * The one more additional number of the document.
         */
        this.documentOptionalAdditionalNumber = nativeResult.documentOptionalAdditionalNumber;
        
        /**
         * The driver license detailed info.
         */
        this.driverLicenseDetailedInfo = nativeResult.driverLicenseDetailedInfo;
        
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
         * The first name of the document owner.
         */
        this.firstName = nativeResult.firstName;
        
        /**
         * full document image if enabled with returnFullDocumentImage property.
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /**
         * The full name of the document owner.
         */
        this.fullName = nativeResult.fullName;
        
        /**
         * Defines possible color and moire statuses determined from scanned image.
         */
        this.imageAnalysisResult = nativeResult.imageAnalysisResult;
        
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
         * The marital status of the document owner.
         */
        this.maritalStatus = nativeResult.maritalStatus;
        
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
         * The residential stauts of the document owner.
         */
        this.residentialStatus = nativeResult.residentialStatus;
        
        /**
         * The sex of the document owner.
         */
        this.sex = nativeResult.sex;
        
        /**
         * image of the signature if enabled with returnSignatureImage property.
         */
        this.signatureImage = nativeResult.signatureImage;
        
        /**
         * Defines the data extracted from the visual inspection zone
         */
        this.vizResult = nativeResult.vizResult;
        
    }
}

/**
 * The Blink ID Recognizer is used for scanning Blink ID.
 */
export class BlinkIdRecognizer extends Recognizer {

    
    /**
     * Defines whether blured frames filtering is allowed
         * 
         * 
     */
    allowBlurFilter: boolean;
    
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
     * Configure the recognizer to only work on already cropped and dewarped images.
         * This only works for still images - video feeds will ignore this setting.
         * 
         * 
     */
    scanCroppedDocumentImage: boolean;
    
    /**
     * Property for setting DPI for signature images
         * Valid ranges are [100,400]. Setting DPI out of valid ranges throws an exception
         * 
         * 
     */
    signatureImageDpi: number;
    
    /**
     * Defines whether result characters validatation is performed.
         * If a result member contains invalid character, the result state cannot be valid
         * 
         * 
     */
    validateResultCharacters: boolean;
    

    constructor() {
        super('BlinkIdRecognizer');
        
        /**
         * Defines whether blured frames filtering is allowed
         * 
         * 
         */
        this.allowBlurFilter = true;
        
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
         * Configure the recognizer to only work on already cropped and dewarped images.
         * This only works for still images - video feeds will ignore this setting.
         * 
         * 
         */
        this.scanCroppedDocumentImage = false;
        
        /**
         * Property for setting DPI for signature images
         * Valid ranges are [100,400]. Setting DPI out of valid ranges throws an exception
         * 
         * 
         */
        this.signatureImageDpi = 250;
        
        /**
         * Defines whether result characters validatation is performed.
         * If a result member contains invalid character, the result state cannot be valid
         * 
         * 
         */
        this.validateResultCharacters = true;
        

	this.createResultFromNative = (nativeResult: any) => { return new BlinkIdRecognizerResult(nativeResult); };
    }
}