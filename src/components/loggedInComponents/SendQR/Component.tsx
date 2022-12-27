import { useParams } from "react-router-dom";
import React from "react";
import { useWeb3Auth } from "../../../services/web3auth";
import Web3 from "web3";
import styles3 from '../../../styles/send.module.css'
import styles from "../../../styles/Home.module.css";
import tickStyles from '../../../styles/tickStyles.module.css';
import tickStyles2 from "../../../styles/tickStyles2.module.css";
import "../../../styles/qrscan.css"
import "../../../styles/QrPage.css"
import "../../../styles/HomePage.css"

const SendQR = (props) => {
  const { provider } = useWeb3Auth();
  const params = useParams();
  let [current, setCurrent] = React.useState(0); // Phone number accept
  const userInfo = params.user;

const userQR = userInfo.split("-xade-")[0]

const addr = userInfo.split("-xade-")[1]

  let [receipt, setReceipt] = React.useState<any>(null);
  let [amount, setAmount] = React.useState(0);
  let [error, setError] = React.useState({
    message: "",
    style: { color: "rgba(251, 251, 251, 0.6)" },
    error: false,
  });
  const handleSendAmountToAddress = async (e: any) => {
    e.preventDefault();
    // const addr = params.address;

    if (amount <= 0) {
      setError({
        ...error,
        message: "Please enter a valid amount",
        style: { color: "red" },
        error: true,
      });
      return;
    }
    document.getElementById("sendBtnQR").style.display = "none";
    // alert(`Address: ${addr} | Amt: ${amount}`);
    const account = await provider?.signAndSendTransaction(
      addr,
      amount.toString()
    );
    if (account.status == "0x1" || account.status == 1) {
      setReceipt(account);
      console.log("yeahh");
      account.effectiveGasPrice = Web3.utils.fromWei(
        account.effectiveGasPrice?.toString() || "",
        "ether"
      );
      setCurrent(2);
    } 
 else {
  setCurrent(3);
      console.log("fuck");
    }
  };
  return (
    <div>
      {current == 0 ? (
        <>
          <br />
          <br />
          <br />
          <br />
          <h1 className={styles3.element} style={{fontSize:"2rem"}}>Enter amount</h1>
          <p id="error" style={error.style} className={styles.error}>
            {error.message}
          </p>

          <form
            onSubmit={(e) => {
              // Some web3auth function
              handleSendAmountToAddress(e);
            }}
          >
            <section
              className={styles.phoneNumber}
              style={{ backgroundColor: "#000" }}
            >
              <div className={styles.flexContainerCountry}>
                <section className={styles.callingCodeTitle}>
                  <div className={styles.inputForAmt}>
                    <a style={{ color: "#fff", fontSize: "25px" }}>$</a>{" "}
                    <input
                      id="num"
                      step="any"
                      onChange={(e) => setAmount(parseFloat(e.target.value))}
                      value={amount}
                      style={{
                        width: "90%",
                        backgroundColor: "#000",
                        color: "#fff",
                        fontSize: "80px",
                      }}
                      className={styles.inputForm}
                      type="number"
                      autoFocus
                    />
                  </div>
                </section>

                <section></section>
              </div>
            </section>
            <br />
            <br />
            {/* <h3 className={styles3.element2}>Transaction Details</h3> */}
            <br />
            <div className={styles3.contentWrapper}>
              <div className={styles3.information}>
                <p className={styles3.informationInformation}>
                  Recipient (Name) &nbsp;&nbsp;
                </p>
                <p
                  className={styles3.informationInformation}
                  style={{ color: "white" }}
                >
                  {userQR}
                </p>
              </div>
            </div>

            <div className={styles3.contentWrapper}>
              <div className={styles3.information}>
                <p className={styles3.informationInformation}>
                  Recipient (Address)
                </p>
                <p
                  style={{ color: "white" }}
                  onClick={() => alert(addr)}
                  className={styles3.informationInformation}
                >
                  {addr.slice(0, 6)}...{addr.slice(-3)}{" "}
                </p>
              </div>
            </div>

            <div className={styles3.contentWrapper}>
              <div className={styles3.information}>
                <p className={styles3.informationInformation}>Amount</p>
                <p
                  className={styles3.informationInformation}
                  style={{ color: "white" }}
                >
                  {amount}
                </p>
              </div>
            </div>

            <div className={styles3.contentWrapper}>
              <div className={styles3.information}>
                <p className={styles3.informationInformation}>Estimated Fees</p>
                <p
                  className={styles3.informationInformation}
                  style={{ color: "white" }}
                >
                  yes
                </p>
              </div>
            </div>

            {/* <br />
            <br />
            <br /> */}

            <div className={styles3.submitSection}>
              <button id="sendBtnQR" type="submit" style={{width:"100%"}} className={styles3.submitButton2}>
                Confirm transaction
              </button>
            </div>
          </form>
        </>
      ) : current == 2 ? (
        <>
        <br />
        <br />
        <br />
        <br />
          <div className={tickStyles.wrapper}>
            {" "}
            <svg
              className={tickStyles.checkmark}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 52 52"
            >
              {" "}
              <circle
                className={tickStyles.checkmark__circle}
                cx="26"
                cy="26"
                r="25"
                fill="none"
              />{" "}
              <path
                className={tickStyles.checkmark__check}
                fill="none"
                d="M14.1 27.2l7.1 7.2 16.7-16.8"
              />
            </svg>
          </div>

          <div className={tickStyles.and}>Transaction successful! </div>
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
                {addr.slice(0, 6)}...{addr.slice(-3)}
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
        </>
      ) : current == 3 ? (
        <>
          <div className={tickStyles2.wrapper}>
            {" "}
            <svg
              className={tickStyles2.checkmark}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 52 52"
            >
              {" "}
              <circle
                className={tickStyles2.checkmark__circle}
                cx="26"
                cy="26"
                r="25"
                fill="none"
              />{" "}
              <path
                className={tickStyles2.checkmark__check}
                fill="none"
                d="M16 16 36 36 M36 16 16 36"
              />
            </svg>
          </div>

          <div className={styles3.contentWrapper}>
            <div className={tickStyles2.and}>Transaction unsuccessful! </div>
          </div>
          <br />
        </>
      ) : current == 4 ? (
        <></>
      ) : (
        <></>
      )}
    </div>
  );
};

export default SendQR;
