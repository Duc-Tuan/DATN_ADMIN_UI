import * as UsersService from "../services/Users";
import * as CommentsService from "../services/CommentService";
import * as ProductsSrvice from "../services/ProductsService";
import * as BannersService from "../services/BannersService";
import * as CategoriesService from "../services/CategoriesService";
import * as PromotionsService from "../services/PromotionsService";

const SET_USER = "SET_USER";
const SET_SEARCH = "SET_SEARCH";
const SET_BTN = "SET_BTN";

export const setUser = (data, token) => {
  return {
    type: SET_USER,
    data,
    token,
  };
};

export const setSearchProd = (data) => {
  return {
    type: SET_SEARCH,
    data,
  };
};

export const setBtn = (data) => {
  return {
    type: SET_BTN,
    data,
  };
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_BTN:
      return {
        ...state,
        btn: action.data,
      };
    case SET_SEARCH:
      return {
        ...state,
        dataS: action.data,
      };
    case SET_USER:
      const fetchUser = async () => {
        return UsersService.getUsers(action.token);
      };
      const fetchComments = async () => {
        return CommentsService.getComment(action.token);
      };
      const fetchProducts = async () => {
        return ProductsSrvice.getProducts(action.token);
      };
      const fetchBanners = async () => {
        return BannersService.getBanners(action.token);
      };
      const fetchCategories = async () => {
        return CategoriesService.getCategories(action.token);
      };
      const fetchPromotions = async () => {
        return PromotionsService.getPromotions(action.token);
      };
      return {
        ...state,
        userAdmin: action.data,
        users: fetchUser(),
        Comments: fetchComments(),
        Products: fetchProducts(),
        Promotions: fetchPromotions(),
        Categories: fetchCategories(),
        Banners: fetchBanners(),
        // Orders: fetchOrders(),
      };
    default:
      throw new Error(`Invalid action type ${action.type}`);
  }
};

export default reducer;
