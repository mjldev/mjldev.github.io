import React from "react";
import Link from "next/link";

const NavbarLink = (props) => {
  return (
    <li onClick={props.onClick}>
      <Link href={props.url}>
        <a className="block font-oswald font-semibold uppercase tracking-tight hover:text-personal-textHoverPrimary">{props.children}</a>
      </Link>
    </li>
  );
};

export default NavbarLink;
