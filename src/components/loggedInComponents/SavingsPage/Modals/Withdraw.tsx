import React, { useState } from 'react'
import styles from './../Styles/Modal.module.css'
import { style } from '@mui/system';
import styles3 from './../Styles/send.module.css'
import tickStyles from './../Styles/tickStyles.module.css';
import tickStyles2 from './../Styles/tickStyles2.module.css';

export default function Deposit()
{
    const [state, setState] = useState(0);
    const [amount, setAmount] = useState(0);
    const [receipt, setReceipt] = useState<any>({'error': false})
    const handleChange = (e:any) => {
            if(amount < 0) return false;
            
            setAmount(e.target.value)

            // backend code (if needed) goes here -> instantaneous amount change
            
        }

    const handleSubmit = (e:any) => {
            if(amount < 0) return false;
            
            // backend code goes here

            // Check if there is an error 
            let error = true;
            

            if(!(error)) {
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

            <p className = {styles.amounth}>Enter amount</p>
            <br />
            <section className = {styles.wrapInput}>
                <p>$</p>
                <input autoFocus type = "number" min = {0} step = "any" name = "iamount" className = {styles.inputEl}/>
            </section>
            <br />
            
     {/* <div className = {styles3.contentWrapper}>
        <div className = {styles3.information}>
          <p className = {styles3.informationInformation}>Recipient(Name)</p>
          <p className = {styles3.informationInformation}>{'get'}</p>
        </div>
    </div> */}
    <br />
            <button type = "submit" className = {styles.amountSubmit}>
                Continue
            </button>

            </div>
            </>
            
            :

            (state == 1)?
            <>
          
            <div className={tickStyles.wrapper}> <svg className={tickStyles.checkmark} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"> <circle className={tickStyles.checkmark__circle} cx="26" cy="26" r="25" fill="none" /> <path className={tickStyles.checkmark__check} fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
            </svg>
            </div>

               
        <div className = {styles3.contentWrapper}>
<div className={tickStyles.and}>Transaction successful! </div>
      </div>
<br />
<br />



     {/* <br /> */}
 
     <div className = {styles3.contentWrapper}>
        <div className = {styles3.information}>
          <p className = {styles3.informationInformation}>Recipient(Name)</p>
          <p className = {styles3.informationInformation}>{'get'}</p>
        </div>
    </div>

     {/* <br /> */}
     <div className = {styles3.contentWrapper}>
        <div className = {styles3.information}>
          <p className = {styles3.informationInformation}>Recipient(Name)</p>
          <p className = {styles3.informationInformation}>{'get'}</p>
        </div>
    </div>

  
     {/* <br /> */}

     
     <div className = {styles3.contentWrapper}>
        <div className = {styles3.information}>
          <p className = {styles3.informationInformation}>Recipient(Name)</p>
          <p className = {styles3.informationInformation}>{'get'}</p>
        </div>
    </div>

 
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