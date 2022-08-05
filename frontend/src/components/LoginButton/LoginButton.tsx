import React from "react";
const LoginButton = () => {
  const redirect = () => (window.location.href = "/login");
  return (
    <button className="button primary" onClick={() => redirect()}>
      Login
    </button>
  );
};

export default LoginButton;
