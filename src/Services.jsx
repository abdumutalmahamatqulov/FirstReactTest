import React, { useState } from "react";
import service1 from "./assets/service-1.jpg";
import service2 from "./assets/service-2.jpg";
import service3 from "./assets/service-3.jpg"; // This may be removed if not used
import service4 from "./assets/service-4.jpg";

const Services = () => {
  const [selectedImage, setSelectedImage] = useState(service1);

  return (
    <div className="flex flex-col md:flex-row items-stretch gap-4 px-20 py-8">
      {/* Left Section */}
      <div className="w-full md:w-1/3 bg-gray-100 p-4 rounded-lg">
        <div className="space-y-4">
          <div
            className={`p-4 rounded-lg flex items-center cursor-pointer ${
              selectedImage === service1 ? "bg-red-600 text-white" : "bg-gray-200"
            }`}
            onClick={() => setSelectedImage(service1)}
          >
            <span className="text-2xl mr-3">🚗</span>
            <span className="font-semibold">Diagnostics</span>
          </div>
          <div
            className={`p-4 rounded-lg flex items-center cursor-pointer ${
              selectedImage === service2 ? "bg-red-600 text-white" : "bg-gray-200"
            }`}
            onClick={() => setSelectedImage(service2)}
          >
            <span className="text-red-600 text-2xl mr-3">🚘</span>
            <span className="font-semibold text-gray-800">Engine Maintenance</span>
          </div>
          <div
            className={`p-4 rounded-lg flex items-center cursor-pointer ${
              selectedImage === service3 ? "bg-red-600 text-white" : "bg-gray-200"
            }`}
            onClick={() => setSelectedImage(service3)}
          >
            <span className="text-red-600 text-2xl mr-3">🚘</span>
            <span className="font-semibold text-gray-800">Tire Replacement</span>
          </div>
          <div
            className={`p-4 rounded-lg flex items-center cursor-pointer ${
              selectedImage === service4 ? "bg-red-600 text-white" : "bg-gray-200"
            }`}
            onClick={() => setSelectedImage(service4)}
          >
            <span className="text-red-600 text-2xl mr-3">🛢️</span>
            <span className="font-semibold text-gray-800">Oil Change</span>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Image */}
        <div className="w-full h-full">
          <img
            src={selectedImage}
            alt="Car Maintenance"
            className="w-full h-[400px]"
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="w-full md:w-1/2 p-6 space-y-8 ml-6 gap-20">
        <h3 className="text-xl font-bold text-gray-600 scale-150 ml-[80px]">
            <font className="">
                <font>
                    15 Years of Experience in Auto Service
                </font>
            </font>
        </h3>
        <p className="text-gray-600">
          We provide high-quality diagnostic services for your car, using the most modern technologies and equipment.
        </p>
        <p className="flex items-center text-green-600">
        <span className="mr-2">✔</span> Quality Service
        </p>
        <p className="flex items-center text-green-600">
        <span className="mr-2">✔</span> Experienced Specialists
        </p>
        <p className="flex items-center text-green-600">
        <span className="mr-2">✔</span> Modern Equipment
        </p>
        <button className="bg-red-600 text-white py-5 px-14 rounded-lg font-semibold hover:bg-red-700">
          CALL →
        </button>
      </div>
    </div>
  );
};

export default Services;
