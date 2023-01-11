import { Link } from "react-router-dom";
import { ImCross } from "react-icons/im";
import React from "react";
import { FiShare } from "react-icons/fi";
import { Html5QrcodeScanner } from "html5-qrcode";
import { useState, useEffect } from "react"
import styles3 from '../../../styles/send.module.css'
import styles from "../../../styles/Home.module.css";
import tickStyles from '../../../styles/tickStyles.module.css';
import tickStyles2 from "../../../styles/tickStyles2.module.css";
import "../../../styles/qrscan.css"
import "../../../styles/QrPage.css"
import "../../../styles/HomePage.css"
// import React, { useState } from 'react';
import { QrReader } from 'react-qr-scanner';


export default class Test extends React.Component {
  constructor(props:any){
    super(props)
    this.state = {
      delay: 100,
      result: 'No result',
    }

    this.handleScan = this.handleScan.bind(this)
  }
  handleScan(data:any){
    this.setState({
      result: data,
    })
  }
  handleError(err:any){
    console.error(err)
  }
  render(){
    const previewStyle = {
      height: '100%',
      width: '100%',
      visibility: 'hidden'
    }

    return(
      <div>
        <QrReader
          delay={50}
          style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
          />
        <p></p>
      </div>
    )
  }
}

// const Scan = () => {
//   const [scannedCodes, setScannedCodes] = useState([]);
//   var error = "";
//   function activateLasers() {
//     var decodedText = "asdf";
//     var decodedResult = "asdfasdfasdf";
//     console.log(scannedCodes);

//     setScannedCodes(scannedCodes.concat([{ decodedText, decodedResult }]));
//   }

//   useEffect(() => {
//     function onScanSuccess(decodedText, decodedResult) {
//       window.stop();
//       // handle the scanned code as you like, for example:
//       console.log(`Code matched = ${decodedText}`, decodedResult);
//       // setScannedCodes(scannedCodes.concat([{ decodedText, decodedResult }]));
//       const userInfo = decodedText;
//       window.location.href = "/sendQR/" + userInfo;
//     }

//     function onScanFailure(error) {
//       // handle scan failure, usually better to ignore and keep scanning.
//       // for example:
//       console.warn(`Code scan error = ${error}`);
//     }

//     let html5QrcodeScanner = new Html5QrcodeScanner(
//       "reader",
//       { fps: 10, qrbox: { width: 250, height: 250 } },
//       /* verbose= */ false
//     );
//     html5QrcodeScanner.render(onScanSuccess, onScanFailure);
//   });
//   //alert(scannedCodes);
//   return (
//     <div>
//       <br />
//       <br />
//       <div id="reader" width="600px"></div>
//       <a>{error}</a>
//     </div>
//   );
// };

const QRScanner = () => {
  return (
    <div className={"mainContent" + "active"}>
      <div style={{ position: "relative", left: "-8%" }} className="topBar">
        <Link to="/">
          <div className="goBack2">
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
      <div className={"contentWrapper"} style={{ border: "none" }}>
        <Scan />
      </div>
    </div>
  );
};

// export default Test;
