import React from "react";
import "../style/Navbar.css";
import { NavLink } from "react-router-dom";
import { AuthComsumer } from "../store/auth";

export default function Navbar() {
  const { isLogin } = AuthComsumer();
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <NavLink to="/" className="logo">
          Trading.com
        </NavLink>
      </div>
      <ul className="nav-links">
        <li>
          <NavLink to="/" className="link" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="link" exact>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/service" className="link" exact>
            Service
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="link" exact>
            Contact
          </NavLink>
        </li>

        {isLogin ? (
          <>
          <li>
            <NavLink to="/logout" className="link" exact>
              Logout
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin" className="link" exact>
              Admin
            </NavLink>
          </li>
          </>
        ) : (
          <>
            <li>
              <NavLink to="/login" className="link" exact>
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to="/signup" className="link" exact>
                SignUp
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
