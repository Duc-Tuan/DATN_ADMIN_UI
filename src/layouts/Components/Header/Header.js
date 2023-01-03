import Button from "../../../components/Button";
import classNames from "classnames/bind";
import style from "./Header.module.scss";
import imgLogo from "../../../assets/Images/logo.png"
import { Link } from "react-router-dom";
import config from "../../../config";
const ctx = classNames.bind(style);

function Header() {
  return (
    <header className={ctx("wapper", "dfcenter dfspween")}>
      <Link className={ctx("logo")} to={config.routes.Home}>
        <img width="100%" src={imgLogo} alt=""/>
      </Link>

      <div className={ctx("info", "dfcenter")}>
        <div
          className={ctx("btnReturn", `${localStorage.getItem("btnColor")}`)}
        >
          <Button id="activeBtnWEB">
            <h6>Website</h6>
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
