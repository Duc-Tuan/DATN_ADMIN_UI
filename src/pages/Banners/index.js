import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import className from "classnames/bind";
import { useEffect, useState } from "react";
import Button from "../../components/Button";
import List from "../../components/List";
import { useStateValue } from "../../contexts/StateProvider";
import style from "./Banners.module.scss";
import HeaderComponent from "../../components/HeaderComponent";
import config from "../../config";
const ctx = className.bind(style);
const title = ["Image", "Contact", "Link"];
function Banners() {
  const [{ Banners }, dispatch] = useStateValue();
  const [dataBanner, setDataBanner] = useState([]);

  useEffect(() => {
    if (Banners !== undefined && Banners !== null) {
      Banners.then((dt) => {
        return setDataBanner(dt);
      });
    }
  }, [Banners]);
  return (
    <div className={ctx("wapper")}>
      <HeaderComponent page={config.routes.Banners} create={true} />
      <hr></hr>
      <List title={title}>
        {dataBanner.map((data, index) => (
          <div
            key={index}
            className={ctx("dfcenter dfspween", "contentProducts")}
          >
            <div className={ctx("index", "dfcenter")}>{index}</div>
            <div className={ctx("title", "dfcenter")}>
              <div className={ctx("name__title", "dfcenter")}>
                <div className={ctx("img", "dfcenter")}>
                  <img width="100%" src={data?.Banner_image.url} alt="" />
                </div>
              </div>
              <div className={ctx("name__title", "dfcenter")}>
                <span>{data.Banner_contact}</span>
              </div>
              <div className={ctx("name__title", "dfcenter")}>
                <span>
                  <Button
                    target="_blank"
                    href={data.Banner_url}
                    className={ctx("LinkBanner")}
                  >
                    <h6>{data.Banner_url}</h6>
                  </Button>
                </span>
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
        ))}
      </List>
    </div>
  );
}

export default Banners;
