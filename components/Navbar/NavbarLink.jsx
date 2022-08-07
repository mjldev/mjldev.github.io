import React from "react";
import Link from "next/link";

const NavbarLink = (props) => {
  return (
    <Link href={props.url}>
      <a className="block font-oswald font-semibold hover:text-personal-primary hover:bg-white px-2">
        {props.children}
      </a>
    </Link>
  );
};

export default NavbarLink;
