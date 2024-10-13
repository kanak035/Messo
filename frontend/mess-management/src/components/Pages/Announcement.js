// import React, { useState, useEffect } from "react";

// const Announcement = () => {
//   const [announcements, setAnnouncements] = useState([]);

//   useEffect(() => {
//     const fetchAnnouncements = async () => {
//       try {
//         const response = await fetch(
//           "http://localhost:5000/api/v1/getAllAnnouncements"
//         );
//         const data = await response.json();
//         // Sort the announcements based on the created_at date in descending order
//         const sortedAnnouncements = data.sort(
//           (a, b) => new Date(b.created_at) - new Date(a.created_at)
//         );
//         setAnnouncements(sortedAnnouncements);
//       } catch (error) {
//         console.error("Error fetching announcements:", error);
//       }
//     };

//     fetchAnnouncements();
//   }, []);

//   // Function to format date in dd mm yyyy format
//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     const day = date.getDate().toString().padStart(2, "0");
//     const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Month is zero-based
//     const year = date.getFullYear();
//     return `${day}-${month}-${year}`;
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex justify-center p-4">
//       <div className="max-w-screen-lg w-full bg-white shadow-md rounded-lg p-6">
//         <h1 className="text-3xl font-bold mb-6 text-center">Announcements</h1>
//         {announcements.map((announcement) => (
//           <div
//             key={announcement._id}
//             className="mb-6 p-4 border rounded-lg shadow-md"
//           >
//             <h2 className="text-xl font-semibold mb-2">
//               {announcement.subject}
//             </h2>
//             <p className="text-gray-700 mb-2">{announcement.announcement}</p>
//             <p className="text-sm text-gray-500">
//               Posted on: {formatDate(announcement.created_at)}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Announcement;

import React, { useState, useEffect } from "react";
import { useAuth } from "../../Auth/authProvider";
import { baseUrl } from "../../helper";

const Announcement = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [announcementsPerPage] = useState(5); // Adjust the number of announcements per page here
  const { token, userDetails } = useAuth();
  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await fetch(
          `${baseUrl}/api/v1/getAllAnnouncements?hostelName=${userDetails.hostelname}`,
          {
            headers: {
              Authorization: `Bearer ${token}`, // Use token for authorized requests
            },
          }
        );
        const data = await response.json();
        // Sort the announcements based on the created_at date in descending order
        const sortedAnnouncements = data.sort(
          (a, b) => new Date(b.created_at) - new Date(a.created_at)
        );
        setAnnouncements(sortedAnnouncements);
      } catch (error) {
        console.error("Error fetching announcements:", error);
      }
    };

    fetchAnnouncements();
  }, [token, userDetails]);

  // Function to format date in dd mm yyyy format
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Month is zero-based
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  // Calculate current announcements based on pagination
  const indexOfLastAnnouncement = currentPage * announcementsPerPage;
  const indexOfFirstAnnouncement =
    indexOfLastAnnouncement - announcementsPerPage;
  const currentAnnouncements = announcements.slice(
    indexOfFirstAnnouncement,
    indexOfLastAnnouncement
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center p-4">
      <div className="max-w-screen-lg w-full bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Announcements</h1>
        {currentAnnouncements.map((announcement) => (
          <div
            key={announcement._id}
            className="mb-6 p-4 border rounded-lg shadow-md"
          >
            <h2 className="text-xl font-semibold mb-2">
              {announcement.subject}
            </h2>
            <p className="text-gray-700 mb-2">{announcement.announcement}</p>
            <p className="text-sm text-gray-500">
              Posted on: {formatDate(announcement.created_at)}
            </p>
          </div>
        ))}

        {/* Pagination Controls at Bottom */}
        <div className="mt-4 flex justify-center">
          {Array.from(
            { length: Math.ceil(announcements.length / announcementsPerPage) },
            (_, index) => (
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
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Announcement;
