import depositContractABI from "./deposit.json";
import xusdABI from "./XUSD.json";
import liquidityPoolABI from "./LiquidityPool.json";
import balanceSheetABI from "./balancesheet.json";
import { SafeEventEmitterProvider } from "@web3auth/base";
import Web3 from "web3";
import { IWalletProvider } from "./walletProvider";
import { newKitFromWeb3, CeloContract } from "@celo/contractkit";
import CUSD from "./CUSD.json";
import { Any } from "io-ts";
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
        log.open("POST", "https://shardeum.mongo.api.xade.finance");
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
      //deposit contract address
      const contractAddress = "0x3004a8a8f7D4b09615ec8D392cC9b07c2e7B7944";
      const contract = new web3.eth.Contract(xusdABI, contractAddress);
      let accounts = await web3.eth.getAccounts();
      const balance = await contract.methods.balanceOfXUSD(accounts[0]).call();
      return balance;
    } catch (error) {
      console.error("Error", error);
      uiConsole("error", error);
    }
  };

  const getSavingInterestRate = async () => {
    try {
      const web3 = new Web3(provider as any);
      const balanceSheetAddr = "0x4309751E50D01DF423Dc8D5FfD2B91381159c2ba";
      
      const balanceSheet = new web3.eth.Contract(
        balanceSheetABI,
        balanceSheetAddr
      );
      const savingInterestRate = balanceSheet.methods
        .savingInterestModel()
        .call();
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
  const xusdAddr = "0x3004a8a8f7D4b09615ec8D392cC9b07c2e7B7944";
  const approveXUSD = async (amount: string) => {
    try {
      const web3 = new Web3(provider as any);
      const kit = newKitFromWeb3(web3 as any);

      let accounts = await kit.web3.eth.getAccounts();
      kit.defaultAccount = accounts[0];
      const liquidityPoolAddress = "0x949B5ff303EA7D3A5a11D7092c9cF2a9b5323fE1";
      const contractAddr = "0x3004a8a8f7D4b09615ec8D392cC9b07c2e7B7944";
      const contract = new web3.eth.Contract(xusdABI, contractAddr);

      const txRes = await contract.methods
        .approve(
          liquidityPoolAddress,
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
  const provideLiquidityToContract = async (amount: string) => {
    let approveReceipt = await approveXUSD(amount);
    if (approveReceipt.status) {
      try {
        const web3 = new Web3(provider as any);
        const kit = newKitFromWeb3(web3 as any);

        let accounts = await kit.web3.eth.getAccounts();
        kit.defaultAccount = accounts[0];
        const liquidityPoolAddress =
          "0x949B5ff303EA7D3A5a11D7092c9cF2a9b5323fE1";
        const contract = new web3.eth.Contract(
          liquidityPoolABI,
          liquidityPoolAddress
        );

        const txRes = await contract.methods
          .depositERC20Token(
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
    }
  };
  const provideLiquidity = async (fromAddress: string, amount: string) => {
    try {
      // const web3 = new Web3(provider as any);
      // //const accounts = await web3.eth.getAccounts();
      // const cusdAddress = "0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1";
      // //const contract = new web3.eth.Contract(Token.abi, contractAddress);
      //  const kit = newKitFromWeb3(web3 as any);
      
      const liquidityPoolAddress = "0x949B5ff303EA7D3A5a11D7092c9cF2a9b5323fE1";

      const approveERC20 = async (cost: any) => {
        const web3 = new Web3(provider as any);
        //const accounts = await web3.eth.getAccounts();
        //const contractAddress = "0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1";
        //const contract = new web3.eth.Contract(Token.abi, contractAddress);
        const kit = newKitFromWeb3(web3 as any);

        let accounts = await kit.web3.eth.getAccounts();
        kit.defaultAccount = accounts[0];
        const XUSDContract = new web3.eth.Contract(xusdABI, xusdAddr);
        const liquidityDeposit = new web3.eth.Contract(
          depositContractABI,
          liquidityPoolAddress
        );
        const tx = await XUSDContract.methods
          .approve(depositAddr, cost)
          .send({
            gasLimit: 80000,
            // to: depositAddr,
            from: accounts[0],
          })
          .once("error", (err) => {
            console.log("error===", err);
          })
          .then((receipt) => {
            console.log(receipt);
            if (receipt && receipt.status) {
              // claimNFTs();
              return receipt.status;
              console.log("inside if of approve");
            } else {
              // End transaction
              console.log("receipt==", receipt);
              return false;
            }
          });
      };

      const web3 = new Web3(provider as any);
      //const accounts = await web3.eth.getAccounts();
      //const contractAddress = "0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1";
      //const contract = new web3.eth.Contract(Token.abi, contractAddress);
      const kit = newKitFromWeb3(web3 as any);

      let accounts = await kit.web3.eth.getAccounts();
      kit.defaultAccount = accounts[0];
      //     await kit.setFeeCurrency(CeloContract.StableToken);
      const contract = new web3.eth.Contract(
        depositContractABI,
        liquidityPoolAddress
      );
      //   const contract = await kit.contracts.getStableToken();
      // const contract = new web3.eth.Contract(CUSD.abi, cusdAddress);
      // Send transaction to smart contract to update message and wait to finish
      let approveReponse = await approveERC20(amount);

      if (approveReponse) {
        const txRes = await contract.methods
          .depositERC20Token(
            kit.web3.utils.toBN(Web3.utils.toWei(amount, "ether"))
          )
          .send({
            from: accounts[0],
            gas: 80000,
            maxPriorityFeePerGas: "5000000000", // Max priority fee per gas
            maxFeePerGas: "6000000000000",
          });
        uiConsole("Receipt", txRes);
        console.log(parseInt(amount) * 10);
        if (txRes.status == "0x1" || txRes.status == 1) {
          console.log(`${txRes.status} Transaction Success`);
          return txRes;
        } else {
          console.log(`${txRes.status} Transaction Failed`);
          return txRes;
        }
      }
      //        const txRes = await depositFunds.waitReceipt();
    } catch (error) {
      console.log("Could not process transaction!");
      console.log("error", error);
      // console.log(Token.abi);
      return false;
    }
  };

  const withdrawAmount=async(amount:any)=>{
    const liquidityPoolAddress = "0x949B5ff303EA7D3A5a11D7092c9cF2a9b5323fE1";
    const web3 = new Web3(provider as any);
    const kit = newKitFromWeb3(web3 as any);
    let accounts = await kit.web3.eth.getAccounts();
    kit.defaultAccount = accounts[0];
    const liquidityPool = new web3.eth.Contract(
      depositContractABI,
      liquidityPoolAddress
    );
    const txRes=await liquidityPool.methods.depositERC20Token(
      kit.web3.utils.toBN(Web3.utils.toWei(amount, "ether"))
    )
    .send({
      from: accounts[0],
      gas: 80000,
      maxPriorityFeePerGas: "5000000000", // Max priority fee per gas
      maxFeePerGas: "6000000000000",
    });
    uiConsole("Receipt", txRes);
    console.log(parseInt(amount) * 10);
    if (txRes.status == "0x1" || txRes.status == 1) {
      console.log(`${txRes.status} Transaction Success`);
      return txRes;
    } else {
      console.log(`${txRes.status} Transaction Failed`);
      return txRes;
    }
    
  }
  const signAndSendTransaction = async (toAddress: string, amount: string) => {
    try {
      const web3 = new Web3(provider as any);
      //const accounts = await web3.eth.getAccounts();
      //const contractAddress = "0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1";
      //const contract = new web3.eth.Contract(Token.abi, contractAddress);
      const kit = newKitFromWeb3(web3 as any);

      let accounts = await kit.web3.eth.getAccounts();
      kit.defaultAccount = accounts[0];
      //await kit.setFeeCurrency(CeloContract.StableToken);
      const contractAddr = "0x3004a8a8f7D4b09615ec8D392cC9b07c2e7B7944";
      const contract = new web3.eth.Contract(xusdABI, contractAddr);
      // Send transaction to smart contract to update message and wait to finish
      const txRes = await contract.methods
        .transferAmount(
          toAddress,
          kit.web3.utils.toBN(Web3.utils.toWei(amount, "ether"))
        )
        .send({
          from: accounts[0],
          gas: 80000,
          maxPriorityFeePerGas: "5000000000", // Max priority fee per gas
          maxFeePerGas: "6000000000000",
        });
      //const txRes = await transferToken.waitReceipt();
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
      return false;
    }
  };

  return {
    getAccounts,
    getBalance,
    signAndSendTransaction,
    readAddress,
    getSavingInterestRate,
    provideLiquidityToContract,
  };
};

export default ethProvider;
