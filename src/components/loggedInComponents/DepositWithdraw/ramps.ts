
  
export type Currency = {
    "symbol": string,
    "name": string,
    "min": number, 
    "max": number,
    "payment":string
}
//   export type PhoneNumber = {
//     code: Country,
//     number: string,
//     valid: boolean 
//   }
  
  const Ramps = {
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
            "max": 1000,
            "payment": "pm_zelle"
        },
        {
            "symbol": "GBP",
            "name": "British pound",
            "min": 16,
            "max": 11483,
            "payment": "gbp_bank_transfer"
        },
        {
            "symbol": "INR",
            "name": "Indian rupee",
            "min": 1707,
            "max": 24392,
            "payment": "inr_upi"
        },
        {
            "symbol": "EUR",
            "name": "Euro",
            "min": 19,
            "max": 12950,
            "payment": "sepa_bank_transfer"
        },
        {
            "symbol": "CHF",
            "name": "Swiss franc",
            "min": 28,
            "max": 1395,
            "payment": "credit_debit_card"
        },
        {
            "symbol": "SEK",
            "name": "Swedish krona",
            "min": 313,
            "max": 15660,
            "payment": "credit_debit_card"
        },
        {
            "symbol": "PLN",
            "name": "Polish Zloty",
            "min": 130,
            "max": 6512,
            "payment": "pm_open_banking"
        },
        {
            "symbol": "NOK",
            "name": "Norwegian Krone",
            "min": 298,
            "max": 14888,
            "payment": "credit_debit_card"
        },
        {
            "symbol": "DKK",
            "name": "Danish Krone",
            "min": 206,
            "max": 10321,
            "payment": "credit_debit_card"
        },
        {
            "symbol": "NZD",
            "name": "New Zealand dollar",
            "min": 47,
            "max": 2352,
            "payment": "credit_debit_card"
        },
        {
            "symbol": "MXN",
            "name": "Mexican peso",
            "min": 567,
            "max": 28357,
            "payment": "credit_debit_card"
        },
        {
            "symbol": "CAD",
            "name": "Canadian dollar",
            "min": 40,
            "max": 2007,
            "payment": "credit_debit_card"
        },
        {
            "symbol": "AUD",
            "name": "Australian dollar",
            "min": 43,
            "max": 2158,
            "payment": "credit_debit_card"
        },
        {
            "symbol": "ARS",
            "name": "Argentine Peso",
            "min": 5429,
            "max": 271464,
            "payment": "credit_debit_card"
        },
        {
            "symbol": "BRL",
            "name": "Brazilian Real",
            "min": 154,
            "max": 7719,
            "payment": "pm_pix"
        },
        {
            "symbol": "CLP",
            "name": "Chilean Peso",
            "min": 24536,
            "max": 1226775,
            "payment": "pm_astropay"
        },
        {
            "symbol": "CRC",
            "name": "Costa Rican Colon",
            "min": 17532,
            "max": 876622,
            "payment": "credit_debit_card"
        },
        {
            "symbol": "DOP",
            "name": "Dominican Peso",
            "min": 1694,
            "max": 84688,
            "payment": "credit_debit_card"
        },
        {
            "symbol": "IDR",
            "name": "Indonesian Rupiah",
            "min": 456487,
            "max": 22824373,
            "payment": "credit_debit_card"
        },
        {
            "symbol": "ILS",
            "name": "Israeli Shekel",
            "min": 103,
            "max": 5129,
            "payment": "credit_debit_card"
        },
        {
            "symbol": "JPY",
            "name": "Japanese Yen",
            "min": 3909,
            "max": 195453,
            "payment": "credit_debit_card"
        },
        {
            "symbol": "KRW",
            "name": "South Korean Won",
            "min": 37191,
            "max": 1859526,
            "payment": "credit_debit_card"
        },
        {
            "symbol": "MYR",
            "name": "Malaysian Ringgit",
            "min": 131,
            "max": 6542,
            "payment": "credit_debit_card"
        },
        {
            "symbol": "PYG",
            "name": "Paraguayan Guarani",
            "min": 221388,
            "max": 11069378,
            "payment": "credit_debit_card"
        },
        {
            "symbol": "PEN",
            "name": "Peruvian Sol",
            "min": 114,
            "max": 5682,
            "payment": "credit_debit_card"
        },
        {
            "symbol": "PHP",
            "name": "Philippine Peso",
            "min": 1651,
            "max": 49522,
            "payment": "pm_gcash"
        },
        {
            "symbol": "SGD",
            "name": "Singapore Dollar",
            "min": 40,
            "max": 1989,
            "payment": "credit_debit_card"
        },
        {
            "symbol": "ZAR",
            "name": "South African Rand",
            "min": 504,
            "max": 25188,
            "payment": "credit_debit_card"
        },
        {
            "symbol": "TZS",
            "name": "Tanzanian Shilling",
            "min": 69958,
            "max": 3497904,
            "payment": "credit_debit_card"
        },
        {
            "symbol": "THB",
            "name": "Thai Baht",
            "min": 997,
            "max": 49851,
            "payment": "pm_bangkok_bank_mobile"
        },
        {
            "symbol": "TRY",
            "name": "Turkish Lira",
            "min": 563,
            "max": 28169,
            "payment": "credit_debit_card"
        },
        {
            "symbol": "BBD",
            "name": "Barbados Dollar",
            "min": 60,
            "max": 3000,
            "payment": "credit_debit_card"
        },
        {
            "symbol": "FJD",
            "name": "Fiji Dollar",
            "min": 65,
            "max": 3259,
            "payment": "credit_debit_card"
        },
        {
            "symbol": "HUF",
            "name": "Forint",
            "min": 11051,
            "max": 552542,
            "payment": "credit_debit_card"
        },
        {
            "symbol": "JMD",
            "name": "Jamaican Dollar",
            "min": 4590,
            "max": 229524,
            "payment": "credit_debit_card"
        },
        {
            "symbol": "KES",
            "name": "Kenyan Shilling",
            "min": 3714,
            "max": 185700,
            "payment": "credit_debit_card"
        },
        {
            "symbol": "MDL",
            "name": "Moldovan Leu",
            "min": 574,
            "max": 28697,
            "payment": "credit_debit_card"
        },
        {
            "symbol": "BMD",
            "name": "Bermudian Dollar",
            "min": 30,
            "max": 1500,
            "payment": "credit_debit_card"
        },
        {
            "symbol": "FKP",
            "name": "Falkland Islands Pound",
            "min": 25,
            "max": 1230,
            "payment": "credit_debit_card"
        },
        {
            "symbol": "GIP",
            "name": "Gibraltar Pound",
            "min": 25,
            "max": 1230,
            "payment": "credit_debit_card"
        },
        {
            "symbol": "BGN",
            "name": "Bulgarian Lev",
            "min": 54,
            "max": 2721,
            "payment": "credit_debit_card"
        },
        {
            "symbol": "CZK",
            "name": "Czech Koruna",
            "min": 667,
            "max": 33364,
            "payment": "credit_debit_card"
        },
        {
            "symbol": "ISK",
            "name": "Iceland Krona",
            "min": 4282,
            "max": 214095,
            "payment": "credit_debit_card"
        },
        {
            "symbol": "RON",
            "name": "Romanian Leu",
            "min": 137,
            "max": 6859,
            "payment": "credit_debit_card"
        },
        {
            "symbol": "VND",
            "name": "Dong",
            "min": 703235,
            "max": 35161746,
            "payment": "credit_debit_card"
        },
        {
            "symbol": "AOA",
            "name": "Kwanza",
            "min": 15113,
            "max": 755670,
            "payment": "credit_debit_card"
        },
        {
            "symbol": "BZD",
            "name": "Belize Dollar",
            "min": 60,
            "max": 3023,
            "payment": "credit_debit_card"
        },
        {
            "symbol": "BND",
            "name": "Brunei Dollar",
            "min": 40,
            "max": 1994,
            "payment": "credit_debit_card"
        },
        {
            "symbol": "XAF",
            "name": "CFA Franc BEAC",
            "min": 18203,
            "max": 910163,
            "payment": "credit_debit_card"
        },
        {
            "symbol": "KMF",
            "name": "Comoro Franc",
            "min": 13747,
            "max": 687338,
            "payment": "credit_debit_card"
        },
        {
            "symbol": "DJF",
            "name": "Djibouti Franc",
            "min": 5341,
            "max": 267037,
            "payment": "credit_debit_card"
        },
        {
            "symbol": "XCD",
            "name": " East Caribbean Dollar",
            "min": 81,
            "max": 4054,
            "payment": "credit_debit_card"
        },
        {
            "symbol": "GEL",
            "name": "Lari",
            "min": 80,
            "max": 4012,
            "payment": "credit_debit_card"
        },
        {
            "symbol": "GTQ",
            "name": "Quetzal",
            "min": 235,
            "max": 11764,
            "payment": "credit_debit_card"
        },
        {
            "symbol": "HNL",
            "name": "Lempira",
            "min": 740,
            "max": 37008,
            "payment": "credit_debit_card"
        },
        {
            "symbol": "HKD",
            "name": "Hong Kong Dollar",
            "min": 234,
            "max": 11714,
            "payment": "credit_debit_card"
        },
        {
            "symbol": "KZT",
            "name": "Tenge",
            "min": 13864,
            "max": 693197,
            "payment": "credit_debit_card"
        },
        {
            "symbol": "KGS",
            "name": "Som",
            "min": 2570,
            "max": 128520,
            "payment": "credit_debit_card"
        },
        {
            "symbol": "MGA",
            "name": "Malagasy Ariary",
            "min": 136145,
            "max": 6807272,
            "payment": "credit_debit_card"
        },
        {
            "symbol": "MWK",
            "name": "Kwacha",
            "min": 30813,
            "max": 1540638,
            "payment": "credit_debit_card"
        },
        {
            "symbol": "MRU",
            "name": "Ouguiya",
            "min": 1092,
            "max": 54584,
            "payment": "credit_debit_card"
        },
        {
            "symbol": "MZN",
            "name": "Mozambique Metical",
            "min": 1916,
            "max": 95775,
            "payment": "credit_debit_card"
        },
        {
            "symbol": "OMR",
            "name": "Rial Omani",
            "min": 12,
            "max": 577,
            "payment": "credit_debit_card"
        },
        {
            "symbol": "PGK",
            "name": "Kina",
            "min": 106,
            "max": 5286,
            "payment": "credit_debit_card"
        },
        {
            "symbol": "RWF",
            "name": "Rwanda Franc",
            "min": 32168,
            "max": 1608395,
            "payment": "credit_debit_card"
        },
        {
            "symbol": "STN",
            "name": "Dobra",
            "min": 683,
            "max": 34148,
            "payment": "credit_debit_card"
        },
        {
            "symbol": "SCR",
            "name": "Seychelles Rupee",
            "min": 384,
            "max": 19186,
            "payment": "credit_debit_card"
        },
        {
            "symbol": "SBD",
            "name": "Solomon Islands Dollar",
            "min": 248,
            "max": 12423,
            "payment": "credit_debit_card"
        },
        {
            "symbol": "SRD",
            "name": "Surinam Dollar",
            "min": 948,
            "max": 47400,
            "payment": "credit_debit_card"
        },
        {
            "symbol": "SZL",
            "name": "Lilangeni",
            "min": 507,
            "max": 25335,
            "payment": "credit_debit_card"
        },
        {
            "symbol": "TJS",
            "name": "Somoni",
            "min": 307,
            "max": 15337,
            "payment": "credit_debit_card"
        },
        {
            "symbol": "TOP",
            "name": "Pa'anga",
            "min": 70,
            "max": 3500,
            "payment": "credit_debit_card"
        },
        {
            "symbol": "TMT",
            "name": "Turkmenistan New Manat",
            "min": 105,
            "max": 5250,
            "payment": "credit_debit_card"
        },
        {
            "symbol": "UYU",
            "name": "Peso Uruguayo",
            "min": 1194,
            "max": 59706,
            "payment": "credit_debit_card"
        },
        {
            "symbol": "COP",
            "name": "Colombian peso",
            "min": 141320,
            "max": 1177665,
            "payment": "pm_pse"
        }
    ]