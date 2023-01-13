import depositContractABI from "./deposit.json";
import xusdABI from "./XUSD.json";
import { SafeEventEmitterProvider } from "@web3auth/base";
import Web3 from "web3";
import { IWalletProvider } from "./walletProvider";
import { newKitFromWeb3, CeloContract } from "@celo/contractkit";
import CUSD from "./CUSD.json";
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
      const balanceSheetAddr ="0x4309751E50D01DF423Dc8D5FfD2B91381159c2ba";
      const balanceSheetABI = {
        "_format": "hh-sol-artifact-1",
        "contractName": "balanceSheet",
        "sourceName": "contracts/balancesheet.sol",
        "abi": [
          {
            "inputs": [],
            "name": "BY",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "RR",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "borrowingInterestModel",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "checkMaturity",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "maturity",
            "outputs": [
              {
                "internalType": "bool",
                "name": "",
                "type": "bool"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "maturityContract",
            "outputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "numerator",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "denominator",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "precisionset",
                "type": "uint256"
              }
            ],
            "name": "percent",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "quotient",
                "type": "uint256"
              }
            ],
            "stateMutability": "pure",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "poolContract",
            "outputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "ratio",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "savingInterestModel",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "savingRate",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "utilisationRatio",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "variableRate",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          }
        ],
        "bytecode": "0x608060405260086000556064600155600054608261001d919061011a565b6002556002600855738431717927c4a3343bcf1626e7b5b1d31e240406600960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555073d9145cce52d386f254917e481eb44e9943f39138600a60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055503480156100db57600080fd5b5061015c565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610125826100e1565b9150610130836100e1565b925082820261013e816100e1565b91508282048414831517610155576101546100eb565b5b5092915050565b610c4a8061016b6000396000f3fe608060405234801561001057600080fd5b50600436106100ce5760003560e01c806388d52ef71161008c578063b292e33411610066578063b292e334146101f3578063b7e957dc14610211578063cc0970761461022f578063dc38710a1461024d576100ce565b806388d52ef7146101995780639212ac59146101b7578063a4723e2e146101d5576100ce565b80622c1a9e146100d357806305f99ffc146101035780631455a46d14610121578063204f83f91461013f57806324e0d4601461015d57806371ca337d1461017b575b600080fd5b6100ed60048036038101906100e891906107b3565b610257565b6040516100fa9190610815565b60405180910390f35b61010b6102b4565b6040516101189190610815565b60405180910390f35b61012961031a565b6040516101369190610815565b60405180910390f35b610147610320565b604051610154919061084b565b60405180910390f35b610165610333565b6040516101729190610815565b60405180910390f35b610183610339565b6040516101909190610815565b60405180910390f35b6101a161033f565b6040516101ae91906108a7565b60405180910390f35b6101bf610357565b6040516101cc9190610815565b60405180910390f35b6101dd610568565b6040516101ea9190610815565b60405180910390f35b6101fb6106a8565b60405161020891906108a7565b60405180910390f35b6102196106c0565b6040516102269190610815565b60405180910390f35b6102376106c6565b6040516102449190610815565b60405180910390f35b6102556106cc565b005b60008060018361026791906108f1565b600a6102739190610a58565b8561027e9190610aa3565b90506000600a600586846102929190610b14565b61029c91906108f1565b6102a69190610b14565b905080925050509392505050565b6000806102bf610568565b90506002548160015460016102d49190610aa3565b6102de9190610b45565b6102e89190610aa3565b6004819055506004546001546002546103019190610aa3565b61030b9190610b45565b60038190555060035491505090565b60035481565b600760009054906101000a900460ff1681565b60045481565b60055481565b738431717927c4a3343bcf1626e7b5b1d31e24040681565b60008060019050600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f86ccd416040518163ffffffff1660e01b81526004016020604051808303816000875af11580156103cd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103f19190610b8e565b6008546103fe9190610aa3565b600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f86ccd416040518163ffffffff1660e01b81526004016020604051808303816000875af115801561046d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104919190610b8e565b60035461049e9190610aa3565b6104a891906108f1565b600681905550600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b717e9976040518163ffffffff1660e01b81526004016020604051808303816000875af115801561051d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105419190610b8e565b8160065461054f9190610aa3565b6105599190610b14565b60068190555060065491505090565b600061069a600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b717e9976040518163ffffffff1660e01b81526004016020604051808303816000875af11580156105dc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106009190610b8e565b600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f86ccd416040518163ffffffff1660e01b81526004016020604051808303816000875af115801561066f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106939190610b8e565b6002610257565b600581905550600554905090565b73d9145cce52d386f254917e481eb44e9943f3913881565b60085481565b60065481565b600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166369fadd8b6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610739573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061075d9190610be7565b600760006101000a81548160ff021916908315150217905550565b600080fd5b6000819050919050565b6107908161077d565b811461079b57600080fd5b50565b6000813590506107ad81610787565b92915050565b6000806000606084860312156107cc576107cb610778565b5b60006107da8682870161079e565b93505060206107eb8682870161079e565b92505060406107fc8682870161079e565b9150509250925092565b61080f8161077d565b82525050565b600060208201905061082a6000830184610806565b92915050565b60008115159050919050565b61084581610830565b82525050565b6000602082019050610860600083018461083c565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061089182610866565b9050919050565b6108a181610886565b82525050565b60006020820190506108bc6000830184610898565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006108fc8261077d565b91506109078361077d565b925082820190508082111561091f5761091e6108c2565b5b92915050565b60008160011c9050919050565b6000808291508390505b600185111561097c57808604811115610958576109576108c2565b5b60018516156109675780820291505b808102905061097585610925565b945061093c565b94509492505050565b6000826109955760019050610a51565b816109a35760009050610a51565b81600181146109b957600281146109c3576109f2565b6001915050610a51565b60ff8411156109d5576109d46108c2565b5b8360020a9150848211156109ec576109eb6108c2565b5b50610a51565b5060208310610133831016604e8410600b8410161715610a275782820a905083811115610a2257610a216108c2565b5b610a51565b610a348484846001610932565b92509050818404811115610a4b57610a4a6108c2565b5b81810290505b9392505050565b6000610a638261077d565b9150610a6e8361077d565b9250610a9b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484610985565b905092915050565b6000610aae8261077d565b9150610ab98361077d565b9250828202610ac78161077d565b91508282048414831517610ade57610add6108c2565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000610b1f8261077d565b9150610b2a8361077d565b925082610b3a57610b39610ae5565b5b828204905092915050565b6000610b508261077d565b9150610b5b8361077d565b9250828203905081811115610b7357610b726108c2565b5b92915050565b600081519050610b8881610787565b92915050565b600060208284031215610ba457610ba3610778565b5b6000610bb284828501610b79565b91505092915050565b610bc481610830565b8114610bcf57600080fd5b50565b600081519050610be181610bbb565b92915050565b600060208284031215610bfd57610bfc610778565b5b6000610c0b84828501610bd2565b9150509291505056fea26469706673582212207230126607991b9a88d93b1f53320bac31ea1d7b50df9f7d6863c7a84457edde64736f6c63430008110033",
        "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100ce5760003560e01c806388d52ef71161008c578063b292e33411610066578063b292e334146101f3578063b7e957dc14610211578063cc0970761461022f578063dc38710a1461024d576100ce565b806388d52ef7146101995780639212ac59146101b7578063a4723e2e146101d5576100ce565b80622c1a9e146100d357806305f99ffc146101035780631455a46d14610121578063204f83f91461013f57806324e0d4601461015d57806371ca337d1461017b575b600080fd5b6100ed60048036038101906100e891906107b3565b610257565b6040516100fa9190610815565b60405180910390f35b61010b6102b4565b6040516101189190610815565b60405180910390f35b61012961031a565b6040516101369190610815565b60405180910390f35b610147610320565b604051610154919061084b565b60405180910390f35b610165610333565b6040516101729190610815565b60405180910390f35b610183610339565b6040516101909190610815565b60405180910390f35b6101a161033f565b6040516101ae91906108a7565b60405180910390f35b6101bf610357565b6040516101cc9190610815565b60405180910390f35b6101dd610568565b6040516101ea9190610815565b60405180910390f35b6101fb6106a8565b60405161020891906108a7565b60405180910390f35b6102196106c0565b6040516102269190610815565b60405180910390f35b6102376106c6565b6040516102449190610815565b60405180910390f35b6102556106cc565b005b60008060018361026791906108f1565b600a6102739190610a58565b8561027e9190610aa3565b90506000600a600586846102929190610b14565b61029c91906108f1565b6102a69190610b14565b905080925050509392505050565b6000806102bf610568565b90506002548160015460016102d49190610aa3565b6102de9190610b45565b6102e89190610aa3565b6004819055506004546001546002546103019190610aa3565b61030b9190610b45565b60038190555060035491505090565b60035481565b600760009054906101000a900460ff1681565b60045481565b60055481565b738431717927c4a3343bcf1626e7b5b1d31e24040681565b60008060019050600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f86ccd416040518163ffffffff1660e01b81526004016020604051808303816000875af11580156103cd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103f19190610b8e565b6008546103fe9190610aa3565b600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f86ccd416040518163ffffffff1660e01b81526004016020604051808303816000875af115801561046d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104919190610b8e565b60035461049e9190610aa3565b6104a891906108f1565b600681905550600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b717e9976040518163ffffffff1660e01b81526004016020604051808303816000875af115801561051d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105419190610b8e565b8160065461054f9190610aa3565b6105599190610b14565b60068190555060065491505090565b600061069a600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b717e9976040518163ffffffff1660e01b81526004016020604051808303816000875af11580156105dc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106009190610b8e565b600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f86ccd416040518163ffffffff1660e01b81526004016020604051808303816000875af115801561066f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106939190610b8e565b6002610257565b600581905550600554905090565b73d9145cce52d386f254917e481eb44e9943f3913881565b60085481565b60065481565b600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166369fadd8b6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610739573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061075d9190610be7565b600760006101000a81548160ff021916908315150217905550565b600080fd5b6000819050919050565b6107908161077d565b811461079b57600080fd5b50565b6000813590506107ad81610787565b92915050565b6000806000606084860312156107cc576107cb610778565b5b60006107da8682870161079e565b93505060206107eb8682870161079e565b92505060406107fc8682870161079e565b9150509250925092565b61080f8161077d565b82525050565b600060208201905061082a6000830184610806565b92915050565b60008115159050919050565b61084581610830565b82525050565b6000602082019050610860600083018461083c565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061089182610866565b9050919050565b6108a181610886565b82525050565b60006020820190506108bc6000830184610898565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006108fc8261077d565b91506109078361077d565b925082820190508082111561091f5761091e6108c2565b5b92915050565b60008160011c9050919050565b6000808291508390505b600185111561097c57808604811115610958576109576108c2565b5b60018516156109675780820291505b808102905061097585610925565b945061093c565b94509492505050565b6000826109955760019050610a51565b816109a35760009050610a51565b81600181146109b957600281146109c3576109f2565b6001915050610a51565b60ff8411156109d5576109d46108c2565b5b8360020a9150848211156109ec576109eb6108c2565b5b50610a51565b5060208310610133831016604e8410600b8410161715610a275782820a905083811115610a2257610a216108c2565b5b610a51565b610a348484846001610932565b92509050818404811115610a4b57610a4a6108c2565b5b81810290505b9392505050565b6000610a638261077d565b9150610a6e8361077d565b9250610a9b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484610985565b905092915050565b6000610aae8261077d565b9150610ab98361077d565b9250828202610ac78161077d565b91508282048414831517610ade57610add6108c2565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000610b1f8261077d565b9150610b2a8361077d565b925082610b3a57610b39610ae5565b5b828204905092915050565b6000610b508261077d565b9150610b5b8361077d565b9250828203905081811115610b7357610b726108c2565b5b92915050565b600081519050610b8881610787565b92915050565b600060208284031215610ba457610ba3610778565b5b6000610bb284828501610b79565b91505092915050565b610bc481610830565b8114610bcf57600080fd5b50565b600081519050610be181610bbb565b92915050565b600060208284031215610bfd57610bfc610778565b5b6000610c0b84828501610bd2565b9150509291505056fea26469706673582212207230126607991b9a88d93b1f53320bac31ea1d7b50df9f7d6863c7a84457edde64736f6c63430008110033",
        "linkReferences": {},
        "deployedLinkReferences": {}
      }
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
  const xusdAddr = "0x3004a8a8f7D4b09615ec8D392cC9b07c2e7B7944";
  const provideLiquidityToContract  = async(fromAddress: string, amount: string) => {
	        const web3 = new Web3(provider as any);
      //const accounts = await web3.eth.getAccounts();
      //const contractAddress = "0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1";
      //const contract = new web3.eth.Contract(Token.abi, contractAddress);
       const kit = newKitFromWeb3(web3 as any);

      let accounts = await kit.web3.eth.getAccounts();
      kit.defaultAccount = accounts[0];
 //     await kit.setFeeCurrency(CeloContract.StableToken);
const contract = new web3.eth.Contract(xusdABI, xusdAddr);

const tx = contract.methods.approve("0x949B5ff303EA7D3A5a11D7092c9cF2a9b5323fE1",  kit.web3.utils.toBN(Web3.utils.toWei(amount, "ether"))).send({
	gasLimit:80000,
	to: xusdAddr,
	from:accounts[0]
}).once("error", (err) => {
        console.log(err);
      })
            .then((receipt) => {
        console.log(receipt);
        if (receipt && receipt.status) {
          //const rcpt = await provideLiquidity(fromAddress, amount);
        const a = 1;
		//return rcpt;
	} else {
const b = 1;
          // End transaction
        }
      });
  };
  const provideLiquidity = async (fromAddress: string, amount: string) => {
    try {
      // const web3 = new Web3(provider as any);
      // //const accounts = await web3.eth.getAccounts();
      // const cusdAddress = "0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1";
      // //const contract = new web3.eth.Contract(Token.abi, contractAddress);
      //  const kit = newKitFromWeb3(web3 as any);
const liquidityPoolAbi = {
  "_format": "hh-sol-artifact-1",
  "contractName": "liquidityPool",
  "sourceName": "contracts/liquidityPool.sol",
  "abi": [
    {
      "inputs": [],
      "name": "WBTCReserve",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "amountBorrowed",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "amountDeposited",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "borrow",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_borrower",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_WBTCAmount",
          "type": "uint256"
        }
      ],
      "name": "borrowWBTC",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "borrowedWBTC",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_provider",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_WBTCAmount",
          "type": "uint256"
        }
      ],
      "name": "provideLiquidity",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "userLiquidity",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b50610680806100206000396000f3fe60806040526004361061007b5760003560e01c8063b86c06201161004e578063b86c062014610143578063ba4c28c314610173578063f82cec02146101b0578063f86ccd41146101db5761007b565b8063250d6916146100805780633f0ead02146100ab5780635fea6120146100e8578063b717e99714610118575b600080fd5b34801561008c57600080fd5b50610095610206565b6040516100a291906103c3565b60405180910390f35b3480156100b757600080fd5b506100d260048036038101906100cd9190610441565b61020c565b6040516100df91906103c3565b60405180910390f35b61010260048036038101906100fd919061049a565b610224565b60405161010f91906104f5565b60405180910390f35b34801561012457600080fd5b5061012d6102a7565b60405161013a91906103c3565b60405180910390f35b61015d6004803603810190610158919061049a565b6102b1565b60405161016a91906103c3565b60405180910390f35b34801561017f57600080fd5b5061019a60048036038101906101959190610441565b610375565b6040516101a791906103c3565b60405180910390f35b3480156101bc57600080fd5b506101c561038d565b6040516101d291906103c3565b60405180910390f35b3480156101e757600080fd5b506101f0610393565b6040516101fd91906103c3565b60405180910390f35b60015481565b60046020528060005260406000206000915090505481565b60008060005490508260008082825461023d919061053f565b9250508190555082600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600054811061029b5760009150506102a1565b60019150505b92915050565b6000600154905090565b600081600054116102f7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102ee906105f6565b60405180910390fd5b81600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508160008082825461034c9190610616565b925050819055508160016000828254610365919061053f565b9250508190555081905092915050565b60026020528060005260406000206000915090505481565b60005481565b60006001546000546103a5919061053f565b905090565b6000819050919050565b6103bd816103aa565b82525050565b60006020820190506103d860008301846103b4565b92915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061040e826103e3565b9050919050565b61041e81610403565b811461042957600080fd5b50565b60008135905061043b81610415565b92915050565b600060208284031215610457576104566103de565b5b60006104658482850161042c565b91505092915050565b610477816103aa565b811461048257600080fd5b50565b6000813590506104948161046e565b92915050565b600080604083850312156104b1576104b06103de565b5b60006104bf8582860161042c565b92505060206104d085828601610485565b9150509250929050565b60008115159050919050565b6104ef816104da565b82525050565b600060208201905061050a60008301846104e6565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061054a826103aa565b9150610555836103aa565b925082820190508082111561056d5761056c610510565b5b92915050565b600082825260208201905092915050565b7f506f6f6c20646f6573206e6f7420686176652073756666696369656e7420667560008201527f6e64210000000000000000000000000000000000000000000000000000000000602082015250565b60006105e0602383610573565b91506105eb82610584565b604082019050919050565b6000602082019050818103600083015261060f816105d3565b9050919050565b6000610621826103aa565b915061062c836103aa565b925082820390508181111561064457610643610510565b5b9291505056fea2646970667358221220f4f7d2e32096d71c8756c31692158b68e18571b226a3730b9f927180d7ee22d864736f6c63430008110033",
  "deployedBytecode": "0x60806040526004361061007b5760003560e01c8063b86c06201161004e578063b86c062014610143578063ba4c28c314610173578063f82cec02146101b0578063f86ccd41146101db5761007b565b8063250d6916146100805780633f0ead02146100ab5780635fea6120146100e8578063b717e99714610118575b600080fd5b34801561008c57600080fd5b50610095610206565b6040516100a291906103c3565b60405180910390f35b3480156100b757600080fd5b506100d260048036038101906100cd9190610441565b61020c565b6040516100df91906103c3565b60405180910390f35b61010260048036038101906100fd919061049a565b610224565b60405161010f91906104f5565b60405180910390f35b34801561012457600080fd5b5061012d6102a7565b60405161013a91906103c3565b60405180910390f35b61015d6004803603810190610158919061049a565b6102b1565b60405161016a91906103c3565b60405180910390f35b34801561017f57600080fd5b5061019a60048036038101906101959190610441565b610375565b6040516101a791906103c3565b60405180910390f35b3480156101bc57600080fd5b506101c561038d565b6040516101d291906103c3565b60405180910390f35b3480156101e757600080fd5b506101f0610393565b6040516101fd91906103c3565b60405180910390f35b60015481565b60046020528060005260406000206000915090505481565b60008060005490508260008082825461023d919061053f565b9250508190555082600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600054811061029b5760009150506102a1565b60019150505b92915050565b6000600154905090565b600081600054116102f7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102ee906105f6565b60405180910390fd5b81600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508160008082825461034c9190610616565b925050819055508160016000828254610365919061053f565b9250508190555081905092915050565b60026020528060005260406000206000915090505481565b60005481565b60006001546000546103a5919061053f565b905090565b6000819050919050565b6103bd816103aa565b82525050565b60006020820190506103d860008301846103b4565b92915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061040e826103e3565b9050919050565b61041e81610403565b811461042957600080fd5b50565b60008135905061043b81610415565b92915050565b600060208284031215610457576104566103de565b5b60006104658482850161042c565b91505092915050565b610477816103aa565b811461048257600080fd5b50565b6000813590506104948161046e565b92915050565b600080604083850312156104b1576104b06103de565b5b60006104bf8582860161042c565b92505060206104d085828601610485565b9150509250929050565b60008115159050919050565b6104ef816104da565b82525050565b600060208201905061050a60008301846104e6565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061054a826103aa565b9150610555836103aa565b925082820190508082111561056d5761056c610510565b5b92915050565b600082825260208201905092915050565b7f506f6f6c20646f6573206e6f7420686176652073756666696369656e7420667560008201527f6e64210000000000000000000000000000000000000000000000000000000000602082015250565b60006105e0602383610573565b91506105eb82610584565b604082019050919050565b6000602082019050818103600083015261060f816105d3565b9050919050565b6000610621826103aa565b915061062c836103aa565b925082820390508181111561064457610643610510565b5b9291505056fea2646970667358221220f4f7d2e32096d71c8756c31692158b68e18571b226a3730b9f927180d7ee22d864736f6c63430008110033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}
const liquidityPoolAddress = "0x949B5ff303EA7D3A5a11D7092c9cF2a9b5323fE1";

const approveERC20 =  async (cost :any) => {
  const web3 = new Web3(provider as any);
  //const accounts = await web3.eth.getAccounts();
  //const contractAddress = "0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1";
  //const contract = new web3.eth.Contract(Token.abi, contractAddress);
   const kit = newKitFromWeb3(web3 as any);

  let accounts = await kit.web3.eth.getAccounts();
  kit.defaultAccount = accounts[0];
  const XUSDContract= new web3.eth.Contract(xusdABI, xusdAddr);
  const liquidityDeposit= new web3.eth.Contract(depositContractABI,liquidityPoolAddress);
  const tx = await XUSDContract.methods
    .approve(depositAddr, cost)
    .send({
      gasLimit: 80000,
      // to: depositAddr,
      from: accounts[0],

    })
    .once("error", (err) => {
      console.log("error===",err);
    })
    .then((receipt) => {
      console.log(receipt);
      if (receipt && receipt.status) {
        // claimNFTs();
        console.log("inside if of approve")
      } else {
        // End transaction
        console.log("receipt==",receipt);
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
      const contract = new web3.eth.Contract(depositContractABI, liquidityPoolAddress);
   //   const contract = await kit.contracts.getStableToken();
      // const contract = new web3.eth.Contract(CUSD.abi, cusdAddress);
      // Send transaction to smart contract to update message and wait to finish
      await approveERC20(amount);
      const txRes = await contract.methods.depositERC20Token(kit.web3.utils.toBN(Web3.utils.toWei(amount, "ether")))
        .send({
          from: accounts[0],
          gas: 80000,
          maxPriorityFeePerGas: "5000000000", // Max priority fee per gas
          maxFeePerGas: "6000000000000",
        });
 //        const txRes = await depositFunds.waitReceipt();
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
                           const contract = new web3.eth.Contract(xusdABI,contractAddr);
      // Send transaction to smart contract to update message and wait to finish
      const txRes = await contract.methods.transferAmount(toAddress, kit.web3.utils.toBN(Web3.utils.toWei(amount, "ether")))
        .send({
          from: accounts[0],
          gas: 80000,
          maxPriorityFeePerGas: "5000000000", // Max priority fee per gas
          maxFeePerGas: "6000000000000"
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

  return { getAccounts, getBalance, signAndSendTransaction, readAddress, getSavingInterestRate, provideLiquidityToContract };
};

export default ethProvider;
