import React, { SyntheticEvent, useState } from "react";
import { registerUser } from "../../services/registerUser/registerUser";
import { loginUser } from "../../services/loginUser/loginUser";
import InputBase from "../../components/InputBase/InputBase";

const PasswordMismatch = () => <p>The passwords doesn&apos;t match</p>;

const Register = (props: any) => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState(false);
  const {
    setToken,
  }: {
    setToken: React.Dispatch<
      React.SetStateAction<{
        token: string;
      }>
    >;
  } = props;
  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    if (password === repeatPassword) {
      const { registerStatus } = await registerUser({
        username,
        email,
        password,
      });
      if (registerStatus === "ok") {
        const { loginStatus, user } = await loginUser({ email, password });
        if (loginStatus === "ok") {
          setToken({ token: user });
        }
      }
    } else {
      setError(true);
    }
  };
  return (
    <div className="login-wrapper container">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <InputBase type="name" setValue={setUserName} />
        <InputBase type="email" setValue={setEmail} />
        <InputBase type="password" setValue={setPassword} />
        <InputBase type="password" setValue={setRepeatPassword} />
        <div>
          <button className="button" type="submit">
            Submit
          </button>
          {error ? <PasswordMismatch /> : null}
        </div>
      </form>
    </div>
  );
};

export default Register;
