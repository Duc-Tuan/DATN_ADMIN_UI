import classNames from "classnames/bind";
import style from "./List.module.scss";

const ctx = classNames.bind(style);

function List({ title, children }) {
  return (
    <div className={ctx("wapper")}>
      <div className={ctx("title", "dfcenter dfspween")}>
        <div className={ctx("index")}>
          <h6>Index</h6>
        </div>
        <div className={ctx("dfcenter dfspween", "sub")}>
          {title.map((data, index) => (
            <div key={index} className={ctx("name__title")}>
              <h6>{data}</h6>
            </div>
          ))}
        </div>
        <div className={ctx("job")}>
          <h6>Job</h6>
        </div>
      </div>
      <div className={ctx("content")}>{children}</div>
    </div>
  );
}

export default List;
