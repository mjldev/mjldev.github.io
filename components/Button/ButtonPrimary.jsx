import Link from "next/link";
import React from "react";

const ButtonPrimary = (props) => {
  return (
    <div className="bg-personal-primary">
      <Link href={props.url}>
        <a className="text-white font-oswald font-semibold block py-2 px-4 md:py-2 md:px-4 bg-gradient-to-r from-personal-secondary to-personal-secondary bg-no-repeat transition-all duration-200 ease-out bg-[length:0%] hover:bg-[length:100%]">
          {props.children}
        </a>
      </Link>
    </div>
  );
};

export default ButtonPrimary;
