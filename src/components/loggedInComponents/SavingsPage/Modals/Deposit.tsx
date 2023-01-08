import React from 'react'
import styles from './../Styles/Modal.module.css'
import { style } from '@mui/system';
import styles3 from './../Styles/send.module.css'
import tickStyles from './../Styles/tickStyles.module.css';
import tickStyles2 from './../Styles/tickStyles2.module.css';
import { useWeb3Auth } from '../../../../services/web3auth';
import { useEffect, useState } from "react";

export default function Deposit()
{
    const [state, setState] = useState(0);
    const [amount, setAmount] = useState(0);
    const [receipt, setReceipt] = useState<any>({'error': false})
    const { provider } = useWeb3Auth();
    const [mainAccount, setMainAccount] = useState("");
    function hideIt(){
document.getElementById("modalDeposit").style.display = "none";
}
    useEffect(() => {
      const handleGetAccount = async () => {
        const account = await provider?.readAddress();
        setMainAccount(account);
      };
      if (provider) {
        handleGetAccount();
      }
    }, [provider, mainAccount]);
  
    const handleChange = (e:any) => {
            if(amount < 0) return false;
            
            setAmount(e.target.value)
            
            // backend code (if needed) goes here -> instantaneous amount change
            
        }
        const [verifySubmit, setSubmit] = useState(false)
        const handleSubmit = async(e:any) => {
            if(amount < 0) return false;
            document.getElementById("depositButton").style.display = "none";
            // backend code goes here

            // Check if there is an error 
           const depositFunds = await provider?.provideLiquidityToContract(mainAccount, amount);


            setReceipt(depositFunds)

            if(depositFunds) {
            // 1. If success. save the receipt in variable receipt ( JSON format )
            // Make sure all values are cordially updated
            // For Example: setReceipt({'error': false, 'a': 'b', 'c': 'd'})
            setState(1)
            return
            }
            
            else {
            // 2. If not a success. save error receipt in variable receipt ()
            // For Example: setReceipt({'error': true, 'message': 'b'})
            setState(2)
            return
            }


            // NOTE: THE 'error' in line 22 is currently always true, IT MUST BE MODIFIED!!! 


            
    }
    return (
        <>  
            {
            (state == 0)?
            <>
            <div className = {styles.centrify}>

            <p className = {styles3.element}>Enter amount</p>
            <br />
            <section className = {styles.wrapInput}>
                <p>$</p>
                <input onChange={(e:any) => setAmount(e.target.value)} autoFocus type = "number" min = {0} step = "any" name = "iamount" className = {styles.inputEl}/>
            </section>
            <br />
{/*             
     <div className = {styles3.contentWrapper}>
        <div className = {styles3.information}>
          <p className = {styles3.informationInformation}>Recipient(Name)</p>
          <p className = {styles3.informationInformation}>{'get'}</p>
        </div>
    </div> */}
    <br />
            <button id="depositButton" type = "submit" className = {styles.amountSubmit} onClick={handleSubmit}>
                Continue
            </button>

            </div>
            </>
            
            :

            (state == 1)?
            <>
      <div className={tickStyles.wrapper}><svg className={tickStyles.checkmark} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"> <circle className={tickStyles.checkmark__circle} cx="26" cy="26" r="25" fill="none" /> <path className={tickStyles.checkmark__check} fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
      </svg>
      </div>
        <div className = {styles3.contentWrapper}>
        <p className = {tickStyles.and}> Transaction successful! </p>
      </div>
            
<br />
<br />

<div className={styles3.contentWrapper}>
            <div className={styles3.information}>
              <p className={styles3.informationInformation}>
                Recipient (Address){" "}
              </p>
              <p
                onClick={() => alert("0x7765e4256e0dBda401Ce64809bAB5AefDca40F08")}
                className={styles3.informationInformation}
              >
                {"0x7765e4256e0dBda401Ce64809bAB5AefDca40F08".slice(0, 6)}...{"0x7765e4256e0dBda401Ce64809bAB5AefDca40F08".slice(-3)}
              </p>
            </div>
          </div>

          <div className={styles3.contentWrapper}>
            <div className={styles3.information}>
              <p className={styles3.informationInformation}>Amount Sent</p>
              <p className={styles3.informationInformation}>{amount}</p>
            </div>
          </div>

          <div className={styles3.contentWrapper}>
            <div className={styles3.information}>
              <p className={styles3.informationInformation}>Gas Fees</p>
              <p className={styles3.informationInformation}>
                {receipt.effectiveGasPrice}
              </p>
            </div>
          </div>

          
          <div className={styles3.contentWrapper}>
            <div className={styles3.information}>
              <p className={styles3.informationInformation}>
                Transaction Hash
              </p>
              <a
              style={{color:"white"}}
                target="_blank"
                className={styles3.linkage}
                href={`https://alfajores-blockscout.celo-testnet.org/tx/${receipt.transactionHash}/token-transfers`}
              >
                {receipt.transactionHash.slice(0, 6)}...
                {receipt.transactionHash.slice(-3)}
              </a>
            </div>
          </div>


{/* 
 
     <div style={{textAlign:"center"}} className = {styles3.contentWrapper}>
        <div style={{textAlign:"center"}} className = {styles3.information}>
          <p style={{textAlign:"center"}} className = {styles3.informationInformation}>Transaction Hash</a></p>
 <p className = {styles3.informationInformation}>{receipt.transactionHash}</p> 
        </div>
    </div>

     <div className = {styles3.contentWrapper}>
        <div className = {styles3.information}>
          <p className = {styles3.informationInformation}>Recipient(Name)</p>
          <p className = {styles3.informationInformation}>{'get'}</p>
        </div>
    </div>

  

     
     <div className = {styles3.contentWrapper}>
        <div className = {styles3.information}>
          <p className = {styles3.informationInformation}>Recipient(Name)</p>
          <p className = {styles3.informationInformation}>{'get'}</p>
        </div>
    </div> */}

 
     {/* <br /> */}
 


          </>

            :

            (state == 2)?
            <>
                
    
    <div className={tickStyles2.wrapper}> <svg className={tickStyles2.checkmark} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"> <circle className={tickStyles2.checkmark__circle} cx="26" cy="26" r="25" fill="none" /> <path className={tickStyles2.checkmark__check} fill="none" d="M16 16 36 36 M36 16 16 36" />
      </svg>
      </div>
    
    
    
    <div className = {styles3.contentWrapper}>
        <div className={tickStyles2.and}>Transaction unsuccessful! </div>
                <br></br>
        <div>{receipt.message}</div>
    </div>

    <br />

    

         </>
            
            :

            <>Never gonna give you up</>
            }


        </>
    )
}
