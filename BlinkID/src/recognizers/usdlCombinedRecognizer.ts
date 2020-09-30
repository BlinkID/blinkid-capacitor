import { Recognizer, RecognizerResult } from '../recognizer'
import {
    ImageExtensionFactors,
    Date,
    DataMatchResult
} from '../types'

/**
 * Result object for UsdlCombinedRecognizer.
 */
export class UsdlCombinedRecognizerResult extends RecognizerResult {

        /**
         * Digital signature of the recognition result. Available only if enabled with signResult property.
         */
        digitalSignature: string;

        /**
         * Version of the digital signature. Available only if enabled with signResult property.
         */
        digitalSignatureVersion: number;

        /**
         * Returns true if data from scanned parts/sides of the document match,
         * false otherwise. For example if date of expiry is scanned from the front and back side
         * of the document and values do not match, this method will return false. Result will
         * be true only if scanned values for all fields that are compared are the same.
         */
        documentDataMatch: DataMatchResult;

        /**
         * face image from the document if enabled with returnFaceImage property.
         */
        faceImage: string;

        /**
         * full document image if enabled with returnFullDocumentImage property.
         */
        fullDocumentImage: string;

        /**
         * Returns true if recognizer has finished scanning first side and is now scanning back side,
         * false if it's still scanning first side.
         */
        scanningFirstSideDone: boolean;

        /** Array of elements that are not part of AAMVA standard and are specific to each US state. */
        optionalElements: string[];

        /** The raw bytes contained inside 2D barcode. */
        rawData: string;

        /** Raw string inside 2D barcode. */
        rawStringData: string;

        /** True if returned result is uncertain, i.e. if scanned barcode was incomplete (i.e. */
        uncertain: boolean;

        /** Fields inside US Driver's licence. Available Keys are listed in UsdlKeys enum. */
        fields: string[];

        /** The first name of the United States driver license owner. */
        firstName: string;

        /** The middle name of the United States driver license owner. */
        middleName: string;

        /** The last name of the United States driver license owner. */
        lastName: string;

        /** The full name of the United States driver license owner. */
        fullName: string;

        /** The name suffix of the United States driver license owner. */
        nameSuffix: string;

        /** The full address of the United States driver license owner. */
        address: string;

        /** The document number of the United States driver license. */
        documentNumber: string;

        /** The sex of the United States driver license owner. */
        sex: string;

        /** The restrictions to driving privileges for the United States driver license owner. */
        restrictions: string;

        /** The additional privileges granted to the United States driver license owner. */
        endorsements: string;

        /** The type of vehicle the driver license owner has privilege to drive. */
        vehicleClass: string;

        /** The date of birth of the United States driver license owner. */
        dateOfBirth: Date;

        /** The date of issue of the United States driver license. */
        dateOfIssue: Date;

        /** The date of expiry of the United States driver license. */
        dateOfExpiry: Date;

        /**
         * The current age of the document owner in years. It is calculated difference
         * between now and date of birth. Now is current time on the device.
         * @return current age of the document owner in years or -1 if date of birth is unknown.
        */
        age: number;


    constructor(nativeResult: any) {
        super(nativeResult.resultState);

        /**
         * Digital signature of the recognition result. Available only if enabled with signResult property.
         */
        this.digitalSignature = nativeResult.digitalSignature;

        /**
         * Version of the digital signature. Available only if enabled with signResult property.
         */
        this.digitalSignatureVersion = nativeResult.digitalSignatureVersion;

        /**
         * Returns true if data from scanned parts/sides of the document match,
         * false otherwise. For example if date of expiry is scanned from the front and back side
         * of the document and values do not match, this method will return false. Result will
         * be true only if scanned values for all fields that are compared are the same.
         */
        this.documentDataMatch = nativeResult.documentDataMatch;

        /**
         * face image from the document if enabled with returnFaceImage property.
         */
        this.faceImage = nativeResult.faceImage;

        /**
         * full document image if enabled with returnFullDocumentImage property.
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;

        /**
         * Returns true if recognizer has finished scanning first side and is now scanning back side,
         * false if it's still scanning first side.
         */
        this.scanningFirstSideDone = nativeResult.scanningFirstSideDone;

        /** Array of elements that are not part of AAMVA standard and are specific to each US state. */
        this.optionalElements = nativeResult.optionalElements;

        /** The raw bytes contained inside 2D barcode. */
        this.rawData = nativeResult.rawData;

        /** Raw string inside 2D barcode. */
        this.rawStringData = nativeResult.rawStringData;

        /** True if returned result is uncertain, i.e. if scanned barcode was incomplete (i.e. */
        this.uncertain = nativeResult.uncertain;

        /** Fields inside US Driver's licence. Available Keys are listed in UsdlKeys enum. */
        this.fields = nativeResult.fields;

        /** The first name of the United States driver license owner. */
        this.firstName = nativeResult.firstName;

        /** The middle name of the United States driver license owner. */
        this.middleName = nativeResult.middleName;

        /** The last name of the United States driver license owner. */
        this.lastName = nativeResult.lastName;

        /** The full name of the United States driver license owner. */
        this.fullName = nativeResult.fullName;

        /** The name suffix of the United States driver license owner. */
        this.nameSuffix = nativeResult.nameSuffix;

        /** The full address of the United States driver license owner. */
        this.address = nativeResult.address;

        /** The document number of the United States driver license. */
        this.documentNumber = nativeResult.documentNumber;

        /** The sex of the United States driver license owner. */
        this.sex = nativeResult.sex;

        /** The restrictions to driving privileges for the United States driver license owner. */
        this.restrictions = nativeResult.restrictions;

        /** The additional privileges granted to the United States driver license owner. */
        this.endorsements = nativeResult.endorsements;

        /** The type of vehicle the driver license owner has privilege to drive. */
        this.vehicleClass = nativeResult.vehicleClass;

        /** The date of birth of the United States driver license owner. */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;

        /** The date of issue of the United States driver license. */
        this.dateOfIssue = nativeResult.dateOfIssue != null ? new Date(nativeResult.dateOfIssue) : null;

        /** The date of expiry of the United States driver license. */
        this.dateOfExpiry = nativeResult.dateOfExpiry != null ? new Date(nativeResult.dateOfExpiry) : null;

        /**
         * The current age of the document owner in years. It is calculated difference
         * between now and date of birth. Now is current time on the device.
         * @return current age of the document owner in years or -1 if date of birth is unknown.
        */
        this.age = nativeResult.age;
    }
}

/**
 * USDL Combined Recognizer.
 *
 * USDL Combined recognizer is used for scanning both front and back side of US Driver's License.
 */
export class UsdlCombinedRecognizer extends Recognizer {

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
     * The extension factors for full document image.
     */
    fullDocumentImageExtensionFactors: ImageExtensionFactors;

    /**
     * Minimum number of stable detections required for detection to be successful.
     */
    numStableDetectionsThreshold: number;

    /**
     * Whether or not recognition result should be signed.
     *
     *
     */
    signResult: boolean;

    constructor() {
        super('UsdlCombinedRecognizer');
        this.faceImageDpi = 250;
        this.fullDocumentImageDpi = 250;
        this.returnFaceImage = false;
        this.returnFullDocumentImage = false;
        this.fullDocumentImageExtensionFactors = new ImageExtensionFactors();
        this.numStableDetectionsThreshold = 6;
        this.signResult = false;
    }

    createResultFromNative = (nativeResult: any) => { return new UsdlCombinedRecognizerResult(nativeResult); }
}
