import React, { useState, useEffect } from "react";
import "./Header.css";
import { FaStar } from "react-icons/fa";

export default function Header(params) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;

      const scrollPercentage =
        (scrollPosition / (documentHeight - windowHeight)) * 100;

      if (scrollPercentage > 40) {
        setIsSticky(true); // Make header sticky between 30% and 40% of scroll
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="border-t border-black mb-2 mt-10"></div>
      <div
        className={`${
          isSticky ? "sticky top-0 z-10" : ""
        } flex items-center justify-between px-4 py-2 bg-white transition-all duration-300`}
        style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
      >
        <div className="flex items-center space-x-4 ml-45 ">
          <div className="flex items-center">
            <div className="bg-customTeal text-white px-3 py-1 text-sm font-medium rounded-l-md">
              {params.price} a month
            </div>
            <div className="w-3 h-3 bg-teal-500 transform -skew-x-12 -ml-1"></div>
          </div>
          <h1 className="text-lg ">{params.title}</h1>
        </div>

        <div className="flex items-center space-x-4 mr-40">
          <div className="flex items-center space-x-1">
            <FaStar className="text-black" />
            <FaStar className="text-black" />
            <FaStar className="text-black" />
            <FaStar className="text-black" />
            <FaStar className="text-black" />
            <h3 className="text-sm font-medium ml-2">
              {params.ratings} ratings
            </h3>
          </div>
          <button className="bg-customTeal text-white font-medium py-2 px-4 rounded shadow hover:bg-teal-600 hover:scale-105 hover:translate-[-5px_-5px] transition-all duration-300 border border-black">
            Add to cart
          </button>
        </div>
      </div>
      <div className="border-t border-black mt-2"></div>
    </>
  );
}
