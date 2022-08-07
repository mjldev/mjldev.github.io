import React, { useEffect, useState } from "react";
import Link from "next/link";
import NavbarLink from "./NavbarLink";
import MobileMenu from "./MobileMenu";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineShoppingCart,
} from "react-icons/ai";

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
    window.scrollY > 10 ? setNav(false) : setNav(true), setDropdown(false);
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`top-0 sticky z-50 bg-gradient-to-b from-white  to-white bg-no-repeat transition-all duration-200 ease-out ${
        nav ? "bg-[length:100%_0%;]" : "bg-[length:100%_100%]"
      }`}
    >
      <div className="container max-w-full py-4 px-4 laptop:px-10 z-20 relative ">
        <div className="grid grid-flow-col desktop:grid-cols-3 items-center">
          <Link href="/">
            <a
              className={`font-oswald font-bold tracking-tighter text-3xl desktop:text-5xl ${
                nav ? "text-white" : "text-personal-textPrimary"
              }`}
            >
              MJL KITCHEN
            </a>
          </Link>
          <div className="menu hidden tablet:flex justify-center">
            <ul
              className={`flex gap-x-4 laptop:gap-x-8 text-md ${
                nav ? "text-white" : " text-personal-textPrimary"
              }`}
            >
              <NavbarLink url="#">MENU</NavbarLink>
              <NavbarLink url="#">BLOG</NavbarLink>
              <NavbarLink url="#">ABOUT US</NavbarLink>
              <NavbarLink url="#">CONTACT US</NavbarLink>
            </ul>
          </div>
          <div
            className={`flex justify-end items-center gap-x-4 laptop:gap-x-8 ${
              nav ? "text-white" : "text-personal-textPrimary"
            }`}
          >
            <div
              className={`flex tablet:hidden ${
                nav ? "text-white" : "text-personal-textPrimary"
              }`}
              onClick={() => {
                setDropdown(!dropdown), setCart(false);
              }}
            >
              <button
                className={
                  dropdown ? "skew-y-12 ease-in-out duration-200" : ""
                }
              >
                {dropdown ? (
                  <AiOutlineClose className="w-6 h-6" />
                ) : (
                  <AiOutlineMenu className="w-6 h-6" />
                )}
              </button>
            </div>
            <button
              className={cart ? "skew-y-12" : "skew-y-0"}
              onClick={() => {
                setCart(!cart), setDropdown(false);
              }}
            >
              <AiOutlineShoppingCart className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
      <div
        className={
          "absolute flex flex-col items-center bg-white w-full tablet:w-1/2 laptop:w-1/3 desktop:w-1/4 border right-0 p-5 duration-200 ease-in-out z-20 " +
          (cart ? "mt-0" : "-mt-96")
        }
      >
        <span>Your cart is empty</span>
      </div>
      <div
        className={
          "absolute w-full duration-200 ease-in-out z-10 " +
          (dropdown ? "mt-0" : "-mt-96")
        }
      >
        <MobileMenu />
      </div>
    </nav>
  );
};

export default Navbar;
