import Link from "next/link";
import React from "react";

const FeaturedBlogItem = (props) => {
  return (
    <Link href="/product">
      <a className="flex flex-col justify-center border hover:opacity-90 ease-in-out mb-2">
        <div className="flex">
          <img className="w-full h-full" src={props.img} alt={props.alt}>
            {props.children}
          </img>
        </div>
        <div>
          <div className="grid grid-cols-1 p-3 justify-items-start gap-y-2">
            <p className="text-md" description={props.description}>
              {props.description}
            </p>
            <p className="text-sm text-gray-400" price={props.price}>
              {props.price}
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default FeaturedBlogItem;
