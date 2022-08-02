import React, { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import { useHistory } from "react-router-dom";

const Dashboard = () => {
  const history = useHistory();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      const user = jwtDecode(token);

      if (!user) {
        setIsAuthenticated(true);
      } else {
        sessionStorage.removeItem("token");
        history.replace("/login");
      }
    }
  }, []);
  return isAuthenticated ? <h1>App</h1> : <h1>Please login first</h1>;
};

export default Dashboard;
