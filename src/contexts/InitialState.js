import { getAdmin } from "../services/LoginAdmin";
import { getUsers } from "../services/Users";
import { getBanners } from "../services/BannersService";
import { getCategories } from "../services/CategoriesService";
import { getComment } from "../services/CommentService";
import { getProducts } from "../services/ProductsService";
import { getPromotions } from "../services/PromotionsService";
const token = document.cookie !== "" && document.cookie.toString().slice(6);
let userAdmin, users, Comments, Products, Promotions, Categories, Banners;
if (token !== false) {
  userAdmin = getAdmin(token);
  users = getUsers(token);
  Comments = getComment(token);
  Products = getProducts(token);
  Promotions = getPromotions(token);
  Categories = getCategories(token);
  Banners = getBanners(token);
}

export const initialState = {
  userAdmin,
  users,
  Comments,
  Products,
  Promotions,
  Categories,
  Banners,
};
