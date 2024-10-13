// import { createContext, useContext, useEffect, useMemo, useState } from "react";

// const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//   const [token, setToken_] = useState(localStorage.getItem("token"));

//   const setToken = (newToken) => {
//     setToken_(newToken);
//   };

//   const logout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("isAdmin");
//     localStorage.removeItem("message");
//     setToken_(null);
//     window.location.href = "/home"; // Redirect using window.location.href
//   };

//   useEffect(() => {
//     if (token) {
//       localStorage.setItem("token", token);
//     } else {
//       localStorage.removeItem("token");
//     }
//   }, [token]);

//   const contextValue = useMemo(
//     () => ({
//       token,
//       setToken,
//       logout,
//     }),
//     [token]
//   );

//   return (
//     <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   return useContext(AuthContext);
// };

// export const fetchWithAuth = async (url, options = {}) => {
//   const token = localStorage.getItem("token");

//   const headers = {
//     ...options.headers,
//     Authorization: token ? `Bearer ${token}` : "",
//   };

//   const response = await fetch(url, { ...options, headers });
//   return response;
// };

// export default AuthProvider;

// import { createContext, useContext, useEffect, useMemo, useState } from "react";

// const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//   const [token, setToken_] = useState(localStorage.getItem("token"));
//   const [isAdmin, setIsAdmin] = useState(
//     localStorage.getItem("isAdmin") === "true"
//   );

//   const setToken = (newToken, adminStatus) => {
//     setToken_(newToken);
//     setIsAdmin(adminStatus);
//     localStorage.setItem("isAdmin", adminStatus);
//   };

//   const logout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("isAdmin");
//     setToken_(null);
//     setIsAdmin(false);
//     window.location.href = "/login";
//   };

//   useEffect(() => {
//     if (token) {
//       localStorage.setItem("token", token);
//     } else {
//       localStorage.removeItem("token");
//     }
//   }, [token]);

//   const contextValue = useMemo(
//     () => ({
//       token,
//       isAdmin,
//       setToken,
//       logout,
//     }),
//     [token, isAdmin]
//   );

//   return (
//     <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   return useContext(AuthContext);
// };

// export const fetchWithAuth = async (url, options = {}) => {
//   const token = localStorage.getItem("token");

//   const headers = {
//     ...options.headers,
//     Authorization: token ? `Bearer ${token}` : "",
//   };

//   const response = await fetch(url, { ...options, headers });
//   return response;
// };

// export default AuthProvider;

// import { createContext, useContext, useEffect, useMemo, useState } from "react";

// const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//   const [token, setToken_] = useState(localStorage.getItem("token"));
//   const [isAdmin, setIsAdmin] = useState(
//     localStorage.getItem("isAdmin") === "true"
//   );

//   const setToken = (newToken, adminStatus) => {
//     setToken_(newToken);
//     setIsAdmin(adminStatus);
//     localStorage.setItem("token", newToken);
//     localStorage.setItem("isAdmin", adminStatus);
//   };

//   const logout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("isAdmin");
//     localStorage.removeItem("message");
//     setToken_(null);
//     setIsAdmin(false);
//     window.location.href = "/home";
//   };

//   useEffect(() => {
//     if (!token) {
//       localStorage.removeItem("token");
//       localStorage.removeItem("isAdmin");
//       setIsAdmin(false); // Ensure isAdmin is false when no token is present
//     }
//   }, [token]);

//   const contextValue = useMemo(
//     () => ({
//       token,
//       isAdmin,
//       setToken,
//       logout,
//     }),
//     [token, isAdmin]
//   );

//   return (
//     <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
//   );
// };

// // export const useAuth = () => useContext(AuthContext);
// export const useAuth = () => {
//   const context = useContext(AuthContext);

//   if (context === undefined) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }

//   return context;
// };

// export const fetchWithAuth = async (url, options = {}) => {
//   const token = localStorage.getItem("token");

//   const headers = {
//     ...options.headers,
//     Authorization: token ? `Bearer ${token}` : "",
//   };

//   const response = await fetch(url, { ...options, headers });
//   return response;
// };

// export default AuthProvider;

// import { createContext, useContext, useEffect, useMemo, useState } from "react";
// import { jwtDecode } from "jwt-decode"; // Correct import statement

// const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//   const [token, setToken_] = useState(
//     () => localStorage.getItem("token") || null
//   );
//   const [isAdmin, setIsAdmin] = useState(false);
//   const [isSuperAdmin, setIsSuperAdmin] = useState(false);
//   const [userDetails, setUserDetails] = useState({});

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       const decoded = jwtDecode(token);
//       setIsAdmin(decoded.isAdmin || false);
//       setIsSuperAdmin(decoded.isSuperAdmin || false);
//       setUserDetails({
//         email: decoded.email,
//         ObjectID: decoded.ObjectID,
//         name: decoded.name,
//         hostelname: decoded.hostelname,
//       });
//       // console.log(userDetails.ObjectID);
//     }
//   }, [token]);

//   const setToken = (newToken) => {
//     localStorage.setItem("token", newToken);
//     setToken_(newToken);
//     const decoded = jwtDecode(newToken);
//     setIsAdmin(decoded.isAdmin || false);
//     setIsSuperAdmin(decoded.isSuperAdmin || false);
//     setUserDetails({
//       email: decoded.email,
//       ObjectID: decoded.ObjectID,
//       name: decoded.name,
//       hostelname: decoded.hostelname,
//     });
//   };

//   const logout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("name");
//     setToken_(null);
//     setIsAdmin(false);
//     setIsSuperAdmin(false);
//     setUserDetails({});
//     window.location.href = "/";
//   };

//   const contextValue = useMemo(
//     () => ({
//       token,
//       isAdmin,
//       isSuperAdmin,
//       userDetails,
//       setToken,
//       logout,
//     }),
//     [token, isAdmin, isSuperAdmin, userDetails]
//   );

//   return (
//     <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (context === undefined) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// };

// export default AuthProvider;

// import { createContext, useContext, useEffect, useMemo, useState } from "react";
// import { jwtDecode } from "jwt-decode"; // Correct import statement

// const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//   const [token, setToken_] = useState(
//     () => localStorage.getItem("token") || null
//   );
//   const [isAdmin, setIsAdmin] = useState(false);
//   const [isSuperAdmin, setIsSuperAdmin] = useState(false);
//   const [userDetails, setUserDetails] = useState({});

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       const decoded = jwtDecode(token);
//       setIsAdmin(decoded.isAdmin || false);
//       setIsSuperAdmin(decoded.isSuperAdmin || false);
//       setUserDetails({
//         email: decoded.email,
//         ObjectID: decoded.ObjectID,
//         name: decoded.name,
//         hostelname: decoded.hostelname,
//       });

//       // Calculate the remaining time until token expiration
//       const currentTime = Date.now() / 1000; // Convert to seconds
//       const remainingTime = decoded.exp - currentTime;

//       if (remainingTime > 0) {
//         // Set a timeout to log out the user when the token expires
//         const timer = setTimeout(() => {
//           logout();
//         }, remainingTime * 1000); // Convert seconds to milliseconds

//         return () => clearTimeout(timer); // Clear timeout if token changes
//       } else {
//         // Token has already expired, log out immediately
//         logout();
//       }
//     }
//   }, [token]);

//   const setToken = (newToken) => {
//     localStorage.setItem("token", newToken);
//     setToken_(newToken);
//     const decoded = jwtDecode(newToken);
//     setIsAdmin(decoded.isAdmin || false);
//     setIsSuperAdmin(decoded.isSuperAdmin || false);
//     setUserDetails({
//       email: decoded.email,
//       ObjectID: decoded.ObjectID,
//       name: decoded.name,
//       hostelname: decoded.hostelname,
//     });
//   };

//   const logout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("name");
//     setToken_(null);
//     setIsAdmin(false);
//     setIsSuperAdmin(false);
//     setUserDetails({});
//     window.location.href = "/"; // Redirect to homepage or login
//   };

//   const contextValue = useMemo(
//     () => ({
//       token,
//       isAdmin,
//       isSuperAdmin,
//       userDetails,
//       setToken,
//       logout,
//     }),
//     [token, isAdmin, isSuperAdmin, userDetails]
//   );

//   return (
//     <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (context === undefined) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// };

// export default AuthProvider;
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken_] = useState(
    () => sessionStorage.getItem("token") || null
  );
  const [isAdmin, setIsAdmin] = useState(false);
  const [isSuperAdmin, setIsSuperAdmin] = useState(false);
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      const decoded = jwtDecode(token);
      setIsAdmin(decoded.isAdmin || false);
      setIsSuperAdmin(decoded.isSuperAdmin || false);
      setUserDetails({
        email: decoded.email,
        ObjectID: decoded.ObjectID,
        name: decoded.name,
        hostelname: decoded.hostelname,
      });

      const currentTime = Date.now() / 1000;
      const remainingTime = decoded.exp - currentTime;

      if (remainingTime > 0) {
        const timer = setTimeout(() => {
          logout();
        }, remainingTime * 1000);

        return () => clearTimeout(timer);
      } else {
        logout();
      }
    }
  }, [token]);

  const setToken = (newToken) => {
    sessionStorage.setItem("token", newToken);
    setToken_(newToken);
    const decoded = jwtDecode(newToken);
    setIsAdmin(decoded.isAdmin || false);
    setIsSuperAdmin(decoded.isSuperAdmin || false);
    setUserDetails({
      email: decoded.email,
      ObjectID: decoded.ObjectID,
      name: decoded.name,
      hostelname: decoded.hostelname,
    });
  };

  const logout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("name");
    setToken_(null);
    setIsAdmin(false);
    setIsSuperAdmin(false);
    setUserDetails({});
    window.location.href = "/"; // Redirect to homepage or login
  };

  const contextValue = useMemo(
    () => ({
      token,
      isAdmin,
      isSuperAdmin,
      userDetails,
      setToken,
      logout,
    }),
    [token, isAdmin, isSuperAdmin, userDetails]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default AuthProvider;
