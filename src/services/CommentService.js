import * as httpRequest from "../utils/httpRequest";

export const getComment = async (token) => {
  try {
    const res = await httpRequest.post(`/userAdmin/Comments`, {token});
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
