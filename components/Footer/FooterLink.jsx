import React from 'react'
import Link from 'next/link'

const FooterLink = (props) => {
  return (
    <li onClick={props.onClick}>
      <Link href={props.url}>
        <a className="text-personal-textPrimary font-oswald font-semibold block uppercase tracking-tight hover:text-personal-textHoverPrimary">{props.children}</a>
      </Link>
    </li>
  )
}

export default FooterLink