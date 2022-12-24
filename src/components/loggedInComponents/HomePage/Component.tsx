import home from "../../../styles/Homepage.module.css";
// import { TbQrcode } from "react-icons/tb";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = (props) => {
  const [balance, setBalance] = useState(0);
  let navigate = useNavigate();
  var xhr2 = new XMLHttpRequest();
  var donezo = false;
  const mainAccount = props.account;
  async function getNormalTransactionsByAddress(address) {
    try {
      const response = await fetch(
        `https://explorer.celo.org/alfajores/api?module=account&action=tokentx&address=${address}&contractaddress=0x874069fa1eb16d44d622f2e0ca25eea172369bc1`
      );
      return await response.json();
    } catch (error) {
      return [];
    }
  }
  const [transactionHistory, setTransactionHistory] = useState([]);
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

  const addressShortner = (transaction) => {
    const address =
      transaction.to.toString().toLowerCase() ===
      mainAccount.toString().toLowerCase()
        ? transaction.from
        : transaction.to;
    const addressShortened =
      address.substring(0, 6) + "..." + address.substring(address.length - 3);
    return addressShortened;
  };

  useEffect(() => {
    xhr2.onreadystatechange = async function () {
      if (xhr2.readyState == XMLHttpRequest.DONE) {
        try {
          if (xhr2.status == 200) {
            try {
              const responseJSON = await JSON.parse(xhr2.responseText);

              setBalance(responseJSON["result"]);
              donezo = true;
            } catch (e) {
              console.log("xhr2.status", e + xhr2.status);
            }
          }
        } catch (e) {
          console.log("xhr2.onreadystatechange", e + xhr2.onreadystatechange);
        }
      }
      return null;
    };
    xhr2.open(
      "GET",
      `https://explorer.celo.org/alfajores/api?module=account&action=tokenbalance&contractaddress=0x874069fa1eb16d44d622f2e0ca25eea172369bc1&address=${mainAccount}`
    );
    xhr2.send();
  }, [, balance]);

  const myBalance = (parseFloat(balance) / Math.pow(10, 18)).toFixed(2);
  return (
    <div className={home.mainDiv}>
      <div>
        <div className={home.balanceView}>
          <div className={home.amount}>${myBalance}</div>
          <div className={home.yourCurrent}>Your current checking balance</div>
        </div>
        <div className={home.utilityButtons}>
          <button className={home.paymentsButton}>
            <svg
              stroke="currentColor"
              fill="#ffdf38"
              stroke-width="0"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8zm5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707l-4.096 4.096z"></path>
            </svg>
            &nbsp;&nbsp;
            <a href="/send" className={home.paymentText}>
              Send
            </a>
          </button>
          <button className={home.paymentsButton}>
            <svg
              stroke="currentColor"
              fill="#bfff38"
              stroke-width="0"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-5.904-2.803a.5.5 0 1 1 .707.707L6.707 10h2.768a.5.5 0 0 1 0 1H5.5a.5.5 0 0 1-.5-.5V6.525a.5.5 0 0 1 1 0v2.768l4.096-4.096z"></path>
            </svg>{" "}
            &nbsp;&nbsp;
            <a href="/institutional-ramps" className={home.paymentText}>
              Deposit
            </a>
          </button>
          <button
            style={{ textAlign: "center" }}
            className={home.qrBtn}
            onClick={() => {
              navigate("/qr");
            }}
          >
            <svg
              className={home.qrIcon}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              style={{ border: "none" }}
              xmlns="http://www.w3.org/2000/svg"
            >
              <a xlink:href="/qr" style={{ cursor: "pointer" }} target="_blank">
                <rect
                  x="4"
                  y="4"
                  width="6"
                  height="6"
                  rx="1"
                  stroke="white"
                  stroke-width="2"
                  stroke-linejoin="round"
                />
                <rect
                  x="4"
                  y="14"
                  width="6"
                  height="6"
                  rx="1"
                  stroke="white"
                  stroke-width="2"
                  stroke-linejoin="round"
                />
                <rect
                  x="14"
                  y="14"
                  width="6"
                  height="6"
                  rx="1"
                  stroke="white"
                  stroke-width="2"
                  stroke-linejoin="round"
                />
                <rect
                  x="14"
                  y="4"
                  width="6"
                  height="6"
                  rx="1"
                  stroke="white"
                  stroke-width="2"
                  stroke-linejoin="round"
                />
              </a>
            </svg>
          </button>
        </div>
        <div className={home.txHistory}>
          <div className={home.historyHeader}>
            <span>Recent Activity</span>
            <span className={home.seeAll}>Sort by</span>
          </div>
          <div className={home.transactions}>
            {transactionHistory.map((transaction, index) => (
              <div key={index} className={home.transactionBox}>
                <div className={home.transactionDetails}>
                  <svg
                    stroke="currentColor"
                    fill={
                      transaction.to.toString().toLowerCase() ===
                      mainAccount.toString().toLowerCase()
                        ? "#bfff38"
                        : "#ffdf38"
                    }
                    stroke-width="0"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d={
                        transaction.to.toString().toLowerCase() ===
                        mainAccount.toString().toLowerCase()
                          ? "M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-5.904-2.803a.5.5 0 1 1 .707.707L6.707 10h2.768a.5.5 0 0 1 0 1H5.5a.5.5 0 0 1-.5-.5V6.525a.5.5 0 0 1 1 0v2.768l4.096-4.096z"
                          : "M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8zm5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707l-4.096 4.096z"
                      }
                    ></path>{" "}
                  </svg>{" "}
                  <div className={home.addrDate}>
                    <a
                      href={`https://explorer.celo.org/alfajores/tx/${transaction.hash}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      {addressShortner(transaction)}
                    </a>
                    <br />
                    <div className={home.date}>
                      {new Date(transaction.timeStamp * 1000)
                        .toString()
                        .substring(4, 21)}
                    </div>
                  </div>
                  <div className={home.value}>
                    $
                    {(parseFloat(transaction.value) / Math.pow(10, 18)).toFixed(
                      2
                    )}
                  </div>
                </div>
                <hr
                  style={{ backgroundColor: "#bfff38", borderColor: "#bfff38" }}
                  className={home.divider}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
