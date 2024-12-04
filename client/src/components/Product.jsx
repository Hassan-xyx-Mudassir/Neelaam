import React from "react";
import Header from "./Header";
import im from "../assets/productPic.png";
import ImageContainer from "./ui/imageContainer";
import LeftContainer from "./ui/leftContainer";
import RightContainer from "./ui/rightContainer";

export default function Product() {
  return (
    <>
      <Header title="CNC Discord Membership" ratings="130" price="97$"></Header>
      <div className="border-2 border-black rounded h-[1200px] w-[1140px] mt-20 mr-50 ml-50 mb-20">
        <ImageContainer image={im}></ImageContainer>
        <div className="border-t border-black "></div>
        <div className="flex flex-row">
          <LeftContainer />
          <div className="border-1 border-black h-[898px]  "></div>
          <RightContainer />
        </div>
      </div>
    </>
  );
}
