import className from "classnames/bind";
import HeaderComponent from "../../components/HeaderComponent";
import config from "../../config";
import style from "./Orders.module.scss";
const ctx = className.bind(style);
function Orders() {
  return (
    <div className={ctx("wapper")}>
      <HeaderComponent page={config.routes.Orders} />
      <hr></hr>
    </div>
  );
}

export default Orders;
