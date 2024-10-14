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
    
    
    ImageExtensionFactors,
} from '../types'

/* tslint:disable:no-unused-variable */

/**
 * Result object for PassportRecognizer.
 */
export class PassportRecognizerResult extends RecognizerResult {

    
    /**
     * face image from the document if enabled with returnFaceImage property.
     */
    faceImage?: string;
    
    /**
     * full document image if enabled with returnFullDocumentImage property.
     */
    fullDocumentImage?: string;
    
    /**
     * The data extracted from the machine readable zone.
     */
    mrzResult?: MrzResult;
    

    constructor(nativeResult: any) {
        super(nativeResult.resultState);
        
        /**
         * face image from the document if enabled with returnFaceImage property.
         */
        this.faceImage = nativeResult.faceImage;
        
        /**
         * full document image if enabled with returnFullDocumentImage property.
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
     * Defines whether to anonymize Netherlands MRZ
         * 
         * 
     */
    anonymizeNetherlandsMrz: boolean;
    
    /**
     * Defines if glare detection should be turned on/off.
         * 
         * 
     */
    detectGlare: boolean;
    
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
    

    constructor() {
        super('PassportRecognizer');
        
        /**
         * Defines whether to anonymize Netherlands MRZ
         * 
         * 
         */
        this.anonymizeNetherlandsMrz = true;
        
        /**
         * Defines if glare detection should be turned on/off.
         * 
         * 
         */
        this.detectGlare = true;
        
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
        

	this.createResultFromNative = (nativeResult: any) => { return new PassportRecognizerResult(nativeResult); };
    }
}