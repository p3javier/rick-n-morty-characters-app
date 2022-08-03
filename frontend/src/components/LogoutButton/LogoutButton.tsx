import React from "react";
import { logoutUser } from "../../services/logoutUser/logoutUser";
const LogoutButton = () => {
  return <button onClick={() => logoutUser()}>Logout</button>;
};

export default LogoutButton;
