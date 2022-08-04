import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container px-4 laptop:px-10 relative">
        <div className="flex flex-col justify-center text-center gap-y-4 py-10">
          <p className="font-oswald font-bold tracking-tighter text-4xl desktop:text-5xl">
            MJL KITCHEN
          </p>
          <p>©2022 Hello World</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
