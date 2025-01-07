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
 * Result object for MrtdCombinedRecognizer.
 */
export class MrtdCombinedRecognizerResult extends RecognizerResult {

    
    /**
     * Returns DataMatchStateSuccess if data from scanned parts/sides of the document match,
         * DataMatchStateFailed otherwise. For example if date of expiry is scanned from the front and back side
         * of the document and values do not match, this method will return DataMatchStateFailed. Result will
         * be DataMatchStateSuccess only if scanned values for all fields that are compared are the same.
     */
    documentDataMatch?: DataMatchState;
    
    /**
     * face image from the document if enabled with returnFaceImage property.
     */
    faceImage?: string;
    
    /**
     * back side image of the document if enabled with returnFullDocumentImage property.
     */
    fullDocumentBackImage?: string;
    
    /**
     * front side image of the document if enabled with returnFullDocumentImage property.
     */
    fullDocumentFrontImage?: string;
    
    /**
     * Returns the Data extracted from the machine readable zone.
     */
    mrzResult?: MrzResult;
    
    /**
     * Returns true if recognizer has finished scanning first side and is now scanning back side,
         * false if it's still scanning first side.
     */
    scanningFirstSideDone?: boolean;
    

    constructor(nativeResult: any) {
        super(nativeResult.resultState);
        
        /**
         * Returns DataMatchStateSuccess if data from scanned parts/sides of the document match,
         * DataMatchStateFailed otherwise. For example if date of expiry is scanned from the front and back side
         * of the document and values do not match, this method will return DataMatchStateFailed. Result will
         * be DataMatchStateSuccess only if scanned values for all fields that are compared are the same.
         */
        this.documentDataMatch = nativeResult.documentDataMatch;
        
        /**
         * face image from the document if enabled with returnFaceImage property.
         */
        this.faceImage = nativeResult.faceImage;
        
        /**
         * back side image of the document if enabled with returnFullDocumentImage property.
         */
        this.fullDocumentBackImage = nativeResult.fullDocumentBackImage;
        
        /**
         * front side image of the document if enabled with returnFullDocumentImage property.
         */
        this.fullDocumentFrontImage = nativeResult.fullDocumentFrontImage;
        
        /**
         * Returns the Data extracted from the machine readable zone.
         */
        this.mrzResult = nativeResult.mrzResult != null ? new MrzResult(nativeResult.mrzResult) : null;
        
        /**
         * Returns true if recognizer has finished scanning first side and is now scanning back side,
         * false if it's still scanning first side.
         */
        this.scanningFirstSideDone = nativeResult.scanningFirstSideDone;
        
    }
}

/**
 * MRTD Combined recognizer
 * 
 * MRTD Combined recognizer is used for scanning both front and back side of generic IDs.
 */
export class MrtdCombinedRecognizer extends Recognizer {

    
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
     * Type of document this recognizer will scan.
         * 
         * 
     */
    detectorType: DocumentFaceDetectorType;
    
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
     * Defines how many times the same document should be detected before the detector
         * returns this document as a result of the deteciton
         * 
         * Higher number means more reliable detection, but slower processing
         * 
         * 
     */
    numStableDetectionsThreshold: number;
    
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
        super('MrtdCombinedRecognizer');
        
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
         * Type of document this recognizer will scan.
         * 
         * 
         */
        this.detectorType = DocumentFaceDetectorType.TD1;
        
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
         * Defines how many times the same document should be detected before the detector
         * returns this document as a result of the deteciton
         * 
         * Higher number means more reliable detection, but slower processing
         * 
         * 
         */
        this.numStableDetectionsThreshold = 6;
        
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
        

	this.createResultFromNative = (nativeResult: any) => { return new MrtdCombinedRecognizerResult(nativeResult); };
    }
}