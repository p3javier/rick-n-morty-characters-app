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
  const [success, setSuccess] = useState(false);
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
    setSuccess(true);
    if (password === repeatPassword) {
      const { registerStatus } = await registerUser({
        username,
        email,
        password,
      });
      if (registerStatus === "ok") {
        setSuccess(true);
      }
    } else {
      setError(true);
    }
  };
  return (
    <div className="login-wrapper container">
      {success ? (
        <h1 id="success-message">You have been registered successfully!</h1>
      ) : (
        <>
          <h1>Register</h1>
          <form id="cy-register-form" onSubmit={handleSubmit}>
            <InputBase id="cy-name" type="name" setValue={setUserName} />
            <InputBase id="cy-email" type="email" setValue={setEmail} />
            <InputBase
              id="cy-password"
              type="password"
              setValue={setPassword}
            />
            <InputBase
              id="cy-password-confirm"
              type="password"
              setValue={setRepeatPassword}
            />
            <div>
              <button id="cy-submit" className="button" type="submit">
                Submit
              </button>
              {error ? <PasswordMismatch /> : null}
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default Register;
