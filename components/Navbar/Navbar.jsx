import React, { useEffect, useState } from "react";
import Link from "next/link";
import NavbarLink from "./NavbarLink";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

  const handleWidth = () => {
    if (window.innerWidth >= "640") {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleWidth);
    return () => {
      window.removeEventListener("resize", handleWidth);
    };
  }, [dropdown]);

  return (
    <nav className="sticky top-0 z-50 bg-white">
      <div className="container max-w-full px-4 laptop:px-10 relative bg-white z-20">
        <div className="flex justify-between py-4">
          <Link href="/">
            <a className="flex items-center font-oswald font-bold text-2xl py-4">
              LOGO
            </a>
          </Link>
          <div className="menu hidden tablet:flex">
            <ul className="flex justify-center gap-x-8 text-md items-center">
              <NavbarLink url="#">MENU</NavbarLink>
              <NavbarLink url="#">BLOG</NavbarLink>
              <NavbarLink url="#">ABOUT US</NavbarLink>
              <NavbarLink url="#">CONTACT US</NavbarLink>
            </ul>
          </div>
          <div className="flex justify-center items-center gap-x-8">
            <button className="w-6 h-6 bg-search-icon"></button>
            <button className="w-6 h-6 bg-shopping-bag-icon"></button>
            <div
              className="flex tablet:hidden"
              onClick={() => setDropdown(!dropdown)}
            >
              <button
                className={
                  "w-6 h-6 duration-700 ease-in-out " +
                  (dropdown ? "rotate-90 bg-close-icon" : "bg-menu-icon")
                }
              ></button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          "absolute w-full duration-700 ease-in-out z-10 " +
          (dropdown ? "mt-0" : "-mt-80")
        }
      >
        <ul className="flex justify-center flex-col text-lg text-center bg-white w-full border-y translate-x-0">
          <NavbarLink url="#">MENU</NavbarLink>
          <NavbarLink url="#">BLOG</NavbarLink>
          <NavbarLink url="#">ABOUT US</NavbarLink>
          <NavbarLink url="#">CONTACT US</NavbarLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
