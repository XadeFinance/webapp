import OnramperWidget from "@onramper/widget";
import React from "react";
// import styles3 from '../../../styles/send.module.css'
// import styles from "../../../styles/Home.module.css";
// import tickStyles from '../../../styles/tickStyles.module.css';
// import tickStyles2 from "../../../styles/tickStyles2.module.css";
import "../../../styles/qrscan.css"
import "../../../styles/QrPage.css"
import "../../../styles/HomePage.css"


const DepositWithdraw = () => {
      return (
        <div className="container" >
          <div
            style={{
              width: "400px",
              height: "660px",
              overflow: "hidden",
            }}
          >
            <br />
            <br />
            <OnramperWidget
              API_KEY="pk_test_63xw5VXNG2SXKi4Xo49L3NpUGoNfTA95rhVkNn07x4Y0"
              color="#000000"
              fontFamily="Arial"
              defaultCrypto="USDC"
              defaultFiat="USD"
              filters={{
                onlyCryptos: ["USDC"],
                onlyPaymentMethods: [
                  "creditCard",
                  "bankTransfer",
                  "applePay",
                  "googlePay",
                  "paynow",
                  "fps",
                  "alipay-hk",
                  "prompt-pay",
                  "instapay",
                  "upi",
                  "gojek-id",
                  "viettel-pay",
                  "duit-now",
                  "ideal",
                  "bancontact",
                  "giropay",
                  "sofort",
                  "sepaBankTransfer",
                ],
              }}
              darkMode={true}
              redirectURL="https://testnet.app.xade.finance/"
            />
          </div>
        </div>
      );
    };

export default DepositWithdraw;
