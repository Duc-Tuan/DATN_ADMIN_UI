import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrash,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import className from "classnames/bind";
import { useEffect, useState } from "react";
import { useStateValue } from "../../contexts/StateProvider";
import style from "./Users.module.scss";
import Button from "../../components/Button";
import List from "../../components/List";
import HeaderComponent from "../../components/HeaderComponent";
import config from "../../config";
const ctx = className.bind(style);

const title = ["Image", "Name", "UserName", "Password", "Email"];

function User() {
  const [{ users }, dispatch] = useStateValue();
  const [dataUser, setDataUser] = useState([]);

  useEffect(() => {
    if (users !== null && users !== undefined) {
      users.then((data) => {
        return setDataUser(data);
      });
    }
  }, [users]);

  return (
    <div className={ctx("wapper")}>
      <HeaderComponent page={config.routes.Users} create={true}/>
      <hr></hr>
      <List title={title}>
        {dataUser.map((user, index) => {
          return (
            <div
              key={user._id}
              className={ctx("dfcenter dfspween", "contentProducts")}
            >
              <div className={ctx("index", "dfcenter")}>
                {index}
              </div>
              <div className={ctx("title", "dfcenter")}>
                <div className={ctx("name__title", "dfcenter")}>
                  <div className={ctx("img", "dfcenter")}>
                    {user.avatar !== null ? (
                      <img width="100%" src={user.avatar} alt="" />
                    ) : (
                      <FontAwesomeIcon icon={faUser} />
                    )}
                  </div>
                </div>
                <div className={ctx("name__title", "dfcenter")}>
                  <span>{user.user_aliases}</span>
                </div>
                <div className={ctx("name__title", "dfcenter")}>
                  <span>{user.user_name}</span>
                </div>
                <div className={ctx("name__title", "dfcenter")}>
                  <span>{user.user_password}</span>
                </div>
                <div className={ctx("name__title", "dfcenter")}>
                  <span>{user.user_email}</span>
                </div>
              </div>
              <div className={ctx("content", "dfcenter")}>
                <div className={ctx("BtnEdit", "p0 dfcenter")}>
                  <Button className={ctx("Edit")}>
                    <h5>
                      <FontAwesomeIcon icon={faEdit} />
                    </h5>
                  </Button>
                </div>
                <div className={ctx("BtnDelete", "p0 dfcenter")}>
                  <Button className={ctx("Delete")}>
                    <h5>
                      <FontAwesomeIcon icon={faTrash} />
                    </h5>
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </List>
    </div>
  );
}

export default User;
