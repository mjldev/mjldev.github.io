import Link from "next/link";
import React from "react";

const ProductLink = (props) => {
  return (
    <Link href={props.url}>
      <a className={props.className}>{props.children}</a>
    </Link>
  );
};

export default ProductLink;
