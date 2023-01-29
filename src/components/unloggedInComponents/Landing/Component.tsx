import styles3 from '../../../styles/send.module.css'
import styles from "../../../styles/Home.module.css";
import tickStyles from '../../../styles/tickStyles.module.css';
import tickStyles2 from "../../../styles/tickStyles2.module.css";
import "../../../styles/qrscan.css"
import "../../../styles/QrPage.css"
import "../../../styles/HomePage.css"
import { useNavigate } from "react-router-dom";

const Landing = () => {
const navigate = useNavigate();
function takeToRegister() {
  navigate("/register");
}

function takeToLogin() {
  navigate("/login");  
}
  return (
    <div id="firstPg" className="text-center text-white">
      <img
        src="http://app.xade.finance/cat.png"
        className="rounded mx-auto d-block"
        alt="..."
      />
      <br />
      <br />{" "}
      <h1 style={{ fontSize: "35px" }} className="text-white">
        One app to manage all your finance
      </h1>
      <br />{" "}
      <h6>
        Spend, Save, Borrow and Invest with our Super App powered by DeFi.
      </h6>
      <br />
      <br />
      <button
        id="btn"
        onClick={takeToRegister}
        style={{ border: "none" }}
        className={styles.buttonC}
      >
        <a className="text-center fs-5 text-white">Create an Account</a>
      </button>
      <br />{" "}
      <button
        style={{ border: "none" }}
        id="btn2"
        onClick={takeToLogin}
        className={styles.buttonC}
      >
        <span className="fs-5 text-white ">I already have one</span>
      </button>
      <br />
      <br />
    </div>
  );
};

export default Landing;
