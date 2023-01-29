import React, { useState, useEffect } from "react";
import { useWeb3Auth } from "../../../../services/web3auth";
import xusdABI from "./../../../../services/XUSD.json";
import styles from "./Main.module.css";
import { FcSettings } from "react-icons/fc";
import { CgProfile } from "react-icons/cg";
import { BiTransferAlt, BiSupport, BiHelpCircle } from "react-icons/bi";
import { Button } from "@mui/material";
import Web3 from 'web3';
import { ethers } from 'ethers';
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
import { newKitFromWeb3 } from "@celo/contractkit";
import { FaPeopleArrows } from 'react-icons/fa'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import{ BsTwitter }from 'react-icons/bs'
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
    navigator.clipboard.writeText('');
    alert("Link copied");
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
  
  const stylex = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 470,
    bgcolor: '#000',
    border: '0px solid #000',
    boxShadow: 24,
    p: 4,
    height:"90%"
  };

  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const private_key = process.env.PRIVATE_KEY;

  const navigate = useNavigate();
  const [sidebar, setSidebar] = React.useState(false);
  // function copyAddr() {
  //   navigator.clipboard.writeText("0xabcd...123");
  //   alert("Address copied");
  // }
  const showSidebar = () => setSidebar(!sidebar);
  const { provider, logout, userPic, readAddress, userData, userEmail } =
    useWeb3Auth();
  //const[username,setUser]=React.useState<any>("");
  const [img, setImg] = useState("");
  // const account = await provider?.readAddress();
  const handleTest = async () => {
    // let provider = new ethers.providers.JsonRpcProvider('https://liberty20.shardeum.org')
    // console.log(provider)
    // let wallet = new ethers.Wallet(process.env.PRIVATE_KEY!, provider)
    // console.log(wallet)
    // const signer = wallet.connect(provider);
    // console.log(signer)
    // const contractAddr = "0x3004a8a8f7D4b09615ec8D392cC9b07c2e7B7944";
    // const contract = new ethers.Contract(contractAddr, xusdABI, signer);
    // console.log(contract)
    // const receiverWallet = new ethers.Wallet(mainAccount, provider)
    // const howMuchTokens = ethers.utils.formatUnits('10');
    // const receipt = await contract.transfer(receiverWallet, howMuchTokens); 
    // console.log(receipt);

    window.open(`https://twitter.com/intent/tweet?text=I'm%20excited%20to%20use%20the%20%40XadeFinance%20private%20beta!%20%23Xade%20is%20building%20the%20hybrid%20solution%20between%20traditional%20banks%20and%20DeFi.%0A%0AMy%20wallet%20address%20is%20${mainAccount}`, '_blank');
    
  }
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
  const [refer, setRefer] = useState('');

  useEffect(() => {
    const handleGetAccount = async () => {
      const account = await provider?.readAddress();
      setMainAccount(account);
      setRefer(`https://refer.xade.finance/${account}`);
    };
    if (provider) {
      handleGetAccount();
    }
  }, [provider, mainAccount]);
  function copyAddr() {
    navigator.clipboard.writeText(refer);
    alert("Link copied");
    console.log(email);
  }
  function logoutUser() {
    logout();
    window.location.href = "/";
  }
  function closeProfile() {
    document.getElementById("profile").style.visibility = "hidden";
  }
  const [referrals, setReferrals] = React.useState(0);

async function getAmountDeposited(address:any) {
  try {
    const response = await fetch(
      `https://refer.xade.finance/count/${address}`
      );
    return await response.text();
  } catch (error) {
    return "0.0";
  }
}

const isReady = () => {
  return mainAccount !== "";
};

useEffect(() => {
  if (isReady()) {
    handleGetAmountDeposited();
  }
}, [mainAccount]);

const handleGetAmountDeposited = async () => {
  let deposit = await getAmountDeposited(mainAccount);
  setReferrals(parseInt(deposit));
};

const [state, setState] = React.useState(true);
  return (
    <>
    <Modal
            id = "paymentsModal"
            open = {open}
            onClose={handleClose}
            >
        <Box sx={stylex}>
        <div className = {styles.container}>
                     <div className = {styles.toggleBar}>
                        <button onClick = {() => setState(true)} className = {styles.overviewClick + "  " + (state?styles.highlight:'')}>Trade</button>
                        <button onClick = {() => setState(false)} className = {styles.tradeClick + "  " + ((!state)?styles.highlight:'')}>Portfolio</button>
                     </div>
            </div>
            <div onClick = {() => setOpen(false)}>
          <div  style={{ marginTop: "0", color: "#fff", height: "100%" }}>
            <br />
            <ImCross size={26}/>
          </div>
        </div>
          {state?
          <>
          
          </>:<></>}
        
          <div className="contentWrapper">
            <div>
            <h4 className="vela" style={{ fontSize: "30px", color:"#d9d9d9"}}>
                  Your referrals
                  <br />
                  <br />

                  {/* {refer.substring(refer.length - 3)} */}
                </h4>
              <button className="blackBtn" >
              <h4 className="vela" style={{ fontSize: "20px", color:"#d9d9d9"}}>
                  Copy referral link
                  <br />
                  {/* {refer.substring(refer.length - 3)} */}
                </h4>
                <h4 className="vela blackHover" style={{ fontSize: "20px", color:"#d9d9d9"}}onClick = {copyAddr}>
                  {refer.substring(0, 10)}...
                  <button className="blackBtn">
                <FaCopy />
              </button>
              <br>   
              </br>
              <br />
                </h4>
                <h4 className="vela" style={{ fontSize: "20px", color:"#d9d9d9"}}>
                    {(referrals > 0)?
                   <>Congratulations on getting {referrals} {(referrals == 1)?"referral" :"referrals"}</>:
                    ""}
                  <br />
                  {/* {refer.substring(refer.length - 3)} */}
                </h4>

                <button onClick = {() => window.open(`https://twitter.com/intent/tweet?text=Join%20%40XadeFinance%20with%20my%20referral%20link%20and%20let's%20both%20stand%20a%20chance%20to%20win%20%23Xade%20Coins!%0A%0Ahttps%3A//refer.xade.finance/${mainAccount}`, '_blank')}className="btn btn-primary"><BsTwitter /> Tweet</button>

              </button>
              
            </div>   
          </div>
        </Box>  
        </Modal>
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
        <div
        
          className={styles.component + " " + styles.B}
          onClick={() => {
            setOpen(true);
          }
          }
        > 
          
          <p className={styles.logo}>
            <FaPeopleArrows style={{ color: "white" }} />
          </p>

          <div>
            <p style={{ color: "white" }} className={styles.heading}>
              Referrals
            </p>

            <p className={styles.content}>
              Refer Xade to your friends to win exclusive rewards.
            </p>
          </div>
        </div>
        <hr className={styles.hr}></hr>
        <br />
        <br />

        <button onClick = {handleTest} className={count.takePart}>
       
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
