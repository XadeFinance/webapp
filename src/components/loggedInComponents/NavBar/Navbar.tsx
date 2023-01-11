import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { ImCross } from "react-icons/im";

type Props = {};

const Navbar = (props: Props) => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

    function hideAnnouncement() {
    document.getElementById("announce").style.display = "none";
  }
  
  window.addEventListener("resize", showButton);
  return (
    <>
    {/* <div className="goBack2" style = {{position: 'absolute',left: '1rem',marginTop: '3rem'}}>
            <ImCross />
          </div> */}
      <nav className="navbar">
 {/*}<div className="vela announcement" id="announce">
<b><button onClick={hideAnnouncement} style={{fontSize:"0.8rem",backgroundColor:"inherit",color:"white",border:"none"}}><ImCross id="hideAnnounce" /></button> RemmiteX V2 and DeriveX V1 will go live on Testnet on 5th January 2023 </b>
</div>{*/}
         
<div className="navbar-container">

          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            XADE
          </Link>
          <div onClick={handleClick} className="menu-icon">
            <i className={"fas fa-bars desktopstuff"} id={"3bars"}></i>
          </div>
          <div className="nav-menu">
            <ul className={click ? "nav-menu navActive" : "nav-menu"}>
              <div onClick={closeMobileMenu}>
                <div className="goBack">
                  <br />
                  <ImCross />
                </div>
              </div>
              {/*} <li style={{ color: "#fff" }} className="desktopstuff nav-item">
                <Link
                  to="/"
                  className="nav-links"
                  style={{ color: "#fff" }}
                  onClick={closeMobileMenu}
                >
                  Home
                </Link>
              </li>{*/}
              {/*          <li stylclassName='nav-item'>
              <Link
                to='/payments'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Payments
              </Link>
            </li>*/}
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/investments/1"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Investments
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/savings"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Savings
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/settings"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Settings
                </Link>
              </li>

              <li className="button-item"></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
