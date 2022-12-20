import { useEffect, useState } from "react";
import { getNormalTransactionsByAddress } from "../../../services/celoScan";
import React from "react";
import { ImCross } from "react-icons/im";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FiShare } from "react-icons/fi";
import styles3 from '../../../styles/send.module.css'
import styles from "../../../styles/Home.module.css";
import tickStyles from '../../../styles/tickStyles.module.css';
import tickStyles2 from "../../../styles/tickStyles2.module.css";
import "../../../styles/qrscan.css"
import "../../../styles/QrPage.css"
import "../../../styles/HomePage.css"

const TxHistory = (props) => {
  const [transactionHistory, setTransactionHistory] = useState<any[]>([]);
  const mainAccount = props.account;
  const isReady = () => {
    return mainAccount !== "";
  };

  useEffect(() => {
    if (isReady()) {
      handleGetNormalTransactionByAddress();
    }
  }, [mainAccount]);
  const handleGetNormalTransactionByAddress = async () => {
    let transactions = await getNormalTransactionsByAddress(mainAccount);
    setTransactionHistory(transactions.result);
  };

  useEffect(() => {
    for (var i = 0; i < transactionHistory.length; i++) {
      var currentTransac =
        transactionHistory[i].to.toString().toLowerCase() ===
        mainAccount.toString().toLowerCase()
          ? transactionHistory[i].from
          : transactionHistory[i].to;
      //var currentTransac = "0xa13414fa08c8ae49a9cceabdae4ff8d2d82ec139";
      var finalVal =
        currentTransac.substring(0, 6) +
        "..." +
        currentTransac.substring(currentTransac.length - 3);
      //console.log(finalVal);
      if (
        transactionHistory[i].to.toString().toLowerCase() ===
        mainAccount.toString().toLowerCase()
      ) {
        transactionHistory[i].from = finalVal;
      } else {
        transactionHistory[i].to = finalVal;
      }
    }
  }, []);

  const addressShortner = (transaction: any) => {
    const address =
      transaction.to.toString().toLowerCase() ===
      mainAccount.toString().toLowerCase()
        ? transaction.from
        : transaction.to;
    const addressShortened =
      address.substring(0, 6) + "..." + address.substring(address.length - 3);
    return addressShortened;
  };

  return (
    <div>
      <br />
      <div className="topBar">
        <div className="buttonHolderQrPage">
          <div
            className="qrButtonLeftinActive"
            style={{ color: "#fff", textDecoration: "none" }}
          >
            <a href="/" style={{ color: "black" }}>
              {" "}
              <h2>
                {" "}
                <ImCross style={{ fontSize: "25px" }} />{" "}
              </h2>
            </a>
          </div>
          <div
            className="qrButtonRightActive"
            style={{ color: "#fff", textDecoration: "none" }}
          >
            <h2>
              <ImCross style={{ fontSize: "25px", visibility: "hidden" }} />
              Transaction History
            </h2>
          </div>
        </div>

        <div className="share" style={{ visibility: "hidden" }}>
          <FiShare />
        </div>
      </div>
      <div className="activityContent newContentTx">
        <br />
        {/* <br />
            <br />
            <br />
            <br />
            <br /> */}
        {transactionHistory.map((transaction, index) => (
          <div key={index} className="transactionHistory-pills">
            <div className="rightHalf-pill">
              <div className="transactionIndicator-arrows">
                <svg
                  stroke="currentColor"
                  fill={
                    transaction.to.toString().toLowerCase() ===
                    mainAccount.toString().toLowerCase()
                      ? "green"
                      : "red"
                  }
                  stroke-width="0"
                  viewBox="0 
  0 16 16"
                  height="2em"
                  width="2em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d={
                      transaction.to.toString().toLowerCase() ===
                      mainAccount.toString().toLowerCase()
                        ? "M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-5.904-2.803a.5.5 0 1 1 .707.707L6.707 10h2.768a.5.5 0 0 1 0 1H5.5a.5.5 0 0 1-.5-.5V6.525a.5.5 0 0 1 1 0v2.768l4.096-4.096z"
                        : "M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8zm5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707l-4.096 4.096z"
                    }
                  ></path>
                </svg>
              </div>
            </div>
            <div className="leftHalf-pill">
              <div className="transaction-history-line1">
                &nbsp;&nbsp;
                <div className="address-styling">
                  {addressShortner(transaction)}
                </div>
                <div>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <a
                    href={`https://alfajores-blockscout.celo-testnet.org/tx/${transaction.hash}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
              <div className="transaction-history-line2">
                &nbsp;&nbsp;
                <div className="amount-time-stlying">
                  {(parseFloat(transaction.value) / Math.pow(10, 18)).toFixed(
                    2
                  )}
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div className="amount-time-stlying">
                  {new Date(transaction.timeStamp * 1000)
                    .toString()
                    .substring(4, 21)}
                </div>
                &nbsp;&nbsp;
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TxHistory;
