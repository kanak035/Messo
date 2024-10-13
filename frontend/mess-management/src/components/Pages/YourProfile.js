import React from "react";
import { useAuth } from "../../Auth/authProvider"; // Adjust the import path to fit your project structure

const UserProfilePage = () => {
  const { userDetails, isAdmin, isSuperAdmin } = useAuth();

  if (!userDetails) {
    return <div>Loading...</div>; // Display a loading message while userDetails is null
  }

  // Function to determine the user role
  const getUserRole = () => {
    if (isSuperAdmin) {
      return "Super Admin";
    } else if (isAdmin) {
      return "Admin";
    } else {
      return "User";
    }
  };

  return (
    <div className="p-4 max-w-md sm:mx-auto bg-white rounded-lg shadow-md md:max-w-xl sm:mt-10 mt-20 mx-4">
      <h2 className="text-2xl font-semibold mb-4 text-center ">Your Profile</h2>
      <div className="space-y-3">
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-1">
            Name:
          </label>
          <p className="text-gray-600">{userDetails.name}</p>
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-1">
            Hostel Name:
          </label>
          <p className="text-gray-600">{userDetails.hostelname}</p>
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-1">
            Email:
          </label>
          <p className="text-gray-600">{userDetails.email}</p>
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-1">
            Role:
          </label>
          <p className="text-gray-600">{getUserRole()}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
