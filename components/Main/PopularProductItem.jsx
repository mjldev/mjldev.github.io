import Link from "next/link";
import React from "react";

const FeaturedBlogItem = (props) => {
  return (
    <Link href="/product">
      <a className="flex flex-col justify-center border mb-2">
        <div className="flex">
          <span className="absolute" best={props.badge}>
            {props.badge}
          </span>
          <img className="w-full" src={props.img} alt={props.alt}>
            {props.children}
          </img>
        </div>
        <div className="p-3">
          <p className="font-bold text-sm my-1" name={props.name}>
            {props.name}
          </p>
          <p className="text-sm mb-1" price={props.price}>
            {props.price}
          </p>
        </div>
      </a>
    </Link>
  );
};

export default FeaturedBlogItem;
