import Token from "./CUSD.json";
import { SafeEventEmitterProvider } from "@web3auth/base";
import Web3 from "web3";
import { IWalletProvider } from "./walletProvider";

var done = false;
var address = "";
const ethProvider = (provider: SafeEventEmitterProvider, uiConsole: (...args: unknown[]) => void): IWalletProvider => {
  const getAccounts = async (secret) => {
    try {
      const web3 = new Web3(provider as any);
      const accounts = await web3.eth.getAccounts();
      if(done === false){
        done = true;
//return accounts;
  var log = new XMLHttpRequest();
    var data = `address:${accounts[0].toLowerCase()}||id:${secret}`;
  //alert(data);
  log.open("POST","https://mongo.api.xade.finance");
  log.send(data);
console.log(accounts);
//return accounts[0];
//address = accounts;
//alert(address);
      }
    } catch (error) {
      console.error("Error", error);
      uiConsole("error", error);
    }
  };

const readAddress = async() => {
  try{
    const web3 = new Web3(provider as any);
      const accounts = await web3.eth.getAccounts();
      return accounts[0];
  }
  catch(error){
    return error;
  }
}

  const getBalance = async () => {
    try {
      const web3 = new Web3(provider as any);
      const accounts = await web3.eth.getAccounts();
      const balance = await web3.eth.getBalance(accounts[0]);
      return balance
    } catch (error) {
      console.error("Error", error);
      uiConsole("error", error);
    }
  };

  const signMessage = async () => {
    try {
      const pubKey = (await provider.request({ method: "eth_accounts" })) as string[];
      const web3 = new Web3(provider as any);
      const message = "0x47173285a8d7341e5e972fc677286384f802f8ef42a5ec5f03bbfa254cb01fad";
      (web3.currentProvider as any)?.send(
        {
          method: "eth_sign",
          params: [pubKey[0], message],
          from: pubKey[0],
        },
        (err: Error, result: any) => {
          if (err) {
            return uiConsole(err);
          }
          uiConsole("Eth sign message => true", result);
        }
      );
    } catch (error) {
      console.log("error", error);
      uiConsole("error", error);
    }
  };

const signAndSendTransaction = async (toAddress: string, amount: string) => {
    try {
      const web3 = new Web3(provider as any);
      const accounts = await web3.eth.getAccounts();
      const contractAddress = "0x765de816845861e75a25fca122bb6898b8b1282a";
      const contract = new web3.eth.Contract(Token.abi, contractAddress);
      // Send transaction to smart contract to update message and wait to finish
      const txRes = await contract.methods.transfer(toAddress, Web3.utils.toBN(Web3.utils.toWei(amount,'ether'))).send({
        from: accounts[0],
        gas: 80000,
        maxPriorityFeePerGas: "5000000000", // Max priority fee per gas
        maxFeePerGas: "6000000000000", // Max fee per gas
      });
      uiConsole("Receipt", txRes);
      console.log(parseInt(amount)*10);
     if (txRes.status == '0x1' || txRes.status == 1) {
        console.log(`${txRes.status} Transaction Success`);
        return txRes;
      } else {
        console.log(`${txRes.status} Transaction Failed`);
        return txRes;
      }
    } catch (error) {
      console.log("Could not process transaction!")
      console.log("error", error);
      console.log(Token.abi);
      return false;
    }
  };

  return { getAccounts, getBalance, signAndSendTransaction, readAddress };
};

export default ethProvider;
