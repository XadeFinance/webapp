import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { FiShare } from "react-icons/fi";
import { FaCopy } from "react-icons/fa";
import QRCode from "react-qr-code";
import styles3 from '../../../styles/send.module.css'
import styles from "../../../styles/Home.module.css";
import tickStyles from '../../../styles/tickStyles.module.css';
import tickStyles2 from "../../../styles/tickStyles2.module.css";
import "../../../styles/qrscan.css"
import "../../../styles/QrPage.css"
import "../../../styles/HomePage.css"

const QrCodePage = (props) => {
  const [isActive, setActive] = useState(false);
  const mainAccount = props.account;
  const username = props.username;
  function displayAddr() {
    alert(mainAccount);
  }
  const QRCodeValue = `${username}-xade-${mainAccount}`;
  let navigate = useNavigate();

  function copyAddr() {
    navigator.clipboard.writeText(mainAccount);
    alert("Address copied");
  }
  return (
    <div className="containerQrPage">
      <div className="topBar" style={{ position: "relative", left: "0%" }}>
        <Link to="/">
          <div className="goBack2" style={{marginRight:"1.5rem"}}>
            <ImCross />
          </div>
        </Link>
        <div className="buttonHolderQrPage">
          <div
            className={"qrButtonLeft " + "active"}
            onClick={() => (window.location.href = "/qr")}
          >
            My Code
          </div>
          <div
            className={"qrButtonRight " + "inActive"}
            onClick={() => (window.location.href = "/scan")}
          >
            Scan
          </div>
        </div>

        <div style={{ visibility: "hidden" }} className="share">
          <FiShare />
        </div>
      </div>
      <br />
      <br />
      <div
        className={
          "mainContent " + (isActive ? "myInfoInActive" : "myInfoActive")
        }
      >
        <div className="contentWrapper">
          <div className="infoHolder">
            <br />
            <br />
            <div>{/* <img className="pfp" src={img} /> */}</div>
            <br />
            <br />
            <div>
              <h2 className="montreal">{username}</h2>
            </div>
            <div>
              <button className="blackBtn" onClick={displayAddr}>
                <h4 className="vela" style={{ fontSize: "20px", color:"#d9d9d9"}}>
                  {mainAccount.substring(0, 6)}...
                  {mainAccount.substring(mainAccount.length - 3)}
                </h4>
              </button>
              <button className="blackBtn">
                <FaCopy onClick={copyAddr} />
              </button>
            </div>
            <br />
            <div>
              <button className="pillBtn vela">🟢 Celo Alfajores Testnet</button>
            </div>
            <br />
          </div>
          <div className="QrHolder">
            <div className="QrWrapper">
              <QRCode value={QRCodeValue} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QrCodePage;
