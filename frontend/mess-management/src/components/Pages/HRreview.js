// import React, { useState, useEffect } from "react";
// import ProfileCard from "../mincomponents/hrreview/ProfileCard";

// // Example of fetching HR reviews from backend
// const fetchHRReviews = async (hrname) => {
//   try {
//     const response = await fetch(
//       `http://localhost:5000/api/v1/HR-Review?name=${encodeURIComponent(
//         hrname
//       )}`,
//       {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error fetching HR reviews:", error);
//     return [];
//   }
// };

// export default function HRreview() {
//   const [selectedHRReviews, setSelectedHRReviews] = useState(null);
//   const [isAdmin, setIsAdmin] = useState(false); // State to track admin status

//   useEffect(() => {
//     // Check local storage for admin status on component mount
//     const isAdminLocalStorage = localStorage.getItem("isAdmin");
//     setIsAdmin(isAdminLocalStorage === "true");
//   }, []);

//   // Dummy data for HRs (replace with actual data from API if needed)
//   const hrData = [
//     {
//       name: "Suyash",
//       url: "https://randomuser.me/api/portraits/men/1.jpg",
//       hostelName: "BH-3",
//     },
//     {
//       name: "Hari",
//       url: "https://randomuser.me/api/portraits/men/7.jpg",
//       hostelName: "BH-3",
//     },
//     {
//       name: "Kavin",
//       url: "https://randomuser.me/api/portraits/men/9.jpg",
//       hostelName: "BH-3",
//     },
//     {
//       name: "Varun",
//       url: "https://randomuser.me/api/portraits/men/10.jpg",
//       hostelName: "BH-3",
//     },
//     {
//       name: "Rahul",
//       url: "https://randomuser.me/api/portraits/men/18.jpg",
//       hostelName: "BH-3",
//     },
//     {
//       name: "Harsh",
//       url: "https://randomuser.me/api/portraits/men/44.jpg",
//       hostelName: "BH-3",
//     },
//   ];

//   // Function to handle click on HR name and fetch their reviews
//   const handleHRClick = async (hrName) => {
//     try {
//       const reviews = await fetchHRReviews(hrName);
//       console.log(reviews);
//       setSelectedHRReviews({ name: hrName, reviews });
//     } catch (error) {
//       console.error("Error fetching HR reviews:", error);
//       setSelectedHRReviews(null);
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <div className="pb-8 mt-4">
//         <p className="text-4xl font-bold underline decoration-gray-500 underline-offset-4 text-gray-900 px-2 m-2">
//           Hostel Representatives Review
//         </p>
//         <div className="flex flex-row gap-5 m-4 p-10 bg-white shadow-md rounded-lg">
//           {hrData.map((hr) => (
//             <ProfileCard
//               key={hr.name}
//               name={hr.name}
//               url={hr.url}
//               hostelName={hr.hostelName}
//               onClick={() => handleHRClick(hr.name)}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Admin Section - Conditionally rendered */}
//       {isAdmin && (
//         <div className="pb-8 mt-4">
//           <p className="text-4xl font-bold underline decoration-gray-500 underline-offset-4 text-gray-900 px-2 m-2">
//             Admin Section
//           </p>
//           <div className="grid grid-cols-3 gap-5 m-4 p-10 bg-white shadow-md rounded-lg">
//             {hrData.map((hr) => (
//               <button
//                 key={hr.name}
//                 onClick={() => handleHRClick(hr.name)}
//                 className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 focus:outline-none"
//               >
//                 {hr.name}
//               </button>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Reviews Section */}
//       {selectedHRReviews && (
//         <div className="pb-8 mt-4">
//           <div className="flex flex-col gap-5 m-4 p-10 bg-white shadow-md rounded-lg">
//             <div className="flex justify-between items-center">
//               <p className="text-xl font-bold underline decoration-gray-500 underline-offset-4 text-gray-900 px-2 ">
//                 Reviews for:{" "}
//                 <span className="text-teal-600">{selectedHRReviews.name}</span>
//               </p>
//               <p className="text-gray-600">
//                 Total Reviews: {selectedHRReviews.reviews.length}
//               </p>
//             </div>
//             {selectedHRReviews.reviews.length > 0 ? (
//               <ul className="space-y-4">
//                 {selectedHRReviews.reviews.map((review, index) => (
//                   <li
//                     key={index}
//                     className="border p-4 rounded-lg shadow-md bg-gray-50"
//                   >
//                     {index + 1}. {review.review}
//                   </li>
//                 ))}
//               </ul>
//             ) : (
//               <p>
//                 No reviews available for{" "}
//                 <span className="text-teal-600">{selectedHRReviews.name}</span>.
//               </p>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// import React, { useState } from "react";
// import ProfileCard from "../mincomponents/hrreview/ProfileCard";
// import { useAuth } from "../../Auth/authProvider";

// const fetchHRReviews = async (hrname, token) => {
//   try {
//     const response = await fetch(
//       `http://localhost:5000/api/v1/HR-Review?name=${encodeURIComponent(
//         hrname
//       )}`,
//       {
//         headers: {
//           Authorization: `Bearer ${token}`, // Use token for authorized requests
//         },
//       }
//     );
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error fetching HR reviews:", error);
//     return [];
//   }
// };

// export default function HRreview() {
//   const [selectedHRReviews, setSelectedHRReviews] = useState(null);
//   // const [isAdmin, setIsAdmin] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [reviewsPerPage] = useState(5);
//   const { isSuperAdmin, token } = useAuth(); // Use isAdmin from context

//   // useEffect(() => {
//   //   const isAdminLocalStorage = localStorage.getItem("isAdmin");
//   //   setIsAdmin(isAdminLocalStorage === "true");
//   // }, []);

//   const hrData = [
//     {
//       name: "Suyash",
//       url: "https://randomuser.me/api/portraits/men/1.jpg",
//       hostelName: "BH-3",
//     },
//     {
//       name: "Hari",
//       url: "https://randomuser.me/api/portraits/men/7.jpg",
//       hostelName: "BH-3",
//     },
//     {
//       name: "Kavin",
//       url: "https://randomuser.me/api/portraits/men/9.jpg",
//       hostelName: "BH-3",
//     },
//     {
//       name: "Varun",
//       url: "https://randomuser.me/api/portraits/men/10.jpg",
//       hostelName: "BH-3",
//     },
//     {
//       name: "Rahul",
//       url: "https://randomuser.me/api/portraits/men/18.jpg",
//       hostelName: "BH-3",
//     },
//     {
//       name: "Harsh",
//       url: "https://randomuser.me/api/portraits/men/44.jpg",
//       hostelName: "BH-3",
//     },
//   ];

//   const handleHRClick = async (hrName) => {
//     try {
//       const reviews = await fetchHRReviews(hrName, token);
//       console.log(reviews);
//       setSelectedHRReviews({ name: hrName, reviews });
//       setCurrentPage(1); // Reset to first page on new HR selection
//     } catch (error) {
//       console.error("Error fetching HR reviews:", error);
//       setSelectedHRReviews(null);
//     }
//   };

//   const indexOfLastReview = currentPage * reviewsPerPage;
//   const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
//   const currentReviews =
//     selectedHRReviews &&
//     selectedHRReviews.reviews.slice(indexOfFirstReview, indexOfLastReview);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   return (
//     <div className="container mx-auto p-4">
//       <div className="pb-8 mt-4">
//         <p className="text-4xl font-bold underline decoration-gray-500 underline-offset-4 text-gray-900 px-2 m-2">
//           Hostel Representatives Review
//         </p>
//         <div className="flex flex-row gap-5 m-4 p-10 bg-white shadow-md rounded-lg">
//           {hrData.map((hr) => (
//             <ProfileCard
//               key={hr.name}
//               name={hr.name}
//               url={hr.url}
//               hostelName={hr.hostelName}
//               onClick={() => handleHRClick(hr.name)}
//             />
//           ))}
//         </div>
//       </div>

//       {isSuperAdmin && (
//         <div className="pb-8 mt-4">
//           <p className="text-4xl font-bold underline decoration-gray-500 underline-offset-4 text-gray-900 px-2 m-2">
//             Admin Section
//           </p>
//           <div className="grid grid-cols-3 gap-5 m-4 p-10 bg-white shadow-md rounded-lg">
//             {hrData.map((hr) => (
//               <button
//                 key={hr.name}
//                 onClick={() => handleHRClick(hr.name)}
//                 className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 focus:outline-none"
//               >
//                 {hr.name}
//               </button>
//             ))}
//           </div>
//         </div>
//       )}

//       {selectedHRReviews && (
//         <div className="pb-8 mt-4">
//           <div className="flex flex-col gap-5 m-4 p-10 bg-white shadow-md rounded-lg">
//             <div className="flex justify-between items-center">
//               <p className="text-xl font-bold underline decoration-gray-500 underline-offset-4 text-gray-900 px-2 ">
//                 Reviews for:{" "}
//                 <span className="text-teal-600">{selectedHRReviews.name}</span>
//               </p>
//               <p className="text-gray-600">
//                 Total Reviews: {selectedHRReviews.reviews.length}
//               </p>
//             </div>
//             {selectedHRReviews.reviews.length > 0 ? (
//               <>
//                 <ul className="space-y-4">
//                   {currentReviews.map((review, index) => (
//                     <li
//                       key={index}
//                       className="border p-4 rounded-lg shadow-md bg-gray-50"
//                     >
//                       {indexOfFirstReview + index + 1}. {review.review}
//                     </li>
//                   ))}
//                 </ul>
//                 <div className="flex justify-center mt-4">
//                   {Array.from(
//                     {
//                       length: Math.ceil(
//                         selectedHRReviews.reviews.length / reviewsPerPage
//                       ),
//                     },
//                     (_, i) => (
//                       <button
//                         key={i + 1}
//                         onClick={() => paginate(i + 1)}
//                         className={`mx-1 px-3 py-1 rounded ${
//                           currentPage === i + 1
//                             ? "bg-teal-600 text-white"
//                             : "bg-gray-200"
//                         }`}
//                       >
//                         {i + 1}
//                       </button>
//                     )
//                   )}
//                 </div>
//               </>
//             ) : (
//               <p>
//                 No reviews available for{" "}
//                 <span className="text-teal-600">{selectedHRReviews.name}</span>.
//               </p>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

import React, { useState } from "react";
import ProfileCard from "../mincomponents/hrreview/ProfileCard";
import { useAuth } from "../../Auth/authProvider";
import { baseUrl } from "../../helper";
import { hrProfile } from "../mincomponents/hrreview/hrData";
import { useEffect } from "react";
// import { useEffect } from "react";

const fetchHRReviews = async (hrname, token, hostelName) => {
  try {
    const response = await fetch(
      `${baseUrl}/api/v1/HR-Review?name=${encodeURIComponent(
        hrname
      )}&hostelName=${encodeURIComponent(hostelName)}`,
      {
        headers: {
          Authorization: `Bearer ${token}`, // Use token for authorized requests
        },
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching HR reviews:", error);
    return [];
  }
};

const deleteHRReview = async (reviewId, token, hostelName) => {
  try {
    const response = await fetch(
      `${baseUrl}/api/v1/HR-Review/${reviewId}?hostelName=${encodeURIComponent(
        hostelName
      )}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`, // Use token for authorized requests
        },
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return true;
  } catch (error) {
    console.error("Error deleting HR review:", error);
    return false;
  }
};

const deleteAllHRReviews = async (hrname, token, hostelName) => {
  try {
    const response = await fetch(
      `${baseUrl}/api/v1/HR-Review?name=${encodeURIComponent(
        hrname
      )}&hostelName=${encodeURIComponent(hostelName)}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`, // Use token for authorized requests
        },
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return true;
  } catch (error) {
    console.error("Error deleting all HR reviews:", error);
    return false;
  }
};

export default function HRreview() {
  const [selectedHRReviews, setSelectedHRReviews] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [reviewsPerPage] = useState(5);
  const { isSuperAdmin, token, userDetails } = useAuth();
  const [hrData, setHRData] = useState([]);
  useEffect(() => {
    if (userDetails?.hostelname) {
      const hrprofs = hrProfile[userDetails.hostelname] || [];
      setHRData(hrprofs);
    }
  }, [userDetails]);

  const handleHRClick = async (hrName) => {
    try {
      const reviews = await fetchHRReviews(
        hrName,
        token,
        userDetails.hostelname
      );
      reviews.reverse();
      console.log(reviews);
      setSelectedHRReviews({ name: hrName, reviews });
      setCurrentPage(1); // Reset to first page on new HR selection
    } catch (error) {
      console.error("Error fetching HR reviews:", error);
      setSelectedHRReviews(null);
    }
  };

  const handleDeleteReview = async (reviewId) => {
    const success = await deleteHRReview(
      reviewId,
      token,
      userDetails.hostelname
    );
    if (success) {
      setSelectedHRReviews((prev) => ({
        ...prev,
        reviews: prev.reviews.filter((review) => review._id !== reviewId),
      }));
    }
  };

  const handleDeleteAllReviews = async () => {
    const success = await deleteAllHRReviews(
      selectedHRReviews.name,
      token,
      userDetails.hostelname
    );
    if (success) {
      setSelectedHRReviews((prev) => ({ ...prev, reviews: [] }));
    }
  };

  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews =
    selectedHRReviews &&
    selectedHRReviews.reviews.slice(indexOfFirstReview, indexOfLastReview);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto p-4">
      <div className="pb-8 mt-4">
        <p className="text-4xl font-bold underline decoration-gray-500 underline-offset-4 text-gray-900 px-2 m-2">
          Hostel Representatives Review
        </p>
        <div className="flex flex-col sm:flex-row gap-5 m-4 p-10 bg-white shadow-md rounded-lg">
          {hrData.map((hr) => (
            <ProfileCard
              key={hr.name}
              name={hr.name}
              url={hr.url}
              hostelName={hr.hostelName}
              onClick={() => handleHRClick(hr.name)}
            />
          ))}
        </div>
      </div>

      {isSuperAdmin && (
        <div className="pb-8 mt-4">
          <p className="text-4xl font-bold underline decoration-gray-500 underline-offset-4 text-gray-900 px-2 m-2">
            Admin Section
          </p>
          <div className="grid grid-col-2 sm:grid-cols-3 gap-5 m-4 p-10 bg-white shadow-md rounded-lg">
            {hrData.map((hr) => (
              <button
                key={hr.name}
                onClick={() => handleHRClick(hr.name)}
                className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 focus:outline-none"
              >
                {hr.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {selectedHRReviews && (
        <div className="pb-8 mt-4">
          <div className="flex flex-col gap-5 m-4 p-10 bg-white shadow-md rounded-lg">
            <div className="flex justify-between items-center">
              <p className="text-xl font-bold underline decoration-gray-500 underline-offset-4 text-gray-900 px-2 ">
                Reviews for:{" "}
                <span className="text-teal-600">{selectedHRReviews.name}</span>
              </p>
              <p className="text-gray-600">
                Total Reviews: {selectedHRReviews.reviews.length}
              </p>
            </div>
            {selectedHRReviews.reviews.length > 0 && (
              <button
                onClick={handleDeleteAllReviews}
                className="self-end bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 focus:outline-none"
              >
                Delete All Reviews
              </button>
            )}
            {selectedHRReviews.reviews.length > 0 ? (
              <>
                <ul className="space-y-4">
                  {currentReviews.map((review, index) => (
                    <li
                      key={review._id}
                      className="border p-4 rounded-lg shadow-md bg-gray-50 flex justify-between items-center"
                    >
                      <span>
                        {indexOfFirstReview + index + 1}. {review.review}
                      </span>
                      <button
                        onClick={() => handleDeleteReview(review._id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        &times;
                      </button>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-center mt-4">
                  {Array.from(
                    {
                      length: Math.ceil(
                        selectedHRReviews.reviews.length / reviewsPerPage
                      ),
                    },
                    (_, i) => (
                      <button
                        key={i + 1}
                        onClick={() => paginate(i + 1)}
                        className={`mx-1 px-3 py-1 rounded ${
                          currentPage === i + 1
                            ? "bg-teal-600 text-white"
                            : "bg-gray-200"
                        }`}
                      >
                        {i + 1}
                      </button>
                    )
                  )}
                </div>
              </>
            ) : (
              <p>
                No reviews available for{" "}
                <span className="text-teal-600">{selectedHRReviews.name}</span>.
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
