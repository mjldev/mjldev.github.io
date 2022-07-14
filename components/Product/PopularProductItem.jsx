import Link from "next/link";
import React from "react";

const FeaturedBlogItem = (props) => {
  return (
    <Link href="/product">
      <a className="flex flex-col justify-center border hover:opacity-90 mb-2">
        <div className="flex">
          <span badge={props.badge}>{props.badge}</span>
          <img className="w-full h-full" src={props.img} alt={props.alt}>
            {props.children}
          </img>
        </div>
        <div className="p-3">
          <p className="text-md my-1" description={props.description}>
            {props.description}
          </p>
          <p className="text-sm text-gray-400 mb-1" price={props.price}>
            {props.price}
          </p>
        </div>
      </a>
    </Link>
  );
};

export default FeaturedBlogItem;
