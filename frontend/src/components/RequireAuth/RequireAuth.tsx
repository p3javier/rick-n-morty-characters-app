import React from "react";
import { useAuthSelector } from "../../hooks/useAuth";
import Login from "../../pages/Login/Login";
import { useLocation } from "react-router-dom";

const RequireAuth = ({
  children,
  setToken,
}: {
  children: JSX.Element;
  setToken: (userToken: { token: string }) => void;
}) => {
  const isAuthenticated = useAuthSelector(
    (state) => state.authentication.value
  );
  const location = useLocation();
  return isAuthenticated ? (
    children
  ) : (
    <>
      <h1>Please login to see this page</h1>
      <Login setToken={setToken} path={location.pathname} />
    </>
  );
};

export default RequireAuth;
