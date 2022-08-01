import React, { SyntheticEvent, useState } from "react";
import "./styles/Login.css";
import { loginUser } from "../../services/loginUser/loginUser";

const Login = ({
  setToken,
}: {
  setToken: React.Dispatch<React.SetStateAction<object>>;
}) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    setToken(token);
  };
  return (
    <div className="login-wrapper container">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input
            type="text"
            className="bottom-margin"
            onChange={(event) => setUserName(event.target.value)}
          />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <div>
          <button className="button" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
