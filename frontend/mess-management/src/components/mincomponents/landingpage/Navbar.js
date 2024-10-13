import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-teal-600">MESSO.</h1>
      <ul className="hidden md:flex space-x-4">
        <li className="inline-block">
          <button
            onClick={() => navigate("/login")}
            className="bg-teal-600 text-white hover:text-gray-200 px-auto py-2 rounded "
            style={{ width: "80px", whiteSpace: "nowrap" }}
          >
            Sign In
          </button>
        </li>
        <li className="inline-block">
          <button
            onClick={() => navigate("/signup")}
            className="bg-teal-600 text-white hover:text-gray-200 px-auto py-2 rounded "
            style={{ width: "80px", whiteSpace: "nowrap" }}
          >
            Sign Up
          </button>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-teal-600 m-4">MESSO.</h1>
        <li className="p-4 border-b border-gray-600">
          <button
            onClick={() => navigate("/login")}
            className="text-white hover:text-gray-200 block px-4 py-2 "
            style={{ width: "80px", whiteSpace: "nowrap" }}
          >
            Sign In
          </button>
        </li>
        <li className="p-4 border-b border-gray-600">
          <button
            onClick={() => navigate("/signup")}
            className="text-white hover:text-gray-200 block px-4 py-2 "
            style={{ width: "80px", whiteSpace: "nowrap" }}
          >
            Sign Up
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
