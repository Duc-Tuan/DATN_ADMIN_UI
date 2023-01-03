import * as httpRequest from "../utils/httpRequest";

export const getOrder = async (token) => {
  try {
    const res = await httpRequest.post(`/userAdmin/login/token`, {token});
    return res;
  } catch (error) {
    console.log(error);
  }
};
