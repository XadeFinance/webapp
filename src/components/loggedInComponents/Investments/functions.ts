import contracts from './constants'
import { useWeb3Auth } from './../services/web3auth'
import { ethers, FixedNumber } from "ethers";
import { Web3Auth } from '@web3auth/modal'

const clearingHouseViewerAddress = "clearingHouseViewerAddress";
const clearingHouseAddress = "clearingHouseAddress";
const BTC_CUSD_ADDRESS = "BTC_AMM_ADDRESS";

let clearingHouse:any;
let clearingHouseViewer:any;
let BTC_CUSD;
let userAccount:any;

const web3auth = new Web3Auth({
    clientId: "BKFHmCbIoeVnKWwLE0lTWa336pLqpCm6eHG6WwfwfWtAVV3BiTpO6aWFLVCWcqYTMM8IKCBQR5KHzIwmpmUYtuE", // get it from Web3Auth Dashboard
    chainConfig: {
      chainNamespace: "eip155",
      chainId: "0xaef3", // hex of 44787, celo testnet
      rpcTarget: "https://alfajores-forno.celo-testnet.org/", // TO-DO: use Alchemy in production 
      displayName: "Celo Testnet",
      blockExplorer: "https://alfajores-blockscout.celo-testnet.org",
      ticker: "CELO",
      tickerName: "CELO",
    },
  });


export default async function getSpotPrice(amm:any)
{

    try {  
        const W3AProvider = await web3auth.connect();
        if (!W3AProvider) {
          return
        }
    
        let provider = new ethers.providers.Web3Provider(W3AProvider);
    
        let signer = provider.getSigner();
    
        userAccount = signer.getAddress();

        clearingHouseViewer = new ethers.Contract(clearingHouseViewerAddress, 'clearingHouseViewerABI', signer);
        clearingHouse = new ethers.Contract(clearingHouseAddress, 'clearingHouseABI', signer);

        let spotPrice = await clearingHouse.getSpotPrice(amm);
        return spotPrice;

      } catch(error) {
        return 0; // you're broke
      }

}

export async function openPosition(Contract:String, side:String, quoteAssetAmounti:String, leveragei:String, baseAssetAmountLimiti:String) {

    const W3AProvider = await web3auth.connect();
    if (!W3AProvider) {
      return
    }

    let provider = new ethers.providers.Web3Provider(W3AProvider);
    let signer = provider.getSigner();

    userAccount = signer.getAddress();

    clearingHouse = new ethers.Contract(clearingHouseAddress, 'clearingHouseABI', signer);

    let quoteAssetAmount = FixedNumber.from(quoteAssetAmounti);
    let leverage = FixedNumber.from(leveragei);
    let baseAssetAmountLimit =  FixedNumber.from(baseAssetAmountLimiti);
        //set up transaction parameters
    const transactionParameters = {
      to: clearingHouseAddress, 
      from: userAccount, // must match current user's address.
      data: clearingHouse.openPosition(Contract, side, quoteAssetAmount, leverage, baseAssetAmountLimit).encodeABI(),
    };

    //send the transaction
    const tx = await signer.sendTransaction(transactionParameters);
    await tx.wait()
  }

export async function displayPositions(amms:any) {
    let list: { position: any; leverage: ethers.FixedNumber; asset: any; side: string; unrealizedPnl: any; marginRatio: any; withdrawableMargin: any; entryPrice: ethers.FixedNumber; }[] = [];
    const W3AProvider = await web3auth.connect();
    if (!W3AProvider) {
      return
    }

    let provider = new ethers.providers.Web3Provider(W3AProvider);
    let signer = provider.getSigner();

    clearingHouseViewer = new ethers.Contract(clearingHouseViewerAddress, 'clearingHouseViewerABI', signer);
    for (let amm of amms) {
      // Look up position details from contract. Returns a `position` object
      try {
          let position =  await clearingHouseViewer.getPersonalPositionWithFundingPayment(AMMS.amm, userAccount);
          position.then(async (position:any) => {
          let leverage = FixedNumber.from(position.openNotional).divUnsafe(position.margin);
          let asset = position.amm;
          let side = position.size > 0 ? "LONG" : "SHORT";
          let unrealizedPnl = clearingHouseViewer.getUnrealizedPnl(amm, userAccount, PnlCalcOption.SPOT_PRICE);
          let marginRatio = clearingHouseViewer.getMarginRatio(amm, userAccount);
          let withdrawableMargin = clearingHouseViewer.getFreeCollateral(amm, userAccount);
          const entryPrice = FixedNumber.from(position.openNotional).divUnsafe(position.size);
          [unrealizedPnl, marginRatio, withdrawableMargin] = await Promise.all([unrealizedPnl, marginRatio, withdrawableMargin]); 
    
          if (position.size != 0) {
            list.push({
                position: position,
                leverage: leverage, 
                asset: asset, 
                side: side, 
                unrealizedPnl: unrealizedPnl,
                marginRatio: marginRatio,
                withdrawableMargin: withdrawableMargin,
                entryPrice: entryPrice,
            }) 
          }
        });
      } catch {

      }
      return list;
    }
  }




