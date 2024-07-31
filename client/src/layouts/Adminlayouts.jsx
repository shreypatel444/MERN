import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { AuthComsumer } from "../store/auth";
import { Navigate } from "react-router-dom";
import "../style/Adminlayout.css";

export default function Adminlayouts() {
  const { user, isLoading } = AuthComsumer();

  if (isLoading == "true") {
    return <h2>Loading...</h2>;
  }

  if (user.isAdmin == "false") {
    return (
      <>
        <Navigate to="/" />
        {/* {toast.error("You are not a Admin...")} */}
      </>
    );
  }
  return (
    <>
      <div className="nav-admin">
        <div className="navlinks-admin">
          <div className="admin-part">
            <NavLink to="/admin/user">
              <FaUser />
              users
            </NavLink>
          </div>
          <div className="admin-part">
            <NavLink to="/admin/contact">
              <IoMdContact />
              contacts
            </NavLink>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}
