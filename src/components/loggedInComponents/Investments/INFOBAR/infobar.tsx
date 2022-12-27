import { useState, useEffect } from 'react';
import styles from './index.module.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Contracts from './../constants'
// import getSpotPrice from '../functions'
import Web3 from "web3"

 var currentPrice;
export default function Component() {
    const params:any = useParams();
    let addr = parseInt(params.addr)
    if(!(addr >= 1 && addr <= 5)) 
      addr = 1;
      const web3 = new Web3("https://rpc.ankr.com/eth")
      const aggregatorV3InterfaceABI = [
        {
          inputs: [],
          name: "decimals",
          outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "description",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "uint80", name: "_roundId", type: "uint80" }],
          name: "getRoundData",
          outputs: [
            { internalType: "uint80", name: "roundId", type: "uint80" },
            { internalType: "int256", name: "answer", type: "int256" },
            { internalType: "uint256", name: "startedAt", type: "uint256" },
            { internalType: "uint256", name: "updatedAt", type: "uint256" },
            { internalType: "uint80", name: "answeredInRound", type: "uint80" },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "latestRoundData",
          outputs: [
            { internalType: "uint80", name: "roundId", type: "uint80" },
            { internalType: "int256", name: "answer", type: "int256" },
            { internalType: "uint256", name: "startedAt", type: "uint256" },
            { internalType: "uint256", name: "updatedAt", type: "uint256" },
            { internalType: "uint80", name: "answeredInRound", type: "uint80" },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "version",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
      ]
   
   var options = ["0xF4030086522a5bEEa4988F8cA5B36dbC97BeE88c","0x1ceDaaB50936881B3e449e47e40A2cDAF5576A4a","0x214eD9Da11D2fbe465a6fc601a91E62EbEc1a0D6","0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419","0xb49f677943BC038e9857d61E7d053CaA2C1734C1"] 
    // let contra
    const priceFeed = new web3.eth.Contract(aggregatorV3InterfaceABI, options[addr-1])
  
    const [price,setPrice] = useState(0)
    const roundData = priceFeed.methods
    .latestRoundData()
    .call()
    .then((roundData) => {
      // Do something with roundData
      var price2;

      price2 = parseFloat(roundData[1])/10**8

      price2 = (price2.toFixed(2)).toString()

      setPrice(price2.toString())

    })
    const contract = Contracts[addr-1]
    const amm = contract.address;
    let response = null;
    let obj = "";
    //const baseURL = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=a7df6582-7a00-4861-a5dc-392c2ce54b79&start=1&limit=1'
    //  React.useEffect(() => {
    //     axios.get(baseURL).then((response:any) => {
    //     alert(response.data);
    //     }).catch((error:any) => {console.log(error)});
    // }, []);
    //var xhttp = new XMLHttpRequest();

     //xhttp.onreadystatechange = function() {
    //if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
     //   obj = JSON.parse(xhttp.responseText);
       // alert(JSON.stringify(obj["quote"]["USD"]["price"]));
      //  console.log(JSON.stringify(obj["quote"]["USD"]["price"]));  
       //      }
//};
//xhttp.open("GET", "/api", true);
//xhttp.send();
// 
// var xhr2 = new XMLHttpRequest();
//   xhr2.onreadystatechange=function(){
//  if(xhr2.readyState==XMLHttpRequest.DONE){
//  setPrice(xhr2.responseText)
// }
// }

// useEffect(() => {
//   const interval = setInterval(() => {
//     var xhr3 = new XMLHttpRequest();
//     xhr3.onreadystatechange=function(){
//       if(xhr3.readyState==XMLHttpRequest.DONE){
//         let yes;
//         try {
//           yes = parseFloat(xhr3.responseText);
//       } catch {
//           yes = false;
//       }
//         if(yes != false) setPrice(xhr3.responseText)
//       }
//         }
//     xhr3.open('GET', `https://price.api.xade.finance/${options[addr-1]}`)
//     xhr3.send()
//   }, 20000);
//   return () => clearInterval(interval);
// }, []);


//   xhr2.open('GET', `https://price.api.xade.finance/${options[addr-1]}`)
//   xhr2.send()
     // alert(JSON.stringify(json));
    
    return (
    <>
        <div className={styles.horicenter}>
            <div className = {styles.infobar}>
                    <div className = {styles.details}>
                        <img alt = 'btc' className = {styles.logo} src = {process.env.PUBLIC_URL + `/images/ticker/${addr}.png`}  />
                        <p className = {styles.name}>{contract.symbol}</p>
                    </div>  

                    <div className = {styles.price}>
                        <p className = {styles.amount}>${price}</p>
                    </div> 
            </div>
            </div>  


    </>
        )

}
function float(a: any): any {
  throw new Error('Function not implemented.');
}

