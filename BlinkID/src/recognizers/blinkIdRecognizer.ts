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
    
} from '../types'

/* tslint:disable:no-unused-variable */

/**
 * Result object for BlinkIdRecognizer.
 */
export class BlinkIdRecognizerResult extends RecognizerResult {

    
    /**
     * The additional name information of the document owner.
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
     */
    age: number;
    
    /**
     * The data extracted from the barcode.
     */
    barcodeResult: BarcodeResult;
    
    /**
     * The document class information.
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
     */
    expired: boolean;
    
    /**
     * Face image from the document
     */
    faceImage: string;
    
    /**
     * The first name of the document owner.
     */
    firstName: string;
    
    /**
     * Image of the full document
     */
    fullDocumentImage: string;
    
    /**
     * The full name of the document owner.
     */
    fullName: string;
    
    /**
     * Image analysis result for the scanned document image
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
     * The data extracted from the machine readable zone.
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
     * Status of the last recognition process.
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
     * Signature image from the document
     */
    signatureImage: string;
    
    /**
     * The data extracted from the visual inspection zone.
     */
    vizResult: VizResult;
    

    constructor(nativeResult: any) {
        super(nativeResult.resultState);
        
        /**
         * The additional name information of the document owner.
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
         */
        this.age = nativeResult.age;
        
        /**
         * The data extracted from the barcode.
         */
        this.barcodeResult = nativeResult.barcodeResult;
        
        /**
         * The document class information.
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
         */
        this.expired = nativeResult.expired;
        
        /**
         * Face image from the document
         */
        this.faceImage = nativeResult.faceImage;
        
        /**
         * The first name of the document owner.
         */
        this.firstName = nativeResult.firstName;
        
        /**
         * Image of the full document
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /**
         * The full name of the document owner.
         */
        this.fullName = nativeResult.fullName;
        
        /**
         * Image analysis result for the scanned document image
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
         * The data extracted from the machine readable zone.
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
         * Status of the last recognition process.
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
         * Signature image from the document
         */
        this.signatureImage = nativeResult.signatureImage;
        
        /**
         * The data extracted from the visual inspection zone.
         */
        this.vizResult = nativeResult.vizResult;
        
    }
}

/**
 * Generic BlinkID recognizer.
 */
export class BlinkIdRecognizer extends Recognizer {

    
    /**
     * Defines whether blured frames filtering is allowed"
     */
    allowBlurFilter: boolean;
    
    /**
     * Defines whether returning of unparsed MRZ (Machine Readable Zone) results is allowed.
     */
    allowUnparsedMrzResults: boolean;
    
    /**
     * Defines whether returning unverified MRZ (Machine Readable Zone) results is allowed.
     */
    allowUnverifiedMrzResults: boolean;
    
    /**
     * Whether sensitive data should be removed from images, result fields or both.
     */
    anonymizationMode: AnonymizationMode;
    
    /**
     * The DPI (Dots Per Inch) for face image that should be returned.
     */
    faceImageDpi: number;
    
    /**
     * The DPI (Dots Per Inch) for full document image that should be returned.
     */
    fullDocumentImageDpi: number;
    
    /**
     * The extension factors for full document image.
     */
    fullDocumentImageExtensionFactors: ImageExtensionFactors;
    
    /**
     * Padding is a minimum distance from the edge of the frame and it is defined
     */
    paddingEdge: number;
    
    /**
     * Currently set recognition mode filter.
     */
    recognitionModeFilter: RecognitionModeFilter;
    
    /**
     * Defines whether face image will be available in result.
     */
    returnFaceImage: boolean;
    
    /**
     * Defines whether full document image will be available in
     */
    returnFullDocumentImage: boolean;
    
    /**
     * Defines whether signature image will be available in result.
     */
    returnSignatureImage: boolean;
    
    /**
     * The DPI (Dots Per Inch) for signature image that should be returned.
     */
    signatureImageDpi: number;
    
    /**
     * Whether result characters validatation is performed.
     */
    validateResultCharacters: boolean;
    

    constructor() {
        super('BlinkIdRecognizer');
        
        /**
         * Defines whether blured frames filtering is allowed"
         */
        this.allowBlurFilter = true;
        
        /**
         * Defines whether returning of unparsed MRZ (Machine Readable Zone) results is allowed.
         */
        this.allowUnparsedMrzResults = false;
        
        /**
         * Defines whether returning unverified MRZ (Machine Readable Zone) results is allowed.
         */
        this.allowUnverifiedMrzResults = true;
        
        /**
         * Whether sensitive data should be removed from images, result fields or both.
         */
        this.anonymizationMode = AnonymizationMode.FullResult;
        
        /**
         * The DPI (Dots Per Inch) for face image that should be returned.
         */
        this.faceImageDpi = 250;
        
        /**
         * The DPI (Dots Per Inch) for full document image that should be returned.
         */
        this.fullDocumentImageDpi = 250;
        
        /**
         * The extension factors for full document image.
         */
        this.fullDocumentImageExtensionFactors = new ImageExtensionFactors();
        
        /**
         * Padding is a minimum distance from the edge of the frame and it is defined
         */
        this.paddingEdge = 0.0;
        
        /**
         * Currently set recognition mode filter.
         */
        this.recognitionModeFilter = new RecognitionModeFilter();
        
        /**
         * Defines whether face image will be available in result.
         */
        this.returnFaceImage = false;
        
        /**
         * Defines whether full document image will be available in
         */
        this.returnFullDocumentImage = false;
        
        /**
         * Defines whether signature image will be available in result.
         */
        this.returnSignatureImage = false;
        
        /**
         * The DPI (Dots Per Inch) for signature image that should be returned.
         */
        this.signatureImageDpi = 250;
        
        /**
         * Whether result characters validatation is performed.
         */
        this.validateResultCharacters = true;
        

	this.createResultFromNative = (nativeResult: any) => { return new BlinkIdRecognizerResult(nativeResult); };
    }
}