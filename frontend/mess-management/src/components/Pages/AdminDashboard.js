// import React, { useState, useEffect } from "react";
// import { useAuth } from "../../Auth/authProvider";

// const weekdays = [
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
//   "Sunday",
// ];
// const mealTypes = ["Breakfast", "Lunch", "Snacks", "Dinner"];

// export default function AdminDashboard() {
//   const [ratings, setRatings] = useState([]);
//   const [complaints, setComplaints] = useState([]);
//   const [isDialogOpen, setIsDialogOpen] = useState(false);
//   const [subject, setSubject] = useState("");
//   const [content, setContent] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage] = useState(5); // Change this value to set the number of items per page
//   const { token } = useAuth();

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const ratingsResponse = await fetch(
//           "http://localhost:5000/api/v1/ratingByDayAndMealType",
//           {
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: `Bearer ${token}`, // Use token for authorized requests
//             },
//           }
//         );
//         const ratingsData = await ratingsResponse.json();
//         setRatings(ratingsData);

//         const complaintsResponse = await fetch(
//           "http://localhost:5000/api/v1/getComplaints",
//           {
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: `Bearer ${token}`, // Use token for authorized requests
//             },
//           }
//         );
//         const complaintsData = await complaintsResponse.json();
//         setComplaints(complaintsData);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     }

//     fetchData();
//   }, [token]);

//   const getRating = (day, mealType) => {
//     const rating = ratings.find(
//       (r) => r._id.day === day && r._id.meal_type === mealType
//     );
//     return rating ? rating.averageRating.toFixed(2) : "No data";
//   };

// const handleSendAnnouncement = async () => {
//   try {
//     let hostel_name = "BH-3";
//     const isAdmin = localStorage.getItem("isAdmin") === "true";
//     const response = await fetch(
//       "http://localhost:5000/api/v1/createAnnouncement",
//       {
//         method: "POST",
//         mode: "cors",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`, // Use token for authorized requests
//         },
//         body: JSON.stringify({
//           subject: subject,
//           announcement: content,
//           isAdmin: isAdmin,
//           hostel_name: hostel_name,
//         }),
//       }
//     );

//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const result = await response.json();
//     console.log(result);
//   } catch (error) {
//     console.error("Error:", error);
//   }
//   setIsDialogOpen(false);
// };

//   const handleDeleteComplaint = async (id) => {
//     try {
//       await fetch(`http://localhost:5000/api/v1/deleteComplaint/${id}`, {
//         method: "DELETE",
//         headers: {
//           Authorization: `Bearer ${token}`, // Use token for authorized requests
//         },
//       });
//       setComplaints(complaints.filter((complaint) => complaint._id !== id));
//     } catch (error) {
//       console.error("Error deleting complaint:", error);
//     }
//   };

//   const handleStatusChange = async (id, status) => {
//     try {
//       await fetch(`http://localhost:5000/api/v1/updateComplaintStatus/${id}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",

//         },
//         body: JSON.stringify({ status }),
//       });

//       setComplaints(
//         complaints.map((complaint) =>
//           complaint._id === id ? { ...complaint, status } : complaint
//         )
//       );
//     } catch (error) {
//       console.error("Error updating status:", error);
//     }
//   };

//   // Calculate pagination variables
//   const indexOfLastComplaint = currentPage * itemsPerPage;
//   const indexOfFirstComplaint = indexOfLastComplaint - itemsPerPage;
//   const currentComplaints = complaints.slice(
//     indexOfFirstComplaint,
//     indexOfLastComplaint
//   );
//   const totalPages = Math.ceil(complaints.length / itemsPerPage);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   return (
//     <div className="bg-neutral-100 w-full text-black min-h-screen text-center md:text-left overflow-auto">
//       <div className="max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full h-full relative ">
//         {/* Send Announcement Button */}
//         <button
//           className="absolute top-4 right-4 bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 focus:outline-none mt-4"
//           onClick={() => setIsDialogOpen(true)}
//         >
//           Send Announcement
//         </button>

//         <div className="pb-8 mt-2">
//           <p className="text-4xl font-bold inline border-b-4 border-gray-500">
//             Admin Dashboard
//           </p>
//         </div>

//         <div className="pb-8 mt-4">
//           <h2 className="text-2xl font-semibold">Meal Ratings</h2>
//           <div className="mt-4 overflow-auto">
//             <table className="min-w-full bg-white shadow-md rounded-lg">
//               <thead className="bg-teal-600 text-white">
//                 <tr>
//                   <th className="py-2 px-4 border-b"></th>
//                   {mealTypes.map((mealType, index) => (
//                     <th key={index} className="py-2 px-4 border-b">
//                       {mealType}
//                     </th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody>
//                 {weekdays.map((day, dayIndex) => (
//                   <tr key={dayIndex} className="hover:bg-teal-100">
//                     <td className="py-2 px-4 border-b font-bold">{day}</td>
//                     {mealTypes.map((mealType, mealTypeIndex) => (
//                       <td key={mealTypeIndex} className="py-2 px-4 border-b">
//                         {getRating(day, mealType)}
//                       </td>
//                     ))}
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         <div className="pb-8 mt-4">
//           <h2 className="text-2xl font-semibold">Complaints & Suggestions</h2>
//           <div className="mt-4">
//             {currentComplaints.length > 0 ? (
//               currentComplaints.map((complaint) => (
//                 <div
//                   key={complaint._id}
//                   className="mb-6 p-4 border rounded-lg shadow-md bg-white"
//                 >
//                   <h2 className="text-xl font-semibold mb-2">
//                     {complaint.subject}
//                   </h2>
//                   <p className="mb-2">{complaint.message}</p>
//                   <p className="text-sm text-gray-500">
//                     <strong>Email:</strong> {complaint.email}
//                   </p>
//                   <p className="text-sm text-gray-500">
//                     <strong>Message Type:</strong> {complaint.messageType}
//                   </p>
//                   <div className="mt-4">
//                     <label className="mr-2">Status:</label>
//                     <select
//                       value={complaint.status}
//                       onChange={(e) =>
//                         handleStatusChange(complaint._id, e.target.value)
//                       }
//                       className={`border rounded p-2 ${
//                         complaint.status === "Pending"
//                           ? "text-red-500"
//                           : "text-green-500"
//                       }`}
//                     >
//                       <option className="text-black" value="Pending">
//                         Pending
//                       </option>
//                       <option className="text-black" value="Checked">
//                         Checked
//                       </option>
//                     </select>
//                     <button
//                       onClick={() => handleDeleteComplaint(complaint._id)}
//                       className="ml-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 focus:outline-none"
//                     >
//                       Delete
//                     </button>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <p>No complaints available.</p>
//             )}
//           </div>

//           {/* Pagination Controls */}
//           <div className="flex justify-center mt-4">
//             {Array.from({ length: totalPages }, (_, index) => (
//               <button
//                 key={index}
//                 onClick={() => paginate(index + 1)}
//                 className={`px-4 py-2 mx-1 rounded ${
//                   currentPage === index + 1
//                     ? "bg-teal-600 text-white"
//                     : "bg-gray-200"
//                 }`}
//               >
//                 {index + 1}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Announcement Dialog */}
//         {isDialogOpen && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//             <div className="relative max-w-2xl w-full bg-neutral-900 p-10 rounded-lg shadow-lg mb-28">
//               <button
//                 onClick={() => setIsDialogOpen(false)}
//                 className="absolute top-3 right-3 text-white text-3xl font-bold focus:outline-none"
//               >
//                 &times;
//               </button>
//               <h2 className="text-3xl font-bold text-white mb-6">
//                 Send Announcement
//               </h2>
//               <form
//                 onSubmit={(e) => {
//                   e.preventDefault();
//                   handleSendAnnouncement();
//                 }}
//               >
//                 <div className="mb-4">
//                   <label className="block text-gray-400">Subject</label>
//                   <input
//                     type="text"
//                     value={subject}
//                     onChange={(e) => setSubject(e.target.value)}
//                     className="w-full mt-2 p-3 bg-gray-700 rounded text-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-600"
//                     placeholder="Enter subject"
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label className="block text-gray-400">Announcement</label>
//                   <textarea
//                     value={content}
//                     onChange={(e) => setContent(e.target.value)}
//                     rows="10"
//                     className="w-full mt-2 p-3 bg-gray-700 rounded text-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
//                     placeholder="Enter announcement"
//                   ></textarea>
//                 </div>
//                 <button
//                   type="submit"
//                   className="w-full p-3 bg-teal-600 text-white rounded hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
//                 >
//                   Send
//                 </button>
//               </form>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { useAuth } from "../../Auth/authProvider";
import { baseUrl } from "../../helper";

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

export default function AdminDashboard() {
  const [ratings, setRatings] = useState([]);
  const [complaints, setComplaints] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const { token, userDetails } = useAuth();
  const [visibleImages, setVisibleImages] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const hostelName = userDetails.hostelname;

        const ratingsResponse = await fetch(
          `${baseUrl}/api/v1/ratingByDayAndMealType?hostelName=${hostelName}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const ratingsData = await ratingsResponse.json();
        setRatings(ratingsData);

        const complaintsResponse = await fetch(
          `${baseUrl}/api/v1/getComplaints?hostelName=${hostelName}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const complaintsData = await complaintsResponse.json();
        setComplaints(complaintsData.reverse());
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [token, userDetails.hostelname]);

  const getRating = (day, mealType) => {
    const rating = ratings.find(
      (r) => r._id.day === day && r._id.meal_type === mealType
    );
    return rating ? rating.averageRating.toFixed(2) : "No data";
  };

  const handleSendAnnouncement = async () => {
    try {
      let hostel_name = userDetails.hostelname;
      const isAdmin = localStorage.getItem("isAdmin") === "true";
      const response = await fetch(`${baseUrl}/api/v1/createAnnouncement`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Use token for authorized requests
        },
        body: JSON.stringify({
          subject: subject,
          announcement: content,
          isAdmin: isAdmin,
          hostel_name: hostel_name,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error("Error:", error);
    }
    setIsDialogOpen(false);
    setSubject("");
    setContent("");
  };
  const handleDeleteComplaint = async (id) => {
    try {
      await fetch(`${baseUrl}/api/v1/deleteComplaint/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      setComplaints(complaints.filter((complaint) => complaint._id !== id));
    } catch (error) {
      console.error("Error deleting complaint:", error);
    }
  };

  const handleStatusChange = async (id, status) => {
    try {
      await fetch(`${baseUrl}/api/v1/updateComplaintStatus/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status }),
      });

      setComplaints(
        complaints.map((complaint) =>
          complaint._id === id ? { ...complaint, status } : complaint
        )
      );
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  //extra
  const toggleImageVisibility = (id) => {
    setVisibleImages((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };
  const handleDownloadExcel = async () => {
    try {
      const response = await fetch(`${baseUrl}/api/v1/exportComplaints`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to download the Excel file");
      }

      // Convert the response to a Blob
      const blob = await response.blob();

      // Create a link element and trigger the download
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "complaints.xlsx");
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    } catch (error) {
      console.error("Error downloading the Excel file:", error);
    }
  };

  console.log(complaints);
  const currentComplaints = complaints.slice(
    currentPage * itemsPerPage - itemsPerPage,
    currentPage * itemsPerPage
  );
  const totalPages = Math.ceil(complaints.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="bg-neutral-100 w-full text-black min-h-screen text-center md:text-left overflow-auto">
      <div className="max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full h-full sm:relative">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-8 mt-2">
          <div className="pb-8 mt-2 mx-auto sm:mx-0">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
              Admin Dashboard
            </p>
          </div>
          <button
            className="sm:absolute sm:top-4 sm:right-4 bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 focus:outline-none mt-4 mx-auto"
            onClick={() => setIsDialogOpen(true)}
          >
            Send Announcement
          </button>
        </div>

        <div className="pb-8 mt-4 ">
          <h2 className="text-2xl font-semibold">Meal Ratings</h2>
          <div className="mt-4 overflow-auto">
            <table className="min-w-full bg-white shadow-md rounded-lg">
              <thead className="bg-teal-600 text-white">
                <tr>
                  <th className="py-2 px-4 border-b"></th>
                  {mealTypes.map((mealType, index) => (
                    <th key={index} className="py-2 px-4 border-b">
                      {mealType}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {weekdays.map((day, dayIndex) => (
                  <tr key={dayIndex} className="hover:bg-teal-100">
                    <td className="py-2 px-4 border-b font-bold">{day}</td>
                    {mealTypes.map((mealType, mealTypeIndex) => (
                      <td key={mealTypeIndex} className="py-2 px-4 border-b">
                        {getRating(day, mealType)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="pb-8 mt-4">
          {/* <h2 className="text-2xl font-semibold">Complaints & Suggestions</h2> */}
          <div className="flex items-center justify-between sm:flex-row flex-col gap-4">
            <h2 className="text-2xl font-semibold">Complaints & Suggestions</h2>
            <button
              className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 focus:outline-none"
              onClick={handleDownloadExcel}
            >
              Download Excel Sheet
            </button>
          </div>

          <div className="mt-4">
            {currentComplaints.length > 0 ? (
              currentComplaints.map((complaint) => (
                <div
                  key={complaint._id}
                  className="mb-6 p-4 border rounded-lg shadow-md bg-white"
                >
                  {/* <h2 className="text-xl font-semibold mb-2">
                    {complaint.subject}
                  </h2>
                  <p className="mb-2">{complaint.message}</p>
                  <p className="text-sm text-gray-600">
                    Sent from: {complaint.email}
                  </p> */}
                  <div className="flex sm:flex-row flex-col justify-between items-center mb-2">
                    <h2 className="text-xl font-semibold">
                      {complaint.subject}
                    </h2>
                    <p className="text-sm text-gray-600">
                      Sent from: {complaint.email}
                    </p>
                  </div>
                  <p className="mb-2">{complaint.message}</p>
                  {complaint.imageUrl && (
                    <button
                      onClick={() => toggleImageVisibility(complaint._id)}
                      className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
                    >
                      {visibleImages[complaint._id]
                        ? "Hide Image"
                        : "Show Image"}
                    </button>
                  )}

                  {visibleImages[complaint._id] && complaint.imageUrl && (
                    <div className="mt-4">
                      <img
                        src={complaint.imageUrl}
                        alt="Complaint related"
                        className="max-w-full h-auto rounded-lg shadow-md"
                        style={{ maxWidth: "500px", maxHeight: "400px" }} // Set max size
                      />
                    </div>
                  )}
                  <div className="mt-4">
                    <label className="mr-2">Status:</label>
                    <select
                      value={complaint.status}
                      onChange={(e) =>
                        handleStatusChange(complaint._id, e.target.value)
                      }
                      className={`border rounded p-2 ${
                        complaint.status === "Pending"
                          ? "text-red-500"
                          : "text-green-500"
                      }`}
                    >
                      <option className="text-black" value="Pending">
                        Pending
                      </option>
                      <option className="text-black" value="Checked">
                        Checked
                      </option>
                    </select>
                    <button
                      onClick={() => handleDeleteComplaint(complaint._id)}
                      className="ml-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 focus:outline-none"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p>No complaints available.</p>
            )}
            <div className="flex justify-center mt-4">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => paginate(index + 1)}
                  className={`px-4 py-2 mx-1 rounded ${
                    currentPage === index + 1
                      ? "bg-teal-600 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>

        {isDialogOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="relative max-w-2xl w-full bg-neutral-900 p-10 rounded-lg shadow-lg sm:mb-44 mx-4 my-auto">
              <button
                onClick={() => setIsDialogOpen(false)}
                className="absolute top-3 right-3 text-white text-3xl font-bold focus:outline-none"
              >
                &times;
              </button>
              <h2 className="text-3xl font-bold text-white mb-6">
                Send Announcement
              </h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendAnnouncement();
                }}
              >
                <div className="mb-4">
                  <label className="block text-gray-400">Subject</label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full mt-2 p-3 bg-gray-700 rounded text-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-600"
                    placeholder="Enter subject"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-400">Announcement</label>
                  <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    rows="10"
                    className="w-full mt-2 p-3 bg-gray-700 rounded text-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter announcement"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full p-3 bg-teal-600 text-white rounded hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
