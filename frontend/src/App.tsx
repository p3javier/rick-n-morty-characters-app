import React, { useEffect } from "react";
import "./styles/App.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { useToken } from "./hooks/useToken";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import { useAuthSelector } from "./hooks/useAuth";

const App = () => {
  const isAuthenticated = useAuthSelector(
    (state) => state.authentication.value
  );
  const { token } = useToken();
  useEffect(() => {
    token;
  }, []);
  return (
    <div className="wrapper">
      <h1>Application</h1>
      <RequireAuth>
        <button>Logout</button>
      </RequireAuth>
      <BrowserRouter>
        <Route path="/" exact>
          {isAuthenticated ? (
            <Redirect to="/dashboard" />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        <Route path="/dashboard" exact>
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/register" exact component={Register} />
      </BrowserRouter>
    </div>
  );
};

export default App;
