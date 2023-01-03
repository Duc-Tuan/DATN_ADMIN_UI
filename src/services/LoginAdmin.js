import * as httpRequest from "../utils/httpRequest";

export const getAdmin = async (token) => {
  try {
    const res = await httpRequest.post(`/userAdmin/login/token`, {token});
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const postAdmin = async (data) => {
  try {
    const res = await httpRequest.post(`/userAdmin/login`, data);
    return res;
  } catch (error) {
    console.log(error);
  }
};
