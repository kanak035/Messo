// import React from "react";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import { Outlet } from "react-router-dom";
// import { useLocation } from "react-router-dom";

// export default function Layout() {
//   const location = useLocation();

//   // Check if the current route is the dashboard
//   const isDashboard = location.pathname === "/";
//   const isContact = location.pathname === "/complaints";

//   return (
//     <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
//       <Sidebar />
//       <div className="flex flex-col flex-1 ">
//         <Header />
//         <div
//           className={` flex-1  ${
//             isDashboard || isContact ? "overflow-hidden" : "overflow-auto"
//           }`}
//         >
//           {<Outlet />}
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet, useLocation } from "react-router-dom";

export default function Layout() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Check if the current route is the dashboard
  const isDashboard = location.pathname === "/app";
  // const isContact = location.pathname === "/app/complaints";

  return (
    <div className="flex flex-col lg:flex-row bg-neutral-100 h-screen w-screen overflow-auto">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex flex-col flex-1">
        <Header toggleSidebar={toggleSidebar} />
        <div
          className={`flex-1 ${
            isDashboard ? "2xl:overflow-hidden" : "2xl:overflow-auto"
          }`}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
}
