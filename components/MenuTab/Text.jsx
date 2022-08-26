import React from 'react'

const Text = (props) => {
  return (
    <p text={props.text} className="text-base text-personal-textPrimary pt-4 pb-8">{props.text}</p>
  )
}

export default Text