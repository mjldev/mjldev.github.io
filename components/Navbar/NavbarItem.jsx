import React from "react";
import Link from "next/link";

const NavbarItem = (props) => {
  return (
      <li>
        <Link href={props.url}>
            <a id="alink" className="font-work-sans block">{props.children}</a>
        </Link>
      </li>
  );
};

export default NavbarItem;
