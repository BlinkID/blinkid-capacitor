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
 * Result object for DocumentFaceRecognizer.
 */
export class DocumentFaceRecognizerResult extends RecognizerResult {

    
    /**
     * Quadrangle represeting corner points of the document within the input image.
     */
    documentLocation?: Quadrilateral;
    
    /**
     * face image from the document if enabled with returnFaceImage property.
     */
    faceImage?: string;
    
    /**
     * Quadrangle represeting corner points of the face image within the input image.
     */
    faceLocation?: Quadrilateral;
    
    /**
     * full document image if enabled with returnFullDocumentImage property.
     */
    fullDocumentImage?: string;
    

    constructor(nativeResult: any) {
        super(nativeResult.resultState);
        
        /**
         * Quadrangle represeting corner points of the document within the input image.
         */
        this.documentLocation = nativeResult.documentLocation != null ? new Quadrilateral(nativeResult.documentLocation) : null;
        
        /**
         * face image from the document if enabled with returnFaceImage property.
         */
        this.faceImage = nativeResult.faceImage;
        
        /**
         * Quadrangle represeting corner points of the face image within the input image.
         */
        this.faceLocation = nativeResult.faceLocation != null ? new Quadrilateral(nativeResult.faceLocation) : null;
        
        /**
         * full document image if enabled with returnFullDocumentImage property.
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
    }
}

/**
 * Class for configuring Document Face Recognizer Recognizer.
 * 
 * Document Face Recognizer recognizer is used for scanning documents containing face images.
 */
export class DocumentFaceRecognizer extends Recognizer {

    
    /**
     * Type of docment this recognizer will scan.
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
        super('DocumentFaceRecognizer');
        
        /**
         * Type of docment this recognizer will scan.
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
        

	this.createResultFromNative = (nativeResult: any) => { return new DocumentFaceRecognizerResult(nativeResult); };
    }
}