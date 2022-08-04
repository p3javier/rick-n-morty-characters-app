import { useState } from "react";
import { useAuthDispatch } from "./useAuth";
import { authenticate, deAuthenticate } from "../redux/slices/authSlice";
import { isLoggedIn } from "../services/checkLogin/checkLogin";
const useToken = () => {
  const dispatch = useAuthDispatch();
  const getToken: () => string = () => {
    const tokenString = localStorage.getItem("token");
    if (tokenString) {
      const userToken = JSON.parse(tokenString);
      isLoggedIn().then((status) =>
        status ? dispatch(authenticate()) : dispatch(deAuthenticate())
      );
      return userToken?.token;
    }
    return "";
  };
  const [token, setToken] = useState(getToken());

  const saveToken = (userToken: { token: string }) => {
    console.log("llega aqui");
    localStorage.setItem("token", JSON.stringify(userToken));
    setToken(userToken.token);
    dispatch(authenticate());
  };

  return {
    setToken: saveToken,
    token,
  };
};

export { useToken };
