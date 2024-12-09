import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Progress } from "@/components/ui/progress";
import Review from "./review";

export default function RatingContainer(params) {
  // State for managing ratings and progress percentages
  const [ratings, setRatings] = useState([
    { stars: 5, percentage: 87 },
    { stars: 4, percentage: 3 },
    { stars: 3, percentage: 4 },
    { stars: 2, percentage: 4 },
    { stars: 1, percentage: 2 },
  ]);

  const [reviews, setReviews] = useState([
    {
      rating: 4,
      description:
        "The discord has a lot to offer, no discredit there, just very messy in their signals, unless you have a BAG you’re really not capitalizing on MOST of their plays. If you’re a beginner they encourage you to buy their course. So it’s one of those places where everything is sold SEPARATELY! If you’re NEW to investments not the ideas discord, if you have common knowledge great place to be. Spent $97 to make money but looks like I’m just down $97.",
      avatar: "https://github.com/shadcn.png",
      title: "Anonymous",
      time: "5 mins ago",
    },
    {
      rating: 4,
      description:
        "The discord has a lot to offer, no discredit there, just very messy in their signals, unless you have a BAG you’re really not capitalizing on MOST of their plays. If you’re a beginner they encourage you to buy their course. So it’s one of those places where everything is sold SEPARATELY! If you’re NEW to investments not the ideas discord, if you have common knowledge great place to be. Spent $97 to make money but looks like I’m just down $97.",
      avatar: "https://github.com/shadcn.png",
      title: "Anonymous",
      time: "5 mins ago",
    },
    {
      rating: 4,
      description:
        "The discord has a lot to offer, no discredit there, just very messy in their signals, unless you have a BAG you’re really not capitalizing on MOST of their plays. If you’re a beginner they encourage you to buy their course. So it’s one of those places where everything is sold SEPARATELY! If you’re NEW to investments not the ideas discord, if you have common knowledge great place to be. Spent $97 to make money but looks like I’m just down $97.",
      avatar: "https://github.com/shadcn.png",
      title: "Anonymous",
      time: "5 mins ago",
    },
  ]);

  return (
    <>
      {/* Ratings Header */}
      <div className="flex flex-row">
        <h1 className="font-sans text-xl ml-5 mt-2 text-black">Ratings</h1>
        <div className="flex justify-end mr-4 ml-30">
          <FaStar className="text-black mt-3" />
          <h1 className="mt-2 text-large ml-1 text-black">{params.rating}</h1>
          <h1 className="mt-2.5 ml-1 text-black">({params.ratings} ratings)</h1>
        </div>
      </div>

      {/* Ratings Progress Bars */}
      {ratings.map((rating) => (
        <div className="flex flex-row mt-2" key={rating.stars}>
          <h1 className="font-sans text-s ml-5 text-black font-medium">
            {rating.stars} stars
          </h1>
          <Progress
            value={rating.percentage}
            className="w-[240px] mt-0.5 ml-3 h-[20px] border border-black"
          />
          <h1 className="font-sans text-s ml-5 text-black font-medium">
            {rating.percentage}%
          </h1>
        </div>
      ))}

      {/* Reviews Section */}
      {reviews.map((review, index) => (
        <Review
          key={index}
          rating={review.rating}
          discription={review.description}
          avatar={review.avatar}
          title={review.title}
          time={review.time}
        />
      ))}
    </>
  );
}
