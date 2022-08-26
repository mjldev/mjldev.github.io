import React from 'react'
import Link from 'next/link'

const SocialMediaLink = (props) => {
  return (
    <li onClick={props.onClick}>
      <Link href={props.url}>
        <a  className="font-oswald font-semibold block uppercase tracking-tighter hover:text-personal-textHoverPrimary">{props.children}</a>
      </Link>
    </li>
  )
}

export default SocialMediaLink