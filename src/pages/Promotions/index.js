import className from "classnames/bind";
import style from "./Promotions.module.scss";
import { useStateValue } from "../../contexts/StateProvider";
import { useEffect, useState } from "react";
import List from "../../components/List";
import Button from "../../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import HeaderComponent from "../../components/HeaderComponent";
import config from "../../config";
const ctx = className.bind(style);
const title = ["Image", "Date Start", "Date End", "Percent"];
function Promotions() {
  const [{ Promotions }, dispatch] = useStateValue();
  const [dataPromotions, setDataPromotions] = useState([]);

  useEffect(() => {
    if (Promotions !== undefined && Promotions !== null) {
      Promotions.then((dt) => {
        return setDataPromotions(dt);
      });
    }
  }, [Promotions]);

  return (
    <div className={ctx("wapper")}>
      <HeaderComponent page={config.routes.Promotions} />
      <hr></hr>
      <List title={title}>
        {dataPromotions?.map((data, index) => (
          <div
            key={index}
            className={ctx("dfcenter dfspween", "contentProducts")}
          >
            <div className={ctx("index", "dfcenter")}>{index}</div>
            <div className={ctx("title", "dfcenter")}>
              <div className={ctx("name__title", "dfcenter")}>
                <div className={ctx("img", "dfcenter")}>
                  <img width="100%" src={data.Promotion_image.url} alt="" />
                </div>
              </div>
              <div className={ctx("name__title", "dfcenter")}>
                <span>{data.Promotion_start}</span>
              </div>
              <div className={ctx("name__title", "dfcenter")}>
                <span>{data.Promotion_end}</span>
              </div>
              <div className={ctx("name__title", "dfcenter")}>
                <span>{data.Promotion_percent} %</span>
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

export default Promotions;
