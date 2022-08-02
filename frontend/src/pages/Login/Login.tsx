import React, { SyntheticEvent, useState } from "react";
import "./styles/Login.css";
import { loginUser } from "../../services/loginUser/loginUser";
import InputBase from "../../components/InputBase/InputBase";

const Login = (props: any) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const {
    setToken,
  }: {
    setToken: React.Dispatch<React.SetStateAction<string>>;
  } = props;
  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    try {
      const { loginStatus, user } = await loginUser({
        username,
        password,
      });
      if (loginStatus === "ok") {
        setToken(user);
        window.location.href = "/dashboard";
      }
    } catch (error) {
      setError(true);
    }
  };
  return (
    <div className="login-wrapper container">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <InputBase type="name" setValue={setUserName} />
        <InputBase type="password" setValue={setPassword} />
        <div>
          <button className="button" type="submit">
            Submit
          </button>
          {error ? <p>Email or password is incorrect</p> : null}
        </div>
      </form>
    </div>
  );
};

export default Login;
