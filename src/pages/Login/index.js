import classNames from "classnames/bind";
import Button from "../../components/Button";
import style from "./Login.module.scss";

import * as getAdminService from "../../services/LoginAdmin";
import { useStateValue } from "../../contexts/StateProvider";
import { useState } from "react";
import { setUser } from "../../contexts/Reducer";
import MessProduct from "../../components/MessProduct";

const ctx = classNames.bind(style);

function Login() {
  const [{ user }, dispatch] = useStateValue();
  const [useName, setUserName] = useState("");
  const [password, setPassWord] = useState("");

  const [isMessager, setIsMessager] = useState(false);
  const [Messager, setMessager] = useState("");

  const data = {
    user_name: useName,
    user_password: password,
  };

  function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  const handleLogin = async () => {
    setIsMessager(true);

    const dataAdmin = await getAdminService.postAdmin(data);
    setCookie("token", dataAdmin.data);
    const dataGetAdmin = await getAdminService.getAdmin(dataAdmin.data);

    if (dataGetAdmin.suss) {
      setMessager(dataGetAdmin.suss);
    } else {
      setMessager(dataGetAdmin.err);
    }

    return setTimeout(() => {
      setIsMessager(false);
      dispatch(setUser(dataGetAdmin.data, dataAdmin.data));
    }, 1000);
  };

  return (
    <div className={ctx("dfcenter", "sub")}>
      {isMessager && <MessProduct data={Messager} />}
      <div className={ctx("wapper")}>
        <div className={ctx("form")}>
          <h2>Sign in</h2>
          <div className={ctx("inputBox")}>
            <input
              type="text"
              required="required"
              onChange={(e) => setUserName(e.target.value)}
            />
            <span>Username</span>
            <i></i>
          </div>
          <div className={ctx("inputBox")}>
            <input
              type="password"
              required="required"
              onChange={(e) => setPassWord(e.target.value)}
            />
            <span>Password</span>
            <i></i>
          </div>
          <div className={ctx("links", "my-4")}>
            <Button className={ctx("p0")}>
              <h6>Forgot Password?</h6>
            </Button>
          </div>
          <input type="submit" value="Login" onClick={handleLogin} />
        </div>
      </div>
    </div>
  );
}

export default Login;
