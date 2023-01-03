import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import Button from "../../../components/Button";

import classNames from "classnames/bind";
import style from "./MenuSetting.module.scss";
import { useMemo } from "react";
import { useStateValue } from "../../../contexts/StateProvider";

const ctx = classNames.bind(style);

const colorBoard = [
  "bg__violet",
  "bg__green",
  "bg__orange",
  "bg__sea--blue",
  "bg__Red--pink",
];

const bg = ["White", "Dark"];

function MenuSetting({ onClick, bgWapper }) {
  const [{ btn, btnWeb }, dispatch] = useStateValue();
  const btnCheck = document.querySelector("#refLightDark");
  useMemo(() => {
    if (btnCheck) {
      btnCheck.checked = JSON.parse(localStorage.getItem("dark"));
      btnCheck.addEventListener("change", (e) => {
        if (e.target.checked) {
          bgWapper.current.classList.add(ctx("Dark"));
          localStorage.setItem("dark", e.target.checked);
        } else {
          bgWapper.current.classList.remove(ctx("Dark"));
          localStorage.setItem("dark", e.target.checked);
        }
      });
    }
  }, [btnCheck, bgWapper]);
  return (
    <div className={ctx("wapper", "dfcenter dfcolumn dfspween")}>
      <div className={ctx("title", "w-full")}>
        <div className={ctx("dfcenter dfspween")}>
          <h5>Argon Configurator</h5>
          <div
            className={ctx("btnClose", "dfcenter")}
            onClick={() => onClick()}
          >
            <FontAwesomeIcon icon={faClose} />
          </div>
        </div>
        <span>See our dashboard options</span>
        <hr></hr>
      </div>

      <div className={ctx("content", "w-full")}>
        <div className={ctx("mt-4")}>
          <h6>Sidebar Colors</h6>
          <div className={ctx("dfcenter dfleft my-1")}>
            {colorBoard.map((data, index) => (
              <div key={index}>
                <Button className={ctx("btnColor")}>
                  <div
                    className={ctx(`${data}`, "btn")}
                    onClick={() => {
                      const remov = colorBoard.filter((item) => item !== data);
                      remov.map((dt) => {
                        return (
                          btn.classList.contains(`${dt}`) && btn.classList.remove(`${dt}`)
                        );
                      });
                      localStorage.setItem("btnColor", data);
                      return btn.classList.add(`${data}`);
                    }}
                  ></div>
                </Button>
              </div>
            ))}
          </div>
        </div>

        <div className={ctx("mt-4")}>
          <h6>Sidenav Type</h6>
          <span>Choose between 2 different sidenav types.</span>
          <div className={ctx("dfcenter dfspween mt-2")}>
            {bg.map((data, index) => (
              <Button key={index} className={ctx(`${data}`, "btnBg")}>
                <h6>{data}</h6>
              </Button>
            ))}
          </div>
        </div>
      </div>
      <div className={ctx("mt-4 w-full")}>
        <hr></hr>
        <div className={ctx("dfcenter dfspween mt-3")}>
          <h6>Light / Dark</h6>
          <div className={ctx("checkbox", "dfcenter")}>
            <input type="checkbox" id="refLightDark" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuSetting;
