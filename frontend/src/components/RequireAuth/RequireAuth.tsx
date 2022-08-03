import React from "react";
import { useAuthSelector } from "../../hooks/useAuth";

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const isAuthenticated = useAuthSelector(
    (state) => state.authentication.value
  );
  console.log("requireauth", isAuthenticated);
  return isAuthenticated ? children : <h1>Please login to see this page</h1>;
};

export default RequireAuth;
