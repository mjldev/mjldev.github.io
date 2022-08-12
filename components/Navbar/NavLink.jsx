import React from "react";
import Link from "next/link";

const NavbarLink = (props) => {
  return (
    <li onClick={props.click}>
      <Link href={props.url}>
        <a className="block font-oswald font-semibold hover:text-personal-primary">{props.children}</a>
      </Link>
    </li>
  );
};

export default NavbarLink;
