import React, { useEffect } from "react";
import "./styles/App.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { useToken } from "./hooks/useToken";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import { useAuthSelector, useAuthDispatch } from "./hooks/useAuth";
import { authenticate } from "./redux/slices/authSlice";
import NavBar from "./features/NavBar/NavBar";
import { isLoggedIn } from "./services/checkLogin/checkLogin";
import LandingPage from "./pages/LandingPage/LandingPage";

const App = () => {
  const isAuthenticated = useAuthSelector(
    (state) => state.authentication.value
  );
  const dispatch = useAuthDispatch();

  console.log("appauth", isAuthenticated);
  const { token, setToken } = useToken();
  useEffect(() => {
    token;
    isLoggedIn().then((status) => {
      status ? dispatch(authenticate()) : false;
    });
  }, []);
  return (
    <div className="wrapper">
      <NavBar isAuthenticated={isAuthenticated} />

      <BrowserRouter>
        <Route path="/" exact>
          {isAuthenticated ? <Redirect to="/dashboard" /> : <LandingPage />}
        </Route>
        <Route path="/dashboard" exact>
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        </Route>
        <Route path="/login" exact>
          {isAuthenticated ? (
            <Redirect to="/dashboard" />
          ) : (
            <Login setToken={setToken} />
          )}
        </Route>
        <Route path="/register" exact component={Register} />
      </BrowserRouter>
    </div>
  );
};

export default App;
