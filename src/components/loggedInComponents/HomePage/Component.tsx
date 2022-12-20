import { useEffect, useState } from "react";
import { useWeb3Auth } from "../../../services/web3auth";
import styles3 from '../../../styles/send.module.css'
import styles from "../../../styles/Home.module.css";
import tickStyles from '../../../styles/tickStyles.module.css';
import tickStyles2 from "../../../styles/tickStyles2.module.css";
import "../../../styles/qrscan.css"
import "../../../styles/QrPage.css"
import "../../../styles/HomePage.css"
import { FaCopy, FaExternalLinkAlt } from "react-icons/fa";
import CarouselCard1 from "../CarouselCard/CarouselCard1";
import CarouselCard3 from "../CarouselCard/CarouselCard3";
import CarouselCard4 from "../CarouselCard/CarouselCard4";
import CarouselCard2 from "../CarouselCard/CarouselCard2";
import Slider from "react-slick";
import { useNavigate, Link } from "react-router-dom";
//import { getNormalTransactionsByAddress } from "../../../services/celoScan";
import { TbQrcode } from "react-icons/tb";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomePage = (props) => {
  const mainAccount = props.account;
  const [price, setPrice] = useState(0);

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

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [amount, setAmt] = useState(0);
  const { provider } = useWeb3Auth();

  useEffect(() => {
    const handleGetBalance = async () => {
      const bal = await provider?.getBalance();
      setAmt(bal);
    };
    if (provider) {
      handleGetBalance();
    }
  }, [provider, amount]);
  const amountStr = amount.toString();

  var donezo = false;
  var xhr2 = new XMLHttpRequest();
  let balCUSD;

  useEffect(() => {
    xhr2.onreadystatechange = async function () {
      if (xhr2.readyState == XMLHttpRequest.DONE) {
        try {
          if (xhr2.status == 200) {
            try {
              const usdJson = await JSON.parse(xhr2.responseText);

              setPrice(usdJson["result"]);
              donezo = true;
            } catch (e: any) {
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
  }, [, price, balCUSD]);

  const usdBal = (parseFloat(price) / Math.pow(10, 18)).toFixed(2);

  function returnUser(walletAddr: any) {
    var finalVal = "";
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.status == 200) {
        finalVal = xhr.responseText;
      } else {
        finalVal = walletAddr;
      }
    };

    xhr.open("GET", `https://user.api.xade.finance?address=${walletAddr}`);
    xhr.send(null);

    return finalVal;
  }
//  const [transactionHistory, setTransactionHistory] = useState<any[]>([]);
//const [TxTop, setTxTop] = useState<any[]>([]);
 /* const handleGetNormalTransactionByAddress = async () => {
    let transactions = await getNormalTransactionsByAddress(mainAccount);
    setTransactionHistory(transactions.result);
//setTxTop(transactionHistory.slice(0,3));  
};

  const isReady = () => {
    return mainAccount !== "";
  };

  useEffect(() => {
    if (isReady()) {
      handleGetNormalTransactionByAddress();
//setTxTop(transactionHistory.slice(0,3));  
  }
  }, [mainAccount]);
*/  
//const TxTop = [];
/*var txtopVar;
try{
 txtopVar = transactionHistory.slice(0,3);
}
catch(error){
txtopVar = []
console.log(error)
}
setTxTop(txtopVar);
*/
let navigate = useNavigate();
  return (
    <div className="container">
      <div className="carouselHolder text-center">
        <Slider {...settings}>
          <CarouselCard1 />

          <CarouselCard2 />

          <CarouselCard3 />

          <CarouselCard4 />
        </Slider>
      </div>
      <div className="myActivity">
        <div className="totalBalance">
          <p className="label">Checking Account</p>
          <p className="value">${usdBal}</p>
        </div>

        <div className="activityContent">
          {/* <br />
            <br />
            <br />
            <br />
            <br /> */}
  {/*}        {TxTop.map((transaction, index) => (
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
                    viewBox="0 0 16 16"
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
                      href={`https://explorer.celo.org/alfajores/tx/${transaction.hash}`}
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
          ))} {*/}
        </div>
        <button
          className="txBtn"
          style={{ backgroundColor: "#000" }}
          onClick={() => {
            navigate(`/history`);
          }}
        >
          <Link
            to="/history"
            style={{
              color: "#fff",
              textDecoration: "none",
              backgroundColor: "#000",
            }}
          >
         
              <div>
                View Transaction History &nbsp;&nbsp; <FaExternalLinkAlt />
              </div>
            
          </Link>
        </button>
        <br />
        <br />
<br />
<br />      
</div>
      <br />
      <br />
      <br />
      <div className="utilityButtons">
        <div className="buttonHolder">
          <div className="paymentsButton">
            <Link to="/send">
              <a style={{ color: "#fff", textDecoration: "none" }}>Send</a>
            </Link>
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div className="paymentsButton">
            <Link to="/qr">
              <a style={{ color: "#fff", textDecoration: "none" }}>Request</a>
            </Link>
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/qr">
            <div className="scanner">
              <TbQrcode />
            </div>
          </Link>
        </div>
      </div>
      <br />
    </div>
  );
};

export default HomePage;
