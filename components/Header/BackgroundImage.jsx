import React from 'react'

const BackgroundImage = (props) => {
  return (
    <img
        src={props.url}
        alt={props.alt}
        className="absolute w-full h-full object-cover"
      />
  )
}

export default BackgroundImage