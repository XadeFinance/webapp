require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const URL = "https://alfajores-forno.celo-testnet.org";
const privateKey = "9cda452e77654ec3c813f0d476edd082294e360ce5a6655f631d66e9ee69ef1b";
console.log(URL,privateKey);

module.exports = {
  solidity: "0.8.17",
  networks: {
    celoTestnet: {
      url: URL,
      accounts: [privateKey],
    },
    alfajores: {
      url: "https://alfajores-forno.celo-testnet.org",
      accounts: {
        mnemonic: privateKey,
        path: "m/44'/52752'/0'/0"
      },
      chainId: 44787
    }
  },
};