import React from "react";
import ProductLink from "./ProductLink";

const ProductItem = (props) => {
  return (
    <div className="flex flex-col justify-center border-b md:border lg:border xl:border border-gray-200 xl:border-gray-200 sm:mb-2  lg:mb-2  xl:mb-2 py-2 md:py-0 lg:py-0 xl:py-0">
      <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-x-2 xl:gap-x-0">
        <div className="flex">
          <div className="absolute py-1 px-1">
            <span badge={props.badge}>{props.badge}</span>
            <span badge1={props.badge1}>{props.badge1}</span>
          </div>
          <img className="w-full" src={props.img} alt={props.alt}>
            {props.children}
          </img>
        </div>
        <div>
          <div className="grid grid-cols-1 p-3 justify-items-start gap-y-2 mb-2">
            <p className="text-md" description={props.description}>
              {props.description}
            </p>
            <div className="flex flex-row justify-items-start">
              <p className="text-sm text-gray-400" price={props.price}>
                {props.price}
              </p>
              <p className="text-sm text-gray-400" sale={props.sale}>
                {props.sale}
              </p>
            </div>
            <span className="mt-4">
              <ProductLink
                className="text-white text-xs bg-gray-700 rounded-md hover:opacity-90 px-4 py-2"
                url="/contact-us"
              >
                ORDER NOW
              </ProductLink>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
