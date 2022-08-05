import React, { useState } from "react";
import LogoutButton from "../../components/LogoutButton/LogoutButton";
import LoginButton from "../../components/LoginButton/LoginButton";
import { Link } from "react-router-dom";
import "./navBar.css";

const NavBar = ({ isAuthenticated }: { isAuthenticated: boolean }) => {
  const [activeTab, setActiveTab] = useState<"home" | "dashboard">();

  return (
    <nav className="nav">
      <h2 className="nav-left">Rick And Morty Characters App</h2>
      <div className="nav-center">
        <div className="tabs">
          <Link
            to="/"
            className={activeTab === "home" ? "active" : ""}
            onClick={() => setActiveTab("home")}
          >
            Home
          </Link>
          <Link
            to="/dashboard"
            className={activeTab === "dashboard" ? "active" : ""}
            onClick={() => setActiveTab("dashboard")}
          >
            Dashboard
          </Link>

          <a
            href="https://github.com/p3javier/rick-n-morty-characters-app"
            target="_blank"
            rel="noreferrer"
          >
            Project&apos;s Repository
          </a>
        </div>
      </div>
      <div className="nav-right">
        {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      </div>
    </nav>
  );
};

export default NavBar;
