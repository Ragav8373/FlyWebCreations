// ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem("adminToken");

  if (!token) {
    // Not logged in, redirect to admin login
    return <Navigate to="/admin-login" replace />;
  }

  // Logged in, render the child component
  return children;
}
