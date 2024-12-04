import React from "react";
import { FaStar } from "react-icons/fa";
import { Progress } from "@/components/ui/progress";
import Review from "./review";

export default function ratingContainer() {
  return (
    <>
      <div className="flex flex row">
        <h1 className="font-sans text-xl ml-5 mt-2 text-black">Ratings</h1>
        <div className="flex justify-end mr-4 ml-30">
          <FaStar className="text-black mt-3 " />
          <h1 className="mt-2 text-large ml-1 text-black ">4.6</h1>
          <h1 className="mt-2.5 ml-1 text-black ">(130 ratings)</h1>
        </div>
      </div>
      <div className="flex flex row mt-2">
        <h1 className="font-sans text-s ml-5 text-black font-medium">
          5 stars
        </h1>
        <Progress
          value={87}
          className=" w-[240px] mt-0.5 ml-3 h-[20px] border border-black "
        />
        <h1 className="font-sans text-s ml-5 text-black font-medium">87%</h1>
      </div>
      <div className="flex flex row mt-2">
        <h1 className="font-sans text-s ml-5 text-black font-medium">
          4 stars
        </h1>
        <Progress
          value={3}
          className=" w-[240px] mt-0.5 ml-3 h-[20px] border border-black "
        />
        <h1 className="font-sans text-s ml-5 text-black font-medium">3%</h1>
      </div>
      <div className="flex flex row mt-2">
        <h1 className="font-sans text-s ml-5 text-black font-medium">
          3 stars
        </h1>
        <Progress
          value={4}
          className=" w-[240px] mt-0.5 ml-3 h-[20px] border border-black"
        />
        <h1 className="font-sans text-s ml-5 text-black font-medium">4%</h1>
      </div>
      <div className="flex flex row mt-2">
        <h1 className="font-sans text-s ml-5 text-black font-medium">
          2 stars
        </h1>
        <Progress
          value={4}
          className=" w-[240px] mt-0.5 ml-3 h-[20px] border border-black"
        />
        <h1 className="font-sans text-s ml-5 text-black font-medium">4%</h1>
      </div>
      <div className="flex flex row mt-2">
        <h1 className="font-sans text-s ml-5 text-black font-medium">
          1 stars
        </h1>
        <Progress
          value={2}
          className=" w-[240px] mt-0.5 ml-3 h-[20px] border border-black"
        />
        <h1 className="font-sans text-s ml-5 text-black font-medium">2%</h1>
      </div>
      <Review
        rating="4"
        discription="The discord has a lot to offer, no discredit there, just very messy in their signals, unless you have a BAG you’re really not capitalizing on MOST of their plays. If you’re a beginner they encourage you to buy their course. So it’s one of those places where everything is sold SEPARATELY! If you’re NEW to investments not the ideas discord, if you have common knowledge great place to be. Spent $97 to make money but looks like I’m just down $97."
        avatar="https://github.com/shadcn.png"
        title="Anonymous"
        time="5 mins ago"
      ></Review>
      <Review
        rating="4"
        discription="The discord has a lot to offer, no discredit there, just very messy in their signals, unless you have a BAG you’re really not capitalizing on MOST of their plays. If you’re a beginner they encourage you to buy their course. So it’s one of those places where everything is sold SEPARATELY! If you’re NEW to investments not the ideas discord, if you have common knowledge great place to be. Spent $97 to make money but looks like I’m just down $97."
        avatar="https://github.com/shadcn.png"
        title="Anonymous"
        time="5 mins ago"
      ></Review>
      <Review
        rating="4"
        discription="The discord has a lot to offer, no discredit there, just very messy in their signals, unless you have a BAG you’re really not capitalizing on MOST of their plays. If you’re a beginner they encourage you to buy their course. So it’s one of those places where everything is sold SEPARATELY! If you’re NEW to investments not the ideas discord, if you have common knowledge great place to be. Spent $97 to make money but looks like I’m just down $97."
        avatar="https://github.com/shadcn.png"
        title="Anonymous"
        time="5 mins ago"
      ></Review>
    </>
  );
}
