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
 * Result object for PassportRecognizer.
 */
export class PassportRecognizerResult extends RecognizerResult {

    
    /**
     * Defines digital signature of recognition results.
     */
    digitalSignature: string;
    
    /**
     * Defines digital signature version.
     */
    digitalSignatureVersion: number;
    
    /**
     * Face image from the document
     */
    faceImage: string;
    
    /**
     * Image of the full document
     */
    fullDocumentImage: string;
    
    /**
     * The data extracted from the machine readable zone.
     */
    mrzResult: MrzResult;
    

    constructor(nativeResult: any) {
        super(nativeResult.resultState);
        
        /**
         * Defines digital signature of recognition results.
         */
        this.digitalSignature = nativeResult.digitalSignature;
        
        /**
         * Defines digital signature version.
         */
        this.digitalSignatureVersion = nativeResult.digitalSignatureVersion;
        
        /**
         * Face image from the document
         */
        this.faceImage = nativeResult.faceImage;
        
        /**
         * Image of the full document
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /**
         * The data extracted from the machine readable zone.
         */
        this.mrzResult = nativeResult.mrzResult != null ? new MrzResult(nativeResult.mrzResult) : null;
        
    }
}

/**
 * Recognizer which can scan all passports with MRZ.
 */
export class PassportRecognizer extends Recognizer {

    
    /**
     * Defines whether the Netherlands MRZ should be anonymized.
     */
    anonymizeNetherlandsMrz: boolean;
    
    /**
     * Defines whether glare detector is enabled.
     */
    detectGlare: boolean;
    
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
     * Defines whether face image will be available in result.
     */
    returnFaceImage: boolean;
    
    /**
     * Defines whether full document image will be available in
     */
    returnFullDocumentImage: boolean;
    
    /**
     * Defines whether or not recognition result should be signed.
     */
    signResult: boolean;
    

    constructor() {
        super('PassportRecognizer');
        
        /**
         * Defines whether the Netherlands MRZ should be anonymized.
         */
        this.anonymizeNetherlandsMrz = true;
        
        /**
         * Defines whether glare detector is enabled.
         */
        this.detectGlare = true;
        
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
         * Defines whether face image will be available in result.
         */
        this.returnFaceImage = false;
        
        /**
         * Defines whether full document image will be available in
         */
        this.returnFullDocumentImage = false;
        
        /**
         * Defines whether or not recognition result should be signed.
         */
        this.signResult = false;
        

	this.createResultFromNative = (nativeResult: any) => { return new PassportRecognizerResult(nativeResult); };
    }
}