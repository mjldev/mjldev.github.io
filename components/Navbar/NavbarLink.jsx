import React from "react";
import Link from "next/link";

const NavbarLink = (props) => {
  return (
    <Link href={props.url}>
      <a className="block font-oswald font-semibold">
        {props.children}
      </a>
    </Link>
  );
};

export default NavbarLink;
