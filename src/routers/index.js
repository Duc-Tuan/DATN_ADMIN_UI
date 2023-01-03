import config from "../config";

import Users from "../pages/Users";
import Banners from "../pages/Banners";
import Categories from "../pages/Categories";
import ChangePassAdmin from "../pages/ChangePassAdmin";
import Comments from "../pages/Comments";
import LoginAdmin from "../pages/LoginAdmin";
import Orders from "../pages/Orders";
import Products from "../pages/Products";
import Promotions from "../pages/Promotions";
import RegisterAdmin from "../pages/RegisterAdmin";
import UserAdmin from "../pages/UserAdmin";
import Error from "../pages/Error";

const publicRouters = [{ path: config.routes.error, component: Error }];

const privateRoutersAdmin = [
  { path: config.routes.Home, component: Users },
  { path: config.routes.Users, component: Users },
  { path: config.routes.Banners, component: Banners },
  { path: config.routes.Categories, component: Categories },
  { path: config.routes.ChangePassAdmin, component: ChangePassAdmin },
  { path: config.routes.Comments, component: Comments },
  { path: config.routes.LoginAdmin, component: LoginAdmin },
  { path: config.routes.Orders, component: Orders },
  { path: config.routes.Products, component: Products },
  { path: config.routes.Promotions, component: Promotions },
  { path: config.routes.RegisterAdmin, component: RegisterAdmin },
  { path: config.routes.UserAdmin, component: UserAdmin },
];
const privateRoutersUser = [
  { path: config.routes.Users, component: Users },
  { path: config.routes.Home, component: Users },
];
const privateRoutersProducts = [
  { path: config.routes.Products, component: Products },
  { path: config.routes.Home, component: Users },
];
const privateRoutersComments = [
  { path: config.routes.Home, component: Users },
  { path: config.routes.Comments, component: Comments },
];
const privateRoutersOrders = [
  { path: config.routes.Home, component: Users },
  { path: config.routes.Orders, component: Orders },
];

export {
  publicRouters,
  privateRoutersAdmin,
  privateRoutersUser,
  privateRoutersProducts,
  privateRoutersComments,
  privateRoutersOrders,
};
