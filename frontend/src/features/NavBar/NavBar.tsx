import React from "react";

const NavBar = ({ isAuthenticated }: { isAuthenticated: boolean }) => {
  return (
    <nav>
      <h1>Rick And Morty Characters App</h1>
      {isAuthenticated ? <button>Logout</button> : <button>Login</button>}
    </nav>
  );
};

export default NavBar;
