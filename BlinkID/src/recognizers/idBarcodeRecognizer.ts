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
    DataMatchDetailedInfo,
    BarcodeType,
    RecognitionMode,
    IdBarcodeDocumentType,
    ClassInfo,
    BarcodeElements,
    BarcodeElementKey,
    
    
    ImageExtensionFactors,
    DataMatchResult,
} from '../types'

/* tslint:disable:no-unused-variable */

/**
 * Result object for IdBarcodeRecognizer.
 */
export class IdBarcodeRecognizerResult extends RecognizerResult {

    
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
     * The format of the scanned barcode.
     */
    barcodeType: BarcodeType;
    
    /**
     * The city address portion of the document owner.
     */
    city: string;
    
    /**
     * The date of birth of the document owner.
     */
    dateOfBirth: Date;
    
    /**
     * The date of expiry of the document.
     */
    dateOfExpiry: Date;
    
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
     * The document type deduced from the recognized barcode
     */
    documentType: IdBarcodeDocumentType;
    
    /**
     * The employer of the document owner.
     */
    employer: string;
    
    /**
     * The additional privileges granted to the driver license owner.
     */
    endorsements: string;
    
    /**
     * Checks whether the document has expired or not by comparing the current
     */
    expired: boolean;
    
    /**
     * Document specific extended elements that contain all barcode fields in their original form.
     */
    extendedElements: BarcodeElements;
    
    /**
     * The first name of the document owner.
     */
    firstName: string;
    
    /**
     * The full name of the document owner.
     */
    fullName: string;
    
    /**
     * The issuing authority of the document.
     */
    issuingAuthority: string;
    
    /**
     * The jurisdiction code address portion of the document owner.
     */
    jurisdiction: string;
    
    /**
     * The last name of the document owner.
     */
    lastName: string;
    
    /**
     * The marital status of the document owner.
     */
    maritalStatus: string;
    
    /**
     * The middle name of the document owner.
     */
    middleName: string;
    
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
     * The postal code address portion of the document owner.
     */
    postalCode: string;
    
    /**
     * The profession of the document owner.
     */
    profession: string;
    
    /**
     * The race of the document owner.
     */
    race: string;
    
    /**
     * The raw bytes contained inside barcode.
     */
    rawData: string;
    
    /**
     * The religion of the document owner.
     */
    religion: string;
    
    /**
     * The residential status of the document owner.
     */
    residentialStatus: string;
    
    /**
     * The restrictions to driving privileges for the driver license owner.
     */
    restrictions: string;
    
    /**
     * The sex of the document owner.
     */
    sex: string;
    
    /**
     * The street address portion of the document owner.
     */
    street: string;
    
    /**
     * String representation of data inside barcode.
     */
    stringData: string;
    
    /**
     * True if returned result is uncertain, i.e. if scanned barcode was incomplete (i.e.
     */
    uncertain: boolean;
    
    /**
     * The type of vehicle the driver license owner has privilege to drive.
     */
    vehicleClass: string;
    

    constructor(nativeResult: any) {
        super(nativeResult.resultState);
        
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
         * The format of the scanned barcode.
         */
        this.barcodeType = nativeResult.barcodeType;
        
        /**
         * The city address portion of the document owner.
         */
        this.city = nativeResult.city;
        
        /**
         * The date of birth of the document owner.
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /**
         * The date of expiry of the document.
         */
        this.dateOfExpiry = nativeResult.dateOfExpiry != null ? new Date(nativeResult.dateOfExpiry) : null;
        
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
         * The document type deduced from the recognized barcode
         */
        this.documentType = nativeResult.documentType;
        
        /**
         * The employer of the document owner.
         */
        this.employer = nativeResult.employer;
        
        /**
         * The additional privileges granted to the driver license owner.
         */
        this.endorsements = nativeResult.endorsements;
        
        /**
         * Checks whether the document has expired or not by comparing the current
         */
        this.expired = nativeResult.expired;
        
        /**
         * Document specific extended elements that contain all barcode fields in their original form.
         */
        this.extendedElements = nativeResult.extendedElements;
        
        /**
         * The first name of the document owner.
         */
        this.firstName = nativeResult.firstName;
        
        /**
         * The full name of the document owner.
         */
        this.fullName = nativeResult.fullName;
        
        /**
         * The issuing authority of the document.
         */
        this.issuingAuthority = nativeResult.issuingAuthority;
        
        /**
         * The jurisdiction code address portion of the document owner.
         */
        this.jurisdiction = nativeResult.jurisdiction;
        
        /**
         * The last name of the document owner.
         */
        this.lastName = nativeResult.lastName;
        
        /**
         * The marital status of the document owner.
         */
        this.maritalStatus = nativeResult.maritalStatus;
        
        /**
         * The middle name of the document owner.
         */
        this.middleName = nativeResult.middleName;
        
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
         * The postal code address portion of the document owner.
         */
        this.postalCode = nativeResult.postalCode;
        
        /**
         * The profession of the document owner.
         */
        this.profession = nativeResult.profession;
        
        /**
         * The race of the document owner.
         */
        this.race = nativeResult.race;
        
        /**
         * The raw bytes contained inside barcode.
         */
        this.rawData = nativeResult.rawData;
        
        /**
         * The religion of the document owner.
         */
        this.religion = nativeResult.religion;
        
        /**
         * The residential status of the document owner.
         */
        this.residentialStatus = nativeResult.residentialStatus;
        
        /**
         * The restrictions to driving privileges for the driver license owner.
         */
        this.restrictions = nativeResult.restrictions;
        
        /**
         * The sex of the document owner.
         */
        this.sex = nativeResult.sex;
        
        /**
         * The street address portion of the document owner.
         */
        this.street = nativeResult.street;
        
        /**
         * String representation of data inside barcode.
         */
        this.stringData = nativeResult.stringData;
        
        /**
         * True if returned result is uncertain, i.e. if scanned barcode was incomplete (i.e.
         */
        this.uncertain = nativeResult.uncertain;
        
        /**
         * The type of vehicle the driver license owner has privilege to drive.
         */
        this.vehicleClass = nativeResult.vehicleClass;
        
    }
}

/**
 * The ID Barcode Recognizer is used for scanning ID Barcode.
 */
export class IdBarcodeRecognizer extends Recognizer {

    

    constructor() {
        super('IdBarcodeRecognizer');
        

	this.createResultFromNative = (nativeResult: any) => { return new IdBarcodeRecognizerResult(nativeResult); };
    }
}