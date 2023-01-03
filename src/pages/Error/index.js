import className from "classnames/bind";
import style from "./Error.module.scss";
import Button from "../../components/Button";
import ImageError from "../../assets/Images/404 Error with a cute animal-pana.png";
import ImageErrorLight from "../../assets/Images/404 Error with a cute animal-pana light.png";

const ctx = className.bind(style);

function Error() {
  return (
    <div className={ctx("wapper", "dfcenter")}>
      <div className={"fileError"}>
        <div className={ctx("img", "dfcenter my-3")}>
          {JSON.parse(localStorage.getItem("dark")) ? (
            <img width="34%" src={ImageError} alt="" />
          ) : (
            <img width="34%" src={ImageErrorLight} alt="" />
          )}
        </div>

        <div className={ctx("dfcenter")}>
          <Button className={ctx("btn")} to={"/"}>
            Home
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Error;
