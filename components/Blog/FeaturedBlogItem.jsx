import Link from "next/link";
import React from "react";

const HomeBlogItem = (props) => {
  return (
    <Link href="/blog">
      <a className="flex flex-col justify-center mb-2">
      <div className="grid grid-cols-1 gap-y-2 justify-items-start">
          <img className="w-full" src={props.img} alt={props.alt}>
            {props.children}
          </img>
          <p className="text-lg" title={props.title}>
            {props.title}
          </p>
          <p className="tex-md text-gray-400" text={props.text}>
            {props.text}
          </p>
        </div>
      </a>
    </Link>
  );
};

export default HomeBlogItem;
