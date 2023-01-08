export type Ramp = {
    "transak": {
        "api": string
    },
  }
  
export type Currency = {
    "symbol": string,
    "name": string,
    "min": number, 
    "max": number
}
//   export type PhoneNumber = {
//     code: Country,
//     number: string,
//     valid: boolean 
//   }
  
  const Ramps: Ramp = {
    "transak": {
        "api":""
    }   
}
export default Ramps;
  

export const currencies:Currency[] = [
    {
        "symbol": "USD",
        "name": "US Dollar",
        "min": 30,
        "max": 1500
    },
    {
        "symbol": "GBP",
        "name": "British pound",
        "min": 25,
        "max": 1240
    },
    {
        "symbol": "INR",
        "name": "Indian rupee",
        "min": 1728,
        "max": 24682
    },
    {
        "symbol": "EUR",
        "name": "Euro",
        "min": 28,
        "max": 1407
    },
    {
        "symbol": "CHF",
        "name": "Swiss franc",
        "min": 28,
        "max": 1392
    },
    {
        "symbol": "SEK",
        "name": "Swedish krona",
        "min": 316,
        "max": 15784
    },
    {
        "symbol": "PLN",
        "name": "Polish Zloty",
        "min": 128,
        "max": 6393
    },
    {
        "symbol": "NOK",
        "name": "Norwegian Krone",
        "min": 300,
        "max": 14981
    },
    {
        "symbol": "DKK",
        "name": "Danish Krone",
        "min": 210,
        "max": 10482
    },
    {
        "symbol": "NZD",
        "name": "New Zealand dollar",
        "min": 47,
        "max": 2361
    },
    {
        "symbol": "MXN",
        "name": "Mexican peso",
        "min": 574,
        "max": 28703
    },
    {
        "symbol": "CAD",
        "name": "Canadian dollar",
        "min": 40,
        "max": 2017
    },
    {
        "symbol": "AUD",
        "name": "Australian dollar",
        "min": 44,
        "max": 2180
    },
    {
        "symbol": "ARS",
        "name": "Argentine Peso",
        "min": 5378,
        "max": 268875
    },
    {
        "symbol": "BRL",
        "name": "Brazilian Real",
        "min": 157,
        "max": 7839
    },
    {
        "symbol": "CLP",
        "name": "Chilean Peso",
        "min": 25241,
        "max": 1262070
    },
    {
        "symbol": "CRC",
        "name": "Costa Rican Colon",
        "min": 17733,
        "max": 886663
    },
    {
        "symbol": "DOP",
        "name": "Dominican Peso",
        "min": 1696,
        "max": 84806
    },
    {
        "symbol": "IDR",
        "name": "Indonesian Rupiah",
        "min": 468219,
        "max": 23410950
    },
    {
        "symbol": "ILS",
        "name": "Israeli Shekel",
        "min": 105,
        "max": 5260
    },
    {
        "symbol": "JPY",
        "name": "Japanese Yen",
        "min": 3963,
        "max": 198127
    },
    {
        "symbol": "KRW",
        "name": "South Korean Won",
        "min": 37616,
        "max": 1880820
    },
    {
        "symbol": "MYR",
        "name": "Malaysian Ringgit",
        "min": 132,
        "max": 6605
    },
    {
        "symbol": "PYG",
        "name": "Paraguayan Guarani",
        "min": 219909,
        "max": 10995436
    },
    {
        "symbol": "PEN",
        "name": "Peruvian Sol",
        "min": 114,
        "max": 5685
    },
    {
        "symbol": "PHP",
        "name": "Philippine Peso",
        "min": 1666,
        "max": 83283
    },
    {
        "symbol": "SGD",
        "name": "Singapore Dollar",
        "min": 40,
        "max": 2005
    },
    {
        "symbol": "ZAR",
        "name": "South African Rand",
        "min": 513,
        "max": 25662
    },
    {
        "symbol": "TZS",
        "name": "Tanzanian Shilling",
        "min": 70110,
        "max": 3505500
    },
    {
        "symbol": "THB",
        "name": "Thai Baht",
        "min": 1012,
        "max": 50589
    },
    {
        "symbol": "TRY",
        "name": "Turkish Lira",
        "min": 563,
        "max": 28132
    },
    {
        "symbol": "BBD",
        "name": "Barbados Dollar",
        "min": 60,
        "max": 3000
    },
    {
        "symbol": "FJD",
        "name": "Fiji Dollar",
        "min": 66,
        "max": 3282
    },
    {
        "symbol": "HUF",
        "name": "Forint",
        "min": 11117,
        "max": 555870
    },
    {
        "symbol": "JMD",
        "name": "Jamaican Dollar",
        "min": 4577,
        "max": 228866
    },
    {
        "symbol": "KES",
        "name": "Kenyan Shilling",
        "min": 3710,
        "max": 185475
    },
    {
        "symbol": "MDL",
        "name": "Moldovan Leu",
        "min": 576,
        "max": 28816
    },
    {
        "symbol": "BMD",
        "name": "Bermudian Dollar",
        "min": 30,
        "max": 1500
    },
    {
        "symbol": "FKP",
        "name": "Falkland Islands Pound",
        "min": 25,
        "max": 1240
    },
    {
        "symbol": "GIP",
        "name": "Gibraltar Pound",
        "min": 25,
        "max": 1240
    },
    {
        "symbol": "BGN",
        "name": "Bulgarian Lev",
        "min": 55,
        "max": 2758
    },
    {
        "symbol": "CZK",
        "name": "Czech Koruna",
        "min": 676,
        "max": 33812
    },
    {
        "symbol": "ISK",
        "name": "Iceland Krona",
        "min": 4310,
        "max": 215490
    },
    {
        "symbol": "RON",
        "name": "Romanian Leu",
        "min": 139,
        "max": 6945
    },
    {
        "symbol": "VND",
        "name": "Dong",
        "min": 704060,
        "max": 35203012
    },
    {
        "symbol": "AOA",
        "name": "Kwanza",
        "min": 15111,
        "max": 755528
    },
    {
        "symbol": "BZD",
        "name": "Belize Dollar",
        "min": 61,
        "max": 3026
    },
    {
        "symbol": "BND",
        "name": "Brunei Dollar",
        "min": 40,
        "max": 2024
    },
    {
        "symbol": "XAF",
        "name": "CFA Franc BEAC",
        "min": 18454,
        "max": 922713
    },
    {
        "symbol": "KMF",
        "name": "Comoro Franc",
        "min": 13889,
        "max": 694425
    },
    {
        "symbol": "DJF",
        "name": "Djibouti Franc",
        "min": 5325,
        "max": 266250
    },
    {
        "symbol": "XCD",
        "name": " East Caribbean Dollar",
        "min": 81,
        "max": 4054
    },
    {
        "symbol": "GEL",
        "name": "Lari",
        "min": 81,
        "max": 4050
    },
    {
        "symbol": "GTQ",
        "name": "Quetzal",
        "min": 236,
        "max": 11782
    },
    {
        "symbol": "HNL",
        "name": "Lempira",
        "min": 740,
        "max": 37005
    },
    {
        "symbol": "HKD",
        "name": "Hong Kong Dollar",
        "min": 234,
        "max": 11712
    },
    {
        "symbol": "KZT",
        "name": "Tenge",
        "min": 13943,
        "max": 697151
    },
    {
        "symbol": "KGS",
        "name": "Som",
        "min": 2522,
        "max": 126110
    },
    {
        "symbol": "MGA",
        "name": "Malagasy Ariary",
        "min": 135000,
        "max": 6750000
    },
    {
        "symbol": "MWK",
        "name": "Kwacha",
        "min": 30720,
        "max": 1536000
    },
    {
        "symbol": "MRU",
        "name": "Ouguiya",
        "min": 1096,
        "max": 54788
    },
    {
        "symbol": "MZN",
        "name": "Mozambique Metical",
        "min": 1917,
        "max": 95850
    },
    {
        "symbol": "OMR",
        "name": "Rial Omani",
        "min": 12,
        "max": 578
    },
    {
        "symbol": "PGK",
        "name": "Kina",
        "min": 106,
        "max": 5288
    },
    {
        "symbol": "RWF",
        "name": "Rwanda Franc",
        "min": 32160,
        "max": 1608000
    },
    {
        "symbol": "STN",
        "name": "Dobra",
        "min": 701,
        "max": 35063
    },
    {
        "symbol": "SCR",
        "name": "Seychelles Rupee",
        "min": 400,
        "max": 19986
    },
    {
        "symbol": "SBD",
        "name": "Solomon Islands Dollar",
        "min": 248,
        "max": 12397
    },
    {
        "symbol": "SRD",
        "name": "Surinam Dollar",
        "min": 947,
        "max": 47336
    },
    {
        "symbol": "SZL",
        "name": "Lilangeni",
        "min": 514,
        "max": 25695
    },
    {
        "symbol": "TJS",
        "name": "Somoni",
        "min": 307,
        "max": 15343
    },
    {
        "symbol": "TOP",
        "name": "Pa'anga",
        "min": 71,
        "max": 3529
    },
    {
        "symbol": "TMT",
        "name": "Turkmenistan New Manat",
        "min": 105,
        "max": 5265
    },
    {
        "symbol": "UYU",
        "name": "Peso Uruguayo",
        "min": 1197,
        "max": 59830
    },
    {
        "symbol": "COP",
        "name": "Colombian peso",
        "min": 146630,
        "max": 1221919
    }
]