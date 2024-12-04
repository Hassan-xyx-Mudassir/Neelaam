import React from "react";

export default function imageContainer(params) {
  return (
    <div class="h-[299px] w-[1137px] flex justify-center items-center">
      <img
        src={params.image}
        alt="Placeholder"
        class="object-fill  w-full h-full"
      />
    </div>
  );
}
