import home from "../../../styles/Homepage.module.css";
// import { TbQrcode } from "react-icons/tb";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Send from "../SendPhnEmail/Component";
import { ImCross } from "react-icons/im";

const HomePage = (props) => {
  const stylex = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 470,
    bgcolor: "#000",
    border: "0px solid #000",
    boxShadow: 24,
    p: 4,
    height: "90%",
  };

  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleOpen2 = () => setOpen2(true);
  const handleClose = () => setOpen(false);
  const handleClose2 = () => setOpen2(false);
  const navigate = useNavigate();
  // let navigate = useNavigate();
  var xhr2 = new XMLHttpRequest();
  var donezo = false;
  const mainAccount = props.account;
  const balance = (props.balance / 10 ** 18).toFixed(2);
  // console.log(cusdBalance);
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

  return (
    <>
      <Modal id="paymentsModal" open={open} onClose={handleClose}>
        <Box sx={stylex}>
          <div onClick={handleClose}>
            <div style={{ marginTop: "0", color: "#fff", height: "100%" }}>
              <br />
              <ImCross size={26} />
            </div>
          </div>

          <Send balance={balance} />
        </Box>
      </Modal>
      <div className={home.mainDiv}>
        <div>
          <div className={home.balanceView}>
            <div className={home.amount}>${balance}</div>
            <div className={home.yourCurrent}>
              Your current checking balance
            </div>
          </div>
          <div className={home.utilityButtons}>
            <button onClick={handleOpen} className={home.paymentsButton}>
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
              <p className={home.paymentText}>Send</p>
            </button>
            <button
              onClick={() => navigate("/institutional-ramps")}
              className={home.paymentsButton}
            >
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
              <p className={home.paymentText}>Deposit</p>
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
                <use xlinkHref="/qr" />
              </svg>
            </button>
          </div>
          <div className={home.txHistory}>
            <div className={home.historyHeader}>
              <span>Recent Activity</span>
              <span className={home.seeAll}>Sort by</span>
            </div>
            <div className={home.transactions}>
              {transactionHistory
                ? transactionHistory.map((transaction, index) => (
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
                          {(
                            parseFloat(transaction.value) / Math.pow(10, 18)
                          ).toFixed(2)}
                        </div>
                      </div>
                      <hr
                        style={{
                          backgroundColor: "#bfff38",
                          borderColor: "#bfff38",
                        }}
                        className={home.divider}
                      />
                    </div>
                  ))
                : ""}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
