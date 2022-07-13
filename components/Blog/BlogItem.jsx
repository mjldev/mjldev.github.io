import React from 'react'

const BlogItem = (props) => {
  return (
    <div className="flex flex-col justify-center mb-2">
      <img className="w-full" src={props.img} alt={props.alt}>
        {props.children}
      </img>
      <p className="font-bold text-1xl mt-2" title={props.title}>
        {props.title}
      </p>
      <p className="my-2" text={props.text}>
        {props.text}
      </p>
    </div>
  )
}

export default BlogItem