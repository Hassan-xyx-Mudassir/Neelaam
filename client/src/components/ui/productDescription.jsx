import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaStar } from "react-icons/fa";
import React from "react";

export default function productDescription(params) {
  const rating = 5;
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<FaStar key={i} className="text-black" />);
    }
    return stars;
  };
  return (
    <>
      <div className="flex flex-col border-black border-r">
        <div className="flex-row">
          <div className="border-b  border-black h-[100px] w-[750px] ">
            <h1 className="font-sans font-bold pl-10 pt-7 pb-5 text-4xl">
              {params.title}
            </h1>
          </div>
          <div className="flex flex-row">
            <div className="pt-2 pb-2 pl-5 flex">
              <Avatar className="w-5 h-5 ">
                <AvatarImage src={params.avatar} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <a href="" className="ml-2 underline font-bold">
                {params.name}
              </a>
            </div>
            <div className="border-1 border-black h-10 ml-5 "></div>
            <div className="flex items-center space-x-1 ml-5">
              {renderStars()}
              <div className="pt-2 pb-2  ">
                <h1 className="font-bold font-sans">{params.rating}</h1>
              </div>
            </div>
          </div>
          <div className="border-t border-black w-[750px]"></div>
          <div className="w-[750px] pl-5 pt-5 pr-5 ">
            {params.discription.split("\n").map((line, index) => (
              <p key={index} className="font-sans mb-4 text-black">
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
