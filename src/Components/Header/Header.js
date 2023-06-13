import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import "../Common.css";

export default function Header() {
  return (
    <div>
      <div className="nav">
        <input type="checkbox" id="nav-check" />
        <div className="nav-header">
          <div className="nav-title">
            <img src="/whiteLogo.png" width="100px" alt="Logo" />
          </div>
        </div>
        <div className="nav-btn">
          <label htmlFor="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/nbee/login">Login</NavLink>
          <NavLink to="/registration/preresigter">Registration</NavLink>
          <NavLink to="/nbeecommon/support">Support</NavLink>
        </div>
      </div>
    </div>
  );
}
