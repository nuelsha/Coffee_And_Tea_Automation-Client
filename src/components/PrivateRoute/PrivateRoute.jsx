import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

/**
 * PrivateRoute component to protect routes that require authentication
 * If user is not authenticated, redirects to login page
 */
const PrivateRoute = () => {
  const { isAuthenticated, loading } = useSelector((state) => state.auth);

  // If still loading, you might want to show a loading spinner
  if (loading) {
    return <div>Loading...</div>;
  }

  // If not authenticated, redirect to login page
  return isAuthenticated ? <Outlet /> : <Navigate to="/register" replace />;
};

export default PrivateRoute;