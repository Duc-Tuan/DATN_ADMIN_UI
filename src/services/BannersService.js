import * as httpRequest from "../utils/httpRequest";

export const getBanners = async (token) => {
  try {
    const res = await httpRequest.post(`/userAdmin/Banners`, {token});
    return res.data;
  } catch (error) {
    console.log(error);
  }
};