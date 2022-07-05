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
 * Result object for VisaRecognizer.
 */
export class VisaRecognizerResult extends RecognizerResult {

    
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
 * Recognizer which can scan all visas with MRZ.
 */
export class VisaRecognizer extends Recognizer {

    
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
    

    constructor() {
        super('VisaRecognizer');
        
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
        

	this.createResultFromNative = (nativeResult: any) => { return new VisaRecognizerResult(nativeResult); };
    }
}