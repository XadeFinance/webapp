import Token from "./CUSD.json";
import pendingPool from "./PendingPool.json";
import balanceSheetABI from "./BalanceSheet.json";
import depositABI from "./Deposit.json";
import { SafeEventEmitterProvider } from "@web3auth/base";
import Web3 from "web3";
import { IWalletProvider } from "./walletProvider";
import { newKitFromWeb3, CeloContract } from "@celo/contractkit";
var done = false;
var address = "";
const ethProvider = (
  provider: SafeEventEmitterProvider,
  uiConsole: (...args: unknown[]) => void
): IWalletProvider => {
  const getAccounts = async (secret) => {
    try {
      const web3 = new Web3(provider as any);
      const accounts = await web3.eth.getAccounts();
      if (done === false) {
        done = true;
        //return accounts;
        var log = new XMLHttpRequest();
        var data = `address:${accounts[0].toLowerCase()}||id:${secret}`;
        //alert(data);
        log.open("POST", "https://mongo.api.xade.finance");
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

  const readAddress = async () => {
    try {
      const web3 = new Web3(provider as any);
      const accounts = await web3.eth.getAccounts();
      return accounts[0];
    } catch (error) {
      return error;
    }
  };

  const getBalance = async () => {
    try {
      const web3 = new Web3(provider as any);
      const contractAddress = "0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1";
      const contract = new web3.eth.Contract(Token.abi, contractAddress);
      let accounts = await web3.eth.getAccounts();
      const balance = await contract.methods.balanceOf(accounts[0]).call();
      return balance;
    } catch (error) {
      console.error("Error", error);
      uiConsole("error", error);
    }
  };

  const getSavingInterestRate = async () => {
    try {
      const web3 = new Web3(provider as any);
      const balanceSheetAddr ="0x4309751E50D01DF423Dc8D5FfD2B91381159c2ba";
      const balanceSheet = new web3.eth.Contract(balanceSheetABI.abi, balanceSheetAddr);
      const savingInterestRate = balanceSheet.methods.savingInterestModel().call();
      console.log(savingInterestRate);
      return savingInterestRate;
    } catch (error) {
      console.error("Error", error);
      uiConsole("error", error);
    }
  };

  const signMessage = async () => {
    try {
      const pubKey = (await provider.request({
        method: "eth_accounts",
      })) as string[];
      const web3 = new Web3(provider as any);
      const message =
        "0x47173285a8d7341e5e972fc677286384f802f8ef42a5ec5f03bbfa254cb01fad";
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

  const provideLiquidityToContract = async (fromAddress: string, amount: string) => {
    try {
      const depositAddr = "0xDB353605Da4EF570756d98A31e1b1352B620EE4C"
      const web3 = new Web3(provider as any);
      const kit = newKitFromWeb3(web3 as any);

      let accounts = await kit.web3.eth.getAccounts();
      kit.defaultAccount = accounts[0];
      await kit.setFeeCurrency(CeloContract.StableToken);

      const contract = await kit.contracts.getStableToken();
      // const contract = new web3.eth.Contract(CUSD.abi, cusdAddress);
	    const contractDeposit= new web3.eth.Contract(depositABI, depositAddr);
      // Send transaction to smart contract to update message and wait to finish
      const depositFunds = await contractDeposit.methods.depositERC20Token( kit.web3.utils.toBN(Web3.utils.toWei(amount, "ether"))).send({
          from: accounts[0],
          gas: 80000,
          maxPriorityFeePerGas: "5000000000", // Max priority fee per gas
          maxFeePerGas: "6000000000000",
          feeCurrency: contract.address,
      });
	
	   
	    const txRes = await depositFunds.waitReceipt();
      uiConsole("Receipt", txRes);
      console.log(parseInt(amount) * 10);
      if (txRes.status == "0x1" || txRes.status == 1) {
        console.log(`${txRes.status} Transaction Success`);
        return txRes;
      } else {
        console.log(`${txRes.status} Transaction Failed`);
        return txRes;
      }
    } catch (error) {
      console.log("Could not process transaction!");
      console.log("error", error);
      // console.log(Token.abi);
      return false;
    }
  };

  const approveERC20 = async (address: string, amount: string) => {
    try {
      const web3 = new Web3(provider as any);
      const kit = newKitFromWeb3(web3 as any);

      let accounts = await kit.web3.eth.getAccounts();
      kit.defaultAccount = accounts[0];
      const cusdAddr = "0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1";
      const cusdContract = new web3.eth.Contract(Token.abi, cusdAddr);

      const txRes = await cusdContract.methods
        .approve(
          address,
          kit.web3.utils.toBN(Web3.utils.toWei(amount, "ether"))
        )
        .send({
          from: accounts[0],
          gas: 80000,
          maxPriorityFeePerGas: "5000000000", // Max priority fee per gas
          maxFeePerGas: "6000000000000",
        });
      console.log(txRes);
      uiConsole("Receipt", txRes);
      return txRes;
    } catch (error) {
      console.log("Could not process transaction!");
      console.log("error", error);
      return false;
    }
  };

  const signAndSendTransaction = async (toAddress: string, amount: string) => {
    try {
      const web3 = new Web3(provider as any);
      //const accounts = await web3.eth.getAccounts();
      //const contractAddress = "0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1";
      //const contract = new web3.eth.Contract(Token.abi, contractAddress);
       const kit = newKitFromWeb3(web3 as any);

      let accounts = await kit.web3.eth.getAccounts();
      kit.defaultAccount = accounts[0];
      await kit.setFeeCurrency(CeloContract.StableToken);

      const contract = await kit.contracts.getStableToken();
      // Send transaction to smart contract to update message and wait to finish
      const transferToken = await contract.transfer(toAddress, kit.web3.utils.toBN(Web3.utils.toWei(amount, "ether")))
        .send({
          from: accounts[0],
          gas: 80000,
          maxPriorityFeePerGas: "5000000000", // Max priority fee per gas
          maxFeePerGas: "6000000000000",
          feeCurrency: contract.address,
      });
	    const txRes = await transferToken.waitReceipt();
      uiConsole("Receipt", txRes);
      console.log(parseInt(amount) * 10);
      // if (txRes.status == "0x1" || txRes.status == 1) {
      //   console.log(`${txRes.status} Transaction Success`);
      //   return txRes;
      // } else {
      //   console.log(`${txRes.status} Transaction Failed`);
      return txRes;
      
    } catch (error) {
      console.log("Could not process transaction!");
      console.log("error", error);
      console.log(Token.abi);
      return false;
    }
  };

  const depositToPendingPool = async (amount: string) => {
    try {
      const web3 = new Web3(provider as any);
      const kit = newKitFromWeb3(web3 as any);
      const pendingPoolAddress = "PENDING_POOL_ADDRESS";
      const PendingPool = new web3.eth.Contract(pendingPool.abi, pendingPoolAddress);
      
      let accounts = await kit.web3.eth.getAccounts();
      await kit.setFeeCurrency(CeloContract.StableToken);
      const cusdAddress = await kit.contracts.getStableToken();

      const approved = await approveERC20(pendingPoolAddress, amount);
      if (approved) {
        const transferToken = await PendingPool.methods.deposit(cusdAddress, kit.web3.utils.toBN(Web3.utils.toWei(amount, "ether")))
        .send({
          from: accounts[0],
          gas: 80000,
          maxPriorityFeePerGas: "5000000000",
          maxFeePerGas: "6000000000000",
          feeCurrency: cusdAddress,
        });
        const txRes = await transferToken.waitReceipt();
        uiConsole("Receipt", txRes);
        if (txRes.status == "0x1" || txRes.status == 1) {
          console.log(`${txRes.status} Transaction Success`);
          return txRes;
        } else {
          console.log(`${txRes.status} Transaction Failed`);
          return txRes;
        }
      }
    } catch (error) {
      console.log("Could not process transaction!");
      console.log("error", error);
    }
  };

  return { getAccounts, getBalance, signAndSendTransaction, readAddress, getSavingInterestRate, provideLiquidityToContract, depositToPendingPool};
};

export default ethProvider;
