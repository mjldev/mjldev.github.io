import React from "react";
import Link from "next/link";
const NavbarLink = (props) => {
  return (
    <li>
      <Link href={props.url}>
        <a className="block font-oswald font-semibold hover:text-red-600">{props.children}</a>
      </Link>
    </li>
  );
};

export default NavbarLink;
