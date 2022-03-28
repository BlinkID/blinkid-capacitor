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
    ClassInfo,
    BarcodeElements,
    BarcodeElementKey,
    
    
    ImageExtensionFactors,
    DataMatchResult,
} from '../types'

/* tslint:disable:no-unused-variable */

/**
 * Result object for DocumentFaceRecognizer.
 */
export class DocumentFaceRecognizerResult extends RecognizerResult {

    
    /**
     * The location of document detection in coordinate system of full input frame.
     */
    documentLocation: Quadrilateral;
    
    /**
     * Face image from the document
     */
    faceImage: string;
    
    /**
     * The location of face detection in coordinate system of cropped full document image.
     */
    faceLocation: Quadrilateral;
    
    /**
     * Image of the full document
     */
    fullDocumentImage: string;
    

    constructor(nativeResult: any) {
        super(nativeResult.resultState);
        
        /**
         * The location of document detection in coordinate system of full input frame.
         */
        this.documentLocation = nativeResult.documentLocation != null ? new Quadrilateral(nativeResult.documentLocation) : null;
        
        /**
         * Face image from the document
         */
        this.faceImage = nativeResult.faceImage;
        
        /**
         * The location of face detection in coordinate system of cropped full document image.
         */
        this.faceLocation = nativeResult.faceLocation != null ? new Quadrilateral(nativeResult.faceLocation) : null;
        
        /**
         * Image of the full document
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
    }
}

/**
 * Recognizer for detecting holder's photo on documents containing image.
 */
export class DocumentFaceRecognizer extends Recognizer {

    
    /**
     * Currently used detector type.
     */
    detectorType: DocumentFaceDetectorType;
    
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
     * Minimum number of stable detections required for detection to be successful.
     */
    numStableDetectionsThreshold: number;
    
    /**
     * Defines whether face image will be available in result.
     */
    returnFaceImage: boolean;
    
    /**
     * Defines whether full document image will be available in
     */
    returnFullDocumentImage: boolean;
    

    constructor() {
        super('DocumentFaceRecognizer');
        
        /**
         * Currently used detector type.
         */
        this.detectorType = DocumentFaceDetectorType.TD1;
        
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
         * Minimum number of stable detections required for detection to be successful.
         */
        this.numStableDetectionsThreshold = 6;
        
        /**
         * Defines whether face image will be available in result.
         */
        this.returnFaceImage = false;
        
        /**
         * Defines whether full document image will be available in
         */
        this.returnFullDocumentImage = false;
        

	this.createResultFromNative = (nativeResult: any) => { return new DocumentFaceRecognizerResult(nativeResult); };
    }
}