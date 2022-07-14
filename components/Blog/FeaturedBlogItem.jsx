import Link from "next/link";
import React from "react";

const HomeBlogItem = (props) => {
  return (
    <Link href="/blog">
      <a className="flex flex-col justify-center mb-2">
        <div className="flex flex-col justify-center">
          <img className="w-full" src={props.img} alt={props.alt}>
            {props.children}
          </img>
          <p className="text-lg mt-2" title={props.title}>
            {props.title}
          </p>
          <p className="text-gray-400 my-2" text={props.text}>
            {props.text}
          </p>
        </div>
      </a>
    </Link>
  );
};

export default HomeBlogItem;
