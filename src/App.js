import { Routes, Route, useNavigate } from "react-router-dom";
import {
  publicRouters,
  privateRoutersAdmin,
  privateRoutersUser,
  privateRoutersProducts,
  privateRoutersComments,
  privateRoutersOrders,
} from "./routers";
import { DefaultLayout } from "./layouts";
import Login from "./pages/Login";
import { Fragment, useEffect, useState } from "react";
import { useStateValue } from "./contexts/StateProvider";

function App() {
  const [{ userAdmin }, dispatch] = useStateValue();
  const [dataAdmin, setDataAdmin] = useState(null);
  const [dataRouters, setDataRouters] = useState(publicRouters);

  const navigate = useNavigate();

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
    if (
      dataAdmin !== null &&
      dataAdmin !== undefined &&
      dataAdmin.role !== undefined
    ) {
      dataAdmin.role.map((dataRole) => {
        if (dataRole.role_name === "Supreme") {
          setDataRouters(publicRouters.concat(privateRoutersAdmin));
        } else if (dataRole.role_name === "Users") {
          setDataRouters(publicRouters.concat(privateRoutersUser));
          navigate("/Users");
        } else if (dataRole.role_name === "Comments") {
          setDataRouters(publicRouters.concat(privateRoutersComments));
          navigate("/Comments");
        } else if (dataRole.role_name === "Orders") {
          setDataRouters(publicRouters.concat(privateRoutersOrders));
          navigate("/Orders");
        } else if (dataRole.role_name === "Products") {
          setDataRouters(publicRouters.concat(privateRoutersProducts));
          navigate("/Products");
        }
        return 0;
      });
    }
  }, [dataAdmin]);

  return (
    <div className="App">
      {dataAdmin ? (
        <Routes>
          {dataRouters.map((router, index) => {
            const Page = router.component;

            let Layout = DefaultLayout;

            if (router.layout) {
              Layout = router.layout;
            } else if (router.layout === null) {
              Layout = Fragment;
            }
            return (
              <Route
                key={index}
                path={router.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
