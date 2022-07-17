import React from "react";
import Link from "next/link";

const NavbarItem = (props) => {
  return (
      <li>
        <Link href={props.url}>
            <a id="alink" className="text-black text-md font-bold hover:text-gray-700 ease-in-out hover:p-2 p-2  block">{props.children}</a>
        </Link>
      </li>
  );
};

export default NavbarItem;
