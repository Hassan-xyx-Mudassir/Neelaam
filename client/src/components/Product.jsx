import React from "react";
import Header from "./Header";
import im from "../assets/productPic.png";
import ImageContainer from "./ui/imageContainer";
import ProductDescription from "./ui/productDescription";
import ProductPayment from "./ui/ProductPayment";
import RatingContainer from "./ui/ratingContainer";

export default function Product() {
  return (
    <>
      <Header title="CNC Discord Membership" ratings="130" price="97$"></Header>
      <div className="border-2 border-black  rounded h-auto w-[1140px] mt-20 mr-50 ml-50 mb-20">
        <ImageContainer image={im}></ImageContainer>
        <div className="border-t border-black flex "></div>
        <div className="flex flex-row">
          <ProductDescription />

          <div className="flex flex-col">
            <ProductPayment />
            <RatingContainer></RatingContainer>
          </div>
        </div>
      </div>
    </>
  );
}
