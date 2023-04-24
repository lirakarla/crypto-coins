import axios from "axios";
import { toast } from "react-toastify";
export const api = axios.create({
  baseURL: "https://api.coingecko.com/api/v3",
});

// defining a custom error handler for all APIs
const errorHandler = (error: any) => {
  const statusCode = error.response?.status;

  if (error.code === "ERR_CANCELED") {
    toast.error("Please, try again", {
      position: "top-center",
    });
    return Promise.resolve();
  }
  if (
    error.code === "ERR_BAD_REQUEST" &&
    error.response &&
    error.response.data &&
    error.response.data["error"] === "coin not found"
  ) {
    toast.error("Coin not found, try again", {
      position: "top-center",
    });
    setTimeout(() => (window.location.href = "/"), 4000);
    return Promise.resolve();
  }
  // logging only errors that are not 401
  if (statusCode && statusCode !== 401) {
    console.error("Coin not found");
  }

  return Promise.reject(error);
};

// registering the custom error handler to the
// "api" axios instance
api.interceptors.response.use(undefined, (error) => {
  return errorHandler(error);
});
