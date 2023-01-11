// import OnramperWidget from "@onramper/widget";
import React, {useState} from "react";
// import styles3 from '../../../styles/send.module.css'
// import styles from "../../../styles/Home.module.css";
// import tickStyles from '../../../styles/tickStyles.module.css';
// import tickStyles2 from "../../../styles/tickStyles2.module.css";
import "../../../styles/qrscan.css"
import "../../../styles/QrPage.css"
import "../../../styles/HomePage.css"
import styles from './Modal.module.css'
import styles3 from './send.module.css'
import styles4 from './yes.module.css'
import Ramps, { currencies, Currency } from './ramps'
import { useNavigate } from "react-router-dom";

const DepositWithdraw = () => {

  function capitalizeFirstLetter(str:string)  {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
  
  
  let [currency, setCurrency] = React.useState('USD');
  let transak: {api:string} = Ramps['transak']
  const navigate = useNavigate();
  let [state, setState] = useState(0);
  const [amount, setAmount] = useState<string>('20');   
  const [selected, setSelected] = useState(null);
  const handleChange = () => {
    setState(1)
  }

  let [error, setError] = React.useState({
    message: "",
    style: { color: "rgba(251, 251, 251, 0.6)" },
    error: false,
  });


  return (
        <>
            {(state == 0)?
            <>
            <div style = {{
                  'height': '60vh'
                }}className = {styles.centrify}>
              
            <p id="error" style={error.style} className={styles4.error}>
            {error.message}
          </p>
<div className={styles4.number_input} id="phonenums">
            <form
              onSubmit={handleChange}
              className={styles4.number_form}
            >
              <div className={styles4.flexContainer}>
                <section className={styles4.countryCode}>
                  <div className={styles4.flexContainerCountry}>
                    <section className={styles4.callingCodeTitle}>
                      Currency <a className={styles4.red}></a>
                    </section>

                    <section>
                      <select
                       value = {currency}
                        id="cc"
                        className={styles4.selectForm}
                        onChange={(e) => {
                          setCurrency(e.target.value);
                          let c = e.target.value;
                          let curr:Currency = currencies[0]
                          currencies.forEach((r) => {if(c == r.symbol) curr = r})
                          setAmount(curr.min.toString())
                          // console.log(cc);
                        }}
                      >
                        {currencies.map((curr) => (
                          <option
                            value={curr["symbol"]}
                          >{`${curr["name"]} (${curr['symbol']})`}</option>
                        ))}
                      </select>
                    </section>
                  </div>
                </section>
                <section className={styles4.phoneNumber}>
                  <div className={styles4.flexContainerCountry}>
                    <section className={styles4.callingCodeTitle}>
                      Amount
                    </section>

                    <section>
                      <input
                        value = {amount}
                        id="num"
                        onChange={(e) => {
                          setAmount(e.target.value)
                          let curr:Currency = currencies[0]
                          currencies.forEach((e) => {if(currency == e.symbol) curr = e})
                          let amount = parseFloat(e.target.value)
                          if(amount < curr.min)
                          {
                            setError({
                                ...error, error: true, message: `Amount too low (minimum is ${curr.min})`
                            })
                          }
                          else if(amount > curr.max)
                          {  
                            setError({
                            ...error, error: true, message: `Amount too high (maximum is ${curr.max})`
                          })
                        }
                          else {
                              setError({
                                ...error, error: false, message: ""
                              })
                              setAmount(e.target.value)
                          }
                        }}
                        type="number"
                        min = {0}
                        step = 'any'
                        className={styles4.inputForm}
                        autoFocus
                      />
                    </section>
                  </div>
                </section>
              </div>
              {/* <br />
              <br />
              <br /> */}
              <div className={styles3.submitSection}>
                <button type="submit" className={styles3.submitButton}>
                  Proceed
                </button>
              </div>
            </form>
          </div>
</div>
            </>
            :
            (state == 1)?
            <>
                <div 
                style = {{
                  'height': '60vh'
                }}
                className = {styles.centrify}>

<p className = {styles3.element}>Choose a Ramp</p>
<br />
  <div className = {styles.centrify}>   
      {
        Object.keys(Ramps).forEach((key) => {
        <div className = {styles.box}>
          <div>
            <div>
                {capitalizeFirstLetter(key)}
                
            </div>
          </div>
        </div>
      })}
  </div>
<br />

<br />
<button id="depositButton" type = "submit" className = {styles.amountSubmit} >
    Continue 
</button>

        </div>
            </>
            :
            (state == 2)?
            <>

            </>
            :
            <>

            </>
} 
        </>
  );
    };

export default DepositWithdraw;
