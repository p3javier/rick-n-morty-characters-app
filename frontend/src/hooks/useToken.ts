import { useState } from "react";
import { useAuthDispatch } from "./useAuth";
import { authenticate } from "../redux/slices/authSlice";
const useToken = () => {
  const dispatch = useAuthDispatch();
  const getToken: () => string = () => {
    const tokenString = sessionStorage.getItem("token");
    if (tokenString) {
      const userToken = JSON.parse(tokenString);
      dispatch(authenticate());
      return userToken?.token;
    }
    return "";
  };
  const [token, setToken] = useState(getToken());

  const saveToken = (userToken: { token: string }) => {
    sessionStorage.setItem("token", JSON.stringify(userToken));
    setToken(userToken.token);
    dispatch(authenticate());
  };

  return {
    setToken: saveToken,
    token,
  };
};

export { useToken };
