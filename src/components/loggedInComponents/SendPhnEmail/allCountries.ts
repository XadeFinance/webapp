export type Country = {
  "code": string,
  "name": string 
}

export type PhoneNumber = {
  code: Country,
  number: string,
  valid: boolean 
}

const countries: Country[] = [
  {
    "code": "0",
    "name": "Select an option"
    },
  {
    "code": "145155141151154",
    "name": "Email Address"
    },
    {
      "code": "11997108108101116",
      "name": "Wallet Address"
    }
  ]


export default countries;
