// import React from "react";
// import DashboardStatsgrid from "../mincomponents/dashboard/DashboardStatsgrid";
// import PopularDays from "../mincomponents/dashboard/PopularFood";
// import LatestAnnouncement from "../mincomponents/dashboard/LatestAnnouncement";
// import MenuImage from "../mincomponents/dashboard/img/BH-3.png";

// export default function Dashboard() {
//   return (
//     <div className="flex flex-col h-screen overflow-hidden">
//       {/* Today's Menu section */}
//       <div className="bg-neutral-100 flex flex-col items-center justify-center">
//         <div className="flex-1 overflow-hidden p-2 gap-4">
//           <div className="bg-white shadow-md rounded-lg pb-4 px-3">
//             <h2 className="text-xl font-bold py-2  text-center">
//               Today's Menu
//             </h2>
//             <DashboardStatsgrid />
//           </div>
//           <div className="flex overflow-hidden p-2 gap-4">
//             <div className="w-2/3 flex items-center justify-center mt-4 max-h-[29rem]">
//               <div className="bg-white shadow-md rounded-lg h-full p-4 w-full">
//                 <h2 className="text-xl font-bold mb-4">Hostel Menu</h2>
//                 <img
//                   src={MenuImage}
//                   alt="Hostel Menu"
//                   className="rounded-lg w-full h-auto max-h-96 object-contain"
//                 />
//               </div>
//             </div>
//             <div className="w-1/3 flex flex-col gap-4 mt-4 max-h-[39rem]">
//               <div className="bg-white shadow-md rounded-lg p-4 flex-none">
//                 <PopularDays />
//               </div>
//               <div className="bg-white shadow-md rounded-lg p-4 flex-1 overflow-y-auto max-h-[23rem]">
//                 <LatestAnnouncement />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import DashboardStatsgrid from "../mincomponents/dashboard/DashboardStatsgrid";
import PopularDays from "../mincomponents/dashboard/PopularFood";
import LatestAnnouncement from "../mincomponents/dashboard/LatestAnnouncement";
import { useAuth } from "../../Auth/authProvider"; // Adjust the import path to your useAuth hook

export default function Dashboard() {
  const { userDetails } = useAuth();
  const hostelname = userDetails?.hostelname; // Assuming userDetails contains a property hostelname
  // const menuImagePath = require(`../mincomponents/dashboard/img/${hostelname}.png`);
  const [menuImagePath, setMenuImagePath] = useState(null);

  useEffect(() => {
    if (hostelname) {
      import(`../mincomponents/dashboard/img/${hostelname}.png`)
        .then((image) => {
          setMenuImagePath(image.default);
        })
        .catch((err) => {
          console.error("Error loading image:", err);
          setMenuImagePath(null); // Set a fallback or null if the image doesn't exist
        });
    }
  }, [hostelname]);

  return (
    <div className="flex flex-col h-screen lg:overflow-hidden">
      {/* Today's Menu section */}
      <div className="bg-neutral-100 flex flex-col items-center justify-center lg:overflow-hidden">
        <div className="flex-1 lg:overflow-hidden p-2 gap-4 flex-col">
          <div className="bg-white shadow-md rounded-lg pb-4 px-3">
            <h2 className="text-xl font-bold py-2 text-center">Today's Menu</h2>
            <DashboardStatsgrid />
          </div>
          <div className="flex lg:flex-row lg:overflow-hidden p-2 gap-4 flex-col mb-2 lg:mb-0">
            <div className="w-full lg:w-2/3 flex items-center justify-center mt-4 max-h-[29rem]">
              <div className="bg-white shadow-md rounded-lg h-full p-4 w-full">
                {/* <h2 className="text-xl font-bold mb-4">Hostel Menu</h2>
                <img
                  src={menuImagePath}
                  alt="Hostel Menu"
                  className="rounded-lg w-full h-auto max-h-96 object-contain"
                /> */}
                <h2 className="text-xl font-bold mb-4">Hostel Menu</h2>
                {menuImagePath ? (
                  <img
                    src={menuImagePath}
                    alt="Hostel Menu"
                    className="rounded-lg w-full h-auto max-h-96 object-contain"
                  />
                ) : (
                  <div className="text-center text-gray-500">
                    Loading menu image...
                  </div>
                )}
              </div>
            </div>
            <div className="lg:w-1/3 w-full flex flex-col gap-4 mt-4 max-h-[39rem] lg:mb-0">
              <div className="bg-white shadow-md rounded-lg p-4 flex-none ">
                <PopularDays />
              </div>
              <div className="bg-white shadow-md rounded-lg p-4 flex-1 overflow-y-auto max-h-[23rem] mb:2">
                <LatestAnnouncement />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
