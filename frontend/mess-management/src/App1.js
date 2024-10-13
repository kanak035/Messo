// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Layout from "./components/shared/Layout";
// import Dashboard from "./components/Pages/Dashboard";
// import Menu from "./components/Pages/Menu";
// import Complaints from "./components/Pages/Complaints";
// // import Suggestions from "./components/Pages/Suggestions";
// import Announcement from "./components/Pages/Announcement";
// import LoginPage from "./components/Login/pages/Login";
// import SignupPage from "./components/Login/pages/Signup";
// import HRreview from "./components/Pages/HRreview";
// import AdminDashboard from "./components/Pages/AdminDashboard";
// import LandingPage from "./components/Pages/LandingPage";
// import ProtectedRoute from "./Auth/protectedRoute";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route
//           path="/Home"
//           element={<ProtectedRoute element={<LandingPage />} />}
//         />
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Dashboard />} />
//           <Route path="/menu" element={<Menu />} />
//           <Route path="/complaints" element={<Complaints />} />
//           {/* <Route path="/Suggestions" element={<Suggestions />} /> */}
//           <Route
//             path="/announcement"
//             element={<Announcement isAdmin={true} />}
//           />
//           <Route path="/Admin" element={<AdminDashboard />} />
//           <Route path="/hrReview" element={<HRreview />} />
//         </Route>
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/signup" element={<SignupPage />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
