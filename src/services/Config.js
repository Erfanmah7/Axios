import axios from "axios";

const api = axios.create({ baseURL: "https://jsonplaceholder.typicode.com" });

api.interceptors.request.use(
  (request) => {
    request.headers.Authorization = "token";
    console.log(`${request.method} request sent to ${request.url}`);
    return request;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    console.log(response);
    return response.data;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

export default api;
