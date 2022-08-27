import React from 'react'

const Title = (props) => {
  return (
    <p
      className="text-personal-textPrimary font-oswald font-semibold text-xl tablet:text-2xl laptop:text-4xl uppercase pb-2"
      title={props.title}
    >
      {props.title}
    </p>
  )
}

export default Title