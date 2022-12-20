import React from "react";
import styles3 from '../../../styles/send.module.css'
import styles from "../../../styles/Home.module.css";
import tickStyles from '../../../styles/tickStyles.module.css';
import tickStyles2 from "../../../styles/tickStyles2.module.css";
import "../../../styles/qrscan.css"
import "../../../styles/QrPage.css"
import "../../../styles/HomePage.css"
import "../../../styles/NewLogin.css"
import { useWeb3Auth } from "../../../services/web3auth";
import { FormEvent } from "react";
import { WALLET_ADAPTERS } from "@web3auth/base";

const Login = () => {
  const { login, loginWithWalletConnect } = useWeb3Auth();
  function loginSocial(social: string) {
    login(WALLET_ADAPTERS.OPENLOGIN, social);
  }
  const handleLoginWithEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = (e.target as any)[0].value;
    login(WALLET_ADAPTERS.OPENLOGIN, "email_passwordless", email);
  };
  return (
    <div>
      <div className="sign-in-div">
        <img
          className="pexels-mikhail-nilov-7672255-1-icon"
          alt=""
          src="https://app.xade.finance/images/astronaut.jpeg"
        />
        {/*}<div className="web3aunth-div">
        <div className="secured-by-div">Secured by</div>
        <img
          className="logo-for-dark-navbar-2-1"
          alt=""
          src="https://www.xade.finance/media/logofordarknavbar-2-1.svg"
        />
      </div>{*/}
        <div className="sign-in-form">
          <div className="socialsDiv2">
            <button className="socials2" onClick={() => loginSocial("google")}>
              {" "}
              <img
                className="socialsImg"
                src="https://dashboard.web3auth.io/img/login-google.2a082e2a.svg"
              />
            </button>{" "}
            &nbsp;{" "}
            <button
              className="socials2"
              onClick={() => loginSocial("linkedin")}
            >
              <img
                className="socialsImg"
                src="https://dashboard.web3auth.io/img/login-linkedin.a1413fd9.svg"
              />
            </button>
            &nbsp;&nbsp;
            <button
              className="socials2"
              onClick={() => loginSocial("facebook")}
            >
              <img
                src="https://dashboard.web3auth.io/img/login-facebook.01f67d62.svg"
                className="socialsImg"
              />
            </button>
            &nbsp;&nbsp;
            <button className="socials2" onClick={() => loginSocial("twitter")}>
              {" "}
              <img
                className="socialsImg"
                src="https://dashboard.web3auth.io/img/login-twitter.d24e7883.svg"
              />
            </button>
            <br />
            <br />
            <br />
            <div className="web3aunth-div">
              {/*}        <div className="secured-by-div">Secured by</div>
    {*/}{" "}
              <img
                className="logo-for-dark-navbar-2-1"
                alt=""
                src="https://app.xade.finance/images/w3a.svg"
              />
            </div>
          </div>
          <button
            onClick={loginWithWalletConnect}
            className="connect-wallet-button"
          >
            <b className="connect-your-wallet">Connect Wallet</b>
          </button>
          &nbsp;
          <form onSubmit={(e) => handleLoginWithEmail(e)}>
            <div className="email-field-div">
              <br />
              <br />
              <br />
              <input
                type={"email"}
                placeholder={"Enter your email"}
                className="your-email-div"
              />{" "}
              <div className="rectangle-div"></div>
            </div>
            <button type="submit" className="sign-in-button">
              <b className="sign-in-text">Sign in</b>
            </button>

            {/*}        <div className="email-field-div">
<br />
<br />      
    <input type={'email'} placeholder={'Enter your email'} className="your-email-div"/>          <div className="rectangle-div"></div>
        </div>
{*/}
          </form>
          <div className="or-create-account">
            <br />
            <span>or </span>
            <span className="create-account-span">
              <a
                style={{ textDecoration: "none", color: "#ff537c" }}
                href="/register"
              >
                create account
              </a>
            </span>
          </div>
          <b className="sign-in-b1">Sign in</b>
          <br />
        </div>
        <b className="were-all-explorers-and-now-y"></b>
        {/*}<img className="xade-icon" alt="" src="https://www.xade.finance/media/xade.svg" />{*/}
      </div>
    </div>
  );
};
export default Login;
