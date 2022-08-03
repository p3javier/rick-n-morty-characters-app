import React from "react";
import LogoutButton from "../../components/LogoutButton/LogoutButton";
import LoginButton from "../../components/LoginButton/LoginButton";
const NavBar = ({ isAuthenticated }: { isAuthenticated: boolean }) => {
  return (
    <nav>
      <h1>Rick And Morty Characters App</h1>
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
    </nav>
  );
};

export default NavBar;
