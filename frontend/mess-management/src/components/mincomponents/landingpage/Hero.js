import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactTyped as Typed } from "react-typed";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-teal-600 font-bold p-2">IMPROVING MESS MANAGEMENT</p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Manage your mess efficiently.
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Effective solutions for
          </p>
          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
            // strings={["Menu", "Complaint", "Reviews"]}
            strings={["BH-1", "BH-2", "BH-3", "BH-4", "BH-5", "GH", "IVH"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Monitor and manage your mess activities, handle complaints, and gather
          feedback efficiently.
        </p>
        <button
          onClick={() => navigate("/signup")}
          className="bg-teal-600 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
