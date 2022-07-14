import React from "react";
import Link from "next/link";

const NavbarItem = (props) => {
  return (
      <li>
        <Link href={props.url}>
            <a id="alink" className="text-gray-400 text-sm hover:text-gray-700 block">{props.children}</a>
        </Link>
      </li>
  );
};

export default NavbarItem;
