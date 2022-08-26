import React from 'react'

const Title = (props) => {
  return (
    <p
      className="text-personal-textPrimary font-oswald font-semibold text-2xl uppercase"
      title={props.title}
    >
      {props.title}
    </p>
  )
}

export default Title