import Link from "next/link";
import React from "react";

const ButtonPrimary = (props) => {
  return (
    <Link href={props.url}>
      <a className="text-white font-oswald font-semibold bg-personal-primary hover:bg-personal-buttonHover block py-2 px-4 md:py-3 md:px-8">
        {props.children}
      </a>
    </Link>
  );
};

export default ButtonPrimary;
