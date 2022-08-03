import axios from "axios";
import { AxiosResponse } from "../../types/axiosResponse";
const isLoggedIn = async () => {
  try {
    const token = localStorage.getItem("token");
    if (token) {
      const { status, data }: AxiosResponse = await axios.post(
        "http://localhost:8080/api/login-check",
        token
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
