import className from "classnames/bind";
import style from "./UserAdmin.module.scss";
const ctx = className.bind(style);
function UserAdmin() {
  return <div className={ctx("wapper")}>UserAdmins</div>;
}

export default UserAdmin;
