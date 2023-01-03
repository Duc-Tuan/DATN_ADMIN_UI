import Header from "../Components/Header/Header";
import Sidebar from "./Slidebar";
import Setting from "../Components/Setting";
import MenuSetting from "../Components/MenuSetting";
import Footer from "../Components/Footer/Footer";

import className from "classnames/bind";
import styles from "./DefaultLayout.module.scss";
import { useRef, useState } from "react";

const ctx = className.bind(styles);

function DefaultLayout({ children }) {
  const [openMenu, setOpenMenu] = useState(false);
  const refWapper = useRef();

  return (
    <div
      className={ctx(
        "wapper",
        `${JSON.parse(localStorage.getItem("dark")) ? "Dark" : ""}`
      )}
      ref={refWapper}
    >
      <div className={ctx("dfcenter", "sub")}>
        <div className={ctx("sliderba", "my-4")}>
          <Sidebar />
        </div>
        <div className={ctx("content")}>
          <div className={ctx("header")}>
            <Header />
          </div>
          <div className={ctx("children")}>{children}</div>
          <div className={ctx("footer")}>
            <Footer />
          </div>
        </div>
        <div className={ctx("menuSetting", `${openMenu ? "active" : ""}`)}>
          <MenuSetting
            onClick={() => setOpenMenu(!openMenu)}
            bgWapper={refWapper}
          />
        </div>
        <div className={ctx("setting")} onClick={() => setOpenMenu(true)}>
          <Setting />
        </div>
      </div>
    </div>
  );
}

export default DefaultLayout;
