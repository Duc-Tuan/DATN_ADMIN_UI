import * as httpRequest from "../utils/httpRequest";

export const getUsers = async (token) => {
  try {
    const res = await httpRequest.post(`/users`, { token });
    return res.users;
  } catch (error) {
    console.log(error);
  }
};
