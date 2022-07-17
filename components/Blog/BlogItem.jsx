import React from "react";

const BlogItem = (props) => {
  return (
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
  );
};

export default BlogItem;
