// import React, { Fragment } from "react";
// import {
//   HiOutlineBell,
//   HiOutlineChatAlt,
//   HiOutlineSearch,
// } from "react-icons/hi";
// import { useNavigate } from "react-router-dom";
// import {
//   MenuItems,
//   MenuItem,
//   MenuButton,
//   Menu,
//   Popover,
//   PopoverButton,
//   Transition,
//   PopoverPanel,
// } from "@headlessui/react";
// import classNames from "classnames";
// export default function Header() {
//   const navigate = useNavigate();
//   return (
//     <div className="bg-white h-16 px-4 flex justify-between items-center border-b border-gray-200">
//       <div className="relative">
//         <HiOutlineSearch
//           fontSize={20}
//           className="text-gray-400 absolute top-1/2 -translate-y-1/2 left-3"
//         />
//         <input
//           type="text"
//           placeholder="Search..."
//           className="text-sm focus:outline-none active:outline-none h-10 w-[24rem] border border-gray-300 rounded-sm pl-11 pr-4"
//         />
//       </div>
//       <div>
//         <div className="flex items-center gap-2 mr-2">
//           <Popover className="relative">
//             {({ open }) => (
//               <>
//                 <PopoverButton
//                   className={classNames(
//                     open && "bg-gray-100",
//                     "group inline-flex items-center rounded-sm p-1.5 text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100"
//                   )}
//                 >
//                   <HiOutlineChatAlt fontSize={24} />
//                 </PopoverButton>
//                 <Transition
//                   as={Fragment}
//                   enter="transition ease-out duration-200"
//                   enterFrom="opacity-0 translate-y-1"
//                   enterTo="opacity-100 translate-y-0"
//                   leave="transition ease-in duration-150"
//                   leaveFrom="opacity-100 translate-y-0"
//                   leaveTo="opacity-0 translate-y-1"
//                 >
//                   <PopoverPanel className="absolute right-0 z-10 mt-2.5 transform w-80">
//                     <div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
//                       <strong className="text-gray-700 font-medium">
//                         Messages
//                       </strong>
//                       <div className="mt-2 py-1 text-sm">
//                         This is messages panel.
//                       </div>
//                     </div>
//                   </PopoverPanel>
//                 </Transition>
//               </>
//             )}
//           </Popover>
//           <Popover className="relative">
//             {({ open }) => (
//               <>
//                 <PopoverButton
//                   className={classNames(
//                     open && "bg-gray-100",
//                     "group inline-flex items-center rounded-sm p-1.5 text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100"
//                   )}
//                 >
//                   <HiOutlineBell fontSize={24} />
//                 </PopoverButton>
//                 <Transition
//                   as={Fragment}
//                   enter="transition ease-out duration-200"
//                   enterFrom="opacity-0 translate-y-1"
//                   enterTo="opacity-100 translate-y-0"
//                   leave="transition ease-in duration-150"
//                   leaveFrom="opacity-100 translate-y-0"
//                   leaveTo="opacity-0 translate-y-1"
//                 >
//                   <PopoverPanel className="absolute right-0 z-10 mt-2.5 transform w-80">
//                     <div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
//                       <strong className="text-gray-700 font-medium">
//                         Notifications
//                       </strong>
//                       <div className="mt-2 py-1 text-sm">
//                         This is notifications panel.
//                       </div>
//                     </div>
//                   </PopoverPanel>
//                 </Transition>
//               </>
//             )}
//           </Popover>
//           <Menu as="div" className="relative">
//             <div>
//               <MenuButton className="ml-2 bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-400">
//                 <span className="sr-only">Open user menu</span>
//                 <div
//                   className="h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center"
//                   style={{
//                     backgroundImage:
//                       'url("https://eu.ui-avatars.com/api/?name=Rohith+Sunil&size=250")',
//                   }}
//                 >
//                   <span className="sr-only">Random Name</span>
//                 </div>
//               </MenuButton>
//             </div>
//             <Transition
//               as={Fragment}
//               enter="transition ease-out duration-100"
//               enterFrom="transform opacity-0 scale-95"
//               enterTo="transform opacity-100 scale-100"
//               leave="transition ease-in duration-75"
//               leaveFrom="transform opacity-100 scale-100"
//               leaveTo="transform opacity-0 scale-95"
//             >
//               <MenuItems className="origin-top-right z-10 absolute right-0 mt-2 w-48 rounded-sm shadow-md p-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
//                 <MenuItem>
//                   {({ active }) => (
//                     <div
//                       onClick={() => navigate("/profile")}
//                       className={classNames(
//                         active && "bg-gray-100",
//                         "active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200"
//                       )}
//                     >
//                       Your Profile
//                     </div>
//                   )}
//                 </MenuItem>
//                 <MenuItem>
//                   {({ active }) => (
//                     <div
//                       onClick={() => navigate("/Settings")}
//                       className={classNames(
//                         active && "bg-gray-100",
//                         "active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200"
//                       )}
//                     >
//                       Settings
//                     </div>
//                   )}
//                 </MenuItem>
//                 <MenuItem>
//                   {({ active }) => (
//                     <div
//                       onClick={() => navigate("/logout")}
//                       className={classNames(
//                         active && "bg-gray-100",
//                         "active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200"
//                       )}
//                     >
//                       Logout
//                     </div>
//                   )}
//                 </MenuItem>
//               </MenuItems>
//             </Transition>
//           </Menu>
//         </div>
//       </div>
//     </div>
//   );
// }
//
//
//
//
//start
// import React, { Fragment, useEffect, useState } from "react";
// // import { HiOutlineBell, HiOutlineChatAlt } from "react-icons/hi";
// import { useNavigate } from "react-router-dom";
// import {
//   Menu,
//   MenuItem,
//   MenuButton,
//   MenuItems,
//   // Popover,
//   // PopoverButton,
//   // PopoverPanel,
//   Transition,
// } from "@headlessui/react";
// import classNames from "classnames";
// import { useAuth } from "../../Auth/authProvider";

// export default function Header() {
//   const navigate = useNavigate();
//   const { userDetails, isAdmin } = useAuth();
//   const [firstName, setFirstName] = useState("");
//   const [secondName, setSecondName] = useState("");

//   useEffect(() => {
//     const { name } = userDetails;
//     if (name) {
//       const nameParts = name.split(" ");
//       if (nameParts.length >= 2) {
//         const firstName = nameParts[0];
//         const secondName = nameParts.slice(1).join(" "); // Join the rest as second name
//         setFirstName(firstName);
//         setSecondName(secondName);
//       } else {
//         setFirstName(nameParts[0]); // Only one name available
//       }
//     }
//   }, [userDetails]);

//   return (
//     <div className="bg-white h-16 px-4 flex justify-between items-center border-b border-gray-200">
//       <div>
//         <span className="text-gray-700 text-2xl font-bold">
//           {isAdmin ? "Hi, Admin" : `Hi, ${firstName}`}
//         </span>
//       </div>
//       <div className="flex items-center gap-2 mr-2">
//         {/*
//         <Popover className="relative">
//           {({ open }) => (
//             <>
//               <PopoverButton
//                 className={classNames(
//                   open && "bg-gray-100",
//                   "group inline-flex items-center rounded-sm p-1.5 text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100"
//                 )}
//               >
//                 <HiOutlineChatAlt fontSize={24} />
//               </PopoverButton>
//               <Transition
//                 as={Fragment}
//                 enter="transition ease-out duration-200"
//                 enterFrom="opacity-0 translate-y-1"
//                 enterTo="opacity-100 translate-y-0"
//                 leave="transition ease-in duration-150"
//                 leaveFrom="opacity-100 translate-y-0"
//                 leaveTo="opacity-0 translate-y-1"
//               >
//                 <PopoverPanel className="absolute right-0 z-10 mt-2.5 transform w-80">
//                   <div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
//                     <strong className="text-gray-700 font-medium">
//                       Messages
//                     </strong>
//                     <div className="mt-2 py-1 text-sm">
//                       This is messages panel.
//                     </div>
//                   </div>
//                 </PopoverPanel>
//               </Transition>
//             </>
//           )}
//         </Popover>
//         <Popover className="relative">
//           {({ open }) => (
//             <>
//               <PopoverButton
//                 className={classNames(
//                   open && "bg-gray-100",
//                   "group inline-flex items-center rounded-sm p-1.5 text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100"
//                 )}
//               >
//                 <HiOutlineBell fontSize={24} />
//               </PopoverButton>
//               <Transition
//                 as={Fragment}
//                 enter="transition ease-out duration-200"
//                 enterFrom="opacity-0 translate-y-1"
//                 enterTo="opacity-100 translate-y-0"
//                 leave="transition ease-in duration-150"
//                 leaveFrom="opacity-100 translate-y-0"
//                 leaveTo="opacity-0 translate-y-1"
//               >
//                 <PopoverPanel className="absolute right-0 z-10 mt-2.5 transform w-80">
//                   <div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
//                     <strong className="text-gray-700 font-medium">
//                       Notifications
//                     </strong>
//                     <div className="mt-2 py-1 text-sm">
//                       This is notifications panel.
//                     </div>
//                   </div>
//                 </PopoverPanel>
//               </Transition>
//             </>
//           )}
//         </Popover>
//         */}
//         <Menu as="div" className="relative">
//           <div>
//             <MenuButton className="ml-2 bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-400">
//               <span className="sr-only">Open user menu</span>
//               <div
//                 className="h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center"
//                 style={{
//                   backgroundImage: `url("https://eu.ui-avatars.com/api/?name=${firstName}+${secondName}&size=250")`,
//                 }}
//               >
//                 <span className="sr-only">Random Name</span>
//               </div>
//             </MenuButton>
//           </div>
//           <Transition
//             as={Fragment}
//             enter="transition ease-out duration-100"
//             enterFrom="transform opacity-0 scale-95"
//             enterTo="transform opacity-100 scale-100"
//             leave="transition ease-in duration-75"
//             leaveFrom="transform opacity-100 scale-100"
//             leaveTo="transform opacity-0 scale-95"
//           >
//             <MenuItems className="origin-top-right z-10 absolute right-0 mt-2 w-48 rounded-sm shadow-md p-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
//               <MenuItem>
//                 {({ active }) => (
//                   <div
//                     onClick={() => navigate("/profile")}
//                     className={classNames(
//                       active && "bg-gray-100",
//                       "active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200"
//                     )}
//                   >
//                     Your Profile
//                   </div>
//                 )}
//               </MenuItem>
//               <MenuItem>
//                 {({ active }) => (
//                   <div
//                     onClick={() => navigate("/settings")}
//                     className={classNames(
//                       active && "bg-gray-100",
//                       "active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200"
//                     )}
//                   >
//                     Settings
//                   </div>
//                 )}
//               </MenuItem>
//               <MenuItem>
//                 {({ active }) => (
//                   <div
//                     onClick={() => navigate("/logout")}
//                     className={classNames(
//                       active && "bg-gray-100",
//                       "active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200"
//                     )}
//                   >
//                     Logout
//                   </div>
//                 )}
//               </MenuItem>
//             </MenuItems>
//           </Transition>
//         </Menu>
//       </div>
//     </div>
//   );
// }
import React, { Fragment, useEffect, useState } from "react";
// import { HiOutlineBell, HiOutlineChatAlt } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import {
  Menu,
  MenuItem,
  MenuButton,
  MenuItems,
  // Popover,
  // PopoverButton,
  // PopoverPanel,
  Transition,
} from "@headlessui/react";
import classNames from "classnames";
import { useAuth } from "../../Auth/authProvider";

export default function Header({ toggleSidebar }) {
  const navigate = useNavigate();
  const { userDetails, isAdmin, logout } = useAuth();
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");

  useEffect(() => {
    const { name } = userDetails;
    if (name) {
      const nameParts = name.split(" ");
      if (nameParts.length >= 2) {
        const firstName = nameParts[0];
        const secondName = nameParts.slice(1).join(" "); // Join the rest as second name
        setFirstName(firstName);
        setSecondName(secondName);
      } else {
        setFirstName(nameParts[0]); // Only one name available
      }
    }
  }, [userDetails]);

  return (
    <div className="bg-white h-16 px-4 flex justify-between items-center border-b border-gray-200">
      <div className="flex items-center">
        <button onClick={toggleSidebar} className="text-xl lg:hidden mr-4">
          <span className="sr-only">Open sidebar</span>
          &#9776; {/* Hamburger icon */}
        </button>
        <span className="text-gray-700 text-2xl font-bold hidden lg:block">
          {isAdmin ? "Hi, Admin" : `Hi, ${firstName}`}
        </span>
      </div>
      <div className="flex items-center gap-2">
        {/*
        <Popover className="relative">
          {({ open }) => (
            <>
              <PopoverButton
                className={classNames(
                  open && "bg-gray-100",
                  "group inline-flex items-center rounded-sm p-1.5 text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100"
                )}
              >
                <HiOutlineChatAlt fontSize={24} />
              </PopoverButton>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <PopoverPanel className="absolute right-0 z-10 mt-2.5 transform w-80">
                  <div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
                    <strong className="text-gray-700 font-medium">
                      Messages
                    </strong>
                    <div className="mt-2 py-1 text-sm">
                      This is messages panel.
                    </div>
                  </div>
                </PopoverPanel>
              </Transition>
            </>
          )}
        </Popover>
        <Popover className="relative">
          {({ open }) => (
            <>
              <PopoverButton
                className={classNames(
                  open && "bg-gray-100",
                  "group inline-flex items-center rounded-sm p-1.5 text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100"
                )}
              >
                <HiOutlineBell fontSize={24} />
              </PopoverButton>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <PopoverPanel className="absolute right-0 z-10 mt-2.5 transform w-80">
                  <div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
                    <strong className="text-gray-700 font-medium">
                      Notifications
                    </strong>
                    <div className="mt-2 py-1 text-sm">
                      This is notifications panel.
                    </div>
                  </div>
                </PopoverPanel>
              </Transition>
            </>
          )}
        </Popover>
        */}
        <Menu as="div" className="relative">
          <div>
            <MenuButton className="ml-2 bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-400">
              <span className="sr-only">Open user menu</span>
              <div
                className="h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center"
                style={{
                  backgroundImage: `url("https://eu.ui-avatars.com/api/?name=${firstName}+${secondName}&size=250")`,
                }}
              >
                <span className="sr-only">Random Name</span>
              </div>
            </MenuButton>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <MenuItems className="origin-top-right z-10 absolute right-0 mt-2 w-48 rounded-sm shadow-md p-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <MenuItem>
                {({ active }) => (
                  <div
                    onClick={() => navigate("/app/profile")}
                    className={classNames(
                      active && "bg-gray-100",
                      "active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200"
                    )}
                  >
                    Your Profile
                  </div>
                )}
              </MenuItem>
              {/* <MenuItem>
                {({ active }) => (
                  <div
                    onClick={() => navigate("/settings")}
                    className={classNames(
                      active && "bg-gray-100",
                      "active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200"
                    )}
                  >
                    Settings
                  </div>
                )}
              </MenuItem> */}
              <MenuItem>
                {({ active }) => (
                  <div
                    onClick={logout}
                    className={classNames(
                      active && "bg-gray-100",
                      "active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200"
                    )}
                  >
                    Logout
                  </div>
                )}
              </MenuItem>
            </MenuItems>
          </Transition>
        </Menu>
      </div>
    </div>
  );
}
