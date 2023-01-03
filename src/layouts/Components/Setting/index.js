import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGears } from "@fortawesome/free-solid-svg-icons";

import classNames from "classnames/bind";
import style from "./Setting.module.scss";

const ctx = classNames.bind(style);

function Setting() {
  return (
    <div className={ctx("wapper", "dfcenter")}>
      <FontAwesomeIcon icon={faGears} />
    </div>
  );
}

export default Setting;
