/**
 * Represents a date extracted from image.
 */
export class Date {
    /** day in month */
    day: number;
    /** month in year */
    month: number;
    /** year */
    year: number;

    constructor(nativeDate: any) {
        this.day = nativeDate.day;
        this.month = nativeDate.month;
        this.year = nativeDate.year;
    }
}

/**
 * Represents a point in image
 */
export class Point {
    /** x coordinate of the point */
    x: number;
    /** y coordinate of the point */
    y: number;

    constructor(nativePoint: any) {
        this.x = nativePoint.x;
        this.y = nativePoint.y;
    }
}

/**
 * Represents a quadrilateral location in the image
 */
export class Quadrilateral {

    /** upper left point of the quadrilateral */
    upperLeft: Point;
    /** upper right point of the quadrilateral */
    upperRight: Point;
    /** lower left point of the quadrilateral */
    lowerLeft: Point;
    /** lower right point of the quadrilateral */
    lowerRight: Point;

    constructor(nativeQuad: any) {
        this.upperLeft = new Point(nativeQuad.upperLeft);
        this.upperRight = new Point(nativeQuad.upperRight);
        this.lowerLeft = new Point(nativeQuad.lowerLeft);
        this.lowerRight = new Point(nativeQuad.lowerRight);
    }
}

/**
 * Represents the type of scanned barcode
 */
export const enum BarcodeType {
    /** No barcode was scanned */
    None = 1,
    /** QR code was scanned */
    QRCode = 2,
    /** Data Matrix 2D barcode was scanned */
    DataMatrix = 3,
    /** UPC E barcode was scanned */
    UPCE = 4,
    /** UPC A barcode was scanned */
    UPCA = 5,
    /** EAN 8 barcode was scanned */
    EAN8 = 6,
    /** EAN 13 barcode was scanned */
    EAN13 = 7,
    /** Code 128 barcode was scanned */
    Code128 = 8,
    /** Code 39 barcode was scanned */
    Code39 = 9,
    /** ITF barcode was scanned */
    ITF = 10,
    /** Aztec 2D barcode was scanned */
    Aztec = 11,
    /** PDF417 2D barcode was scanned */
    PDF417 = 12
}

/**
 * Represents data extracted from the Driver's license.
 */
export class DriverLicenseDetailedInfo {

    /**  Restrictions to driving privileges for the driver license owner. */
    restrictions: string;
    /** Additional privileges granted to the driver license owner. */
    endorsements: string;
    /** The type of vehicle the driver license owner has privilege to drive. */
    vehicleClass: string;

    constructor(nativeDriverLicenseDetailedInfo: any) {
        this.restrictions = nativeDriverLicenseDetailedInfo.restrictions;
        this.endorsements = nativeDriverLicenseDetailedInfo.endorsements;
        this.vehicleClass = nativeDriverLicenseDetailedInfo.vehicleClass;
    }
}

/** Result of the data matching algorithm for scanned parts/sides of the document. */
export const enum DataMatchResult {
    /** Data matching has not been performed. */
    NotPerformed = 1,
    /** Data does not match. */
    Failed = 2,
    /** Data match. */
    Success = 3
}
/**
 * Possible types of Machine Readable Travel Documents (MRTDs).
 */
export const enum MrtdDocumentType {
    /** Unknown document type */
    Unknown = 1,
    /** Identity card */
    IdentityCard = 2,
    /** Passport */
    Passport = 3,
    /** Visa */
    Visa = 4,
    /** US Green Card */
    GreenCard = 5,
    /** Malaysian PASS type IMM13P */
    MalaysianPassIMM13P = 6
}
/**
 * Possible types of documents scanned with IdBarcodeRecognizer.
 */
export const enum IdBarcodeDocumentType {
    /** No document was scanned */
    None = 1,
    /** AAMVACompliant document was scanned */
    AAMVACompliant = 2,
    /** Argentina ID document was scanned */
    ArgentinaID = 3,
    /** Argentina driver license document was scanned */
    ArgentinaDL = 4,
    /** Colombia ID document was scanned */
    ColombiaID = 5,
    /** Colombia driver license document was scanned */
    ColombiaDL = 6,
    /** NigeriaVoter ID document was scanned */
    NigeriaVoterID = 7,
    /** Nigeria driver license document was scanned */
    NigeriaDL = 8,
    /** Panama ID document was scanned */
    PanamaID = 9,
    /** SouthAfrica ID document was scanned */
    SouthAfricaID = 10
}

/**
 * Defines possible color statuses determined from scanned image scanned with BlinkID or BlinkID Combined Recognizer
 */
export const enum DocumentImageColorStatus {
    /** Determining image color status was not performed */
    NotAvailable = 1,
    /** Black-and-white image scanned */
    BlackAndWhite = 2,
    /** Color image scanned */
    Color = 3
}

/**
 * Defines possible states of Moire pattern detection.
 */
export const enum ImageAnalysisDetectionStatus {
    /** Detection of Moire patterns was not performed. */
    NotAvailable = 1,

    /** Moire pattern not detected on input image. */
    NotDetected = 2,

    /** Moire pattern detected on input image. */
    Detected = 3
}

/**
 * Define level of anonymization performed on recognizer result.
 */
export const enum AnonymizationMode {
    /** Anonymization will not be performed. */
    None = 1,

    /** FullDocumentImage is anonymized with black boxes covering sensitive data. */
    ImageOnly = 2,

    /** Result fields containing sensitive data are removed from result. */
    ResultFieldsOnly = 3,

    /** This mode is combination of ImageOnly and ResultFieldsOnly modes. */
    FullResult = 4
}

/** Represents the classification information. **/
export class ClassInfo {
    /** The document country. **/
    country: Country;
    /** The document region. **/
    region: Region;
    /** The type of the scanned document. **/
    type: Type;

    constructor(nativeClassInfo: any) {
        this.country = nativeClassInfo.country;
        this.region = nativeClassInfo.region;
        this.type = nativeClassInfo.type;
    }
}

/**
 * Defines possible color and moire statuses determined from scanned image.
 */
export class ImageAnalysisResult {

    /**  Whether the image is blurred. */
    blurred: boolean;
    /** he color status determined from scanned image. */
    documentImageColorStatus: DocumentImageColorStatus;
    /** The Moire pattern detection status determined from the scanned image. */
    documentImageMoireStatus: ImageAnalysisDetectionStatus;
    /** Face detection status determined from the scanned image. */
    faceDetectionStatus: ImageAnalysisDetectionStatus;
    /** Mrz detection status determined from the scanned image. */
    mrzDetectionStatus: ImageAnalysisDetectionStatus;
    /** Barcode detection status determined from the scanned image. */
    barcodeDetectionStatus: ImageAnalysisDetectionStatus;

    constructor(nativeImageAnalysisResult: any) {
        this.blurred = nativeImageAnalysisResult.blurred;
        this.documentImageColorStatus = nativeImageAnalysisResult.documentImageColorStatus;
        this.documentImageMoireStatus = nativeImageAnalysisResult.documentImageMoireStatus;
        this.faceDetectionStatus = nativeImageAnalysisResult.faceDetectionStatus;
        this.mrzDetectionStatus = nativeImageAnalysisResult.mrzDetectionStatus;
        this.barcodeDetectionStatus = nativeImageAnalysisResult.barcodeDetectionStatus;
    }
}

/**
 * Defines possible the document country from ClassInfo scanned with BlinkID or BlinkID Combined Recognizer
 */
export const enum Country {
    None = 1,
    Albania = 2,
    Algeria = 3,
    Argentina = 4,
    Australia = 5,
    Austria = 6,
    Azerbaijan = 7,
    Bahrain = 8,
    Bangladesh = 9,
    Belgium = 10,
    BosniaAndHerzegovina = 11,
    Brunei = 12,
    Bulgaria = 13,
    Cambodia = 14,
    Canada = 15,
    Chile = 16,
    Colombia = 17,
    CostaRica = 18,
    Croatia = 19,
    Cyprus = 20,
    Czechia = 21,
    Denmark = 22,
    DominicanRepublic = 23,
    Egypt = 24,
    Estonia = 25,
    Finland = 26,
    France = 27,
    Georgia = 28,
    Germany = 29,
    Ghana = 30,
    Greece = 31,
    Guatemala = 32,
    HongKong = 33,
    Hungary = 34,
    India = 35,
    Indonesia = 36,
    Ireland = 37,
    Israel = 38,
    Italy = 39,
    Jordan = 40,
    Kazakhstan = 41,
    Kenya = 42,
    Kosovo = 43,
    Kuwait = 44,
    Latvia = 45,
    Lithuania = 46,
    Malaysia = 47,
    Maldives = 48,
    Malta = 49,
    Mauritius = 50,
    Mexico = 51,
    Morocco = 52,
    Netherlands = 53,
    NewZealand = 54,
    Nigeria = 55,
    Pakistan = 56,
    Panama = 57,
    Paraguay = 58,
    Philippines = 59,
    Poland = 60,
    Portugal = 61,
    PuertoRico = 62,
    Qatar = 63,
    Romania = 64,
    Russia = 65,
    SaudiArabia = 66,
    Serbia = 67,
    Singapore = 68,
    Slovakia = 69,
    Slovenia = 70,
    SouthAfrica = 71,
    Spain = 72,
    Sweden = 73,
    Switzerland = 74,
    Taiwan = 75,
    Thailand = 76,
    Tunisia = 77,
    Turkey = 78,
    UAE = 79,
    Uganda = 80,
    UK = 81,
    Ukraine = 82,
    Usa = 83,
    Vietnam = 84,
    Brazil = 85,
    Norway = 86,
    Oman = 87,
    Ecuador = 88,
    ElSalvador = 89,
    SriLanka = 90
}

/**
 * Defines possible the document country's region from ClassInfo scanned with BlinkID or BlinkID Combined Recognizer
 */
export const enum Region {
    None = 1,
    Alabama = 2,
    Alaska = 3,
    Alberta = 4,
    Arizona = 5,
    Arkansas = 6,
    AustralianCapitalTerritory = 7,
    BritishColumbia = 8,
    California = 9,
    Colorado = 10,
    Connecticut = 11,
    Delaware = 12,
    DistrictOfColumbia = 13,
    Florida = 14,
    Georgia = 15,
    Hawaii = 16,
    Idaho = 17,
    Illinois = 18,
    Indiana = 19,
    Iowa = 20,
    Kansas = 21,
    Kentucky = 22,
    Louisiana = 23,
    Maine = 24,
    Manitoba = 25,
    Maryland = 26,
    Massachusetts = 27,
    Michigan = 28,
    Minnesota = 29,
    Mississippi = 30,
    Missouri = 31,
    Montana = 32,
    Nebraska = 33,
    Nevada = 34,
    NewBrunswick = 35,
    NewHampshire = 36,
    NewJersey = 37,
    NewMexico = 38,
    NewSouthWales = 39,
    NewYork = 40,
    NorthernTerritory = 41,
    NorthCarolina = 42,
    NorthDakota = 43,
    NovaScotia = 44,
    Ohio = 45,
    Oklahoma = 46,
    Ontario = 47,
    Oregon = 48,
    Pennsylvania = 49,
    Quebec = 50,
    Queensland = 51,
    RhodeIsland = 52,
    Saskatchewan = 53,
    SouthAustralia = 54,
    SouthCarolina = 55,
    SouthDakota = 56,
    Tasmania = 57,
    Tennessee = 58,
    Texas = 59,
    Utah = 60,
    Vermont = 61,
    Victoria = 62,
    Virginia = 63,
    Washington = 64,
    WesternAustralia = 65,
    WestVirginia = 66,
    Wisconsin = 67,
    Wyoming = 68,
    Yukon = 69
}

/**
 * Defines possible the document type from ClassInfo scanned with BlinkID or BlinkID Combined Recognizer
 */
export const enum Type {
    None = 1,
    ConsularId = 2,
    Dl = 3,
    DlPublicServicesCard = 4,
    FinCard = 5,
    EmploymentPass = 6,
    GreenCard = 7,
    Id = 8,
    MultipurposeId = 9,
    MyKad = 10,
    MyKid = 11,
    MyTentera = 12,
    PanCard = 13,
    ProfessionalId = 14,
    PublicServicesCard = 15,
    ResidencePermit = 16,
    ResidentId = 17,
    TemporaryResidencePermit = 18,
    VoterId = 19,
    WorkPermit = 20,
    iKad = 21,
    MilitaryId = 22,
    MyKas = 23,
    SocialSecurityCard = 24,
    HealthInsuranceCard = 25
}

/** Defines the data extracted from the barcode. */
export class BarcodeResult {

    /// Type of the barcode scanned
    barcodeType: BarcodeType;
    /// Byte array with result of the scan
    rawData: string;
    /// Retrieves content of scanned data
    stringData: string;
    /// Flag indicating uncertain scanning data
    uncertain: boolean;
    /// The first name of the document owner.
    firstName: string;
    /// The last name of the document owner.
    lastName: string;
    /// The full name of the document owner.
    fullName: string;
    /// The additional name information of the document owner.
    additionalNameInformation: string;
    /// The address of the document owner.
    address: string;
    /// The place of birth of the document owner.
    placeOfBirth: string;
    /// The nationality of the documet owner.
    nationality: string;
    /// The race of the document owner.
    race: string;
    /// The religion of the document owner.
    religion: string;
    /// The profession of the document owner.
    profession: string;
    /// The marital status of the document owner.
    maritalStatus: string;
    /// The residential stauts of the document owner.
    residentialStatus: string;
    /// The employer of the document owner.
    employer: string;
    /// The sex of the document owner.
    sex: string;
    /// The date of birth of the document owner.
    dateOfBirth: Date;
    /// The date of issue of the document.
    dateOfIssue: Date;
    /// The date of expiry of the document.
    dateOfExpiry: Date;
    /// The document number.
    documentNumber: string;
    ///  The personal identification number.
    personalIdNumber: string;
    /// The additional number of the document.
    documentAdditionalNumber: string;
    /// The issuing authority of the document.
    issuingAuthority: string;
    /// The street address portion of the document owner.
    street: string;
    /// The postal code address portion of the document owner.
    postalCode: string;
    /// The city address portion of the document owner.
    city: string;
    /// The jurisdiction code address portion of the document owner.
    jurisdiction: string;
    /// The driver license detailed info.
    driverLicenseDetailedInfo: DriverLicenseDetailedInfo;
    /// Flag that indicates if barcode result is empty
    empty: boolean;

    constructor(nativeBarcodeResult: any) {

        /** Type of the barcode scanned */
        this.barcodeType = nativeBarcodeResult.barcodeType;

        /** Byte array with result of the scan */
        this.rawData = nativeBarcodeResult.rawData;

        /** Retrieves content of scanned data */
        this.stringData = nativeBarcodeResult.stringData;

        /** Flag indicating uncertain scanning data */
        this.uncertain = nativeBarcodeResult.uncertain;

        /** The first name of the document owner. */
        this.firstName = nativeBarcodeResult.firstName;

        /** The last name of the document owner. */
        this.lastName = nativeBarcodeResult.lastName;

        /** The full name of the document owner. */
        this.fullName = nativeBarcodeResult.fullName;

        /** The additional name information of the document owner. */
        this.additionalNameInformation = nativeBarcodeResult.additionalNameInformation;

        /** The address of the document owner. */
        this.address = nativeBarcodeResult.address;

        /** The place of birth of the document owner. */
        this.placeOfBirth = nativeBarcodeResult.placeOfBirth;

        /** The nationality of the documet owner. */
        this.nationality = nativeBarcodeResult.nationality;

        /** The race of the document owner. */
        this.race = nativeBarcodeResult.race;

        /** The religion of the document owner. */
        this.religion = nativeBarcodeResult.religion;

        /** The profession of the document owner. */
        this.profession = nativeBarcodeResult.profession;

        /** The marital status of the document owner. */
        this.maritalStatus = nativeBarcodeResult.maritalStatus;

        /** The residential stauts of the document owner. */
        this.residentialStatus = nativeBarcodeResult.residentialStatus;

        /** The employer of the document owner. */
        this.employer = nativeBarcodeResult.employer;

        /** The sex of the document owner. */
        this.sex = nativeBarcodeResult.sex;

        /** The date of birth of the document owner. */
        this.dateOfBirth = nativeBarcodeResult.dateOfBirth != null ? new Date(nativeBarcodeResult.dateOfBirth) : null;

        /** The date of issue of the document. */
        this.dateOfIssue = nativeBarcodeResult.dateOfIssue.Date != null ? new Date(nativeBarcodeResult.dateOfIssue) : null;

        /** The date of expiry of the document. */
        this.dateOfExpiry = nativeBarcodeResult.dateOfExpiry.Date != null ? new Date(nativeBarcodeResult.dateOfExpiry) : null;

        /** The document number. */
        this.documentNumber = nativeBarcodeResult.documentNumber;

        /**  The personal identification number. */
        this.personalIdNumber = nativeBarcodeResult.personalIdNumber;

        /** The additional number of the document. */
        this.documentAdditionalNumber = nativeBarcodeResult.documentAdditionalNumber;

        /** The issuing authority of the document. */
        this.issuingAuthority = nativeBarcodeResult.issuingAuthority;

        /** The street address portion of the document owner. */
        this.street = nativeBarcodeResult.street;

        /** The postal code address portion of the document owner. */
        this.postalCode = nativeBarcodeResult.postalCode;

        /** The city address portion of the document owner. */
        this.city = nativeBarcodeResult.city;

        /** The jurisdiction code address portion of the document owner. */
        this.jurisdiction = nativeBarcodeResult.jurisdiction;

        /** The driver license detailed info. */
        this.driverLicenseDetailedInfo = nativeBarcodeResult.driverLicenseDetailedInfo != null ? new DriverLicenseDetailedInfo(nativeBarcodeResult.driverLicenseDetailedInfo) : null;

        /** Flag that indicates if barcode result is empty */
        this.empty = nativeBarcodeResult.empty;
    }
}

/** Defines the data extracted from the visual inspection zone */
export class VizResult {
    /// The first name of the document owner.
    firstName: string;
    /// The last name of the document owner.
    lastName: string;
    /// The full name of the document owner.
    fullName: string;
    /// The additional name information of the document owner.
    additionalNameInformation: string;
    /// The localized name of the document owner.
    localizedName: string;
    /// The address of the document owner.
    address: string;
    /// The additional address information of the document owner.
    additionalAddressInformation: string;
    /// The place of birth of the document owner.
    placeOfBirth: string;
    /// The nationality of the documet owner.
    nationality: string;
    /// The race of the document owner.
    race: string;
    /// The religion of the document owner.
    religion: string;
    /// The profession of the document owner.
    profession: string;
    /// The marital status of the document owner.
    maritalStatus: string;
    /// The residential stauts of the document owner.
    residentialStatus: string;
    /// The employer of the document owner.
    employer: string;
    /// The sex of the document owner.
    sex: string;
    /// The date of birth of the document owner.
    dateOfBirth: Date;
    /// The date of issue of the document.
    dateOfIssue: Date;
    /// The date of expiry of the document.
    dateOfExpiry: Date;
    /// The document number.
    documentNumber: string;
    /// The personal identification number.
    personalIdNumber: string;
    /// The additional number of the document.
    documentAdditionalNumber: string;
    /// The additional personal identification number.
    additionalPersonalIdNumber: string;
    /// The issuing authority of the document.
    issuingAuthority: string;
    /// The driver license detailed info.
    driverLicenseDetailedInfo: DriverLicenseDetailedInfo;
    /// The driver license conditions.
    conditions: string;
    /// Flag that indicates if barcode result is empty
    empty: boolean;

    constructor(nativeVizResult: any) {

        /** The first name of the document owner. */
        this.firstName = nativeVizResult.firstName;

        /** The last name of the document owner. */
        this.lastName = nativeVizResult.lastName;

        /** The full name of the document owner. */
        this.fullName = nativeVizResult.fullName;

        /** The additional name information of the document owner. */
        this.additionalNameInformation = nativeVizResult.additionalNameInformation;

        /** The localized name of the document owner. */
        this.localizedName = nativeVizResult.localizedName;

        /** The address of the document owner. */
        this.address = nativeVizResult.address;

        /** The additional address information of the document owner. */
        this.additionalAddressInformation = nativeVizResult.additionalAddressInformation;

        /** The place of birth of the document owner. */
        this.placeOfBirth = nativeVizResult.placeOfBirth;

        /** The nationality of the documet owner. */
        this.nationality = nativeVizResult.nationality;

        /** The race of the document owner. */
        this.race = nativeVizResult.race;

        /** The religion of the document owner. */
        this.religion = nativeVizResult.religion;

        /** The profession of the document owner. */
        this.profession = nativeVizResult.profession;

        /** The marital status of the document owner. */
        this.maritalStatus = nativeVizResult.maritalStatus;

        /** The residential stauts of the document owner. */
        this.residentialStatus = nativeVizResult.residentialStatus;

        /** The employer of the document owner. */
        this.employer = nativeVizResult.employer;

        /** The sex of the document owner. */
        this.sex = nativeVizResult.sex;

        /** The date of birth of the document owner. */
        this.dateOfBirth = nativeVizResult.dateOfBirth.Date != null ? new Date(nativeVizResult.dateOfBirth) : null;

        /** The date of issue of the document. */
        this.dateOfIssue = nativeVizResult.dateOfIssue.Date != null ? new Date(nativeVizResult.dateOfIssue) : null;

        /** The date of expiry of the document. */
        this.dateOfExpiry = nativeVizResult.dateOfExpiry.Date != null ? new Date(nativeVizResult.dateOfExpiry) : null;

        /** The document number. */
        this.documentNumber = nativeVizResult.documentNumber;

        /** The personal identification number. */
        this.personalIdNumber = nativeVizResult.personalIdNumber;

        /** The additional number of the document. */
        this.documentAdditionalNumber = nativeVizResult.documentAdditionalNumber;

        /** The additional personal identification number. */
        this.additionalPersonalIdNumber = nativeVizResult.additionalPersonalIdNumber;

        /** The issuing authority of the document. */
        this.issuingAuthority = nativeVizResult.issuingAuthority;

        /** The driver license detailed info. */
        this.driverLicenseDetailedInfo = nativeVizResult.driverLicenseDetailedInfo != null ? new DriverLicenseDetailedInfo(nativeVizResult.driverLicenseDetailedInfo) : null;

        /** The driver license conditions. */
        this.conditions = nativeVizResult.conditions;

        /** Flag that indicates if barcode result is empty */
        this.empty = nativeVizResult.empty;
    }
}

/**
 * Represents data extracted from MRZ (Machine Readable Zone) of Machine Readable Travel Document (MRTD).
 */
export class MrzResult {

    /// Type of recognized document. It is always one of the values represented by BlinkIDScanner.MRTDDocumentType
    documentType: MrtdDocumentType;

    /// The primary indentifier. If there is more than one component, they are separated with space.
    primaryId: string;

    /// The secondary identifier. If there is more than one component, they are separated with space.
    secondaryId: string;

    /// Three-letter or two-letter code which indicate the issuing State. Three-letter codes are based
    /// on Aplha-3 codes for entities specified in ISO 3166-1, with extensions for certain States. Two-letter
    /// codes are based on Alpha-2 codes for entities specified in ISO 3166-1, with extensions for certain States.
    issuer: string;

    /// Holder's date of birth
    dateOfBirth: Date;

    /// The document number. Document number contains up to 9 characters.
    /// Element does not exist on US Green Card. To see which document was scanned use documentType property.
    documentNumber: string;

    /// The nationality of the holder represented by a three-letter or two-letter code. Three-letter
    /// codes are based on Alpha-3 codes for entities specified in ISO 3166-1, with extensions for certain
    /// States. Two-letter codes are based on Aplha-2 codes for entities specified in ISO 3166-1, with
    /// extensions for certain States.
    nationality: string;

    /// The gender of the card holder. Gender is specified by use of the single initial, capital letter F for female,
    /// M for male or <code>&lt;</code> for unspecified.
    gender: string;

    /// The document code. Document code contains two characters. For MRTD the first character shall
    /// be A, C or I. The second character shall be discretion of the issuing State or organization except
    /// that V shall not be used, and `C` shall not be used after `A` except in the crew member certificate.
    /// On machine-readable passports (MRP) first character shall be `P` to designate an MRP. One additional
    /// letter may be used, at the discretion of the issuing State or organization, to designate a particular
    /// MRP. If the second character position is not used for this purpose, it shall be filled by the filter
    /// character <code>&lt;</code>.
    documentCode: string;

    /// The date of expiry
    dateOfExpiry: Date;

    /// The first optional data. Contains empty if not available.
    /// Element does not exist on US Green Card. To see which document was scanned use the documentType property.
    opt1: string;

    /// The second optional data. Contains empty if not available.
    /// Element does not exist on Passports and Visas. To see which document was scanned use the documentType property.
    opt2: string;

    /// The alien number. Contains empty if not available.
    /// Exists only on US Green Cards. To see which document was scanned use the documentType property.
    alienNumber: string;

    /// The application receipt number. Contains empty if not available.
    /// Exists only on US Green Cards. To see which document was scanned use the documentType property.
    applicationReceiptNumber: string;

    /// The immigrant case number. Contains empty if not available.
    /// Exists only on US Green Cards. To see which document was scanned use the documentType property.
    immigrantCaseNumber: string;

    /// The entire Machine Readable Zone text from ID. This text is usually used for parsing
    /// other elements.
    /// NOTE: This is available only if OCR result was parsed successfully.
    mrzText: string;

    /// true if Machine Readable Zone has been parsed, false otherwise.
    mrzParsed: boolean;

    /// true if all check digits inside MRZ are correct, false otherwise.
    mrzVerified: boolean;

    /// Sanitized field opt1
    sanitizedOpt1: string;

    /// Sanitized field opt2
    sanitizedOpt2: string;

    /// Sanitized field nationality
    sanitizedNationality: string;

    /// Sanitized field issuer
    sanitizedIssuer: string;

    /// Sanitized document code
    sanitizedDocumentCode: string;

    /// Sanitized document number
    sanitizedDocumentNumber: string;

    /// The current age of the document owner in years. It is calculated difference
    /// between now and date of birth. Now is current time on the device.
    /// @return current age of the document owner in years or -1 if date of birth is unknown.
    age: number;

    constructor(nativeMRZResult: any) {
        /**
         * Type of recognized document. It is always one of the values represented by BlinkIDScanner.MRTDDocumentType
         */
        this.documentType = nativeMRZResult.documentType;
        /** The primary indentifier. If there is more than one component, they are separated with space. */
        this.primaryId = nativeMRZResult.primaryId;
        /** The secondary identifier. If there is more than one component, they are separated with space. */
        this.secondaryId = nativeMRZResult.secondaryId;
        /**
         * Three-letter or two-letter code which indicate the issuing State. Three-letter codes are based
         * on Aplha-3 codes for entities specified in ISO 3166-1, with extensions for certain States. Two-letter
         * codes are based on Alpha-2 codes for entities specified in ISO 3166-1, with extensions for certain States.
         */
        this.issuer = nativeMRZResult.issuer;
        /** Holder's date of birth */
        this.dateOfBirth = nativeMRZResult.dateOfBirth != null ? new Date(nativeMRZResult.dateOfBirth) : null;
        /**
         * The document number. Document number contains up to 9 characters.
         * Element does not exist on US Green Card. To see which document was scanned use documentType property.
         */
        this.documentNumber = nativeMRZResult.documentNumber;
        /**
         * The nationality of the holder represented by a three-letter or two-letter code. Three-letter
         * codes are based on Alpha-3 codes for entities specified in ISO 3166-1, with extensions for certain
         * States. Two-letter codes are based on Aplha-2 codes for entities specified in ISO 3166-1, with
         * extensions for certain States.
         */
        this.nationality = nativeMRZResult.nationality;
        /**
         * The gender of the card holder. Gender is specified by use of the single initial, capital letter F for female,
         * M for male or <code>&lt;</code> for unspecified.
         */
        this.gender = nativeMRZResult.gender;
        /**
         * The document code. Document code contains two characters. For MRTD the first character shall
         * be A, C or I. The second character shall be discretion of the issuing State or organization except
         * that V shall not be used, and `C` shall not be used after `A` except in the crew member certificate.
         * On machine-readable passports (MRP) first character shall be `P` to designate an MRP. One additional
         * letter may be used, at the discretion of the issuing State or organization, to designate a particular
         * MRP. If the second character position is not used for this purpose, it shall be filled by the filter
         * character <code>&lt;</code>.
         */
        this.documentCode = nativeMRZResult.documentCode;
        /** The date of expiry */
        this.dateOfExpiry = nativeMRZResult.dateOfExpiry != null ? new Date(nativeMRZResult.dateOfExpiry) : null;
        /**
         * The first optional data. Contains empty if not available.
         * Element does not exist on US Green Card. To see which document was scanned use the documentType property.
         */
        this.opt1 = nativeMRZResult.opt1;
        /**
         * The second optional data. Contains empty if not available.
         * Element does not exist on Passports and Visas. To see which document was scanned use the documentType property.
         */
        this.opt2 = nativeMRZResult.opt2;
        /**
         * The alien number. Contains empty if not available.
         * Exists only on US Green Cards. To see which document was scanned use the documentType property.
         */
        this.alienNumber = nativeMRZResult.alienNumber;
        /**
         * The application receipt number. Contains empty if not available.
         * Exists only on US Green Cards. To see which document was scanned use the documentType property.
         */
        this.applicationReceiptNumber = nativeMRZResult.applicationReceiptNumber;
        /**
         * The immigrant case number. Contains empty if not available.
         * Exists only on US Green Cards. To see which document was scanned use the documentType property.
         */
        this.immigrantCaseNumber = nativeMRZResult.immigrantCaseNumber;
        /**
         * The entire Machine Readable Zone text from ID. This text is usually used for parsing
         * other elements.
         * NOTE: This is available only if OCR result was parsed successfully.
         */
        this.mrzText = nativeMRZResult.mrzText;
        /** true if Machine Readable Zone has been parsed, false otherwise. */
        this.mrzParsed = nativeMRZResult.mrzParsed;
        /** true if all check digits inside MRZ are correct, false otherwise. */
        this.mrzVerified = nativeMRZResult.mrzVerified;

        /**
        * Sanitized field opt1
        */
        this.sanitizedOpt1 = nativeMRZResult.sanitizedOpt1;

        /**
        * Sanitized field opt2
        */
        this.sanitizedOpt2 = nativeMRZResult.sanitizedOpt2;

        /**
        * Sanitized field nationality
        */
        this.sanitizedNationality = nativeMRZResult.sanitizedNationality;

        /**
        * Sanitized field issuer
        */
        this.sanitizedIssuer = nativeMRZResult.sanitizedIssuer;

        /**
        * Sanitized document code
        */
        this.sanitizedDocumentCode = nativeMRZResult.sanitizedDocumentCode;

        /**
        * Sanitized document number
        */
        this.sanitizedDocumentNumber = nativeMRZResult.sanitizedDocumentNumber;

        /**
         * The current age of the document owner in years. It is calculated difference
         * between now and date of birth. Now is current time on the device.
         * @return current age of the document owner in years or -1 if date of birth is unknown.
        */
        this.age = nativeMRZResult.age;
    }
}

/** Possible supported detectors for documents containing face image */
export const enum DocumentFaceDetectorType {
    /** Uses document detector for TD1 size identity cards */
    TD1 = 1,
    /** Uses document detector for TD2 size identity cards  */
    TD2 = 2,
    /** Uses MRTD detector for detecting documents with MRZ */
    PassportsAndVisas = 3
}

/**
 * Extension factors relative to corresponding dimension of the full image. For example,
 * upFactor and downFactor define extensions relative to image height, e.g.
 * when upFactor is 0.5, upper image boundary will be extended for half of image's full
 * height.
 */
export class ImageExtensionFactors {
    /** image extension factor relative to full image height in UP direction. */
    upFactor: number;
    /** image extension factor relative to full image height in RIGHT direction. */
    rightFactor: number;
    /** image extension factor relative to full image height in DOWN direction. */
    downFactor: number;
    /** image extension factor relative to full image height in LEFT direction. */
    leftFactor: number;

    constructor() {
        /** image extension factor relative to full image height in UP direction. */
        this.upFactor = 0.0;
        /** image extension factor relative to full image height in RIGHT direction. */
        this.rightFactor = 0.0;
        /** image extension factor relative to full image height in DOWN direction. */
        this.downFactor = 0.0;
        /** image extension factor relative to full image height in LEFT direction. */
        this.leftFactor = 0.0;
    }
};
/**
 * RecognitionModeFilter is used to enable/disable recognition of specific document groups.
 * Setting is taken into account only if the right for that document is purchased.
 */
export class RecognitionModeFilter {

	 /** Enable scanning of MRZ IDs. Setting is taken into account only if the mrz_id right is purchased. */
    enableMrzId: boolean;
    /** Enable scanning of visa MRZ. Setting is taken into account only if the visa right is purchased. */
    enableMrzVisa: boolean;
    /** Enable scanning of Passport MRZ. Setting is taken into account only if the passport right is purchased. */
    enableMrzPassport: boolean;
    /** Enable scanning of Photo ID. Setting is taken into account only if the photo_id right is purchased. */
    enablePhotoId: boolean;
    /** Enable full document recognition. Setting is taken into account only if the document right to scan that document is purchased. */
    enableFullDocumentRecognition: boolean;

    constructor() {
        /** Enable scanning of MRZ IDs. Setting is taken into account only if the mrz_id right is purchased. */
        this.enableMrzId = true;
        /** Enable scanning of visa MRZ. Setting is taken into account only if the visa right is purchased. */
        this.enableMrzVisa = true;
        /** Enable scanning of Passport MRZ. Setting is taken into account only if the passport right is purchased. */
        this.enableMrzPassport = true;
        /** Enable scanning of Photo ID. Setting is taken into account only if the photo_id right is purchased. */
        this.enablePhotoId = true;
        /** Enable full document recognition. Setting is taken into account only if the document right to scan that document is purchased. */
        this.enableFullDocumentRecognition = true;
    }
}

/// Defines status of the last recognition process.
export const enum ProcessingStatus {
    /// Recognition was successful.
    Success,

    /// Detection of the document failed.
    DetectionFailed,

    /// Preprocessing of the input image has failed.
    ImagePreprocessingFailed,

    /// Recognizer has inconsistent results.
    StabilityTestFailed,

    /// Wrong side of the document has been scanned.
    ScanningWrongSide,

    /// Identification of the fields present on the document has failed.
    FieldIdentificationFailed,

    /// Mandatory field for the specific document is missing.
    MandatoryFieldMissing,

    /// Result contains invalid characters in some of the fields.
    InvalidCharactersFound,

    /// Failed to return a requested image.
    ImageReturnFailed,

    /// Reading or parsing of the barcode has failed.
    BarcodeRecognitionFailed,

    /// Parsing of the MRZ has failed.
    MrzParsingFailed,

    /// Document class has been filtered out.
    ClassFiltered,

    /// Document currently not supported by the recognizer.
    UnsupportedClass,

    /// License for the detected document is missing.
    UnsupportedByLicense
}

/// Define level of anonymization performed on recognizer result
export const enum RecognitionMode {
    /// No recognition performed.
    None,

    /// Recognition of mrz document (does not include visa and passport)
    MrzId,

    /// Recognition of visa mrz.
    MrzVisa,

    /// Recognition of passport mrz.
    MrzPassport,

    /// Recognition of documents that have face photo on the front.
    PhotoId,

    /// Detailed document recognition.
    FullRecognition
}

