import React, { useState, useEffect } from "react";
import { useWeb3Auth } from "../../../../services/web3auth";
import styles from "./Main.module.css";
import { FcSettings } from "react-icons/fc";
import { CgProfile } from "react-icons/cg";
import { BiTransferAlt, BiSupport, BiHelpCircle } from "react-icons/bi";
import { Button } from "@mui/material";
import { FiLogOut } from "react-icons/fi";
import count from "./Countdown.module.css";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaCopy } from "react-icons/fa";
import "./style.css";
import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom";
import { ImCross } from "react-icons/im";

// import { BiArrowBack } from "react-icons/bi";

/*const { provider, userPic, readAddress, userData } = useWeb3Auth();
const[username,setUser]=React.useState<any>(""); 

const[username, setUsername] = useState("");

useEffect(() => {
const handleGetUser = async () => {
const user = await userData();
setUsername(user);
}
if (provider) {
handleGetUser();
}
}, [provider, username]);

const [mainAccount, setMainAccount] = useState("");

 useEffect(() => {
    const handleGetAccount = async () => {
      const account = await provider?.readAddress();
      setMainAccount(account);
    };
    if (provider) {
      handleGetAccount();
    }
  }, [provider, mainAccount]);
*/

const Navbar = () => {
  const [sidebar, setSidebar] = React.useState(false);
  const { provider } = useWeb3Auth();
  const [click, setClick] = useState(false);
  function copyAddr() {
    navigator.clipboard.writeText("0xabcd...123");
    alert("Address copied");
  }
  const showSidebar = () => setSidebar(!sidebar);

  function removeBars() {
    document.getElementById("3bars").style.visibility = "hidden";
    showSidebar();
  }
  function closeProfile() {
    document.getElementById("profile").style.visibility = "hidden";
  }
  return (
    <>
      <IconContext.Provider value={{ color: "undefined" }}>
        <div className="navbar">
          {/* <div onClick = {() => {navigate(`/investments/${addr}`);handleClose()}}>
                <div style = {{'marginTop': '0', 'color': '#fff', 'height': '100%'}}>
                  <br />
                  <BiArrowBack />
                </div>
      </div> */}
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={removeBars} />
          </Link>
        </div>
        <nav
          className={sidebar ? "nav--menu active" : "nav--menu"}
          id="profile"
        >
          <ul className="nav-menu-items" onClick={removeBars}>
            <li className="navbar-toggle">
              {/*              
            <Link to="/settings" onClick={closeProfile}>
                <div className="goBack" onClick={closeProfile}>
                  <ImCross />
                </div>
              </Link>*/}
            </li>

            <li>
              <img
                className="nav-text"
                style={{ width: "50%", height: "50%", borderRadius: "100px" }}
                src="https://p.kindpng.com/picc/s/394-3947019_round-profile-picture-png-transparent-png.png"
              />
            </li>
            <li className="nav-text">
              <b className="username">{username}</b>
            </li>
            <div className="bar"></div>
            <li className="nav-text vela2">
              <a className="vela2">Email Address: &nbsp;</a>
              <a className="vela email">harshal@xade.finance</a>
            </li>
            {/*}<li  className="nav-text vela2">
       <a className="vela2">Phone Number: &nbsp;</a><a className="vela">+919836711182</a>
       </li>{*/}
            <div className="bar"></div>
            <li className="nav-text vela2">
              <a className="vela2">Wallet Address: </a>
              <a className="vela">
                &nbsp;{mainAccount.slice(0, 6)}...{mainAccount.slice(-3)} &nbsp;{" "}
                <FaCopy onClick={copyAddr} />
              </a>
            </li>
            <div className="bar"></div>

            <li className="nav-text vela">🟣 Polygon Mainnet</li>

            <li className="nav-text vela">Chain ID: 0x89 (137)</li>
            <div className="bar"></div>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};
const MainComponent = () => {

  const navigate = useNavigate();
  const [sidebar, setSidebar] = React.useState(false);
  function copyAddr() {
    navigator.clipboard.writeText("0xabcd...123");
    alert("Address copied");
  }
  const showSidebar = () => setSidebar(!sidebar);
  const { provider, logout, userPic, readAddress, userData, userEmail } =
    useWeb3Auth();
  //const[username,setUser]=React.useState<any>("");
  const [img, setImg] = useState("");
  // const account = await provider?.readAddress();

  useEffect(() => {
    
    const handleGetImg = async () => {
      const pic = await userPic();
      setImg(pic);
    };
    if (provider) {
      handleGetImg();
    }
  }, [provider, img]);

  const [email, setEmail] = useState("");

  useEffect(() => {
    const handleGetEmail = async () => {
      const mail = await userEmail();
      setEmail(mail);
    };
    if (provider) {
      handleGetEmail();
    }
  }, [provider, email]);

  const [username, setUsername] = useState("");

  useEffect(() => {
    const handleGetUser = async () => {
      const user = await userData();
      setUsername(user);
    };
    if (provider) {
      handleGetUser();
    }
  }, [provider, username]);

  const [mainAccount, setMainAccount] = useState("");

  useEffect(() => {
    const handleGetAccount = async () => {
      const account = await provider?.readAddress();
      setMainAccount(account);
    };
    if (provider) {
      handleGetAccount();
    }
  }, [provider, mainAccount]);
  function copyAddr() {
    navigator.clipboard.writeText(mainAccount);
    alert("Address copied");
    console.log(email);
  }
  function logoutUser() {
    logout();
    window.location.href = "/";
  }
  function closeProfile() {
    document.getElementById("profile").style.visibility = "hidden";
  }
  return (
    <>
      <IconContext.Provider value={{ color: "undefined" }}>
        <nav

          style = {{'justifyContent': 'left', 'paddingLeft': '2rem'}}

          className={sidebar ? "nav--menu active" : "nav--menu"}
          id="profile"
        >
          <ul className="nav-menu-items">
            <div onClick={showSidebar}>
              <div style={{ position: 'absolute', top: '6rem',marginTop: "0", color: "#fff", height: "100%" }}>
                <br />
                <ImCross size={26}/>
              </div>
            </div>

            <li>
              {/*} <img
                className="nav-text"
                style={{ width: "50%", height: "50%", borderRadius: "100px" }}
                src={img}
              />{*/}
            </li>
            <li className="nav-text">
              <b className="username">{username}</b>
            </li>
            <div className="bar"></div>
            <li className="nav-text vela2">
              <a className="vela2">Email Address:&nbsp;</a>
              <a className="vela email">{email}</a>
            </li>
            {/*} <li  className="nav-text vela2">
       <a className="vela2">Phone Number: &nbsp;</a><a className="vela">+919836711182</a>
       </li>{*/}
            <div className="bar"></div>
            <li className="nav-text vela2">
              <a className="vela2">Wallet Address:</a>
              <a className="vela">
                &nbsp;{mainAccount.slice(0, 6)}...{mainAccount.slice(-3)} &nbsp;{" "}
                <FaCopy onClick={copyAddr} />
              </a>
            </li>
            <div className="bar"></div>

            <li className="nav-text vela">🟠 Shardeum Liberty 20 Testnet</li>

            <li className="nav-text vela">Chain ID: 0x1f91 (8081)</li>
            <div className="bar"></div>
          </ul>
        </nav>
      </IconContext.Provider>
      <div className={styles.navCenter}>
        <br /> <br />
        {/* <div className={styles.header + " " + styles.AA}>
                    <p>
                        <FcSettings />
                    </p>

                    <p>
                        Settings
                    </p>
                </div> */}
        <div
          // style = {{'position': 'absolute', 'top': '2rem'}}
          className={styles.component + " " + styles.A}
          onClick={showSidebar}
        >
          <p className={styles.logo}>
            <CgProfile />
          </p>

          <div>
            <p className={styles.heading}>Your Profile</p>

            <p className={styles.content}>
              Check out your profile and information about your wallet
            </p>
          </div>
        </div>
        <hr className={styles.hr}></hr>
        <div
          className={styles.component + " " + styles.B}
          onClick={() => {
            navigate("/deposits");
          }}
        >
          <p className={styles.logo}>
            <BiTransferAlt style={{ color: "white" }} />
          </p>

          <div>
            <p style={{ color: "white" }} className={styles.heading}>
              Deposit/Withdraw
            </p>

            <p className={styles.content}>
              Add Funds to your account via Xade P2P or via our ramp partners
            </p>
          </div>
        </div>
        {/* <hr className = {styles.hr}></hr> */}
        {/* <div className={styles.component + " " + styles.C}>
                    <p className = {styles.logo}>
                        <BiSupport style={{color:"white"}} />
                    </p>

                    <div>
                        <p className = {styles.heading} style={{color:"white"}} >
                            Help and Support
                        </p>

                        <p className={styles.content}>
                            Customer support and your queries
                        </p>
                    </div>
              </div> */}
        <hr className={styles.hr}></hr>
        <div
          className={styles.component + " " + styles.D}
          onClick={() => {
            navigate("/faqs");
          }}
        >
          <p className={styles.logo}>
            <BiSupport style={{ color: "white" }} />
          </p>

          <div>
            <p className={styles.heading} style={{ color: "white" }}>
              Help and Support
            </p>

            <p className={styles.content}>
              Customer support and answers to Frequently Asked Questions
            </p>
          </div>
        </div>
        <hr className={styles.hr}></hr>
        <br />
        <br />

        <button className={count.takePart}>
            <a
             target="_blank"
              className={count.btnTxt}
             href={`https://twitter.com/intent/tweet?text=I'm%20excited%20to%20use%20the%20%40XadeFinance%20private%20beta!%20%23Xade%20is%20building%20the%20hybrid%20solution%20between%20traditional%20banks%20and%20DeFi.%0A%0AMy%20wallet%20address%20is%20${mainAccount}`}
            >
              Request Test Money
            </a>
          </button>
        <br />
        <br />
        <div className={styles.logoutButton}>
          <p>
            <button
              style={{ backgroundColor: "#090909", border: "none" }}
              onClick={logout}
            >
              Logout{"  "} <FiLogOut />
            </button>{" "}
          </p>
        </div>
        <br />
        <br />
      </div>
    </>
  );
};

export default MainComponent;
