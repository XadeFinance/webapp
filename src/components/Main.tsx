import { Navigate } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { useEffect, useState } from "react";
import { useWeb3Auth } from "../services/web3auth";
import { FormEvent } from "react";
import { WALLET_ADAPTERS } from "@web3auth/base";

import CountDown from "./loggedInComponents/CountDown/Component";
import Landing from "./unloggedInComponents/Landing/Component";
import Login from "./unloggedInComponents/Login/Component";

import styles from "../styles/Home.module.css";
import "../styles/NewLogin.css"

import countries from "./regCountries";
import { Country, PhoneNumber } from "./regCountries";

window.alert = function () {};

var secret = "";
var characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
var charactersLength = characters.length;
for (var i = 0; i < 50; i++) {
  secret += characters.charAt(Math.floor(Math.random() * charactersLength));
}

function storenum(c, n) {
  var phone = c.replace("+", "") + "" + n;
  var data = `{"phone":"${phone}","id":"${secret}"}`;
  var s = new XMLHttpRequest();
  s.open("POST", "https://mongo.api.xade.finance");
  s.send(data);
}

const Main = () => {
  const { provider, getUserInfo, userData, isLoading, userPic } = useWeb3Auth();
  const Register = () => {
    const [state, setState] = React.useState(2);
    const [cc, setCC] = React.useState("");
    const [pnum, setPnum] = React.useState("");
    const { login, loginWithWalletConnect } = useWeb3Auth();
    function loginSocial(social: string) {
      login(WALLET_ADAPTERS.OPENLOGIN, social);
    }
    const handleLoginWithEmail = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const email = (e.target as any)[0].value;
      login(WALLET_ADAPTERS.OPENLOGIN, "email_passwordless", email);
    };
    const numberValidation = (e: FormEvent<HTMLFormElement>) => {
      var error = document.getElementById("error");
      setCC(document.getElementById("cc").value);
      setPnum(document.getElementById("num").value);

      let cc = document.getElementById("cc").value;
      let num = document.getElementById("num").value;

      if (cc == 0) {
        e.preventDefault();
        error.textContent = "Please select a valid country code";
        error.style.color = "red";
        return;
      } else if (num.length != 10) {
        e.preventDefault();
        error.textContent = "Please enter a valid phone number";
        error.style.color = "red";
        return;
      }

      // else {
      //   error.textContent = "";
      //   error.style.color="#020202";
      //   e.preventDefault();
      else {
        e.preventDefault();
        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
          alert(xhr.responseText);

          setState(1);
        };
        xhr.open(
          "GET",
          `https://otp.api.xade.finance/login?phonenumber=${
            cc + num
          }=&channel=sms`
        );

        xhr.send(null);
      }
    };

    const otpValidation = (e: any) => {
      e.preventDefault();
      alert("function called");

      let otpEntered: string =
        document.getElementById("numberinput1").value.toString() +
        document.getElementById("numberinput2").value.toString() +
        document.getElementById("numberinput3").value.toString() +
        document.getElementById("numberinput4").value.toString() +
        document.getElementById("numberinput5").value.toString() +
        document.getElementById("numberinput6").value.toString();
      // Call verify API
      alert(otpEntered);
      var xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function () {
        let jsonObj = JSON.parse(xhr.responseText);
        if (jsonObj.status == "approved") {
          storenum(cc, pnum);
          //prompt("verified");
          // window.location.href=`/register`
          setState(2);
        } else {
          alert("Incorrect code");
          setState(0);
        }
      };

      xhr.open(
        "GET",
        `https://otp.api.xade.finance/verify?phonenumber=${
          cc + pnum
        }=&code=${otpEntered}`
      );
      xhr.send(null);
    };

    function skipRegister() {
      setState(2);
    }

    return (
      <div>
        <div className={"container" + styles.login}>
          <div className={styles.loginTitleText}>
            <h1
              style={{ fontSize: "45px" }}
              className="text-center text-white"
              id="loginTitle"
            >
              {state == 0 ? "Register" : state == 1 ? "Enter OTP" : ""}
            </h1>
          </div>
          <br />
          {state == 0 ? (
            <>
              <section className={styles.mobile}>
                <div className={styles.box}>
                  <p className={styles.subheading}>
                    Step 1: Enter your registered mobile number
                  </p>
                  <br />
                  <p id="error" className={styles.error}></p>
                  <br />

                  <div className={styles.number_input} id="phonenums">
                    <div className={styles.number_form}>
                      <div className={styles.flexContainer}>
                        <section className={styles.countryCode}>
                          <div className={styles.flexContainerCountry}>
                            <section className={styles.callingCodeTitle}>
                              Country Code <a className={styles.red}>*</a>
                            </section>

                            <section>
                              <select id="cc" className={styles.selectForm}>
                                {/*}<option value="0">Select your country code</option>
                                            <option value="1">United States of America/Canada</option>
                                     <option value="44">United Kingdom</option>
                                    <option value="91">India</option>
                                    <option value="61">Australia</option>                                    
                                    <option value="971">United Arab Emirates</option>
                                    <option value="852">Hong Kong</option>
                                    <option value="49">Germany</option>
                                    <option value="33">France</option>
                                    <option value="81">Japan</option>
                                    <option value="234">Nigeria</option>
                                        {*/}
                                {countries.map((countryName) => (
                                  <option
                                    value={countryName["code"]}
                                  >{`${countryName["name"]}`}</option>
                                ))}
                              </select>
                            </section>
                          </div>
                        </section>
                        <section className={styles.phoneNumber}>
                          <div className={styles.flexContainerCountry}>
                            <section className={styles.callingCodeTitle}>
                              Mobile Number <a className={styles.red}>*</a>
                            </section>

                            <section>
                              <input
                                id="num"
                                className={styles.inputForm}
                                type="number"
                                autoFocus
                              />
                            </section>
                          </div>
                        </section>

                        {/*  <section className={styles.submitSection}>
                            <button className={styles.submitButton} onClick={test} id="cont">Continue</button>
                        </section>*/}
                      </div>
                    </div>
                  </div>
                  <form
                    onSubmit={(e) => numberValidation(e)}
                    className={"container" + styles.login2}
                  >
                    <div className="text-center">
                      <br />
                      <button
                        style={{
                          border: "none",
                          color: "white",
                          backgroundColor: "black",
                        }}
                        onClick={skipRegister}
                      >
                        Skip for Now
                      </button>
                      <br />
                      <br />
                      <button type="submit" className={styles.continue}>
                        Continue
                      </button>
                    </div>
                  </form>
                </div>
              </section>
            </>
          ) : state == 1 ? (
            <>
              <form
                onSubmit={(e) => {
                  otpValidation(e);
                }}
              >
                <input
                  id="numberinput1"
                  className={styles3.numberInput}
                  type="number"
                  min="0"
                  max="9"
                  onChange={(e) => {
                    e.target.value = e.target.value[0];
                    document.getElementById("numberinput2").focus();
                  }}
                />
                <input
                  id="numberinput2"
                  className={styles3.numberInput}
                  type="number"
                  min="0"
                  max="9"
                  onChange={(e) => {
                    e.target.value = e.target.value[0];
                    document.getElementById("numberinput3").focus();
                  }}
                />
                <input
                  id="numberinput3"
                  className={styles3.numberInput}
                  type="number"
                  min="0"
                  max="9"
                  onChange={(e) => {
                    e.target.value = e.target.value[0];
                    document.getElementById("numberinput4").focus();
                  }}
                />
                <input
                  id="numberinput4"
                  className={styles3.numberInput}
                  type="number"
                  min="0"
                  max="9"
                  onChange={(e) => {
                    e.target.value = e.target.value[0];
                    document.getElementById("numberinput5").focus();
                  }}
                />
                <input
                  id="numberinput5"
                  className={styles3.numberInput}
                  type="number"
                  min="0"
                  max="9"
                  onChange={(e) => {
                    e.target.value = e.target.value[0];
                    document.getElementById("numberinput6").focus();
                  }}
                />
                <input
                  id="numberinput6"
                  className={styles3.numberInput}
                  type="number"
                  min="0"
                  max="9"
                  onChange={(e) => {
                    e.target.value = e.target.value[0];
                  }}
                />
                <br />
                <br />
                <div className="text-center">
                  <button type="submit" className={styles.continue}>
                    Continue
                  </button>
                </div>
              </form>
            </>
          ) : (
            <>
              <div className="sign-in-div">
                <img
                  className="pexels-mikhail-nilov-7672255-1-icon"
                  alt=""
                  src="https://app.xade.finance/images/astronaut.jpeg"
                />
                <div className="sign-in-form">
                  <div className="socialsDiv2">
                    <button
                      className="socials2"
                      onClick={() => loginSocial("google")}
                    >
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
                    <button
                      className="socials2"
                      onClick={() => loginSocial("twitter")}
                    >
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
                      <b className="sign-in-text">Create</b>
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
                        href="/login"
                      >
                        sign in
                      </a>
                    </span>
                  </div>
                  <b className="sign-in-b1">Create Account</b>
                  <br />
                </div>
                <b className="were-all-explorers-and-now-y"></b>
                {/*}<img className="xade-icon" alt="" src="https://www.xade.finance/media/xade.svg" />{*/}
              </div>
            </>
          )}

          <br />
        </div>
      </div>
    );
  };
  const [username, setUsername] = useState("");

  const loggedInView =
    (getUserInfo(secret),
    (
      <>
        <div className="App">
          <BrowserRouter>
          <Routes>
              <Route
                path="/"
                element={
                  <CountDown />
                }
              />
              <Route
                path="/register"
                element={
                  <CountDown />
                }
              />
              <Route
                path="/login"
                element={
                  <CountDown />
                }
              />
            </Routes>
          </BrowserRouter>
        </div>
      </>
    ));

  const unloggedInView = (
    <div>
      <h1 className={styles.title}>XADE</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
  return isLoading ? (
    <>
      <h1 className={styles.title}>XADE</h1>
      <div className={styles.loaderWrap}>
        <span className={styles.loader}>
          <span className={styles.loaderInner}></span>
        </span>
        <script src="load.js"></script>
      </div>
    </>
  ) : (
    <div className={styles.grid}>
      {provider ? loggedInView : unloggedInView}
    </div>
  );
};

export default Main;
