import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { AuthComsumer } from "../store/auth";

export function Logout() {
  const { LogoutUser } = AuthComsumer();

  useEffect(() => {
    LogoutUser();
  }, [LogoutUser]);

  return <Navigate to='/' />
}
