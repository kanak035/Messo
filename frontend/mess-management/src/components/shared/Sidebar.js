// import React from "react";
// import classNames from "classnames";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import {
//   DASHBOARD_SIDEBAR_LINKS,
//   DASHBOARD_SIDEBAR_BOTTOM_LINKS,
// } from "../lib/consts/navigation";
// import { MdFoodBank } from "react-icons/md";
// import { HiOutlineLogout } from "react-icons/hi";

// const linkClasses =
//   "flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base";

// function Sidebar() {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("status"); // Clear the login status from local storage
//     navigate("/login"); // Redirect to the login page
//   };

//   return (
//     <div className="bg-neutral-900 w-60 p-3 flex flex-col text-white">
//       <div className="flex items-center gap-2x px-1 py-3 border-b border-neutral-700">
//         <MdFoodBank fontSize={44} color="teal" />
//         <span className="text-neutral-100 text-lg pt-3 size-10">Messo</span>
//       </div>
//       <div className="flex-1">
//         {DASHBOARD_SIDEBAR_LINKS.map((item) => {
//           return <SidebarLink key={item.key} item={item} />;
//         })}
//       </div>
//       <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
//         {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => {
//           return <SidebarLink key={item.key} item={item} />;
//         })}
//         <div
//           className={classNames("text-red-500 cursor-pointer", linkClasses)}
//           onClick={handleLogout}
//         >
//           <span className="text-xl">
//             <HiOutlineLogout />
//           </span>
//           Logout
//         </div>
//       </div>
//     </div>
//   );
// }

// function SidebarLink({ item }) {
//   const { pathname } = useLocation();
//   return (
//     <Link
//       className={classNames(
//         pathname === item.path
//           ? "text-white bg-neutral-700 "
//           : "text-neutral-400 ",
//         linkClasses
//       )}
//       to={item.path}
//     >
//       <span className="text-xl">{item.icon}</span>
//       {item.label}
//     </Link>
//   );
// }

// export default Sidebar;

// import React from "react";
// import classNames from "classnames";
// import { Link, useLocation } from "react-router-dom";
// import { useAuth } from "../../Auth/authProvider"; // Import the useAuth hook
// import {
//   DASHBOARD_SIDEBAR_LINKS,
//   DASHBOARD_SIDEBAR_BOTTOM_LINKS,
// } from "../lib/consts/navigation";
// import { MdFoodBank } from "react-icons/md";
// import { HiOutlineLogout } from "react-icons/hi";

// const linkClasses =
//   "flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base";

// function Sidebar() {
//   const { logout } = useAuth(); // Get the logout function from the context

//   return (
//     <div className="bg-neutral-900 w-60 p-3 flex flex-col text-white">
//       <div className="flex items-center gap-2x px-1 py-3 border-b border-neutral-700">
//         <MdFoodBank fontSize={44} color="teal" />
//         <span className="text-neutral-100 text-lg pt-3 size-10">Messo</span>
//       </div>
//       <div className="flex-1">
//         {DASHBOARD_SIDEBAR_LINKS.map((item) => {
//           return <SidebarLink key={item.key} item={item} />;
//         })}
//       </div>
//       <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
//         {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => {
//           return <SidebarLink key={item.key} item={item} />;
//         })}
//         <div
//           className={classNames("text-red-500 cursor-pointer", linkClasses)}
//           onClick={logout} // Call the logout function
//         >
//           <span className="text-xl">
//             <HiOutlineLogout />
//           </span>
//           Logout
//         </div>
//       </div>
//     </div>
//   );
// }

// function SidebarLink({ item }) {
//   const { pathname } = useLocation();
//   return (
//     <Link
//       className={classNames(
//         pathname === item.path
//           ? "text-white bg-neutral-700 "
//           : "text-neutral-400 ",
//         linkClasses
//       )}
//       to={item.path}
//     >
//       <span className="text-xl">{item.icon}</span>
//       {item.label}
//     </Link>
//   );
// }

// export default Sidebar;

// import React, { useEffect } from "react";
// import classNames from "classnames";
// import { Link, useLocation } from "react-router-dom";
// import { useAuth } from "../../Auth/authProvider"; // Import the useAuth hook
// import {
//   DASHBOARD_SIDEBAR_LINKS,
//   DASHBOARD_SIDEBAR_BOTTOM_LINKS,
// } from "../lib/consts/navigation";
// import { MdFoodBank } from "react-icons/md";
// import { HiOutlineLogout } from "react-icons/hi";

// const linkClasses =
//   "flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base";

// function Sidebar() {
//   const { logout, isAdmin } = useAuth(); // Get the logout function and isAdmin from the context

//   // Use useEffect to log when isAdmin changes

//   // useEffect(() => {
//   //   // Optional: Reload the page when isAdmin status changes
//   //   if (isAdmin) {
//   //     window.location.reload();
//   //   }
//   // }, [isAdmin]);
//   return (
//     <div className="bg-neutral-900 w-60 p-3 flex flex-col text-white">
//       <div className="flex items-center gap-2x px-1 py-3 border-b border-neutral-700">
//         <MdFoodBank fontSize={44} color="teal" />
//         <span className="text-neutral-100 text-lg pt-3 size-10">Messo</span>
//       </div>
//       <div className="flex-1">
//         {DASHBOARD_SIDEBAR_LINKS.map((item) => {
//           // Conditionally render admin dashboard link
//           if (item.key === "admindashboard" && !isAdmin) return null;
//           return <SidebarLink key={item.key} item={item} />;
//         })}
//       </div>
//       <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
//         {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => {
//           return <SidebarLink key={item.key} item={item} />;
//         })}
//         <div
//           className={classNames("text-red-500 cursor-pointer", linkClasses)}
//           onClick={logout} // Call the logout function
//         >
//           <span className="text-xl">
//             <HiOutlineLogout />
//           </span>
//           Logout
//         </div>
//       </div>
//     </div>
//   );
// }

// function SidebarLink({ item }) {
//   const { pathname } = useLocation();
//   return (
//     <Link
//       className={classNames(
//         pathname === item.path
//           ? "text-white bg-neutral-700 "
//           : "text-neutral-400 ",
//         linkClasses
//       )}
//       to={item.path}
//     >
//       <span className="text-xl">{item.icon}</span>
//       {item.label}
//     </Link>
//   );
// }

// export default Sidebar;

// import React, { useEffect } from "react";
// import classNames from "classnames";
// import { Link, useLocation } from "react-router-dom";
// import { useAuth } from "../../Auth/authProvider"; // Import the useAuth hook
// import {
//   DASHBOARD_SIDEBAR_LINKS,
//   DASHBOARD_SIDEBAR_BOTTOM_LINKS,
// } from "../lib/consts/navigation";
// import { MdFoodBank } from "react-icons/md";
// import { HiOutlineLogout } from "react-icons/hi";

// const linkClasses =
//   "flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base";

// function Sidebar() {
//   const { pathname } = useLocation();
//   const { logout } = useAuth(); // Get logout function from useAuth

//   // Fetch isAdmin status from local storage
//   const isAdmin = localStorage.getItem("isAdmin") === "true";

//   useEffect(() => {
//     // Optional: Reload the page when isAdmin status changes
//     // if (isAdmin) {
//     //   window.location.reload();
//     // }
//   }, [isAdmin]);

//   return (
//     <div className="bg-neutral-900 w-60 p-3 flex flex-col text-white">
//       <div className="flex items-center gap-2x px-1 py-3 border-b border-neutral-700">
//         <MdFoodBank fontSize={44} color="teal" />
//         <span className="text-neutral-100 text-lg pt-3 size-10">Messo</span>
//       </div>
//       <div className="flex-1">
//         {DASHBOARD_SIDEBAR_LINKS.map((item) => {
//           // Conditionally render admin dashboard link
//           if (item.key === "admindashboard" && !isAdmin) return null;
//           return <SidebarLink key={item.key} item={item} />;
//         })}
//       </div>
//       <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
//         {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
//           <SidebarLink key={item.key} item={item} />
//         ))}
//         <div
//           className={classNames("text-red-500 cursor-pointer", linkClasses)}
//           onClick={logout} // Call the logout function from useAuth
//         >
//           <span className="text-xl">
//             <HiOutlineLogout />
//           </span>
//           Logout
//         </div>
//       </div>
//     </div>
//   );
// }

// function SidebarLink({ item }) {
//   const { pathname } = useLocation();
//   return (
//     <Link
//       className={classNames(
//         pathname === item.path
//           ? "text-white bg-neutral-700 "
//           : "text-neutral-400 ",
//         linkClasses
//       )}
//       to={item.path}
//     >
//       <span className="text-xl">{item.icon}</span>
//       {item.label}
//     </Link>
//   );
// }

// export default Sidebar;
//
//
//
// import React from "react";
// import classNames from "classnames";
// import { Link, useLocation } from "react-router-dom";
// import { useAuth } from "../../Auth/authProvider"; // Ensure correct path
// import {
//   DASHBOARD_SIDEBAR_LINKS,
//   DASHBOARD_SIDEBAR_BOTTOM_LINKS,
// } from "../lib/consts/navigation";
// import { MdFoodBank } from "react-icons/md";
// import { HiOutlineLogout } from "react-icons/hi";

// const linkClasses =
//   "flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base";

// function Sidebar() {
//   // const { pathname } = useLocation();
//   const { logout, isAdmin } = useAuth(); // Destructure isAdmin from useAuth

//   return (
//     <div className="bg-neutral-900 w-60 p-3 flex flex-col text-white">
//       <div className="flex items-center gap-2 px-1 py-3 border-b border-neutral-700">
//         <MdFoodBank fontSize={44} color="teal" />
//         <span className="text-neutral-100 text-lg pt-3 size-10">Messo</span>
//       </div>
//       <div className="flex-1">
//         {DASHBOARD_SIDEBAR_LINKS.map((item) => {
//           // Only render admin dashboard link if the user is an admin
//           if (item.key === "admindashboard" && !isAdmin) return null;
//           return <SidebarLink key={item.key} item={item} />;
//         })}
//       </div>
//       <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
//         {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
//           <SidebarLink key={item.key} item={item} />
//         ))}
//         <div
//           className={classNames("text-red-500 cursor-pointer", linkClasses)}
//           onClick={logout} // Use logout function from context
//         >
//           <span className="text-xl">
//             <HiOutlineLogout />
//           </span>
//           Logout
//         </div>
//       </div>
//     </div>
//   );
// }

// function SidebarLink({ item }) {
//   const { pathname } = useLocation();
//   return (
//     <Link
//       className={classNames(
//         pathname === item.path
//           ? "text-white bg-neutral-700"
//           : "text-neutral-400",
//         linkClasses
//       )}
//       to={item.path}
//     >
//       <span className="text-xl">{item.icon}</span>
//       {item.label}
//     </Link>
//   );
// }

// export default Sidebar;
import React from "react";
import classNames from "classnames";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../Auth/authProvider";
import {
  DASHBOARD_SIDEBAR_LINKS,
  DASHBOARD_SIDEBAR_BOTTOM_LINKS,
} from "../lib/consts/navigation";
import { MdFoodBank } from "react-icons/md";
import { HiOutlineLogout } from "react-icons/hi";

const linkClasses =
  "flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base";

function Sidebar({ isOpen, toggleSidebar }) {
  const { logout, isAdmin } = useAuth();

  return (
    <div>
      <div
        className={classNames(
          "bg-neutral-900 w-60 p-3 flex flex-col text-white fixed z-50 h-full lg:static lg:transform-none transition-transform transform",
          {
            "-translate-x-full": !isOpen,
            "translate-x-0": isOpen,
          }
        )}
      >
        <div className="flex items-center gap-2 px-1 py-3 border-b border-neutral-700">
          <MdFoodBank fontSize={44} color="teal" />
          <span className="text-neutral-100 text-lg pt-3 size-10">Messo</span>
          <button onClick={toggleSidebar} className="ml-auto text-xl lg:hidden">
            &#x2715;
          </button>
        </div>
        <div className="flex-1">
          {DASHBOARD_SIDEBAR_LINKS.map((item) => {
            // Only render admin dashboard link if the user is an admin
            if (item.key === "admindashboard" && !isAdmin) return null;
            return <SidebarLink key={item.key} item={item} />;
          })}
        </div>
        <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
          {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
            <SidebarLink key={item.key} item={item} />
          ))}
          <div
            className={classNames("text-red-500 cursor-pointer", linkClasses)}
            onClick={logout}
          >
            <span className="text-xl">
              <HiOutlineLogout />
            </span>
            Logout
          </div>
        </div>
      </div>
    </div>
  );
}

function SidebarLink({ item }) {
  const { pathname } = useLocation();
  return (
    <Link
      className={classNames(
        pathname === item.path
          ? "text-white bg-neutral-700"
          : "text-neutral-400",
        linkClasses
      )}
      to={item.path}
    >
      <span className="text-xl">{item.icon}</span>
      {item.label}
    </Link>
  );
}

export default Sidebar;
