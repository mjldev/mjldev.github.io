import React from "react";
import ProductLink from "./ProductLink";

const ProductItem = (props) => {
  return (
    <div className="flex flex-col justify-center border-b md:border lg:border xl:border border-gray-200 xl:border-gray-200 sm:mb-2  lg:mb-2  xl:mb-2 py-2 md:py-0 lg:py-0 xl:py-0">
      <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-x-2 xl:gap-x-0">
        <div className="flex">
          <span badge={props.badge}>{props.badge}</span>
          <img className="w-full" src={props.img} alt={props.alt}>
            {props.children}
          </img>
        </div>
        <div className="flex flex-col p-3">
          <p className="text-md my-1" description={props.description}>
            {props.description}
          </p>
          <p className="text-sm text-gray-400 mb-1" price={props.price}>
            {props.price}
          </p>
          <span className="mt-4 mb-2">
            <ProductLink
              className="text-white text-xs bg-gray-700 hover:opacity-90 px-4 py-2"
              url="/contact-us"
            >
              ORDER NOW
            </ProductLink>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
