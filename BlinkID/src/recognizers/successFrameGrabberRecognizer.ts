import { Recognizer, RecognizerResult } from '../recognizer'

/**
 * Result object for SuccessFrameGrabberRecognizer.
 */
export class SuccessFrameGrabberRecognizerResult extends RecognizerResult {

    /** Camera frame at the time slave recognizer finished recognition */
    successFrame: string;

    /** RecognizerResult of the slave recognizer */
    slaveRecognizerResult: RecognizerResult;

    constructor(nativeResult: any, slaveRecognizerResult: RecognizerResult) {
        super(nativeResult.resultState);

        this.successFrame = nativeResult.successFrame;
        this.slaveRecognizerResult = slaveRecognizerResult;
    }
}

/**
 * SuccessFrameGrabberRecognizer can wrap any other recognizer and obtain camera
 * frame on which the other recognizer finished recognition.
 */
export class SuccessFrameGrabberRecognizer extends Recognizer {

    /** Slave recognizer that SuccessFrameGrabberRecognizer will watch */
    slaveRecognizer: Recognizer;

    constructor(slaveRecognizer: Recognizer) {
        super('SuccessFrameGrabberRecognizer');

        this.slaveRecognizer = slaveRecognizer;

        if (this.slaveRecognizer instanceof Recognizer == false) {
            throw new Error("Slave recognizer must be Recognizer!");
        }

	this.createResultFromNative = (nativeResult: any) => { return new SuccessFrameGrabberRecognizerResult(nativeResult, this.slaveRecognizer.createResultFromNative(nativeResult.slaveRecognizerResult)); };
    }
}
