import React from "react";
import Header from "./Header";
import im from "../assets/productPic.png";
import ImageContainer from "./ui/imageContainer";
import ProductDescription from "./ui/productDescription";
import ProductPayment from "./ui/ProductPayment";
import RatingContainer from "./ui/ratingContainer";
import { useGlobalState } from "@/contexts/GlobalStateContext"; // Import the custom hook to access global state

export default function Product() {
  const { text, price } = useGlobalState(); // Get text and price from global state

  return (
    <>
      <Header
        title="CNC Discord Membership"
        ratings="130"
        text1={text} // Pass text from global state
      ></Header>

      <div className="border-2 border-black rounded h-auto w-[1140px] mt-20 mr-50 ml-50 mb-20">
        <ImageContainer image={im}></ImageContainer>
        <div className="border-t border-black flex"></div>
        <div className="flex flex-row">
          <ProductDescription
            rating="130"
            title="CNC Discord Membership"
            name="Tallguytycoon"
            avatar="https://github.com/shadcn.png"
            discription={`Chess Not Checkers Community (CnC)

Ready to take your wealth-building skills to a whole new level? 
Our investment strategy community is the perfect place for you. We provide stock and option tips & signals, so you can make the most of your investments. You can also ask questions of other members in the group. It’s a great way to get plugged into the community and learn from others who have experience with investing.

You’ll also have access to exclusive events all over the country. This is an amazing opportunity to learn from experts and network with like-minded individuals. Plus, we want you to succeed financially immediately– so you’ll be sent a setup email within 10-25 minutes after registering.

Join today and get access now!`}
          />

          <div className="flex flex-col">
            <ProductPayment /> {/* No need to pass productPrice here */}
            <RatingContainer ratings="130" rating="4.6"></RatingContainer>
          </div>
        </div>
      </div>
    </>
  );
}
