import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./authProvider"; // Update the path as necessary

const AdminProtectedRoute = () => {
  const { isAdmin, token } = useAuth();

  return isAdmin && token ? <Outlet /> : <Navigate to="/login" />;
};

export default AdminProtectedRoute;

//not used
