import React from "react";
import "./styles/App.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";

const setToken = (userToken: object) => {
  sessionStorage.setItem("token", JSON.stringify(userToken));
};

const getToken = () => {
  const tokenString = sessionStorage.getItem("token");
  if (tokenString) {
    const userToken = JSON.parse(tokenString);
    return userToken?.token;
  }
};

const App = () => {
  const token = getToken();
  console.log("token", token);
  if (!token) {
    return <Login setToken={setToken} />;
  }
  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
