import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import config from "../../config";
import Button from "../Button";
import Search from "../Search/Search";
import style from "./HeaderComponent.module.scss";
const ctx = classNames.bind(style);
function HeaderComponent({ page, create = false }) {
  return (
    <div className={ctx("wapper")}>
      <div className={ctx("header", "dfcenter dfspween mb-3")}>
        <div className={ctx("Links", "dfcenter dfleft")}>
          <Link to={config.routes.Home}>Home</Link>
          <span className={ctx("mx-2")}>/</span>
          <Link to={page}>{page.slice(1)}</Link>
        </div>
        <div className={ctx("right", "dfcenter")}>
          <div className={ctx("search")}>
            <Search />
          </div>
          {create && (
            <div
              className={ctx(
                "create",
                "dfcenter",
                `${localStorage.getItem("btnColor")}`
              )}
            >
              <Button>
                <FontAwesomeIcon icon={faAdd} />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default HeaderComponent;
