import axios from "axios";

// axios Instance
export const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_URL}`,
});

// Adding a request interceptor
export const requestInterceptors = axiosInstance.interceptors.request.use(
  function (config) {
    console.log("sending request");
    return config;
  },
  function (error) {
    console.log("error ");
    return Promise.reject(error);
  }
);

// Adding a response interceptor
export const responseInterceptors = axiosInstance.interceptors.response.use(
  function (response) {
    console.log("got response");
    if (response.status === 401) {
      console.log("Error 401");
    }
    return response;
  },
  function (error) {
    console.log("got response error");
    return Promise.reject(error);
  }
);
