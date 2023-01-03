import className from "classnames/bind";
import style from "./LoginAdmin.module.scss";
const ctx = className.bind(style);
function LoginAdmin() {
  return <div className={ctx("wapper")}>LoginAdmins</div>;
}

export default LoginAdmin;
