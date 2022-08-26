import React from "react";
import { AiFillStar } from "react-icons/ai";

const StartRating = () => {
  return (
    <div className="flex justify-center text-personal-secondary">
      <AiFillStar className="h-6 w-6"/>
      <AiFillStar className="h-6 w-6"/>
      <AiFillStar className="h-6 w-6"/>
      <AiFillStar className="h-6 w-6"/>
      <AiFillStar className="h-6 w-6"/>
    </div>
  );
};

export default StartRating;
