// import React from "react";
// import {
//   MdOutlineFreeBreakfast,
//   MdOutlineLunchDining,
//   MdOutlineFreeBreakfast as MdOutlineSnack,
//   MdDinnerDining,
// } from "react-icons/md";

// const menuData = {
// Monday: {
//   breakfast: "Poha, Namkeen, Jalebi, Omelette",
//   lunch: "Masala-Bhindi, Chapati, Rice, Lobia-dal/Masoor-dal, Dah, Papad",
//   snacks: "Samosa, Tea",
//   dinner: "Patta Gobi, Chapati, Arhar dal fry, Fried Rice, Ice-cream",
// },
// Tuesday: {
//   breakfast: "Paneer Bhurji, Parathe, Fruit",
//   lunch: "Baigan ka Bharta, Chapati, Rice, Arhar dal fry, Jeera-Chach",
//   snacks: "Chowmien, Tea",
//   dinner: "Aloo-Parval, Chapati, Rice, Papad",
// },
// Wednesday: {
//   breakfast: "Vada Sambhar, Egg Bhurji",
//   lunch: "Butter-Paneer-Masala, Chapati, Jeera-Rice, Chana dal, Lassi",
//   snacks: "Pyaaj-Pakode, Tea",
//   dinner: "Soya-vadi chapati, Veg-Biryani, Moong dal, Sevai kheer",
// },
// Thursday: {
//   breakfast: "Sandwich, Macaroni, Fruit",
//   lunch: "Chole-Bhature, Rice, Boondi Raita",
//   snacks: "Bhelpuri, Tea",
//   dinner: "Egg-curry, Aloo-matar gravy, Chapati, Rice",
// },
// Friday: {
//   breakfast: "Pav bhaji, Boiled Egg, Fruit",
//   lunch: "Rajma, Chapati, Seasonal-veg, Rice, Dahi, Papad",
//   snacks: "Poha, Tea",
//   dinner: "Masala-bhindi, Chapati, Rice, Arhar-dal fry, Sweet",
// },
// Saturday: {
//   breakfast: "Fried-Idli-sambhar, Veg-upma, Omelette",
//   lunch: "Puri, Aloo-matar, Kaddu ki sabji, Rice, Veg Raita",
//   snacks: "Dabeli, Tea",
//   dinner: "Kadai-paneer, Chapati, Rice, Moong dal fry, Gulabjamun",
// },
// Sunday: {
//   breakfast: "Aloo-Bedai, Fruit",
//   lunch: "Gobhi-matar, Chapati, Arhar dal fry, Rice, Papad",
//   snacks: "Maggie, Tea",
//   dinner: "Aloo paratha, Dahi, Green and Sweet chutney",
// },
// };

// // Get the current day of the week
// const daysOfWeek = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];
// const currentDay = daysOfWeek[new Date().getDay()];

// export default function DashboardStatsgrid() {
//   const todayMenu = menuData[currentDay];

//   return (
//     <div className="flex gap-4 w-full pt-1">
//       <BoxWrapper>
//         <MealItem
//           icon={MdOutlineFreeBreakfast}
//           mealType="Breakfast"
//           meal={todayMenu.breakfast}
//         />
//       </BoxWrapper>
//       <BoxWrapper>
//         <MealItem
//           icon={MdOutlineLunchDining}
//           mealType="Lunch"
//           meal={todayMenu.lunch}
//         />
//       </BoxWrapper>
//       <BoxWrapper>
//         <MealItem
//           icon={MdOutlineSnack}
//           mealType="Snacks"
//           meal={todayMenu.snacks}
//         />
//       </BoxWrapper>
//       <BoxWrapper>
//         <MealItem
//           icon={MdDinnerDining}
//           mealType="Dinner"
//           meal={todayMenu.dinner}
//         />
//       </BoxWrapper>
//     </div>
//   );
// }

// function BoxWrapper({ children }) {
//   return (
//     <div className="bg-white rounded-lg p-4 flex-1 border border-gray-200 flex items-center shadow-md">
//       {children}
//     </div>
//   );
// }

// function MealItem({ icon: Icon, mealType, meal }) {
//   return (
//     <div className="flex items-center">
//       <div className="rounded-full h-12 w-12 flex items-center justify-center bg-teal-600">
//         <Icon className="text-2xl text-white" fontSize={24} />
//       </div>
//       <div className="pl-4">
//         <span className="text-sm text-gray-500 font-light">{mealType}</span>
//         <div className="flex items-center">
//           <strong className="text-xl text-gray-700 font-semibold">
//             {meal}
//           </strong>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import { useAuth } from "../../../Auth/authProvider"; // Adjust the import according to your project structure
import {
  MdOutlineFreeBreakfast,
  MdOutlineLunchDining,
  MdOutlineFreeBreakfast as MdOutlineSnack,
  MdDinnerDining,
} from "react-icons/md";
import { menuData } from "./menuData";

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const currentDay = daysOfWeek[new Date().getDay()];

export default function DashboardStatsgrid() {
  const { userDetails } = useAuth();
  // const selectedHostel = userDetails.hostelname;
  // const todayMenu = menuData[selectedHostel][currentDay];
  const [todayMenu, setTodayMenu] = useState(null);

  useEffect(() => {
    if (userDetails) {
      const selectedHostel = userDetails.hostelname;
      const menu = menuData[selectedHostel]?.[currentDay];
      setTodayMenu(menu);
    }
  }, [userDetails]);

  if (!userDetails) {
    return (
      <div className="w-full pt-1 text-center text-gray-500">
        Loading user data...
      </div>
    );
  }

  if (!todayMenu) {
    return (
      <div className="w-full pt-1 text-center text-gray-500">
        Menu data not available for today or selected hostel.
      </div>
    );
  }

  return (
    <div className="w-full pt-1">
      <div className="flex flex-col lg:flex-row gap-4">
        <BoxWrapper>
          <MealItem
            icon={MdOutlineFreeBreakfast}
            mealType="Breakfast"
            meal={todayMenu.breakfast}
          />
        </BoxWrapper>
        <BoxWrapper>
          <MealItem
            icon={MdOutlineLunchDining}
            mealType="Lunch"
            meal={todayMenu.lunch}
          />
        </BoxWrapper>
        <BoxWrapper>
          <MealItem
            icon={MdOutlineSnack}
            mealType="Snacks"
            meal={todayMenu.snacks}
          />
        </BoxWrapper>
        <BoxWrapper>
          <MealItem
            icon={MdDinnerDining}
            mealType="Dinner"
            meal={todayMenu.dinner}
          />
        </BoxWrapper>
      </div>
    </div>
  );
}

function BoxWrapper({ children }) {
  return (
    <div className="bg-white rounded-lg p-4 flex-1 border border-gray-200 flex items-center shadow-md">
      {children}
    </div>
  );
}

function MealItem({ icon: Icon, mealType, meal }) {
  return (
    <div className="flex items-center">
      <div className="rounded-full h-12 w-12 flex items-center justify-center bg-teal-600">
        <Icon className="text-2xl text-white" fontSize={24} />
      </div>
      <div className="pl-4">
        <span className="text-sm text-gray-500 font-light">{mealType}</span>
        <div className="flex items-center">
          <strong className="text-xl text-gray-700 font-semibold">
            {meal}
          </strong>
        </div>
      </div>
    </div>
  );
}
