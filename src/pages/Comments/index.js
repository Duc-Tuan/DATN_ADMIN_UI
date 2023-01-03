import className from "classnames/bind";
import style from "./Comments.module.scss";
import { useStateValue } from "../../contexts/StateProvider";
import { useEffect, useState } from "react";
import List from "../../components/List";
import Button from "../../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faUser } from "@fortawesome/free-solid-svg-icons";
import HeaderComponent from "../../components/HeaderComponent";
import config from "../../config";
const ctx = className.bind(style);
const title = ["Image user", "User name", "Name product", "Content comment"];
function Comments() {
  const [{ Comments }, dispatch] = useStateValue();
  const [dataComments, setDataComments] = useState([]);
  useEffect(() => {
    if (Comments !== undefined && Comments !== null) {
      Comments.then((data) => {
        return setDataComments(data);
      });
    }
  }, [Comments]);
  console.log(dataComments);
  return (
    <div className={ctx("wapper")}>
      <HeaderComponent page={config.routes.Comments} />
      <hr></hr>
      <List title={title}>
        {dataComments.map((data) =>
          data.comment_content.map((comment, index) => {
            return (
              <div
                key={index}
                className={ctx("dfcenter dfspween", "contentProducts")}
              >
                <div className={ctx("index", "dfcenter")}>{index}</div>
                <div className={ctx("title", "dfcenter")}>
                  <div className={ctx("name__title", "dfcenter")}>
                    <div className={ctx("img", "dfcenter")}>
                      {comment.name_avatar ? (
                        <img width="100%" src={comment.name_avatar} alt="" />
                      ) : (
                        <FontAwesomeIcon icon={faUser} />
                      )}
                    </div>
                  </div>
                  <div className={ctx("name__title", "dfcenter")}>
                    <span>{comment.name_user}</span>
                  </div>
                  <div className={ctx("name__title", "dfcenter")}>
                    <span>{data.comment_ProductID.product_name}</span>
                  </div>
                  <div className={ctx("name__title", "dfcenter")}>
                    <span>{comment.content}</span>
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
          })
        )}
      </List>
    </div>
  );
}

export default Comments;
