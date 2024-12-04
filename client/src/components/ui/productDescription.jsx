import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaStar } from "react-icons/fa";
import React from "react";

export default function productDescription() {
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
              CNC Discord Membership
            </h1>
          </div>
          <div className="flex flex-row">
            <div className="pt-2 pb-2 pl-5 flex">
              <Avatar className="w-5 h-5 ">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <a href="" className="ml-2 underline font-bold">
                Tallguytycoon
              </a>
            </div>
            <div className="border-1 border-black h-10 ml-5 "></div>
            <div className="flex items-center space-x-1 ml-5">
              {renderStars()}
              <div className="pt-2 pb-2  ">
                <h1 className="font-bold font-sans">130 ratings </h1>
              </div>
            </div>
          </div>
          <div className="border-t border-black w-[750px]"></div>
          <div className="w-[750px] pl-5 pt-5 pr-5 ">
            <p className="font-sans mb-4 text-black">
              Chess Not Checkers Community (CnC)
            </p>
            <p className="font-sans mb-4 ">
              Ready to take your wealth-building skills to a whole new level?
            </p>
            <p className="font-sans mb-4">
              Our investment strategy community is the perfect place for you. We
              provide stock and option tips & signals, so you can make the most
              of your investments. You can also ask questions of other members
              in the group. It’s a great way to get plugged into the community
              and learn from others who have experience with investing.
            </p>
            <p className="font-sans mb-4">
              You’ll also have access to exclusive events all over the country.
              This is an amazing opportunity to learn from experts and network
              with like-minded individuals. Plus, we want you to succeed
              financially immediately– so you’ll be sent a setup email within
              10-25 minutes after registering.
            </p>
            <p className="font-sans mb-4">Join today and get access now!</p>
          </div>
        </div>
      </div>
    </>
  );
}
