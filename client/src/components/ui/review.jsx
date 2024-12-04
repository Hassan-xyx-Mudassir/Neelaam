import React from "react";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function review(params) {
  const rating = params.rating;
  const renderFilledStars = () => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<FaStar key={i} className="text-black" />);
    }
    return stars;
  };
  const renderEmptyStars = () => {
    const stars = [];
    for (let i = 0; i < 5 - rating; i++) {
      stars.push(<CiStar key={i} className="text-black" />);
    }
    return stars;
  };

  return (
    <>
      <div className="flex items-center space-x-1 mt-5 ml-5">
        {renderFilledStars()}
        {renderEmptyStars()}
      </div>
      <div className="ml-5 mt-2 mr-5">
        <h1 className="text-s font-medium text-black">
          "{params.discription}"
        </h1>
      </div>
      <div className="pt-2 pb-2 pl-5 flex">
        <Avatar className="w-5 h-5 ">
          <AvatarImage src={params.avatar} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p className="ml-2 ">{params.title}</p>
        <p className="ml-2 text-l text-[#868586]">{params.time}</p>
      </div>
      <div className="border-1 border-black  ml-4 mr-7 mb-5 mt-3"></div>
    </>
  );
}
