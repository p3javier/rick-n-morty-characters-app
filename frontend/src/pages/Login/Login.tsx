import React, { SyntheticEvent, useState } from "react";
import "./styles/Login.css";
import { loginUser } from "../../services/loginUser/loginUser";
import InputBase from "../../components/InputBase/InputBase";
import { Link } from "react-router-dom";
const Login = ({
  setToken,
  path,
}: {
  setToken: (userToken: { token: string }) => void;
  path?: string;
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    try {
      const { loginStatus, user } = await loginUser({
        email,
        password,
      });
      if (loginStatus === "ok" && setToken) {
        setToken({ token: user });
        window.location.href = path || "/dashboard";
      }
    } catch (error) {
      console.log(typeof setToken);
      console.log(error);
      setError(true);
    }
  };
  return (
    <div className="login-wrapper container">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <InputBase type="email" setValue={setEmail} />
        <InputBase type="password" setValue={setPassword} />
        <div>
          <button className="button" type="submit">
            Submit
          </button>
          <Link to="/register">Create account</Link>
          {error ? <p>Email or password is incorrect</p> : null}
        </div>
      </form>
    </div>
  );
};

export default Login;
