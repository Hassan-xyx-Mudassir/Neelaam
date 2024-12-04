import React, { useState, useEffect } from "react";
import "./Header.css";
import { FaStar } from "react-icons/fa";

export default function Header(params) {
  const [isSticky, setIsSticky] = useState(false);
  const rating = 5;
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<FaStar key={i} className="text-black" />);
    }
    return stars;
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;

      const scrollPercentage =
        (scrollPosition / (documentHeight - windowHeight)) * 100;

      if (scrollPercentage >= 30) {
        setIsSticky(true);
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
      <div className="w-full border-t border-black mt-5"></div>
      <div
        className={`${
          isSticky ? "sticky top-0 z-10" : ""
        } flex flex-col items-center bg-white transition-all duration-300`}
        style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
      >
        <div className="flex items-center justify-between w-full px-4 py-2">
          <div className="flex items-center space-x-4 ml-45">
            <div className="flex items-center">
              <div className="bg-customTeal text-white px-3 py-1 text-sm font-medium rounded-l-md">
                {params.price} a month
              </div>
              <div className="w-3 h-3 bg-teal-500 transform -skew-x-12 -ml-1"></div>
            </div>
            <h1 className="text-lg">{params.title}</h1>
          </div>
          <div className="flex items-center space-x-4 mr-40">
            <div className="flex items-center space-x-1">
              {renderStars()}
              <h3 className="text-sm font-medium ml-2">
                {params.ratings} ratings
              </h3>
            </div>
            <button className="bg-customTeal text-white font-medium py-2 px-4 rounded shadow hover:bg-teal-600 hover:scale-105 hover:translate-[-5px_-5px] transition-all duration-300 border border-black">
              Add to cart
            </button>
          </div>
        </div>

        <div className="w-full border-t border-black"></div>
      </div>
    </>
  );
}
