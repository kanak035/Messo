// import React, { useState } from "react";
// import { items } from "./menuitems";
// // import StarRating from "./StarRating";

// export default function MenuGrid() {
//   const [showModal, setShowModal] = useState(false);
//   const [selectedRating, setSelectedRating] = useState(null);

//   const [meal_type, setMealType] = useState(null);
//   const [day, setDay] = useState(null);

//   const weekdays = [
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//     "Sunday",
//   ];

//   const mealTypes = ["Breakfast", "Lunch", "Snacks", "Dinner"];

//   async function handleFinalSubmit() {
//     const hostelName = "BH-3";
//     const formData = {
//       hostel_name: hostelName,
//       day: day,
//       meal_type: meal_type,
//       rating: selectedRating,
//     };
//     console.log(formData);
//     try {
//       const response = await fetch("http://localhost:5000/api/v1/menuReview", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData), // Sending data as an array
//       });

//       if (response.ok) {
//         console.log("Rating submitted successfully");
//         // Optionally, handle successful submission (e.g., show a success message, close the dialog, etc.)
//       } else {
//         console.error("Failed to submit rating");
//         // Optionally, handle submission failure
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   }

//   const handleRateClick = (day, meal) => {
//     setShowModal(true);
//     setMealType(meal);
//     setDay(day);
//   };

//   return (
//     <>
//       <div className="bg-neutral-100 w-full text-black min-h-screen text-center md:text-left overflow-auto">
//         <div className="max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full h-full">
//           <div className="pb-8 mt-2">
//             <p className="text-4xl font-bold inline border-b-4 border-gray-500">
//               Menu Rating
//             </p>
//           </div>
//           <div className="grid grid-cols-5 gap-8 sm:px-5">
//             {/* Empty cell at the top-left corner */}
//             <div></div>
//             {mealTypes.map((meal, index) => (
//               <div key={index} className="flex justify-center">
//                 <h4 className="text-xl font-semibold mb-2">{meal}</h4>
//               </div>
//             ))}
//           </div>
//           {weekdays.map((day, dayIndex) => (
//             <div key={dayIndex} className="grid grid-cols-5 gap-8 sm:px-5">
//               <div className="flex justify-center items-center">
//                 <h3 className="text-2xl font-bold">{day}</h3>
//               </div>
//               {mealTypes.map((meal, mealIndex) => (
//                 <div
//                   key={mealIndex}
//                   className="flex flex-col items-center h-54 w-64"
//                 >
//                   {items
//                     .filter((_, itemIndex) => itemIndex % 4 === mealIndex)
//                     .slice(dayIndex, dayIndex + 1)
//                     .map(({ id, src, link }) => (
//                       <div
//                         key={id}
//                         className="shadow-md shadow-gray-600 rounded-lg overflow-hidden bg-neutral-800 mb-4"
//                       >
//                         <img
//                           src={src}
//                           alt=""
//                           className="rounded-md duration-200 hover:scale-105"
//                         />
//                         <div className="flex items-center justify-center">
//                           <button
//                             className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-neutral-100"
//                             onClick={() => handleRateClick(day, meal)}
//                           >
//                             Rate
//                           </button>
//                           {/* <button
//                             className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-neutral-100"
//                             onClick={() => window.open(link, "_blank")}
//                           >
//                             Review
//                           </button> */}
//                         </div>
//                       </div>
//                     ))}
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>
//       {showModal && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
//           <div className="bg-white p-6 rounded-lg shadow-md relative">
//             <div className="flex justify-between items-center mb-4">
//               <h3 className="text-lg font-semibold text-center flex-grow">
//                 Rate Today's Menu
//               </h3>
//               <button
//                 className="text-gray-500 hover:text-gray-700 text-2xl"
//                 onClick={() => {
//                   setShowModal(false);
//                 }}
//               >
//                 &times;
//               </button>
//             </div>
//             <div className="flex justify-center items-center space-x-2 mb-6">
//               {[...Array(10)].map((_, index) => (
//                 <button
//                   key={index}
//                   className={`w-10 h-10 flex items-center justify-center rounded-full border-2 transition-colors ${
//                     selectedRating === index + 1
//                       ? "bg-teal-500 text-white border-teal-500"
//                       : "bg-gray-200 text-gray-700 border-gray-200 hover:bg-gray-300"
//                   }`}
//                   onClick={() => setSelectedRating(index + 1)}
//                 >
//                   {index + 1}
//                 </button>
//               ))}
//             </div>
//             <div className="flex justify-center">
//               <button
//                 className="px-6 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition-colors"
//                 onClick={() => {
//                   handleFinalSubmit();
//                   setShowModal(false);
//                   setSelectedRating(null);
//                 }}
//               >
//                 Submit
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// import React, { useState } from "react";
// import { items } from "./menuitems";
// // import StarRating from "./StarRating";

// export default function MenuGrid() {
//   const [showModal, setShowModal] = useState(false);
//   const [selectedRating, setSelectedRating] = useState(null);

//   const [meal_type, setMealType] = useState(null);
//   const [day, setDay] = useState(null);

//   const weekdays = [
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//     "Sunday",
//   ];

//   const mealTypes = ["Breakfast", "Lunch", "Snacks", "Dinner"];

//   async function handleFinalSubmit() {
//     const hostelName = "BH-3";
//     const formData = {
//       hostel_name: hostelName,
//       day: day,
//       meal_type: meal_type,
//       rating: selectedRating,
//     };
//     console.log(formData);
//     try {
//       const response = await fetch("http://localhost:5000/api/v1/menuReview", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData), // Sending data as an array
//       });

//       if (response.ok) {
//         console.log("Rating submitted successfully");
//         // Optionally, handle successful submission (e.g., show a success message, close the dialog, etc.)
//       } else {
//         console.error("Failed to submit rating");
//         // Optionally, handle submission failure
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   }

//   const handleRateClick = (day, meal) => {
//     setShowModal(true);
//     setMealType(meal);
//     setDay(day);
//   };

//   return (
//     <>
//       <div className="bg-neutral-100 w-full text-black min-h-screen text-center md:text-left overflow-auto">
//         <div className="max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full h-full">
//           <div className="pb-8 mt-2">
//             <p className="text-4xl font-bold inline border-b-4 border-gray-500">
//               Menu Rating
//             </p>
//           </div>
//           <div className="grid grid-cols-5 gap-8 sm:px-5">
//             {/* Empty cell at the top-left corner */}
//             <div></div>
//             {mealTypes.map((meal, index) => (
//               <div key={index} className="flex justify-center">
//                 <h4 className="text-xl font-semibold mb-2">{meal}</h4>
//               </div>
//             ))}
//           </div>
//           {weekdays.map((day, dayIndex) => (
//             <div key={dayIndex} className="grid grid-cols-5 gap-8 sm:px-5">
//               <div className="flex justify-center items-center">
//                 <h3 className="text-2xl font-bold">{day}</h3>
//               </div>
//               {mealTypes.map((meal, mealIndex) => (
//                 <div
//                   key={mealIndex}
//                   className="flex flex-col items-center h-54 w-64"
//                 >
//                   {items
//                     .filter((_, itemIndex) => itemIndex % 4 === mealIndex)
//                     .slice(dayIndex, dayIndex + 1)
//                     .map(({ id, src, link }) => (
//                       <div
//                         key={id}
//                         className="shadow-md shadow-gray-600 rounded-lg overflow-hidden bg-neutral-800 mb-4"
//                       >
//                         <img
//                           src={src}
//                           alt=""
//                           className="rounded-md duration-200 hover:scale-105"
//                         />
//                         <div className="flex items-center justify-center">
//                           <button
//                             className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-neutral-100"
//                             onClick={() => handleRateClick(day, meal)}
//                           >
//                             Rate
//                           </button>
//                           {/* <button
//                             className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-neutral-100"
//                             onClick={() => window.open(link, "_blank")}
//                           >
//                             Review
//                           </button> */}
//                         </div>
//                       </div>
//                     ))}
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>
//       {showModal && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
//           <div className="bg-white p-6 rounded-lg shadow-md relative">
//             <div className="flex justify-between items-center mb-4">
//               <h3 className="text-lg font-semibold text-center flex-grow">
//                 Rate {meal_type} on {day}
//               </h3>
//               <button
//                 className="text-gray-500 hover:text-gray-700 text-2xl"
//                 onClick={() => {
//                   setShowModal(false);
//                 }}
//               >
//                 &times;
//               </button>
//             </div>
//             <div className="flex justify-center items-center space-x-2 mb-6">
//               {[...Array(10)].map((_, index) => (
//                 <button
//                   key={index}
//                   className={`w-10 h-10 flex items-center justify-center rounded-full border-2 transition-colors ${
//                     selectedRating === index + 1
//                       ? "bg-teal-500 text-white border-teal-500"
//                       : "bg-gray-200 text-gray-700 border-gray-200 hover:bg-gray-300"
//                   }`}
//                   onClick={() => setSelectedRating(index + 1)}
//                 >
//                   {index + 1}
//                 </button>
//               ))}
//             </div>
//             <div className="flex justify-center">
//               <button
//                 className="px-6 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition-colors"
//                 onClick={() => {
//                   handleFinalSubmit();
//                   setShowModal(false);
//                   setSelectedRating(null);
//                 }}
//               >
//                 Submit
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// import React, { useState, useEffect } from "react";
// import { useMenuItems } from "../menureview/menuitems";
// import { useAuth } from "../../../Auth/authProvider";
// import { baseUrl } from "../../../helper";

// export default function MenuGrid() {
//   const [showModal, setShowModal] = useState(false);
//   const [selectedRating, setSelectedRating] = useState(null);
//   const [meal_type, setMealType] = useState(null);
//   const [day, setDay] = useState(null);
//   const [userRatings, setUserRatings] = useState([]);
//   const { userDetails, token } = useAuth();
//   const items = useMenuItems();

//   const weekdays = [
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//     "Sunday",
//   ];

//   const mealTypes = ["Breakfast", "Lunch", "Snacks", "Dinner"];

//   useEffect(() => {
//     async function fetchUserRatings() {
//       console.log(userDetails.ObjectID);
//       try {
//         const response = await fetch(
//           `${baseUrl}/api/v1/userRatings?userId=${userDetails.ObjectID}`,
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );
//         const data = await response.json();
//         setUserRatings(data);
//       } catch (error) {
//         console.error("Error fetching user ratings:", error);
//       }
//     }
//     fetchUserRatings();
//   }, [token, userDetails]);

//   async function handleFinalSubmit() {
//     console.log(userDetails);
//     const hostelName = userDetails.hostelname; // Dynamic hostel name
//     const formData = {
//       userId: userDetails.ObjectID,
//       hostel_name: hostelName,
//       day: day,
//       meal_type: meal_type,
//       rating: selectedRating,
//     };
//     console.log(formData);
//     try {
//       const response = await fetch(`${baseUrl}/api/v1/menuReview`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         console.log("Rating submitted successfully");
//         setUserRatings([...userRatings, formData]);
//       } else {
//         console.error("Failed to submit rating");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   }

//   const handleRateClick = (day, meal) => {
//     setShowModal(true);
//     setMealType(meal);
//     setDay(day);
//   };

//   const hasRated = (day, mealType) => {
//     return userRatings.some(
//       (rating) => rating.day === day && rating.meal_type === mealType
//     );
//   };

//   return (
//     <>
//       <div className="bg-neutral-100 w-full text-black min-h-screen text-center md:text-left overflow-auto">
//         <div className="max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full h-full">
//           <div className="pb-8 mt-2">
//             <p className="text-4xl font-bold inline border-b-4 border-gray-500">
//               Menu Rating
//             </p>
//           </div>
//           <div className="grid grid-cols-5 gap-8 sm:px-5">
//             <div></div>
//             {mealTypes.map((meal, index) => (
//               <div key={index} className="flex justify-center">
//                 <h4 className="text-xl font-semibold mb-2">{meal}</h4>
//               </div>
//             ))}
//           </div>
//           {weekdays.map((day, dayIndex) => (
//             <div key={dayIndex} className="grid grid-cols-5 gap-8 sm:px-5">
//               <div className="flex justify-center items-center">
//                 <h3 className="text-2xl font-bold">{day}</h3>
//               </div>
//               {mealTypes.map((meal, mealIndex) => (
//                 <div
//                   key={mealIndex}
//                   className="flex flex-col items-center h-54 w-64"
//                 >
//                   {items
//                     .filter((_, itemIndex) => itemIndex % 4 === mealIndex)
//                     .slice(dayIndex, dayIndex + 1)
//                     .map(({ id, src, link }) => (
//                       <div
//                         key={id}
//                         className="shadow-md shadow-gray-600 rounded-lg overflow-hidden bg-neutral-800 mb-4"
//                       >
//                         <img
//                           src={src}
//                           alt=""
//                           className="rounded-md duration-200 hover:scale-105"
//                         />
//                         <div className="flex items-center justify-center">
//                           {hasRated(day, meal) ? (
//                             <button
//                               className="w-1/2 px-6 py-3 m-4 duration-200 cursor-not-allowed text-teal-500"
//                               disabled
//                             >
//                               Rated
//                             </button>
//                           ) : (
//                             <button
//                               className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-neutral-100"
//                               onClick={() => handleRateClick(day, meal)}
//                             >
//                               Rate
//                             </button>
//                           )}
//                           {/* <button
//                             className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-neutral-100"
//                             onClick={() => window.open(link, "_blank")}
//                           >
//                             Review
//                           </button> */}
//                         </div>
//                       </div>
//                     ))}
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>
//       {showModal && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
//           <div className="bg-white p-6 rounded-lg shadow-md relative">
//             <div className="flex justify-between items-center mb-4">
//               <h3 className="text-lg font-semibold text-center flex-grow">
//                 Rate {meal_type} on {day}
//               </h3>
//               <button
//                 className="text-gray-500 hover:text-gray-700 text-2xl"
//                 onClick={() => {
//                   setShowModal(false);
//                 }}
//               >
//                 &times;
//               </button>
//             </div>
//             <div className="flex justify-center items-center space-x-2 mb-6">
//               {[...Array(10)].map((_, index) => (
//                 <button
//                   key={index}
//                   className={`w-10 h-10 flex items-center justify-center rounded-full border-2 transition-colors ${
//                     selectedRating === index + 1
//                       ? "bg-teal-500 text-white border-teal-500"
//                       : "bg-gray-200 text-gray-700 border-gray-200 hover:bg-gray-300"
//                   }`}
//                   onClick={() => setSelectedRating(index + 1)}
//                 >
//                   {index + 1}
//                 </button>
//               ))}
//             </div>
//             <div className="flex justify-center">
//               <button
//                 className="px-6 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition-colors"
//                 onClick={() => {
//                   handleFinalSubmit();
//                   setShowModal(false);
//                   setSelectedRating(null);
//                 }}
//               >
//                 Submit
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

import React, { useState, useEffect } from "react";
import { useMenuItems } from "../menureview/menuitems";
import { useAuth } from "../../../Auth/authProvider";
import { baseUrl } from "../../../helper";

export default function MenuGrid() {
  const [showModal, setShowModal] = useState(false);
  const [selectedRating, setSelectedRating] = useState(null);
  const [meal_type, setMealType] = useState(null);
  const [day, setDay] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);
  const [userRatings, setUserRatings] = useState([]);
  const { userDetails, token } = useAuth();
  const items = useMenuItems();

  const weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const mealTypes = ["Breakfast", "Lunch", "Snacks", "Dinner"];

  useEffect(() => {
    async function fetchUserRatings() {
      console.log(userDetails.ObjectID);
      try {
        const response = await fetch(
          `${baseUrl}/api/v1/userRatings?userId=${userDetails.ObjectID}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await response.json();
        setUserRatings(data);
      } catch (error) {
        console.error("Error fetching user ratings:", error);
      }
    }
    fetchUserRatings();
  }, [token, userDetails]);

  async function handleFinalSubmit() {
    console.log(userDetails);
    const hostelName = userDetails.hostelname; // Dynamic hostel name
    const formData = {
      userId: userDetails.ObjectID,
      hostel_name: hostelName,
      day: day,
      meal_type: meal_type,
      rating: selectedRating,
    };
    console.log(formData);
    try {
      const response = await fetch(`${baseUrl}/api/v1/menuReview`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Rating submitted successfully");
        setUserRatings([...userRatings, formData]);
      } else {
        console.error("Failed to submit rating");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const handleRateClick = (day, meal) => {
    setShowModal(true);
    setMealType(meal);
    setDay(day);
  };

  const hasRated = (day, mealType) => {
    return userRatings.some(
      (rating) => rating.day === day && rating.meal_type === mealType
    );
  };

  const toggleDay = (day) => {
    setSelectedDay(selectedDay === day ? null : day);
  };

  return (
    <>
      <div className="bg-neutral-100 w-full text-black min-h-screen text-center md:text-left overflow-auto">
        <div className="max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full h-full overflow-auto">
          <div className="pb-8 mt-2">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Menu Rating
            </p>
          </div>

          {/* Computer Screen Layout */}
          <div className="hidden sm:block">
            <div className="grid grid-cols-5 gap-8 sm:px-5">
              <div></div>
              {mealTypes.map((meal, index) => (
                <div key={index} className="flex justify-center">
                  <h4 className="text-xl font-semibold mb-2">{meal}</h4>
                </div>
              ))}
            </div>
            {weekdays.map((day, dayIndex) => (
              <div key={dayIndex} className="grid grid-cols-5 gap-8 sm:px-5">
                <div className="flex justify-center items-center">
                  <h3 className="text-2xl font-bold">{day}</h3>
                </div>
                {mealTypes.map((meal, mealIndex) => (
                  <div
                    key={mealIndex}
                    className="flex flex-col items-center h-54 w-64"
                  >
                    {items
                      .filter((_, itemIndex) => itemIndex % 4 === mealIndex)
                      .slice(dayIndex, dayIndex + 1)
                      .map(({ id, src, link }) => (
                        <div
                          key={id}
                          className="shadow-md shadow-gray-600 rounded-lg overflow-hidden bg-neutral-800 mb-4 cursor-pointer"
                        >
                          <img
                            src={src}
                            alt=""
                            className="rounded-md duration-200 hover:scale-105"
                          />
                          <div className="flex items-center justify-center">
                            {hasRated(day, meal) ? (
                              <button
                                className="w-full px-6 py-3 m-4 duration-200 cursor-not-allowed text-teal-500"
                                disabled
                              >
                                Rated
                              </button>
                            ) : (
                              <button
                                className="w-full px-6 py-3 m-4 duration-200 hover:scale-105 text-neutral-100"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleRateClick(day, meal);
                                }}
                              >
                                Rate
                              </button>
                            )}
                          </div>
                        </div>
                      ))}
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Mobile Screen Layout */}
          <div className="block sm:hidden">
            {weekdays.map((day, dayIndex) => (
              <div key={dayIndex} className="pb-4">
                <div className="flex justify-center items-center flex-col">
                  <h3
                    className="text-2xl font-bold mb-2 cursor-pointer"
                    onClick={() => toggleDay(day)}
                  >
                    {day}
                  </h3>
                  {selectedDay === day && (
                    <button
                      className="text-2xl text-black"
                      onClick={() => toggleDay(null)}
                    >
                      &times;
                    </button>
                  )}
                </div>
                {selectedDay === day && (
                  <div className="p-4  rounded-lg bg-gray-100">
                    {mealTypes.map((meal, mealIndex) => (
                      <div
                        key={mealIndex}
                        className="mb-4 p-4 shadow-md rounded-lg bg-white"
                      >
                        <h4 className="text-xl font-semibold mb-2">{meal}</h4>
                        {items
                          .filter((_, itemIndex) => itemIndex % 4 === mealIndex)
                          .slice(dayIndex, dayIndex + 1)
                          .map(({ id, src, link }) => (
                            <div
                              key={id}
                              className="shadow-md shadow-gray-600 rounded-lg bg-neutral-800 mb-4 cursor-pointer"
                            >
                              <img
                                src={src}
                                alt=""
                                className="rounded-md duration-200 hover:scale-105"
                              />
                              <div className="flex items-center justify-center">
                                {hasRated(day, meal) ? (
                                  <button
                                    className="w-full px-6 py-3 m-4 duration-200 cursor-not-allowed text-teal-500"
                                    disabled
                                  >
                                    Rated
                                  </button>
                                ) : (
                                  <button
                                    className="w-full px-6 py-3 m-4 duration-200 hover:scale-105 text-neutral-100"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleRateClick(day, meal);
                                    }}
                                  >
                                    Rate
                                  </button>
                                )}
                              </div>
                            </div>
                          ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50 overflow-auto px-4">
          <div className="bg-white p-6 rounded-lg shadow-md relative w-full max-w-md mx-aut0">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-center flex-grow">
                Rate {meal_type} on {day}
              </h3>
              <button
                className="text-gray-500 hover:text-gray-700 text-2xl"
                onClick={() => {
                  setShowModal(false);
                }}
              >
                &times;
              </button>
            </div>
            <div className="flex justify-center items-center space-x-2 mb-6">
              {[...Array(10)].map((_, index) => (
                <button
                  key={index}
                  className={`w-10 h-10 flex items-center justify-center rounded-full border-2 transition-colors ${
                    selectedRating === index + 1
                      ? "bg-teal-500 text-white border-teal-500"
                      : "bg-gray-200 text-gray-700 border-gray-200 hover:bg-gray-300"
                  }`}
                  onClick={() => setSelectedRating(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            <div className="flex justify-center">
              <button
                className="px-6 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition-colors"
                onClick={() => {
                  handleFinalSubmit();
                  setShowModal(false);
                  setSelectedRating(null);
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
