import React from "react";
import { Routes, Route } from "react-router-dom";
import { useAuth } from "./Auth/authProvider";
import ProtectedRoute from "./Auth/protectedRoute";
import Layout from "./components/shared/Layout";
import Dashboard from "./components/Pages/Dashboard";
import Menu from "./components/Pages/Menu";
import Complaints from "./components/Pages/Complaints";
import Announcement from "./components/Pages/Announcement";
import AdminDashboard from "./components/Pages/AdminDashboard";
import HRreview from "./components/Pages/HRreview";
import LandingPage from "./components/Pages/LandingPage";
import LoginPage from "./components/Login/pages/Login";
import SignupPage from "./components/Login/pages/Signup";
import NoAccess from "./components/Pages/NoAccess";
// import AdminProtectedRoute from "./Auth/adminProtect";
import UserProfilePage from "./components/Pages/YourProfile";

const RoutesConfig = () => {
  const { token } = useAuth();

  // // Define routes accessible only to authenticated users
  // const AuthenticatedRoutes = (
  //   <Route path="/" element={<ProtectedRoute />}>
  //     <Route path="/" element={<Layout />}>
  //       <Route index element={<Dashboard />} />
  //       <Route path="/menu" element={<Menu />} />
  //       <Route path="/complaints" element={<Complaints />} />
  //       <Route path="/announcement" element={<Announcement />} />

  //       <Route path="/admin" element={<AdminDashboard />} />
  //       {/* <Route path="/admin" element={<AdminProtectedRoute />}>
  //         <Route path="/admin" element={<AdminDashboard />} />
  //       </Route> */}
  //       {/* <Route path="/admin" element={<AdminProtectedRoute />}>
  //         <Route path="/admin" element={<AdminDashboard />} />
  //       </Route> */}

  //       <Route path="/hrReview" element={<HRreview />} />
  //     </Route>
  //   </Route>
  // );

  // // Define public routes accessible to all users
  // const PublicRoutes = (
  //   <>
  //     <Route path="/home" element={<LandingPage />} />
  //     <Route path="/login" element={<LoginPage />} />
  //     <Route path="/signup" element={<SignupPage />} />
  //     <Route path="/no-access" element={<NoAccess />} />
  //     <Route path="*" element={<NoAccess />} />
  //   </>
  // );

  const AuthenticatedRoutes = (
    <Route path="/app" element={<ProtectedRoute />}>
      <Route path="" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="menu" element={<Menu />} />
        <Route path="complaints" element={<Complaints />} />
        <Route path="announcement" element={<Announcement />} />
        <Route path="admin" element={<AdminDashboard />} />
        <Route path="hrReview" element={<HRreview />} />
        <Route path="profile" element={<UserProfilePage />} />
      </Route>
    </Route>
  );

  // Define public routes accessible to all users
  const PublicRoutes = (
    <>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/no-access" element={<NoAccess />} />
      <Route path="*" element={<NoAccess />} />
    </>
  );

  return <Routes>{token ? AuthenticatedRoutes : PublicRoutes}</Routes>;
};

export default RoutesConfig;
