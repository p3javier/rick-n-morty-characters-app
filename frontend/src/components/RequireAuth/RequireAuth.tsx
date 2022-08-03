import React from "react";
import { useAuthSelector } from "../../hooks/useAuth";
import Login from "../../pages/Login/Login";
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
  console.log("requireauth", isAuthenticated);
  return isAuthenticated ? (
    children
  ) : (
    <>
      <h1>Please login to see this page</h1>
      <Login setToken={setToken} path={window.location.pathname} />
    </>
  );
};

export default RequireAuth;
