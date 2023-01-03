import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faBowlFood,
  faComment,
  faNetworkWired,
  faRectangleAd,
  faShapes,
  faTruckFast,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../../../components/Button";

import className from "classnames/bind";
import styles from "./Sidebar.module.scss";
import { useHref } from "react-router-dom";
import { useStateValue } from "../../../contexts/StateProvider";
import { useEffect, useState } from "react";
import { setBtn } from "../../../contexts/Reducer";
import config from "../../../config";

const ctx = className.bind(styles);


const button = []
const buttonAdmin = [
  {
    to: config.routes.Users,
    name: "Users",
    icon: <FontAwesomeIcon icon={faUser} />,
  },
  {
    to: config.routes.Products,
    name: "Products",
    icon: <FontAwesomeIcon icon={faBowlFood} />,
  },
  {
    to: config.routes.Categories,
    name: "Categories",
    icon: <FontAwesomeIcon icon={faNetworkWired} />,
  },
  {
    to: config.routes.Banners,
    name: "Banners",
    icon: <FontAwesomeIcon icon={faShapes} />,
  },
  {
    to: config.routes.Promotions,
    name: "Promotions",
    icon: <FontAwesomeIcon icon={faRectangleAd} />,
  },
  {
    to: config.routes.Comments,
    name: "Comments",
    icon: <FontAwesomeIcon icon={faComment} />,
  },
  {
    to: config.routes.Orders,
    name: "Orders",
    icon: <FontAwesomeIcon icon={faTruckFast} />,
  },
];
const buttonComments = [
  {
    to: config.routes.Comments,
    name: "Comments",
    icon: <FontAwesomeIcon icon={faComment} />,
  },
];
const buttonProducts = [
  {
    to: config.routes.Products,
    name: "Products",
    icon: <FontAwesomeIcon icon={faBowlFood} />,
  },
];
const buttonUsers = [
  {
    to: config.routes.Users,
    name: "Users",
    icon: <FontAwesomeIcon icon={faUser} />,
  },
];
const buttonOrder = [
  {
    to: config.routes.Orders,
    name: "Orders",
    icon: <FontAwesomeIcon icon={faTruckFast} />,
  },
];

function Sidebar() {
  const [{ userAdmin }, dispatch] = useStateValue();
  const [dataAdmin, setDataAdmin] = useState(null);
  const [dataRouters, setDataRouters] = useState(button);

  const href = useHref();

  useEffect(() => {
    if (userAdmin !== null && userAdmin !== undefined) {
      if (userAdmin.constructor === Object) {
        setDataAdmin(userAdmin);
      } else {
        userAdmin.then((data) => {
          return setDataAdmin(data.data);
        });
      }
    } else {
      setDataAdmin(null);
    }
  }, [userAdmin]);

  useEffect(() => {
    if (dataAdmin !== null && dataAdmin !== undefined && dataAdmin.role !== undefined) {
      dataAdmin.role.map((dataRole) => {
        if (dataRole.role_name === "Supreme") {
          setDataRouters(button.concat(buttonAdmin));
        } else if (dataRole.role_name === "Users") {
          setDataRouters(button.concat(buttonUsers));
        } else if (dataRole.role_name === "Comments") {
          setDataRouters(button.concat(buttonComments));
        } else if (dataRole.role_name === "Orders") {
          setDataRouters(button.concat(buttonOrder));
        } else if (dataRole.role_name === "Products") {
          setDataRouters(button.concat(buttonProducts));
        }
        return 0;
      });
    }
  }, [dataAdmin]);

  const btnBG = document.querySelector("#activeBtnColor");
  useEffect(() => {
    const btn = () => {
      dispatch(setBtn(btnBG));
    };
    btn();
  }, [btnBG, href]);
  return (
    <div className={ctx("wapper")}>
      <div className={ctx("dfcenter dfleft", "infoAdmin")}>
        <div className={ctx("img", "dfcenter")}>
          <FontAwesomeIcon icon={faUser} />
        </div>

        <div className={ctx("name", "mx-3")}>
          <h6>Admin</h6>
          {dataAdmin ? (
            <span className={ctx("opcity-08")}>{dataAdmin?.user_aliases}</span>
          ) : (
            <span className={ctx("opcity-08")}>Admin</span>
          )}
        </div>
      </div>

      <hr></hr>

      <div className={ctx("buttons")}>
        {dataRouters.map((data, index) => (
          <div key={index} className={ctx("my-2")}>
            <Button
              leftIcon={data.icon}
              to={data.to}
              className={ctx(
                `${href === data.to ? "active" : ""}`,
                "button",
                `${localStorage.getItem("btnColor")}`
              )}
              id={`${href === data.to ? "activeBtnColor" : ""}`}
            >
              <h6>{data.name}</h6>
            </Button>
          </div>
        ))}
      </div>

      <hr></hr>

      <div className={ctx("buttons")}>
        <Button
          to={config.routes.UserAdmin}
          leftIcon={<FontAwesomeIcon icon={faAddressCard} />}
          className={ctx(
            `${href === config.routes.UserAdmin ? "active" : ""}`,
            "button"
          )}
        >
          <h6>Profile Admin</h6>
        </Button>
      </div>
    </div>
  );
}

export default Sidebar;
