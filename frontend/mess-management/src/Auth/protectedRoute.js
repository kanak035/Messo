// ProtectedRoute.js
// import React from "react";
// import { Navigate, Outlet } from "react-router-dom";
// import { useAuth } from "../Auth/authProvider";

// const ProtectedRoute = () => {
//   const { token } = useAuth(); // Assuming useAuth provides token information

//   return token ? <Outlet /> : <Navigate to="/login" replace />;
// };

// export default ProtectedRoute;

// import React, { useEffect, useState } from "react";
// import { Navigate, Outlet, useLocation } from "react-router-dom";
// import { useAuth } from "../Auth/authProvider";

// const ProtectedRoute = () => {
//   const { token } = useAuth(); // Assuming useAuth provides token information
//   const [isAuthenticated, setIsAuthenticated] = useState(null);
//   const location = useLocation();

//   useEffect(() => {
//     // Check if the token is present
//     if (token) {
//       setIsAuthenticated(true);
//     } else {
//       setIsAuthenticated(false);
//     }
//   }, [token]); // Depend on token to re-run the effect when token changes

//   if (isAuthenticated === null) {
//     // While checking the token
//     return <div>Loading...</div>;
//   }

//   return isAuthenticated ? (
//     <Outlet />
//   ) : (
//     <Navigate to="/no-access" state={{ from: location }} replace />
//   );
// };

// export default ProtectedRoute;

import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../Auth/authProvider";

const ProtectedRoute = () => {
  const { token } = useAuth();
  const location = useLocation();

  const isAuthenticated = Boolean(token);

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/no-access" state={{ from: location }} replace />
  );
};

export default ProtectedRoute;
