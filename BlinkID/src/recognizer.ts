/**
 * Base class for all recognizers.
 * Recognizer is object that performs recognition of image
 * and updates its result with data extracted from the image.
 */
export class Recognizer {

    recognizerType: string;

    createResultFromNative: Function;

    constructor(recognizerType: string) {
        this.recognizerType = recognizerType;
    }
}

export const enum RecognizerResultState {
    empty = 0,
    uncertain = 1,
    valid = 2,
    stageValid = 3
}

/**
 * Base class for all recognizer's result objects.
 * Recoginzer result contains data extracted from the image.
 */
export class RecognizerResult {
    /** State of the result. It is always one of the values represented by {{ feature_name }}.RecognizerResultState enum */
    resultState: RecognizerResultState;

    constructor(resultState: RecognizerResultState) {
        this.resultState = resultState;
    }
}

/**
 * Represents a collection of recognizer objects.
 * @param recognizerArray Array of recognizer objects that will be used for recognition. Must not be empty!
 */
export class RecognizerCollection {
    /** Array of recognizer objects that will be used for recognition */
    recognizerArray: Recognizer[];
    /**
     * Whether or not it is allowed for multiple recognizers to process the same image.
     * If not, then first recognizer that will be successful in processing the image will
     * end the processing chain and other recognizers will not get the chance to process
     * that image.
     */
    allowMultipleResults: boolean;
    /** Number of miliseconds after first non-empty result becomes available to end scanning with a timeout */
    milisecondsBeforeTimeout: number;

    constructor(recognizerArray: [Recognizer]) {
        this.recognizerArray = recognizerArray;
        this.allowMultipleResults = false;
        this.milisecondsBeforeTimeout = 0;
    }
}
