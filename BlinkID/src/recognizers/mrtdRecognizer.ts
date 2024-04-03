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
    
    
    ImageExtensionFactors,
} from '../types'

/* tslint:disable:no-unused-variable */

/**
 * Result object for MrtdRecognizer.
 */
export class MrtdRecognizerResult extends RecognizerResult {

    
    /**
     * full document image if enabled with returnFullDocumentImage property.
     */
    fullDocumentImage?: string;
    
    /**
     * Returns the Data extracted from the machine readable zone.
     */
    mrzResult?: MrzResult;
    

    constructor(nativeResult: any) {
        super(nativeResult.resultState);
        
        /**
         * full document image if enabled with returnFullDocumentImage property.
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /**
         * Returns the Data extracted from the machine readable zone.
         */
        this.mrzResult = nativeResult.mrzResult != null ? new MrzResult(nativeResult.mrzResult) : null;
        
    }
}

/**
 * Recognizer that can recognizer Machine Readable Zone (MRZ) of the Machine Readable Travel Document (MRTD)
 */
export class MrtdRecognizer extends Recognizer {

    
    /**
     * Whether special characters are allowed
         * 
         * 
     */
    allowSpecialCharacters: boolean;
    
    /**
     * Whether returning of unparsed results is allowed
         * 
         * 
     */
    allowUnparsedResults: boolean;
    
    /**
     * Whether returning of unverified results is allowed
         * Unverified result is result that is parsed, but check digits are incorrect.
         * 
         * 
     */
    allowUnverifiedResults: boolean;
    
    /**
     * Defines if glare detection should be turned on/off.
         * 
         * 
     */
    detectGlare: boolean;
    
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
     * Sets whether full document image of ID card should be extracted.
         * 
         * 
     */
    returnFullDocumentImage: boolean;
    

    constructor() {
        super('MrtdRecognizer');
        
        /**
         * Whether special characters are allowed
         * 
         * 
         */
        this.allowSpecialCharacters = false;
        
        /**
         * Whether returning of unparsed results is allowed
         * 
         * 
         */
        this.allowUnparsedResults = false;
        
        /**
         * Whether returning of unverified results is allowed
         * Unverified result is result that is parsed, but check digits are incorrect.
         * 
         * 
         */
        this.allowUnverifiedResults = false;
        
        /**
         * Defines if glare detection should be turned on/off.
         * 
         * 
         */
        this.detectGlare = true;
        
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
         * Sets whether full document image of ID card should be extracted.
         * 
         * 
         */
        this.returnFullDocumentImage = false;
        

	this.createResultFromNative = (nativeResult: any) => { return new MrtdRecognizerResult(nativeResult); };
    }
}