import React, { useContext } from "react";
import logo from "../assets/logo.png";
import { NavigationContext } from "../context/NavigationContext";
import "./Navbar.css";

function Navbar() {
  const { navigate } = useContext(NavigationContext);

  return (
    <nav className="navbar">
      <ul>
        <li>
          <img src={logo} alt="logo" />
          <h1>SkinNet Analyzer</h1>
        </li>
        <li><button onClick={() => navigate("home")}>Home</button></li>
        <li><button onClick={() => navigate("about")}>About</button></li>
        <li><button onClick={() => navigate("upload")}>Upload</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;
