import * as httpRequest from "../utils/httpRequest";

export const getPromotions = async (token) => {
  try {
    const res = await httpRequest.post(`/userAdmin/Promotions`, { token });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
