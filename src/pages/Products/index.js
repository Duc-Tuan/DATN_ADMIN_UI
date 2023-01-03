import className from "classnames/bind";
import style from "./products.module.scss";
import { useStateValue } from "../../contexts/StateProvider";
import { useEffect, useState } from "react";
import List from "../../components/List";
import Button from "../../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import HeaderComponent from "../../components/HeaderComponent";
import config from "../../config";

const ctx = className.bind(style);

const title = ["Image", "Name", "Description", "Price", "Status", "Percent"];

function products() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [{ Products }, dispatch] = useStateValue();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [dataProducts, setDataProducts] = useState([]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (Products !== null && Products !== undefined) {
      Products.then((data) => {
        return setDataProducts(data);
      });
    }
  }, [Products]);
  return (
    <div className={ctx("wapper")}>
      <HeaderComponent page={config.routes.Products} create={true} />
      <hr></hr>
      <List title={title}>
        {dataProducts?.reverse().map((data, index) => (
          <div
            key={index}
            className={ctx("dfcenter dfspween", "contentProducts")}
          >
            <div className={ctx("index", "dfcenter")}>
                {index}
              </div>
            <div className={ctx("dfcenter", "title")}>
              <div className={ctx("name__title", "dfcenter")}>
                <div className={ctx("img", "dfcenter")}>
                  <img width="100%" src={data?.product_img[0].url} alt="" />
                </div>
              </div>
              <div className={ctx("name__title", "dfcenter")}>
                <span>{data.product_name}</span>
              </div>
              <div className={ctx("name__title", "dfcenter")}>
                <span>{data.product_description}</span>
              </div>
              <div className={ctx("name__title", "dfcenter")}>
                <span>{data.product_monney} $</span>
              </div>
              <div className={ctx("name__title", "dfcenter")}>
                <span>{data.product_status}</span>
              </div>
              <div className={ctx("name__title", "dfcenter")}>
                <span>{data.product_percent} %</span>
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

export default products;
