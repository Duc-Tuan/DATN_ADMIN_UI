import * as httpRequest from "../utils/httpRequest";

export const getCategories = async (token) => {
  try {
    const res = await httpRequest.post(`/userAdmin/Categories`, {token});
    return res.data;
  } catch (error) {
    console.log(error);
  }
};