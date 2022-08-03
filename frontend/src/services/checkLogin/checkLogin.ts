import axios from "axios";
import { AxiosResponse } from "../../types/axiosResponse";
import { Login } from "../../types/loginInterface";
const isLoggedIn = async () => {
  try {
    const token = localStorage.getItem("token");

    if (token) {
      const parsedToken = JSON.parse(token);
      const { status, data }: AxiosResponse<Login> = await axios.post(
        "http://localhost:8080/api/login-check",
        parsedToken
      );
      if (status === 200 && data["loginStatus"] === "ok") {
        return true;
      }
    }

    return false;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { isLoggedIn };
