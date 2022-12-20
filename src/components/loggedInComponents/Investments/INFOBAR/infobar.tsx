import { useState, useEffect } from 'react';
import styles from './index.module.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Contracts from './../constants'
// import getSpotPrice from '../functions'

 var currentPrice;
export default function Component() {
    const params:any = useParams();
    let addr = parseInt(params.addr)
    if(!(addr >= 1 && addr <= 5)) 
      addr = 1;
    const contract = Contracts[addr-1]
    const amm = contract.address;
   var options = ["btc","tsla","sona","eth","euro"] 
    // let contra

    // let json = {data:[{"id":1, "quote": {"USD": {price:"21490.00"}}}]};
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
const [price,setPrice] = useState('')
var xhr2 = new XMLHttpRequest();
  xhr2.onreadystatechange=function(){
 if(xhr2.readyState==XMLHttpRequest.DONE){
 setPrice(xhr2.responseText)
}
}

useEffect(() => {
  const interval = setInterval(() => {
    var xhr3 = new XMLHttpRequest();
    xhr3.onreadystatechange=function(){
      if(xhr3.readyState==XMLHttpRequest.DONE){
        let yes;
        try {
          yes = parseFloat(xhr3.responseText);
      } catch {
          yes = false;
      }
        if(yes != false) setPrice(xhr3.responseText)
      }
        }
    xhr3.open('GET', `https://price.api.xade.finance/${options[addr-1]}`)
    xhr3.send()
  }, 20000);
  return () => clearInterval(interval);
}, []);


  xhr2.open('GET', `https://price.api.xade.finance/${options[addr-1]}`)
  xhr2.send()
     // alert(JSON.stringify(json));
    
    return (
    <>
        <div className={styles.horicenter}>
            <div className = {styles.infobar}>
                    <div className = {styles.details}>
                        <img alt = 'btc' className = {styles.logo} src = {process.env.PUBLIC_URL + `/images/ticker/${options[addr-1]}.png`}  />
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

