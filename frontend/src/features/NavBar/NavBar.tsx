import React from "react";
import LogoutButton from "../../components/LogoutButton/LogoutButton";
const NavBar = ({ isAuthenticated }: { isAuthenticated: boolean }) => {
  return (
    <nav>
      <h1>Rick And Morty Characters App</h1>
      {isAuthenticated ? <LogoutButton /> : <button>Login</button>}
    </nav>
  );
};

export default NavBar;
