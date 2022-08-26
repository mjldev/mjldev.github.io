import Link from "next/link";
import React from "react";

const ButtonLink = (props) => {
  return (
    <Link href={props.url}>
      <a className="text-white text-base font-oswald font-bold whitespace-nowrap uppercase py-4 px-8 bg-personal-buttonPrimary hover:bg-personal-buttonHoverPrimary">
        {props.children}
      </a>
    </Link>
  )
}

export default ButtonLink