import React, { useEffect, useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import SocialMedia from "../SocialMedia.jsx/SocialMedia";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [cart, setCart] = useState(false);

  const handleWidth = () => {
    window.innerWidth >= 640 ? setDropdown(false) : setDropdown(false);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWidth);
    return () => {
      window.removeEventListener("resize", handleWidth);
    };
  }, [dropdown]);

  const [nav, setNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const controlNavbar = () => {
    window.scrollY > 0 ? setNav(false) : setNav(true), setDropdown(false);
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <>
      <nav
        className={`top-0 sticky z-50 text-personal-textPrimary bg-white tablet:bg-transparent bg-gradient-to-r from-white to-white bg-no-repeat transition-all duration-200 ease-out hover:bg-[length:100%_100%] hover:text-personal-textPrimary ${
          nav
            ? "bg-[length:100%_0%] tablet:text-white"
            : "bg-[length:100%_100%] text-personal-textPrimary"
        }`}
      >
        <div className="container flex items-center justify-between bg-inherit py-4 w-[90%]">
          <div className="flex flex-1 justify-start">
            <Link href="/">
              <a className="font-oswald font-bold select-none text-4xl laptop:text-5xl whitespace-nowrap">
                MJL KITCHEN
              </a>
            </Link>
          </div>
          <ul
            className={`flex flex-2 flex-col tablet:flex-row tablet:top-0 left-0 justify-center items-center gap-x-8 laptop:gap-x-16 gap-y-8 bg-inherit w-full tablet:w-auto whitespace-nowrap py-8 tablet:py-0 absolute tablet:relative z-[-1] tablet:z-auto ${
              dropdown
                ? "text-2xl top-0 min-h-screen transition-all duration-300 ease-in"
                : "text-base -top-80"
            }`}
          >
            <NavLink onClick={() => setDropdown(false)} url="/our-menu">
              our menu
            </NavLink>
            <NavLink onClick={() => setDropdown(false)} url="/about-us">
              about us
            </NavLink>
            <NavLink onClick={() => setDropdown(false)} url="/contact-us">
              contact us
            </NavLink>
            <div className="tablet:hidden">
              <SocialMedia />
            </div>
          </ul>
          <div className="flex-1 hidden laptop:flex justify-end">
            <SocialMedia />
          </div>
          <button
            onClick={() => setDropdown(!dropdown)}
            className={`h-8 w-8 tablet:hidden ${
              dropdown
                ? "rotate-90 transition-all duration-300 ease-in"
                : "rotate-1"
            }`}
          >
            {dropdown ? (
              <AiOutlineClose className="h-full w-full" />
            ) : (
              <AiOutlineMenu className="h-full w-full" />
            )}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
