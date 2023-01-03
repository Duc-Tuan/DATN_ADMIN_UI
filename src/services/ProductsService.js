import * as httpRequest from "../utils/httpRequest";

export const getProducts = async (token) => {
  try {
    const res = await httpRequest.post(`/userAdmin/Products`, {token});
    return res.data;
  } catch (error) {
    console.log(error);
  }
};