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
    /** original date string */
    originalDateStringResult: string;
    /** isFilledByDomainKnowledge */
    isFilledByDomainKnowledge: boolean;

    constructor(nativeDate: any) {
        this.day = nativeDate.day;
        this.month = nativeDate.month;
        this.year = nativeDate.year;
        this.originalDateStringResult = nativeDate.originalDateStringResult;
        this.isFilledByDomainKnowledge = nativeDate.isFilledByDomainKnowledge;
    }
}
/**
 * Represents a date result with additional properties.
 */
export class DateResult {
    /**  date */
    date: Date;
    /** original date string */
    originalDateStringResult: string;
    /** is filled by domain knowledge */
    isFilledByDomainKnowledge: boolean;
  
    constructor(nativeDateResult: any) {
        this.date = new Date(nativeDateResult.date);
        this.originalDateStringResult = nativeDateResult.originalDateStringResult;
        this.isFilledByDomainKnowledge = nativeDateResult.isFilledByDomainKnowledge;
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
 * Represents rectangle location of each document field
 */
export class Rectangle {

    /* x location */
    x: number;
    /* y location */
    y: number;
    /* rectangle width */
    width: number;
    /* rectangle height */
    height: number;

    constructor(nativeRect: any) {
        this.x = nativeRect.x;
        this.y = nativeRect.y;
        this.width = nativeRect.width;
        this.height = nativeRect.height;
    }
}
/**
 * Represents document field location for three alphabets 
 */
export class Location {
    latin?: Rectangle;
    arabic?: Rectangle;
    cyrillic?: Rectangle;
    greek?: Rectangle;
  
    constructor(nativeLocation: any) {
      this.latin = new Rectangle(nativeLocation.latin);
      this.arabic = new Rectangle(nativeLocation.arabic);
      this.cyrillic = new Rectangle(nativeLocation.cyrillic);
      this.greek = new Rectangle(nativeLocation.greek);
      }
  }

/**
 * Represents document side for document field for three alphabets
 */
export class Side {
    latin?: DocumentSide;
    arabic?: DocumentSide;
    cyrillic?: DocumentSide;
    greek?: DocumentSide;
  
    constructor(nativeSide: any) {
        this.latin = nativeSide.latin;
        this.arabic = nativeSide.arabic;
        this.cyrillic = nativeSide.cyrillic;
        this.greek = nativeSide.greek;
    }
}

/**
* Represents all of the alphabet types that BlinkID supports extracting.
*/
export const enum AlphabetType {
    /** The Latin alphabet type. */
    Latin = 0,
    /** The Arabic alphabet type. */
    Arabic = 1,
    /** The Cyrillic alphabet type. */
    Cyrillic = 2,
    /** The Greek alphabet type. */
    Greek = 3,
}

/**
* Represents string results for three alphabets
*/
export class StringResult {
    /*  All strings separated by new line */
    description?: string;
    /* String for field in latin alphabet */
    latin?: string;
    /* String for field in arabic alphabet */
    arabic?: string;
    /* String for field in cyrillic alphabet */
    cyrillic?: string;
    /* String for field in greek alphabet */
    greek?: string;
    /* Document field location */
    location?: Location;
    /*  Document field side */
    side?: Side;

    constructor(nativeStringResult: any) {
        this.description = nativeStringResult.description;
        this.latin = nativeStringResult.latin;
        this.arabic = nativeStringResult.arabic;
        this.cyrillic = nativeStringResult.cyrillic;
        this.greek = nativeStringResult.greek;
        this.location = nativeStringResult.location != undefined ? new Location(nativeStringResult.location) : undefined;
        this.side = nativeStringResult.side != undefined ? new Side(nativeStringResult.side): undefined;
    }
}

/**
* Define document side where the document field is located
*/
export const enum DocumentSide {
    /* The field was not detected */
    None,
    /* The field is located on the front side of the document */
    Front,
    /* The field is located on the back side of the document */
    Back
  }

/**
* Represents additional info on processing.
* Information about missing fields, invalid characters, extra presented fields for each document field and image extraction failures can be obtained. 
*/
export class AdditionalProcessingInfo {
    /** List of fields that were expected on the document but were missing. */
    missingMandatoryFields: FieldType[];
    /** List of fields that contained characters which were not expected in that field. */
    invalidCharacterFields: FieldType[];
    /** List of fields that weren't expected on the document but were present. */
    extraPresentFields: FieldType[];
    /** List of failed image extractions. */
    imageExtractionFailures: ImageExtractionType[];

    constructor(nativeAdditionalProcessingInfo: any) {
          this.missingMandatoryFields = Object.values(nativeAdditionalProcessingInfo.missingMandatoryFields);
          this.invalidCharacterFields = Object.values(nativeAdditionalProcessingInfo.invalidCharacterFields);
          this.extraPresentFields = Object.values(nativeAdditionalProcessingInfo.extraPresentFields);
          this.imageExtractionFailures = Object.values(nativeAdditionalProcessingInfo.imageExtractionFailures);
      }
  }

/**
 * Represents the type of scanned barcode
 */
export const enum BarcodeType {
    /** No barcode was scanned */
    None = 0,
    /** QR code was scanned */
    QRCode = 1,
    /** Data Matrix 2D barcode was scanned */
    DataMatrix = 2,
    /** UPC E barcode was scanned */
    UPCE = 3,
    /** UPC A barcode was scanned */
    UPCA = 4,
    /** EAN 8 barcode was scanned */
    EAN8 = 5,
    /** EAN 13 barcode was scanned */
    EAN13 = 6,
    /** Code 128 barcode was scanned */
    Code128 = 7,
    /** Code 39 barcode was scanned */
    Code39 = 8,
    /** ITF barcode was scanned */
    ITF = 9,
    /** Aztec 2D barcode was scanned */
    Aztec = 10,
    /** PDF417 2D barcode was scanned */
    PDF417 = 11
}

/**
 * Represents data extracted from the Driver's license.
 */
export class DriverLicenseDetailedInfo {

    /**  Restrictions to driving privileges for the driver license owner. */
    restrictions: StringResult;
    /** Additional privileges granted to the driver license owner. */
    endorsements: StringResult;
    /** The type of vehicle the driver license owner has privilege to drive. */
    vehicleClass: StringResult;
    /** The additional information on vehicle class. */
    vehicleClassesInfo: VehicleClassInfo[];
    /** The driver license conditions. */
    conditions: StringResult;

    constructor(nativeDriverLicenseDetailedInfo: any) {
        this.restrictions = nativeDriverLicenseDetailedInfo.restrictions;
        this.endorsements = nativeDriverLicenseDetailedInfo.endorsements;
        this.vehicleClass = nativeDriverLicenseDetailedInfo.vehicleClass;
        this.vehicleClassesInfo = nativeDriverLicenseDetailedInfo.vehicleClassesInfo;
        this.conditions = nativeDriverLicenseDetailedInfo.conditions;
    }
}

/**
 * Represents data extracted from the Driver's license.
 */
export class VehicleClassInfo {

    /**  The type of vehicle the driver license owner has privilege to drive. */
    vehicleClass: StringResult;
    /** The type of driver licence. */
    licenceType: StringResult;
    /** The date since licence is effective. */
    effectiveDate: StringResult;
    /** The date of expiry of licence. */
    expiryDate: Date;

    constructor(nativeVehicleClassInfo: any) {
        this.vehicleClass = nativeVehicleClassInfo.vehicleClass;
        this.licenceType = nativeVehicleClassInfo.licenceType;
        this.effectiveDate = nativeVehicleClassInfo.effectiveDate;
        this.expiryDate = nativeVehicleClassInfo.expiryDate;
    }
}

/**
* Defines the type of the extracted image.
*/
export const enum ImageExtractionType {
    /** Full document image. */
    FullDocument = 0,
    /** Face image. */
    Face = 1,
    /** Signature image. */
    Signature = 2
  }

/**
 * Gives more info on data match
 */
export class DataMatchResult {
    /** Data match result for the whole document. */
    stateForWholeDocument: DataMatchState;
    /** States for each data match field */
    states: DataMatchField[];
  
    constructor(nativeDataMatchResult: any) {
      this.stateForWholeDocument = nativeDataMatchResult.stateForWholeDocument;
      this.states = nativeDataMatchResult.states;
    }
  }
  
/**
 * Data-match state for document field
 */
export class DataMatchField {
    state: DataMatchState;
    constructor(nativeDataMatchState: any) {
        this.state = nativeDataMatchState.state;
    }
}


/**
 * Possible types of Machine Readable Travel Documents (MRTDs).
 */
export const enum MrtdDocumentType {
    /** Unknown document type */
    Unknown = 0,
    /** Identity card */
    IdentityCard = 1,
    /** Passport */
    Passport = 2,
    /** Visa */
    Visa = 3,
    /** US Green Card */
    GreenCard = 4,
    /** Malaysian PASS type IMM13P */
    MalaysianPassIMM13P = 5,
    /** Border Crossing Card */
    BorderCrossingCard = 6
}
/**
 * Possible types of documents scanned with IdBarcodeRecognizer.
 */
export const enum IdBarcodeDocumentType {
    /** No document was scanned */
    None = 0,
    /** AAMVACompliant document was scanned */
    AAMVACompliant = 1,
    /** Argentina ID document was scanned */
    ArgentinaID = 2,
    /** ArgentinaAlienID document was scanned */
    ArgentinaAlienID = 3,
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
    NotAvailable = 0,
    /** Black-and-white image scanned */
    BlackAndWhite = 1,
    /** Color image scanned */
    Color = 2
}

/**
 * Defines possible states of Moire pattern detection.
 */
export const enum ImageAnalysisDetectionStatus {
    /** Detection of Moire patterns was not performed. */
    NotAvailable = 0,

    /** Moire pattern not detected on input image. */
    NotDetected = 1,

    /** Moire pattern detected on input image. */
    Detected = 2
}

/// Defines possible document card rotation positions
export const enum  CardRotation {
    /** Zero degrees */
    Zero = 0,
    /** Clockwise 90 degrees */
    Clockwise90 = 1,
    /** Counter clockwise 90 degrees */
    CounterClockwise90 = 2,
    /** Upside down */
    UpsideDown = 3,
    /** Card rotation was not performed */
    None = 4
}

/// Defines possible card orientations
export const enum  CardOrientation {
    /** Horizontal card orientation */
    Horizontal = 0,
    /** Vertical card orientation */
    Vertical = 1,
    /** Detection was not performed */
    NotAvailable = 2
}

/**
 * Defines possible strictness levels for blur are glare detection.
 */
export const enum StrictnessLevel {
    /** The most strict level for blur are glare detection. */
    Strict = 0,

    /** The default strictness level for blur are glare detection. */
    Normal = 1,

    /** The least strict level for blur are glare detection. */
    Relaxed = 2
}

/**
 * Define level of anonymization performed on recognizer result.
 */
export const enum AnonymizationMode {
    /** Anonymization will not be performed. */
    None = 0,

    /** FullDocumentImage is anonymized with black boxes covering sensitive data. */
    ImageOnly = 1,

    /** Result fields containing sensitive data are removed from result. */
    FieldsOnly = 2,

    /** This mode is combination of ImageOnly and ResultFieldsOnly modes. */
    FullResult = 3
}

/** Represents the classification information. **/
export class ClassInfo {
    /** The document country. **/
    country: Country;
    /** The document region. **/
    region: Region;
    /** The type of the scanned document. **/
    type: Type;
    /** Flag that indicates if class info is empty */
    empty: boolean;
    /** The name of the country that issued the scanned document. */
    countryName: string;
    /** The ISO numeric code of the country that issued the scanned document. */
    isoNumericCountryCode: string;
    /** The 2 letter ISO code of the country that issued the scanned document. */
    isoAlpha2CountryCode: string;
    /** The 3 letter ISO code of the country that issued the scanned document. */
    isoAlpha3CountryCode: string;

    constructor(nativeClassInfo: any) {
        this.country = nativeClassInfo.country;
        this.region = nativeClassInfo.region;
        this.type = nativeClassInfo.type;
        this.empty = nativeClassInfo.empty;
        this.countryName = nativeClassInfo.countryName;
        this.isoNumericCountryCode = nativeClassInfo.isoNumericCountryCode;
        this.isoAlpha2CountryCode = nativeClassInfo.isoAlpha2CountryCode;
        this.isoAlpha3CountryCode = nativeClassInfo.isoAlpha3CountryCode;
    }
}

/**
 * Defines possible color and moire statuses determined from scanned image.
 */
export class ImageAnalysisResult {
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
    /** Document card rotation status determined from the scanned image. */
    cardRotation: CardRotation;
    /** Orientation determined from the scanned image. */
    cardOrientation: CardOrientation;
    /** RealID detection status determined from the scanned image. */
    realIdDetectionStatus: ImageAnalysisDetectionStatus;
    /**  Whether the image is blurred. */
    blurDetected: boolean;
    /**  Whether the image is blurred. */
    glareDetected: boolean;

    constructor(nativeImageAnalysisResult: any) {
        this.documentImageColorStatus = nativeImageAnalysisResult.documentImageColorStatus;
        this.documentImageMoireStatus = nativeImageAnalysisResult.documentImageMoireStatus;
        this.faceDetectionStatus = nativeImageAnalysisResult.faceDetectionStatus;
        this.mrzDetectionStatus = nativeImageAnalysisResult.mrzDetectionStatus;
        this.barcodeDetectionStatus = nativeImageAnalysisResult.barcodeDetectionStatus;
        this.cardRotation = nativeImageAnalysisResult.cardRotation;
        this.cardOrientation = nativeImageAnalysisResult.cardOrientation;
        this.realIdDetectionStatus = nativeImageAnalysisResult.realIdDetectionStatus;
        this.blurDetected = nativeImageAnalysisResult.blurDetected;
        this.glareDetected = nativeImageAnalysisResult.glareDetected;
    }
}

/**
 * Defines possible the document country from ClassInfo scanned with BlinkID or BlinkID Combined Recognizer
 */
export const enum Country {
    None = 0,
    Albania = 1,
    Algeria = 2,
    Argentina = 3,
    Australia = 4,
    Austria = 5,
    Azerbaijan = 6,
    Bahrain = 7,
    Bangladesh = 8,
    Belgium = 9,
    BosniaAndHerzegovina = 10,
    Brunei = 11,
    Bulgaria = 12,
    Cambodia = 13,
    Canada = 14,
    Chile = 15,
    Colombia = 16,
    CostaRica = 17,
    Croatia = 18,
    Cyprus = 19,
    Czechia = 20,
    Denmark = 21,
    DominicanRepublic = 22,
    Egypt = 23,
    Estonia = 24,
    Finland = 25,
    France = 26,
    Georgia = 27,
    Germany = 28,
    Ghana = 29,
    Greece = 30,
    Guatemala = 31,
    HongKong = 32,
    Hungary = 33,
    India = 34,
    Indonesia = 35,
    Ireland = 36,
    Israel = 37,
    Italy = 38,
    Jordan = 39,
    Kazakhstan = 40,
    Kenya = 41,
    Kosovo = 42,
    Kuwait = 43,
    Latvia = 44,
    Lithuania = 45,
    Malaysia = 46,
    Maldives = 47,
    Malta = 48,
    Mauritius = 49,
    Mexico = 50,
    Morocco = 51,
    Netherlands = 52,
    NewZealand = 53,
    Nigeria = 54,
    Pakistan = 55,
    Panama = 56,
    Paraguay = 57,
    Philippines = 58,
    Poland = 59,
    Portugal = 60,
    PuertoRico = 61,
    Qatar = 62,
    Romania = 63,
    Russia = 64,
    SaudiArabia = 65,
    Serbia = 66,
    Singapore = 67,
    Slovakia = 68,
    Slovenia = 69,
    SouthAfrica = 70,
    Spain = 71,
    Sweden = 72,
    Switzerland = 73,
    Taiwan = 74,
    Thailand = 75,
    Tunisia = 76,
    Turkey = 77,
    UAE = 78,
    Uganda = 79,
    UK = 80,
    Ukraine = 81,
    Usa = 82,
    Vietnam = 83,
    Brazil = 84,
    Norway = 85,
    Oman = 86,
    Ecuador = 87,
    ElSalvador = 88,
    SriLanka = 89,
    Peru = 90,
    Uruguay = 91,
    Bahamas = 92,
    Bermuda = 93,
    Bolivia = 94,
    China = 95,
    EuropeanUnion = 96,
    Haiti = 97,
    Honduras = 98,
    Iceland = 99,
    Japan = 100,
    Luxembourg = 101,
    Montenegro = 102,
    Nicaragua = 103,
    SouthKorea = 104,
    Venezuela = 105,
    Afghanistan = 106,
    AlandIslands = 107,
    AmericanSamoa = 108,
    Andorra = 109,
    Angola = 110,
    Anguilla = 111,
    Antarctica = 112,
    AntiguaAndBarbuda = 113,
    Armenia = 114,
    Aruba = 115,
    BailiwickOfGuernsey = 116,
    BailiwickOfJersey = 117,
    Barbados = 118,
    Belarus = 119,
    Belize = 120,
    Benin = 121,
    Bhutan = 122,
    BonaireSaintEustatiusAndSaba = 123,
    Botswana = 124,
    BouvetIsland = 125,
    BritishIndianOceanTerritory = 126,
    BurkinaFaso = 127,
    Burundi = 128,
    Cameroon = 129,
    CapeVerde = 130,
    CaribbeanNetherlands = 131,
    CaymanIslands = 132,
    CentralAfricanRepublic = 133,
    Chad = 134,
    ChristmasIsland = 135,
    CocosIslands = 136,
    Comoros = 137,
    Congo = 138,
    CookIslands = 139,
    Cuba = 140,
    Curacao = 141,
    DemocraticRepublicOfTheCongo = 142,
    Djibouti = 143,
    Dominica = 144,
    EastTimor = 145,
    EquatorialGuinea = 146,
    Eritrea = 147,
    Ethiopia = 148,
    FalklandIslands = 149,
    FaroeIslands = 150,
    FederatedStatesOfMicronesia = 151,
    Fiji = 152,
    FrenchGuiana = 153,
    FrenchPolynesia = 154,
    FrenchSouthernTerritories = 155,
    Gabon = 156,
    Gambia = 157,
    Gibraltar = 158,
    Greenland = 159,
    Grenada = 160,
    Guadeloupe = 161,
    Guam = 162,
    Guinea = 163,
    GuineaBissau = 164,
    Guyana = 165,
    HeardIslandAndMcdonaldIslands = 166,
    Iran = 167,
    Iraq = 168,
    IsleOfMan = 169,
    IvoryCoast = 170,
    Jamaica = 171,
    Kiribati = 172,
    Kyrgyzstan = 173,
    Laos = 174,
    Lebanon = 175,
    Lesotho = 176,
    Liberia = 177,
    Libya = 178,
    Liechtenstein = 179,
    Macau = 180,
    Madagascar = 181,
    Malawi = 182,
    Mali = 183,
    MarshallIslands = 184,
    Martinique = 185,
    Mauritania = 186,
    Mayotte = 187,
    Moldova = 188,
    Monaco = 189,
    Mongolia = 190,
    Montserrat = 191,
    Mozambique = 192,
    Myanmar = 193,
    Namibia = 194,
    Nauru = 195,
    Nepal = 196,
    NewCaledonia = 197,
    Niger = 198,
    Niue = 199,
    NorfolkIsland = 200,
    NorthernCyprus = 201,
    NorthernMarianaIslands = 202,
    NorthKorea = 203,
    NorthMacedonia = 204,
    Palau = 205,
    Palestine = 206,
    PapuaNewGuinea = 207,
    Pitcairn = 208,
    Reunion = 209,
    Rwanda = 210,
    SaintBarthelemy = 211,
    SaintHelenaAscensionAndTristianDaCunha = 212,
    SaintKittsAndNevis = 213,
    SaintLucia = 214,
    SaintMartin = 215,
    SaintPierreAndMiquelon = 216,
    SaintVincentAndTheGrenadines = 217,
    Samoa = 218,
    SanMarino = 219,
    SaoTomeAndPrincipe = 220,
    Senegal = 221,
    Seychelles = 222,
    SierraLeone = 223,
    SintMaarten = 224,
    SolomonIslands = 225,
    Somalia = 226,
    SouthGeorgiaAndTheSouthSandwichIslands = 227,
    SouthSudan = 228,
    Sudan = 229,
    Suriname = 230,
    SvalbardAndJanMayen = 231,
    Eswatini = 232,
    Syria = 233,
    Tajikistan = 234,
    Tanzania = 235,
    Togo = 236,
    Tokelau = 237,
    Tonga = 238,
    TrinidadAndTobago = 239,
    Turkmenistan = 240,
    TurksAndCaicosIslands = 241,
    Tuvalu = 242,
    UnitedStatesMinorOutlyingIslands = 243,
    Uzbekistan = 244,
    Vanuatu = 245,
    VaticanCity = 246,
    VirginIslandsBritish = 247,
    VirginIslandsUs = 248,
    WallisAndFutuna = 249,
    WesternSahara = 250,
    Yemen = 251,
    Yugoslavia = 252,
    Zambia = 253,
    Zimbabwe = 254,
    SchengenArea = 255 
}

/**
 * Defines possible the document country's region from ClassInfo scanned with BlinkID or BlinkID Combined Recognizer
 */
export const enum Region {
    None = 0,
    Alabama = 1,
    Alaska = 2,
    Alberta = 3,
    Arizona = 4,
    Arkansas = 5,
    AustralianCapitalTerritory = 6,
    BritishColumbia = 7,
    California = 8,
    Colorado = 9,
    Connecticut = 10,
    Delaware = 11,
    DistrictOfColumbia = 12,
    Florida = 13,
    Georgia = 14,
    Hawaii = 15,
    Idaho = 16,
    Illinois = 17,
    Indiana = 18,
    Iowa = 19,
    Kansas = 20,
    Kentucky = 21,
    Louisiana = 22,
    Maine = 23,
    Manitoba = 24,
    Maryland = 25,
    Massachusetts = 26,
    Michigan = 27,
    Minnesota = 28,
    Mississippi = 29,
    Missouri = 30,
    Montana = 31,
    Nebraska = 32,
    Nevada = 33,
    NewBrunswick = 34,
    NewHampshire = 35,
    NewJersey = 36,
    NewMexico = 37,
    NewSouthWales = 38,
    NewYork = 39,
    NorthernTerritory = 40,
    NorthCarolina = 41,
    NorthDakota = 42,
    NovaScotia = 43,
    Ohio = 44,
    Oklahoma = 45,
    Ontario = 46,
    Oregon = 47,
    Pennsylvania = 48,
    Quebec = 49,
    Queensland = 50,
    RhodeIsland = 51,
    Saskatchewan = 52,
    SouthAustralia = 53,
    SouthCarolina = 54,
    SouthDakota = 55,
    Tasmania = 56,
    Tennessee = 57,
    Texas = 58,
    Utah = 59,
    Vermont = 60,
    Victoria = 61,
    Virginia = 62,
    Washington = 63,
    WesternAustralia = 64,
    WestVirginia = 65,
    Wisconsin = 66,
    Wyoming = 67,
    Yukon = 68,
    CiudadDeMexico = 69,
    Jalisco = 70,
    NewfoundlandAndLabrador = 71,
    NuevoLeon = 72,
    BajaCalifornia = 73,
    Chihuahua = 74,
    Guanajuato = 75,
    Guerrero = 76,
    Mexico = 77,
    Michoacan = 78,
    NewYorkCity = 79,
    Tamaulipas = 80,
    Veracruz = 81,
    Chiapas = 82,
    Coahuila = 83,
    Durango = 84,
    GuerreroCocula = 85,
    GuerreroJuchitan = 86,
    GuerreroTepecoacuilco = 87,
    GuerreroTlacoapa = 88,
    Gujarat = 89,
    Hidalgo = 90,
    Karnataka = 91,
    Kerala = 92,
    KhyberPakhtunkhwa = 93,
    MadhyaPradesh = 94,
    Maharashtra = 95,
    Morelos = 96,
    Nayarit = 97,
    Oaxaca = 98,
    Puebla = 99,
    Punjab = 100,
    Queretaro = 101,
    SanLuisPotosi = 102,
    Sinaloa = 103,
    Sonora = 104,
    Tabasco = 105,
    TamilNadu = 106,
    Yucatan = 107,
    Zacatecas = 108,
    Aguascalientes = 109,
    BajaCaliforniaSur = 110,
    Campeche = 111,
    Colima = 112,
    QuintanaRooBenitoJuarez = 113,
    QuintanaRoo = 114,
    QuintanaRooSolidaridad = 115,
    Tlaxcala = 116,
    QuintanaRooCozumel = 117,
    SaoPaolo = 118,
    RioDeJaneiro = 119,
    RioGrandeDoSul = 120,
    NorthwestTerritories = 121,
    Nunavut = 122,
    PrinceEdwardIsland = 123,
    DistritoFederal = 124,
    Maranhao = 125,
    MatoGrosso = 126,
    MinasGerais = 127,
    Para = 128,
    Parana = 129,
    Pernambuco = 130,
    SantaCatarina = 131,
    AndhraPradesh = 132,
    Ceara = 133,
    Goias = 134,
    GuerreroAcapulcoDeJuarez = 135,
    Haryana = 136,
    Sergipe = 137,
    Alagos = 138,
    Bangsamoro = 139
}

/**
 * Defines possible the document type from ClassInfo scanned with BlinkID or BlinkID Combined Recognizer
 */
export const enum Type {
    None = 0,
    ConsularId = 1,
    Dl = 2,
    DlPublicServicesCard = 3,
    EmploymentPass = 4,
    FinCard = 5,
    Id = 6,
    MultipurposeId = 7,
    MyKad = 8,
    MyKid = 9,
    MyPR = 10,
    MyTentera = 11,
    PanCard = 12,
    ProfessionalId = 13,
    PublicServicesCard = 14,
    ResidencePermit = 15,
    ResidentId = 16,
    TemporaryResidencePermit = 17,
    VoterId = 18,
    WorkPermit = 19,
    iKad = 20,
    MilitaryId = 21,
    MyKas = 22,
    SocialSecurityCard = 23,
    HealthInsuranceCard = 24,
    Passport = 25,
    SPass = 26,
    AddressCard = 27,
    AlienId = 28,
    AlienPassport = 29,
    GreenCard = 30,
    MinorsId = 31,
    PostalId = 32,
    ProfessionalDl = 33,
    TaxId = 34,
    WeaponPermit = 35,
    Visa = 36,
    BorderCrossingCard = 37,
    DriverCard = 38,
    GlobalEntryCard = 39,
    Mypolis = 40,
    NexusCard = 41,
    PassportCard = 42,
    ProofOfAgeCard = 43,
    RefugeeId = 44,
    TribalId = 45,
    VeteranId = 46,
    CitizenshipCertificate = 47,
    MyNumberCard = 48,
    ConsularPassport = 49,
    MinorsPassport = 50,
    MinorsPublicServicesCard = 51,
    DrivingPrivilegeCard = 52,
    AsylumRequest = 53,
    DriverQualificationCard = 54,
    ProvisionalDl = 55,
    RefugeePassport = 56,
    SpecialId = 57,
    UniformedServicesId = 58,
    ImmigrantVisa = 59,
    ConsularVoterId = 60,
    TwicCard = 61,
    ExitEntryPermit = 62,
    MainlandTravelPermitTaiwan = 63,
    NbiClearance = 64,
    ProofOfRegistration = 65,
    TemporaryProtectionPermit = 66,
    AfghanCitizenCard = 67,
    EId = 68,
    Pass = 69,
    SisId = 70,
    AsicCard = 71,
    BidoonCard = 72,
    InterimHealthInsuranceCard = 73,
    NonVoterId = 74,
    ReciprocalHealthInsuranceCard = 75,
    VehicleRegistration = 76,
    EsaadCard = 77,
}

export const enum FieldType {
    AdditionalAddressInformation = 0,
    AdditionalNameInformation = 1,
    AdditionalOptionalAddressInformation = 2,
    AdditionalPersonalIdNumber = 3,
    Address = 4,
    ClassEffectiveDate = 5,
    ClassExpiryDate = 6,
    Conditions = 7,
    DateOfBirth = 8,
    DateOfExpiry = 9,
    DateOfIssue = 10,
    DocumentAdditionalNumber = 11,
    DocumentOptionalAdditionalNumber = 12,
    DocumentNumber = 13,
    Employer = 14,
    Endorsements = 15,
    FathersName = 16,
    FirstName = 17,
    FullName = 18,
    IssuingAuthority = 19,
    LastName = 20,
    LicenceType = 21,
    LocalizedName = 22,
    MaritalStatus = 23,
    MothersName = 24,
    Mrz = 25,
    Nationality = 26,
    PersonalIdNumber = 27,
    PlaceOfBirth = 28,
    Profession = 29,
    Race = 30,
    Religion = 31,
    ResidentialStatus = 32,
    Restrictions = 33,
    Sex = 34,
    VehicleClass = 35,
    BloodType = 36,
    Sponsor = 37,
    VisaType = 38,
    DocumentSubtype = 39,
    Remarks = 40,
    ResidencePermitType = 41,
    ManufacturingYear = 42,
    VehicleType = 43,
    DependentDateOfBirth = 44,
    DependentSex = 45,
    DependentDocumentNumber = 46,
    DependentFullName = 47,
    EligibilityCategory = 48,
    SpecificDocumentValidity = 49,
    VehicleOwner = 50,
}

/** Defines the data extracted from the barcode. */
export class BarcodeResult {

    /** Type of the barcode scanned */
    barcodeType: BarcodeType;
    /** Byte array with result of the scan */
    rawData: string;
    /** Retrieves content of scanned data */
    stringData: string;
    /** Flag indicating uncertain scanning data */
    uncertain: boolean;
    /** The first name of the document owner. */
    firstName: string;
    /** The middle name of the document owner. */
    middleName: string;
    /** The last name of the document owner. */
    lastName: string;
    /** The full name of the document owner. */
    fullName: string;
    /** The additional name information of the document owner. */
    additionalNameInformation: string;
    /** The address of the document owner. */
    address: string;
    /** The place of birth of the document owner. */
    placeOfBirth: string;
    /** The nationality of the documet owner. */
    nationality: string;
    /** The race of the document owner. */
    race: string;
    /** The religion of the document owner. */
    religion: string;
    /** The profession of the document owner. */
    profession: string;
    /** The marital status of the document owner. */
    maritalStatus: string;
    /** The residential stauts of the document owner. */
    residentialStatus: string;
    /** The employer of the document owner. */
    employer: string;
    /** The sex of the document owner. */
    sex: string;
    /** The date of birth of the document owner. */
    dateOfBirth: Date;
    /** The date of issue of the document. */
    dateOfIssue: Date;
    /** The date of expiry of the document. */
    dateOfExpiry: Date;
    /** The document number. */
    documentNumber: string;
    /**  The personal identification number. */
    personalIdNumber: string;
    /** The additional number of the document. */
    documentAdditionalNumber: string;
    /** The issuing authority of the document. */
    issuingAuthority: string;
    /** The street address portion of the document owner. */
    street: string;
    /** The postal code address portion of the document owner. */
    postalCode: string;
    /** The city address portion of the document owner. */
    city: string;
    /** The jurisdiction code address portion of the document owner. */
    jurisdiction: string;
    /** The driver license detailed info. */
    driverLicenseDetailedInfo: DriverLicenseDetailedInfo;
    /** Flag that indicates if barcode result is empty */
    empty: boolean;
    /** Document specific extended elements that contain all barcode fields in their original form. Currently this is only filled for AAMVACompliant documents. */
    extendedElements: BarcodeElements;

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

        /** The middle name of the document owner. */
        this.middleName = nativeBarcodeResult.middleName;

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

        /** Document specific extended elements that contain all barcode fields in their original form. Currently this is only filled for AAMVACompliant documents. */
        this.extendedElements = nativeBarcodeResult.extendedElements != null ? new BarcodeElements(nativeBarcodeResult.extendedElements) : null;
    }
}

export const enum BarcodeElementKey {
        //==============================================================/
        //============== 1. DETERMINING BARCODE VERSION ================/
        //==============================================================/

        /**
        Mandatory on all driver's licenses. All barcodes which are using 3-track magnetic
        stripe encoding used in the interest of smoothing a transition from legacy documents
        shall be designated as "Magnetic". All barcodes which are using compact encoding
        compliant with ISO/IEC 18013-2 shall be designated as "Compact". All barcodes (majority
        compliant with Mandatory PDF417 Bar Code of the American Association of Motor Vehicle
        Administrators (AAMVA Card Design Standard from AAMVA DL/ID-2000 standard to DL/ID-2013
        shall be designated as "AAMVA".
        */
        DocumentType = 0,

        /**
        Mandatory on all driver's licenses.

        AAMVA Version Number = This is a decimal value between 0 and 99 that
        specifies the version level of the PDF417 bar code format. Version "0" and "00"
        is reserved for bar codes printed to the specification of the American Association
        of Motor Vehicle Administrators (AAMVA prior to the adoption of the AAMVA DL/ID-2000
        standard.

        - All barcodes compliant with AAMVA DL/ID-2000 standard shall be designated Version "01."
        - All barcodes compliant with AAMVA Card Design Specification version 1.0, dated 09-2003
        shall be designated Version "02."
        - All barcodes compliant with AAMVA Card Design Specification version 2.0, dated 03-2005
        shall be designated Version "03."
        - All barcodes compliant with AAMVA Card Design Standard version 1.0, dated 07-2009
        shall be designated Version "04."
        - All barcodes compliant with AAMVA Card Design Standard version 1.0, dated 07-2010
        shall be designated Version "05."
        - All barcodes compliant with AAMVA Card Design Standard version 1.0, dated 07-2011
        shall be designated Version "06".
        - All barcodes compliant with AAMVA Card Design Standard version 1.0, dated 06-2012
        shall be designated Version "07".
        - All barcodes compliant with this current AAMVA standard shall be designated "08".

        Should a need arise requiring major revision to the format, this field provides the
        means to accommodate additional revision.

        If the document type is not "AAMVA", this field defines the version number of the
        given document type's standard.
        */
        StandardVersionNumber = 1,

        //==============================================================/
        //==========          2. PERSONAL DATA KEYS          ===========/
        //==============================================================/

        /**
        Mandatory on all AAMVA, Magnetic and Compact barcodes.

        Family name of the cardholder. (Family name is sometimes also called "last name" or "surname."
        Collect full name for record, print as many characters as possible on portrait side of DL/ID.
        */
        CustomerFamilyName = 2,

        /**
        Mandatory on all AAMVA, Magnetic and Compact barcodes.

        First name of the cardholder.
        */
        CustomerFirstName = 3,

        /**
        Mandatory on all AAMVA, Magnetic and Compact barcodes.

        Full name of the individual holding the Driver's License or ID.

        The Name field contains up to four portions, separated with the "," delimiter:
        Last Name (required
        , (required
        First Name (required
        , (required if other name portions follow, otherwise optional
        Middle Name(s (optional
        , (required if other name portions follow, otherwise optional
        Suffix (optional
        , (optional

        If the individual has more than one middle name they are separated with space.
        */
        CustomerFullName = 4,

        /**
        Mandatory on all AAMVA, Magnetic and Compact barcodes.

        Date on which the cardholder was born. (MMDDCCYY format
        */
        DateOfBirth = 5,

        /**
        Mandatory on all AAMVA, Magnetic barcodes.
        Optional on Compact barcodes.

        Gender of the cardholder. 1 = male, 2 = female.
        */
        Sex = 6,

        /**
        Mandatory on AAMVA 02, 03, 04, 05, 06, 07, 08 barcodes.
        Optional on AAMVA 01, Magnetic and Compact barcodes.

        Color of cardholder's eyes. (ANSI D-20 codes

        Code   Description
        BLK    Black
        BLU    Blue
        BRO    Brown
        GRY    Gray
        GRN    Green
        HAZ    Hazel
        MAR    Maroon
        PNK    Pink
        DIC    Dichromatic
        UNK    Unknown
        */
        EyeColor = 7,

        /**
        Mandatory on all AAMVA and Magnetic barcodes.

        On compact barcodes, use kFullAddress.

        Street portion of the cardholder address.
        The place where the registered driver of a vehicle (individual or corporation
        may be contacted such as a house number, street address, etc.
        */
        AddressStreet = 8,

        /**
        Mandatory on all AAMVA and Magnetic barcodes.

        On compact barcodes, use kFullAddress.

        City portion of the cardholder address.
        */
        AddressCity = 9,

        /**
        Mandatory on all AAMVA and Magnetic barcodes.

        On compact barcodes, use kFullAddress.

        State portion of the cardholder address.
        */
        AddressJurisdictionCode = 10,

        /**
        Mandatory on all AAMVA and Magnetic barcodes.

        On compact barcodes, use kFullAddress.

        Postal code portion of the cardholder address in the U.S. and Canada. If the
        trailing portion of the postal code in the U.S. is not known, zeros can be used
        to fill the trailing set of numbers up to nine (9 digits.
        */
        AddressPostalCode = 11,

        /**
        Mandatory on all AAMVA and Magnetic barcodes.
        Optional on Compact barcodes.

        Full address of the individual holding the Driver's License or ID.

        The full address field contains up to four portions, separated with the "," delimiter:
        Street Address (required
        , (required if other address portions follow, otherwise optional
        City (optional
        , (required if other address portions follow, otherwise optional
        Jurisdiction Code (optional
        , (required if other address portions follow, otherwise optional
        ZIP - Postal Code (optional

        */
        FullAddress = 12,

        /**
        Mandatory on AAMVA 02, 03, 04, 05, 06, 07, 08 and Compact barcodes.
        Optional on AAMVA 01 and Magnetic barcodes.

        Height of cardholder, either in Inches or in Centimeters.

        Inches (in = number of inches followed by " in"
        example = 6'1'' = "73 in"

        Centimeters (cm = number of centimeters followed by " cm"
        example = 181 centimeters = "181 cm"
        */
        Height = 13,

        /**
        Mandatory on AAMVA 02, 03, 04, 05, 06, 07, 08 and Compact barcodes.
        Optional on AAMVA 01 and Magnetic barcodes.

        Height of cardholder in Inches.
        Example = 5'9'' = "69".
        */
        HeightIn = 14,

        /**
        Mandatory on AAMVA 02, 03, 04, 05, 06, 07, 08 Compact barcodes.
        Optional on AAMVA 01 and Magnetic barcodes.

        Height of cardholder in Centimeters.
        Example = 180 Centimeters = "180".
        */
        HeightCm = 15,

        /**
        Mandatory on AAMVA 04, 05, 06, 07, 08 barcodes.
        Optional on AAMVA 01, 02, 03, Magnetic and Compcat barcodes.

        Middle name(s of the cardholder. In the case of multiple middle names they
        shall be separated by space " ".
        */
        CustomerMiddleName = 16,

        /**
        Optional on all AAMVA, Magnetic and Compact barcodes.

        Bald, black, blonde, brown, gray, red/auburn, sandy, white, unknown. If the issuing
        jurisdiction wishes to abbreviate colors, the three-character codes provided in ANSI D20 must be
        used.

        Code   Description
        BAL    Bald
        BLK    Black
        BLN    Blond
        BRO    Brown
        GRY    Grey
        RED    Red/Auburn
        SDY    Sandy
        WHI    White
        UNK    Unknown
        */
        HairColor = 17,

        /**
        Mandatory on AAMVA 02 barcodes.
        Optional on AAMVA 01, 03, 04, 05, 06, 07, 08, Magnetic and Compact barcodes.

        Name Suffix (If jurisdiction participates in systems requiring name suffix (PDPS, CDLIS, etc.,
        the suffix must be collected and displayed on the DL/ID and in the MRT.
        - JR (Junior
        - SR (Senior
        - 1ST or I (First
        - 2ND or II (Second
        - 3RD or III (Third
        - 4TH or IV (Fourth
        - 5TH or V (Fifth
        - 6TH or VI (Sixth
        - 7TH or VII (Seventh
        - 8TH or VIII (Eighth
        - 9TH or IX (Ninth
        */
        NameSuffix = 18,

        /**
        Optional on all AAMVA and Compact barcodes.

        Other name by which the cardholder is known. ALTERNATIVE NAME(S of the individual
        holding the Driver License or ID.

        The Name field contains up to four portions, separated with the "," delimiter:
        AKA Last Name (required
        , (required
        AKA First Name (required
        , (required if other name portions follow, otherwise optional
        AKA Middle Name(s (optional
        , (required if other name portions follow, otherwise optional
        AKA Suffix (optional
        , (optional

        If the individual has more than one AKA middle name they are separated with space.
        */
        AKAFullName = 19,

        /**
        Optional on all AAMVA and Compact barcodes.

        Other family name by which the cardholder is known.
        */
        AKAFamilyName = 20,

        /**
        Optional on all AAMVA and Compact barcodes.

        Other given name by which the cardholder is known
        */
        AKAGivenName = 21,

        /**
        Optional on all AAMVA and Compact barcodes.

        Other suffix by which the cardholder is known.

        The Suffix Code Portion, if submitted, can contain only the Suffix Codes shown in the following table (e.g., Andrew Johnson, III = JOHNSON@ANDREW@@3RD:

        Suffix     Meaning or Synonym
        JR         Junior
        SR         Senior or Esquire 1ST First
        2ND        Second
        3RD        Third
        4TH        Fourth
        5TH        Fifth
        6TH        Sixth
        7TH        Seventh
        8TH        Eighth
        9TH        Ninth
        */
        AKASuffixName = 22,

        /**
        Mandatory on AAMVA 02 barcodes.
        Optional on AAMVA 01, 03, 04, 05, 06, 07, 08, Magnetic and Compact barcodes.

        Indicates the approximate weight range of the cardholder:
        0 = up to 31 kg (up to 70 lbs
        1 = 32 – 45 kg (71 – 100 lbs
        2 = 46 - 59 kg (101 – 130 lbs
        3 = 60 - 70 kg (131 – 160 lbs
        4 = 71 - 86 kg (161 – 190 lbs
        5 = 87 - 100 kg (191 – 220 lbs
        6 = 101 - 113 kg (221 – 250 lbs
        7 = 114 - 127 kg (251 – 280 lbs
        8 = 128 – 145 kg (281 – 320 lbs
        9 = 146+ kg (321+ lbs
        */
        WeightRange = 23,

        /**
        Mandatory on AAMVA 02 barcodes.
        Optional on AAMVA 01, 03, 04, 05, 06, 07, 08, Magnetic and Compact barcodes.

        Cardholder weight in pounds Example = 185 lb = "185"
        */
        WeightPounds = 24,

        /**
        Mandatory on AAMVA 02 barcodes.
        Optional on AAMVA 01, 03, 04, 05, 06, 07, 08, Magnetic and Compact barcodes.

        Cardholder weight in kilograms Example = 84 kg = "084"
        */
        WeightKilograms = 25,

        /**
        Mandatory on all AAMVA and Compact barcodes.

        The number assigned or calculated by the issuing authority.
        */
        CustomerIdNumber = 26,

        /**
        Mandatory on AAMVA 04, 05, 06, 07, 08 barcodes.
        Optional on Compact barcodes.

        A code that indicates whether a field has been truncated (T, has not been
        truncated (N, or – unknown whether truncated (U.
        */
        FamilyNameTruncation = 27,

        /**
        Mandatory on AAMVA 04, 05, 06, 07, 08 barcodes.
        Optional on Compact barcodes.

        A code that indicates whether a field has been truncated (T, has not been
        truncated (N, or – unknown whether truncated (U.
        */
        FirstNameTruncation = 28,

        /**
        Mandatory on AAMVA 04, 05, 06, 07, 08 barcodes.

        A code that indicates whether a field has been truncated (T, has not been
        truncated (N, or – unknown whether truncated (U.
        */
        MiddleNameTruncation = 29,

        /**
        Optional on AAMVA 02, 03, 04, 05, 06, 07, 08 and Compact barcodes.

        Country and municipality and/or state/province.
        */
        PlaceOfBirth = 30,

        /**
        Optional on all AAMVA barcodes.

        On Compact barcodes, use kFullAddress.

        Second line of street portion of the cardholder address.
        */
        AddressStreet2 = 31,

        /**
        Optional on AAMVA 02, 03, 04, 05, 06, 07, 08 and Compact barcodes.

        Codes for race or ethnicity of the cardholder, as defined in ANSI D20.

        Race:
        Code   Description
        AI     Alaskan or American Indian (Having Origins in Any of The Original Peoples of
                North America, and Maintaining Cultural Identification Through Tribal
                Affiliation of Community Recognition
        AP     Asian or Pacific Islander (Having Origins in Any of the Original Peoples of
                the Far East, Southeast Asia, or Pacific Islands. This Includes China, India,
                Japan, Korea, the Philippines Islands, and Samoa
        BK     Black (Having Origins in Any of the Black Racial Groups of Africa
        W      White (Having Origins in Any of The Original Peoples of Europe, North Africa,
                or the Middle East

        Ethnicity:
        Code   Description
        H      Hispanic Origin (A Person of Mexican, Puerto Rican, Cuban, Central or South
                American or Other Spanish Culture or Origin, Regardless of Race
        O      Not of Hispanic Origin (Any Person Other Than Hispanic
        U      Unknown

        */
        RaceEthnicity = 32,

        /**
        Optional on AAMVA 01 barcodes.

        PREFIX to Driver Name. Freeform as defined by issuing jurisdiction.
        */
        NamePrefix = 33,

        /**
        Mandatory on AAMVA 02, 03, 04, 05, 06, 07, 08 and Compact barcodes.

        Country in which DL/ID is issued. U.S. = USA, Canada = CAN.
        */
        CountryIdentification = 34,

        /**
        Optional on AAMVA version 01.

        Driver Residence Street Address 1.
        */
        ResidenceStreetAddress = 35,

        /**
        Optional on AAMVA version 01.

        Driver Residence Street Address 2.
        */
        ResidenceStreetAddress2 = 36,

        /**
        Optional on AAMVA version 01.

        Driver Residence City
        */
        ResidenceCity = 37,

        /**
        Optional on AAMVA version 01.

        Driver Residence Jurisdiction Code.
        */
        ResidenceJurisdictionCode = 38,

        /**
        Optional on AAMVA 01 barcodes.

        Driver Residence Postal Code.
        */
        ResidencePostalCode = 39,

        /**
        Optional on AAMVA 01 barcodes.

        Full residence address of the individual holding the Driver's License or ID.

        The full address field contains up to four portions, separated with the "," delimiter:
        Residence Street Address (required
        , (required if other address portions follow, otherwise optional
        Residence City (optional
        , (required if other address portions follow, otherwise optional
        Residence Jurisdiction Code (optional
        , (required if other address portions follow, otherwise optional
        Residence ZIP - Residence Postal Code (optional
        */
        ResidenceFullAddress = 40,

        /**
        Optional on AAMVA 05, 06, 07, 08 barcodes.

        Date on which the cardholder turns 18 years old. (MMDDCCYY format
        */
        Under18 = 41,

        /**
        Optional on AAMVA 05, 06, 07, 08 barcodes.

        Date on which the cardholder turns 19 years old. (MMDDCCYY format
        */
        Under19 = 42,

        /**
        Optional on AAMVA 05, 06, 07, 08 barcodes.

        Date on which the cardholder turns 21 years old. (MMDDCCYY format
        */
        Under21 = 43,

        /**
        Optional on AAMVA version 01.

        The number assigned to the individual by the Social Security Administration.
        */
        SocialSecurityNumber = 44,

        /**
        Optional on AAMVA version 01.

        Driver "AKA" Social Security Number. FORMAT SAME AS DRIVER SOC SEC NUM. ALTERNATIVE NUMBERS(S used as SS NUM.
        */
        AKASocialSecurityNumber = 45,

        /**
        Optional on AAMVA 01 barcodes.

        ALTERNATIVE MIDDLE NAME(s or INITIALS of the individual holding the Driver License or ID.
        Hyphenated names acceptable, spaces between names acceptable, but no other
        use of special symbols.
        */
        AKAMiddleName = 46,

        /**
        Optional on AAMVA 01 barcodes.

        ALTERNATIVE PREFIX to Driver Name. Freeform as defined by issuing jurisdiction.
        */
        AKAPrefixName = 47,

        /**
        Optional on AAMVA 01, 06, 07, 08 barcodes.

        Field that indicates that the cardholder is an organ donor = "1".
        */
        OrganDonor = 48,

        /**
        Optional on AAMVA 07, 08 barcodes.

        Field that indicates that the cardholder is a veteran = "1"
        */
        Veteran = 49,

        /**
        Optional on AAMVA 01. (MMDDCCYY format

        ALTERNATIVE DATES(S given as date of birth.
        */
        AKADateOfBirth = 50,

        //==============================================================/
        //==========          3. LICENSE DATA KEYS          ============/
        //==============================================================/

        /**
        Mandatory on all AAMVA, Magnetic and Compact barcodes.

        This number uniquely identifies the issuing jurisdiction and can
        be obtained by contacting the ISO Issuing Authority (AAMVA
        */
        IssuerIdentificationNumber = 51,

        /**
        Mandatory on all AAMVA, Magnetic and Compact barcodes.

        If the document is non expiring then "Non expiring" is written in this field.

        Date on which the driving and identification privileges granted by the document are
        no longer valid. (MMDDCCYY format
        */
        DocumentExpirationDate = 52,

        /**
        Mandatory on all AAMVA and Compact barcodes.
        Optional on Magnetic barcodes.

        Jurisdiction Version Number = This is a decimal value between 0 and 99 that
        specifies the jurisdiction version level of the PDF417 barcode format.
        Notwithstanding iterations of this standard, jurisdictions implement incremental
        changes to their barcodes, including new jurisdiction-specific data, compression
        algorithms for digitized images, digital signatures, or new truncation
        conventions used for names and addresses. Each change to the barcode format
        within each AAMVA version (above must be noted, beginning with Jurisdiction
        Version 00.
        */
        JurisdictionVersionNumber = 53,

        /**
        Mandatory on all AAMVA and Magnetic barcodes.

        Jurisdiction-specific vehicle class / group code, designating the type
        of vehicle the cardholder has privilege to drive.
        */
        JurisdictionVehicleClass = 54,

        /**
        Mandatory on all AAMVA barcodes.
        Optional on Magnetic barcodes.

        Jurisdiction-specific codes that represent restrictions to driving
        privileges (such as airbrakes, automatic transmission, daylight only, etc..
        */
        JurisdictionRestrictionCodes = 55,

        /**
        Mandatory on all AAMVA barcodes.
        Optional on Magnetic barcodes.

        Jurisdiction-specific codes that represent additional privileges
        granted to the cardholder beyond the vehicle class (such as transportation of
        passengers, hazardous materials, operation of motorcycles, etc..
        */
        JurisdictionEndorsementCodes = 56,

        /**
        Mandatory on all AAMVA and Compact barcodes.

        Date on which the document was issued. (MMDDCCYY format
        */
        DocumentIssueDate = 57,

        /**
        Mandatory on AAMVA versions 02 and 03.

        Federally established codes for vehicle categories, endorsements, and restrictions
        that are generally applicable to commercial motor vehicles. If the vehicle is not a
        commercial vehicle, "NONE" is to be entered.
        */
        FederalCommercialVehicleCodes = 58,

        /**
        Optional on all AAMVA barcodes.
        Mandatory on Compact barcodes.

        Jurisdictions may define a subfile to contain jurisdiction-specific information.
        These subfiles are designated with the first character of “Z” and the second
        character is the first letter of the jurisdiction's name. For example, "ZC" would
        be the designator for a California or Colorado jurisdiction-defined subfile, "ZQ"
        would be the designator for a Quebec jurisdiction-defined subfile. In the case of
        a jurisdiction-defined subfile that has a first letter that could be more than
        one jurisdiction (e.g. California, Colorado, Connecticut then other data, like
        the IIN or address, must be examined to determine the jurisdiction.
        */
        IssuingJurisdiction = 59,

        /**
        Optional on all AAMVA barcodes.
        Mandatory on Compact barcodes.

        Standard vehicle classification code(s for cardholder. This data element is a
        placeholder for future efforts to standardize vehicle classifications.
        */
        StandardVehicleClassification = 60,

        /**
        Optional on all AAMVA and Magnetic barcodes.

        Name of issuing jurisdiction, for example = Alabama, Alaska ...
        */
        IssuingJurisdictionName = 61,

        /**
        Optional on all AAMVA barcodes.

        Standard endorsement code(s for cardholder. See codes in D20. This data element is a
        placeholder for future efforts to standardize endorsement codes.

        Code   Description
        H      Hazardous Material - This endorsement is required for the operation of any vehicle
                transporting hazardous materials requiring placarding, as defined by U.S.
                Department of Transportation regulations.
        L      Motorcycles – Including Mopeds/Motorized Bicycles.
        N      Tank - This endorsement is required for the operation of any vehicle transporting,
                as its primary cargo, any liquid or gaseous material within a tank attached to the vehicle.
        O      Other Jurisdiction Specific Endorsement(s - This code indicates one or more
                additional jurisdiction assigned endorsements.
        P      Passenger - This endorsement is required for the operation of any vehicle used for
                transportation of sixteen or more occupants, including the driver.
        S      School Bus - This endorsement is required for the operation of a school bus. School bus means a
                CMV used to transport pre-primary, primary, or secondary school students from home to school,
                from school to home, or to and from school sponsored events. School bus does not include a
                bus used as common carrier (49 CRF 383.5.
        T      Doubles/Triples - This endorsement is required for the operation of any vehicle that would be
                referred to as a double or triple.
        X      Combined Tank/HAZ-MAT - This endorsement may be issued to any driver who qualifies for
                both the N and H endorsements.
        */
        StandardEndorsementCode = 62,

        /**
        Optional on all AAMVA barcodes.

        Standard restriction code(s for cardholder. See codes in D20. This data element is a placeholder
        for future efforts to standardize restriction codes.

        Code   Description
        B      Corrective Lenses
        C      Mechanical Devices (Special Brakes, Hand Controls, or Other Adaptive Devices
        D      Prosthetic Aid
        E      Automatic Transmission
        F      Outside Mirror
        G      Limit to Daylight Only
        H      Limit to Employment
        I      Limited Other
        J      Other
        K      CDL Intrastate Only
        L      Vehicles without air brakes
        M      Except Class A bus
        N      Except Class A and Class B bus
        O      Except Tractor-Trailer
        V      Medical Variance Documentation Required
        W      Farm Waiver
        */
        StandardRestrictionCode = 63,

        /**
        Optional on AAMVA 02, 03, 04, 05, 06, 07, 08 and Compact barcodes.

        Text that explains the jurisdiction-specific code(s for classifications
        of vehicles cardholder is authorized to drive.
        */
        JurisdictionVehicleClassificationDescription = 64,

        /**
        Optional on AAMVA 02, 03, 04, 05, 06, 07, 08 and Compact barcodes.

        Text that explains the jurisdiction-specific code(s that indicates additional
        driving privileges granted to the cardholder beyond the vehicle class.
        */
        JurisdictionEndorsmentCodeDescription = 65,

        /**
        Optional on AAMVA 02, 03, 04, 05, 06, 07, 08 and Compact barcodes.

        Text describing the jurisdiction-specific restriction code(s that curtail driving privileges.
        */
        JurisdictionRestrictionCodeDescription = 66,

        /**
        Optional on AAMVA 02, 03, 04, 05, 06, 07, 08 barcodes.

        A string of letters and/or numbers that is affixed to the raw materials (card stock,
        laminate, etc. used in producing driver's licenses and ID cards. (DHS recommended field
        */
        InventoryControlNumber = 67,

        /**
        Optional on AAMVA 04, 05, 06, 07, 08 and Compact barcodes.

        DHS required field that indicates date of the most recent version change or
        modification to the visible format of the DL/ID. (MMDDCCYY format
        */
        CardRevisionDate = 68,

        /**
        Mandatory on AAMVA 02, 03, 04, 05, 06, 07, 08 and Magnetic barcodes.
        Optional and Compact barcodes.

        Number must uniquely identify a particular document issued to that customer
        from others that may have been issued in the past. This number may serve multiple
        purposes of document discrimination, audit information number, and/or inventory control.
        */
        DocumentDiscriminator = 69,

        /**
        Optional on AAMVA 04, 05, 06, 07, 08 and Compact barcodes.

        DHS required field that indicates that the cardholder has temporary lawful status = "1".
        */
        LimitedDurationDocument = 70,

        /**
        Optional on AAMVA 02, 03, 04, 05, 06, 07, 08 and Compact barcodes.

        A string of letters and/or numbers that identifies when, where, and by whom a driver's
        license/ID card was made. If audit information is not used on the card or the MRT, it
        must be included in the driver record.
        */
        AuditInformation = 71,

        /**
        Optional on AAMVA 04, 05, 06, 07, 08 and Compact barcodes.

        DHS required field that indicates compliance = "M" = materially compliant,
        "F" = fully compliant, and, "N" = non-compliant.
        */
        ComplianceType = 72,

        /**
        Optional on AAMVA version 01 barcodes.

        Issue Timestamp. A string used by some jurisdictions to validate the document against their data base.
        */
        IssueTimestamp = 73,

        /**
        Optional on AAMVA version 01 barcodes.

        Driver Permit Expiration Date. MMDDCCYY format. Date permit expires.
        */
        PermitExpirationDate = 74,

        /**
        Optional on AAMVA version 01 barcodes..

        Type of permit.
        */
        PermitIdentifier = 75,

        /**
        Optional on AAMVA version 01 barcodes..

        Driver Permit Issue Date. MMDDCCYY format. Date permit was issued.
        */
        PermitIssueDate = 76,

        /**
        Optional on AAMVA version 01.

        Number of duplicate cards issued for a license or ID if any.
        */
        NumberOfDuplicates = 77,

        /**
        Optional on AAMVA 04, 05, 06, 07, 08 and Compact barcodes.

        Date on which the hazardous material endorsement granted by the document is
        no longer valid. (MMDDCCYY format
        */
        HAZMATExpirationDate = 78,

        /**
        Optional on AAMVA version 01.

        Medical Indicator/Codes.
        STATE SPECIFIC. Freeform, Standard "TBD"
        */
        MedicalIndicator = 79,

        /**
        Optional on AAMVA version 01.

        Non-Resident Indicator. "Y". Used by some jurisdictions to indicate holder of the document is a non-resident.
        */
        NonResident = 80,

        /**
        Optional on AAMVA version 01.

        A number or alphanumeric string used by some jurisdictions to identify a "customer" across multiple data bases.
        */
        UniqueCustomerId = 81,

        /**
        Optional on compact barcodes.

        Document discriminator.
        */
        DataDiscriminator = 82,

        /**
        Optional on Magnetic barcodes.

        Month on which the driving and identification privileges granted by the document are
        no longer valid. (MMYY format
        */
        DocumentExpirationMonth = 83,

        /**
        Optional on Magnetic barcodes.

        Field that indicates that the driving and identification privileges granted by the
        document are nonexpiring = "1".
        */
        DocumentNonexpiring = 84,

        /**
        Optional on Magnetic barcodes.

        Security version beeing used.
        */
        SecurityVersion = 85
}

export class BarcodeElements {
    /** Flag that indicates if barcode elements is empty */
    empty: boolean;
    /** Values inside barcodes. Available Keys are listed in BarcodeElementKey enum. */
    values: string[];

    constructor(nativeBarcodeElements: any) {
        this.empty = nativeBarcodeElements.empty;
        this.values = nativeBarcodeElements.values;
    }
}

/** Defines the data extracted from the visual inspection zone */
export class VizResult {
    /** The first name of the document owner. */
    firstName: string;
    /** The last name of the document owner. */
    lastName: string;
    /** The full name of the document owner. */
    fullName: string;
    /** The additional name information of the document owner. */
    additionalNameInformation: string;
    /** The localized name of the document owner. */
    localizedName: string;
    /** The address of the document owner. */
    address: string;
    /** The additional address information of the document owner. */
    additionalAddressInformation: string;
    /** The one more additional address information of the document owner. */
    additionalOptionalAddressInformation: string;
    /** The place of birth of the document owner. */
    placeOfBirth: string;
    /** The nationality of the documet owner. */
    nationality: string;
    /** The race of the document owner. */
    race: string;
    /** The religion of the document owner. */
    religion: string;
    /** The profession of the document owner. */
    profession: string;
    /** The marital status of the document owner. */
    maritalStatus: string;
    /** The residential stauts of the document owner. */
    residentialStatus: string;
    /** The employer of the document owner. */
    employer: string;
    /** The sex of the document owner. */
    sex: string;
    /** The date of birth of the document owner. */
    dateOfBirth: Date;
    /** The date of issue of the document. */
    dateOfIssue: Date;
    /** The date of expiry of the document. */
    dateOfExpiry: Date;
    /** The document number. */
    documentNumber: string;
    /** The personal identification number. */
    personalIdNumber: string;
    /** The additional number of the document. */
    documentAdditionalNumber: string;
    /** The additional personal identification number. */
    additionalPersonalIdNumber: string;
    /** The issuing authority of the document. */
    issuingAuthority: string;
    /** The driver license detailed info. */
    driverLicenseDetailedInfo: DriverLicenseDetailedInfo;
    /** Flag that indicates if barcode result is empty */
    empty: boolean;
    /** The one more additional number of the document. */
    documentOptionalAdditionalNumber: string;

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

        /** The one more additional address information of the document owner. */
        this.additionalOptionalAddressInformation = nativeVizResult.additionalOptionalAddressInformation;

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

        /** Flag that indicates if barcode result is empty */
        this.empty = nativeVizResult.empty;

        this.documentOptionalAdditionalNumber = nativeVizResult.documentOptionalAdditionalNumber;
    }
}

/**
 * Represents data extracted from MRZ (Machine Readable Zone) of Machine Readable Travel Document (MRTD).
 */
export class MrzResult {

    /** Type of recognized document. It is always one of the values represented by BlinkIDScanner.MRTDDocumentType */
    documentType: MrtdDocumentType;

    /** The primary indentifier. If there is more than one component, they are separated with space. */
    primaryId: string;

    /** The secondary identifier. If there is more than one component, they are separated with space. */
    secondaryId: string;

    /** Three-letter or two-letter code which indicate the issuing State. Three-letter codes are based
     * on Aplha-3 codes for entities specified in ISO 3166-1, with extensions for certain States. Two-letter
     * codes are based on Alpha-2 codes for entities specified in ISO 3166-1, with extensions for certain States.
     */
    issuer: string;

    /** Holder's date of birth */
    dateOfBirth: Date;

    /** The document number. Document number contains up to 9 characters.
     *  Element does not exist on US Green Card. To see which document was scanned use documentType property.
     */
    documentNumber: string;

    /** The nationality of the holder represented by a three-letter or two-letter code. Three-letter
     * codes are based on Alpha-3 codes for entities specified in ISO 3166-1, with extensions for certain
     * States. Two-letter codes are based on Aplha-2 codes for entities specified in ISO 3166-1, with
     * extensions for certain States.
     */
    nationality: string;

    /** The gender of the card holder. Gender is specified by use of the single initial, capital letter F for female,
     * M for male or <code>&lt;</code> for unspecified.
     */
    gender: string;

    /** The document code. Document code contains two characters. For MRTD the first character shall
     * be A, C or I. The second character shall be discretion of the issuing State or organization except
     * that V shall not be used, and `C` shall not be used after `A` except in the crew member certificate.
     * On machine-readable passports (MRP) first character shall be `P` to designate an MRP. One additional
     * letter may be used, at the discretion of the issuing State or organization, to designate a particular
     * MRP. If the second character position is not used for this purpose, it shall be filled by the filter
     * character <code>&lt;</code>.
     */
    documentCode: string;

    /** The date of expiry */
    dateOfExpiry: Date;

    /** The first optional data. Contains empty if not available.
     * Element does not exist on US Green Card. To see which document was scanned use the documentType property.
     */
    opt1: string;

    /** The second optional data. Contains empty if not available.
     * Element does not exist on Passports and Visas. To see which document was scanned use the documentType property.
     */
    opt2: string;

    /** The alien number. Contains empty if not available.
     * Exists only on US Green Cards. To see which document was scanned use the documentType property.
     */
    alienNumber: string;

    /** The application receipt number. Contains empty if not available.
     * Exists only on US Green Cards. To see which document was scanned use the documentType property.
     */
    applicationReceiptNumber: string;

    /** The immigrant case number. Contains empty if not available.
     * Exists only on US Green Cards. To see which document was scanned use the documentType property.
     */
    immigrantCaseNumber: string;

    /** The entire Machine Readable Zone text from ID. This text is usually used for parsing
     * other elements.
     * NOTE: This is available only if OCR result was parsed successfully.
     */
    mrzText: string;

    /** true if Machine Readable Zone has been parsed, false otherwise. */
    mrzParsed: boolean;

    /** true if all check digits inside MRZ are correct, false otherwise. */
    mrzVerified: boolean;

    /** Sanitized field opt1 */
    sanitizedOpt1: string;

    /** Sanitized field opt2 */
    sanitizedOpt2: string;

    /** Sanitized field nationality */
    sanitizedNationality: string;

    /** Sanitized field issuer */
    sanitizedIssuer: string;

    /** Sanitized document code */
    sanitizedDocumentCode: string;

    /** Sanitized document number */
    sanitizedDocumentNumber: string;

    /** The current age of the document owner in years. It is calculated difference
     * between now and date of birth. Now is current time on the device.
     * @return current age of the document owner in years or -1 if date of birth is unknown.
     */
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

/** Defines the dependents information */
export class DependentInfo {
    /** The date of birth of the dependent */
    dateOfBirth: DateResult;
    /** The sex or gender of the dependent */
    sex: StringResult;
    /** The document number of the dependent. */
    documentNumber: StringResult;
    /** The full name of the dependent. */
    fullName: StringResult;
    /** The full name of the dependent. */
    empty: boolean;

    constructor(nativeDependentInfo: any) {
        this.dateOfBirth = nativeDependentInfo.dateOfBirth;
        this.sex = nativeDependentInfo.sex;
        this.documentNumber = nativeDependentInfo.documentNumber;
        this.fullName = nativeDependentInfo.fullName;
        this.empty = nativeDependentInfo.empty;
    }
}


/** Possible supported detectors for documents containing face image */
export const enum DocumentFaceDetectorType {
    /** Uses document detector for TD1 size identity cards */
    TD1 = 0,
    /** Uses document detector for TD2 size identity cards  */
    TD2 = 1,
    /** Uses MRTD detector for detecting documents with MRZ */
    PassportsAndVisas = 2
}

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
    /** Enable scanning of barcode IDs. Setting is taken into account only if the barcode right to scan that barcode is purchased. */
    enableBarcodeId: boolean;
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
        /** Enable scanning of barcode IDs. Setting is taken into account only if the barcode right to scan that barcode is purchased. */
        this.enableBarcodeId = true;
        /** Enable full document recognition. Setting is taken into account only if the document right to scan that document is purchased. */
        this.enableFullDocumentRecognition = true;
    }
}

/**
 * ClassAnonymizationSettings is used to anonymize specific documents and fields.
 * It can be modified with countries, regions, document types, document fields and the partial document number anonymization. 
 * See Country, Region, Type, FieldType and DocumentNumberAnonymizationSettings objects to get more information which settings can be anonymized.
 * Setting is taken into account if AnonymizationMode is set to ImageOnly,ResultFieldsOnly or FullResult.
 */
export class ClassAnonymizationSettings {
    /** Documents from the set country will be anonymized */
    country?: Country;
    /** Documents from the set region will be anonymized */
    region?: Region;
    /** Document type that will be anonymized */
    type?: Type;
    /** Document fields that will be anonymized */
    fields?: FieldType[];
    /** Partial document number anonymization */
    documentNumberAnonymizationSettings?: DocumentNumberAnonymizationSettings;
}

/** 
 * DocumentNumberAnonymizationSettings is implemented with ClassAnonymizationSettings class.
 * It can partially anonymize the document number from the scanned document. 
 */
export class DocumentNumberAnonymizationSettings {

    /** Defines how many digits at the beginning of the card number remain visible after anonymization. */
    prefixDigitsVisible: number;
    /** Defines how many digits at the end of the card number remain visible after anonymization. */
    suffixDigitsVisible: number;

    constructor() {
        this.prefixDigitsVisible = 0;
        this.suffixDigitsVisible = 0;
    }
}

/**
 * CustomClassRules represent custom rules of mandatory fields for each class of a document.
 * Setting the fields in the CustomClassRules will make them mandatory.
 * If CustomClassRules are not set, all of the default fields are mandatory.
 */
export class CustomClassRules {
    /** Documents from the set country will be used with CustomClassRules */
    country?: Country;
    /** Documents from the set region will be used with CustomClassRules */
    region?: Region;
    /** Document type that will be used with CustomClassRules */
    type?: Type;
    /** An array of the document fields and alphabets that will be used with CustomClassRules. See DetailedFieldType for more information. */
    detailedFieldTypes: DetailedFieldType[];

    constructor() {
        this.detailedFieldTypes = [];
    }
}

/**
 * DetailedFieldType represents a detailed field type used for custom mandatory fields.
 * Used with CustomClassRules. A field type (see FieldType for all fields) along with Alphabet type (see AlphabetType for all alphabets) is required.
 */
export class DetailedFieldType {
    /** Field type that will be mandatory for extraction for CustomClassRules. */
    fieldType?: FieldType;
    /** Alphabet type connected with the field type that will be optional for extraction for CustomClassRules. */
    alphabetType?: AlphabetType;
}

/**
 * ClassFilter represents the document filter used to determine which documents will be processed.
 * Document information (Country, Region, Type) is evaluated with the content set in the filter, and their inclusion or exclusion depends on the defined rules.
 * 
 * The recognition results of the excluded documents will not be returned.
 * If using the standard BlinkID Overlay, an alert will be displayed that the document will not be scanned.
 * 
 * By default, the ClassFilter is turned off, and all documents will be included.
 */
export class ClassFilter {
    /**
     * Document classes that will be explicitly accepted by this filter.
     * Only documents belonging to the specified classes will be processed. All other documents will be rejected.
     * 
     * If this array is empty, no restrictions are applied, and documents will be accepted unless explicitly excluded by `excludedClasses`.
     * 
     * Example usage:
     *  
     * var includedClassOne = new BlinkID.FilteredClass();
     * includedClassOne.country = BlinkID.Country.Croatia;
     * includedClassOne.type = BlinkID.Type.Id;
     * 
     * var includedClassTwo = new BlinkID.FilteredClass();
     * includedClassTwo.region = BlinkID.Region.California;
     *  
     * var classFilter = new ClassFilter();
     * classFilter.includeClasses = [includedClassOne, includedClassTwo];
     * 
     * NOTE: from the example above, the class filter is set to only accept Croatian IDs, and all documents from the California region.
     * All other documents will be rejected.
     * 
     * Rules can be combined, for example, to set all three properties (Country Region, Type), two (e.g., Country and Type) or just one (e.g, Region).
     */
    includeClasses?: FilteredClass[];
    /**
     * Document classes that will be explicitly rejected by this filter.
     * Documents belonging to the specified classes will not be processed. Other documents, not included with `excludeClasses` will be accepted.
     * 
     * If this array is empty, no restrictions are applied, and documents will be excluded only if not present in `includeClasses`.
     * If a document class appears in both `includeClasses` and `excludeClasses`, it will be rejected, as `excludeClasses` takes precedence.
     * 
     * Example usage:
     *  
     * var excludedClassOne = new BlinkID.FilteredClass();
     * excludedClassOne.country = BlinkID.Country.Croatia;
     * excludedClassOne.type = BlinkID.Type.Id;
     * 
     * var excludedClassTwo = new BlinkID.FilteredClass();
     * excludedClassTwo.region = BlinkID.Region.California;
     *  
     * var classFilter = new ClassFilter();
     * classFilter.excludeClasses = [excludedClassOne, excludedClassTwo];
     * 
     * NOTE: from the example above, the class filter is set to only reject Croatian IDs, and all documents from the California region.
     * All other classes will be accepted.
     * 
     * Rules can be combined, for example, to set all three properties (Country Region, Type), two (e.g., Country and Type) or just one (e.g, Region).
     */
    excludeClasses?: FilteredClass[];
}

/**
 * FilteredClass represents the document class that is added in the ClassFilter.
 * By defining the rules of the ClassFilter, the entered class can be included or excluded from processing.
 * 
 * See the ClassFilter class for more detailed information.
 */
export class FilteredClass {
    /** Document country that will be added in the filter */
    country?: Country;
    /** Document region that will be added in the filter */
    region?: Region;
    /** Document type that will be added in the filter */
    type?: Type;
}

/** Defines status of the last recognition process. */
export const enum ProcessingStatus {
    /** Recognition was successful. */
    Success,

    /** Detection of the document failed. */
    DetectionFailed,

    /** Preprocessing of the input image has failed. */
    ImagePreprocessingFailed,

    /** Recognizer has inconsistent results. */
    StabilityTestFailed,

    /** Wrong side of the document has been scanned. */
    ScanningWrongSide,

    /** Identification of the fields present on the document has failed. */
    FieldIdentificationFailed,

    /** Mandatory field for the specific document is missing. */
    MandatoryFieldMissing,

    /** Result contains invalid characters in some of the fields. */
    InvalidCharactersFound,

    /** Failed to return a requested image. */
    ImageReturnFailed,

    /** Reading or parsing of the barcode has failed. */
    BarcodeRecognitionFailed,

    /** Parsing of the MRZ has failed. */
    MrzParsingFailed,

    /** Document class has been filtered out. */
    ClassFiltered,

    /** Document currently not supported by the recognizer. */
    UnsupportedClass,

    /** License for the detected document is missing. */
    UnsupportedByLicense,

    /** Front side recognition has completed successfully, and recognizer is waiting for the other side to be scanned. */
    AwaitingOtherSide,

    /** Side not scanned. */
    NotScanned,

    /** Detection of the barcode failed.  */
    BarcodeDetectionFailed
}

/** Define level of anonymization performed on recognizer result */
export const enum RecognitionMode {
    /** No recognition performed. */
    None,

    /** Recognition of mrz document (does not include visa and passport) */
    MrzId,

    /** Recognition of visa mrz. */
    MrzVisa,

    /** Recognition of passport mrz. */
    MrzPassport,

    /** Recognition of documents that have face photo on the front. */
    PhotoId,

    /** Detailed document recognition. */
    FullRecognition,

    /** Recognition of barcode document. */
    BarcodeId
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
}

/** Result of the data matching algorithm for scanned parts/sides of the document. */
export enum DataMatchState {
    /** Data matching has not been performed. */
    NotPerformed = 0,
    /** Data does not match. */
    Failed = 1,
    /** Data match. */
    Success = 2
}

/**
 * Defines possible Android device camera video resolution preset 
 */
export enum AndroidCameraResolutionPreset {
    /** Will choose camera video resolution which is best for current device */
    PresetDefault = 0,

    /** Attempts to choose camera video resolution as closely as 480p */
    Preset480p = 1,
    
    /** Attempts to choose camera video resolution as closely as 720p */
    Preset720p = 2,
    
    /** Attempts to choose camera video resolution as closely as 1080p */
    Preset1080p = 3,

    /** Attempts to choose camera video resolution as closely as 2160p */
    Preset2160p = 4,

    /** Will choose max available camera video resolution */
    PresetMaxAvailable = 5
}

/**
 * Defines possible iOS device camera video resolution preset 
 */
export enum iOSCameraResolutionPreset {
    /** 480p video will always be used */
    Preset480p = 0,

    /** 720p video will always be used */
    Preset720p = 1,
    
    /** 1080p video will always be used */
    Preset1080p = 2,
    
    /** 4K video will always be used */
    Preset4K = 3,

    /** The library will calculate optimal resolution based on the use case and device used */
    PresetOptimal = 4,

    /** Device's maximal video resolution will be used */
    PresetMax = 5,

    /** Device's photo preview resolution will be used */
    PresetPhoto = 6
}