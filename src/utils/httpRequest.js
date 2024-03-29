import axios from "axios";

const httpRequest = axios.create({
  baseURL: "http://localhost:3036/",
});

export const get = async (path, options = {}) => {
  const response = await httpRequest.get(path, options);
  return response.data;
};

export const post = async (path, options = {}) => {
  const response = await httpRequest.post(path, options);
  return response.data;
};

export const delet = async (path, options = {}) => {
  const response = await httpRequest.delete(path, options);
  return response.data;
};

export const patch = async (path, options = {}) => {
  const response = await httpRequest.patch(path, options);
  return response.data;
};

export default httpRequest;
