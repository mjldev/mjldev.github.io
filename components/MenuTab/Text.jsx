import React from 'react'

const Text = (props) => {
  return (
    <p text={props.text} className="text-base text-personal-textPrimary">{props.text}</p>
  )
}

export default Text