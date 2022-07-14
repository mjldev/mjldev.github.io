import React from "react";

const BlogItem = (props) => {
  return (
    <div className="flex flex-col justify-center mb-2">
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
  );
};

export default BlogItem;
