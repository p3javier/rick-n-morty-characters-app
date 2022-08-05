import React from "react";
import { logoutUser } from "../../services/logoutUser/logoutUser";
import Hide from "../Hide/Hide";
const LogoutButton = () => {
  return (
    <>
      <Hide smUp>
        <button className="button secondary" onClick={() => logoutUser()}>
          Logout
        </button>
      </Hide>
      <Hide lgUp>
        <button className="button secondary" onClick={() => logoutUser()}>
          Logout
        </button>
      </Hide>
      <Hide mdDown>
        <button
          className="button secondary"
          style={{ margin: "1rem" }}
          onClick={() => logoutUser()}
        >
          Logout
        </button>
      </Hide>
    </>
  );
};

export default LogoutButton;
