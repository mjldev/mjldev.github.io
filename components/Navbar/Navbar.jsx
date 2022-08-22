import React, { useEffect, useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";

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
        className={`top-0 sticky z-50 text-personal-textPrimary bg-white tablet:bg-transparent bg-gradient-to-r from-white to-white bg-no-repeat transition-all duration-200 ease-out ${
          nav
            ? "bg-[length:100%_0%] tablet:text-white"
            : "bg-[length:100%_100%] text-personal-textPrimary"
        }`}
      >
        <div className="container flex items-center bg-inherit py-4 max-w-[90%]">
          <div className="flex flex-1 justify-start">
            <Link href="/">
              <a className="font-oswald font-bold select-none text-4xl laptop:text-5xl whitespace-nowrap">
                MJL KITCHEN
              </a>
            </Link>
          </div>
          <ul
            className={`flex justify-center flex-col tablet:flex-row tablet:top-0 left-0 flex-1 items-center gap-4 laptop:gap-8 bg-inherit w-full text-lg whitespace-nowrap px-4 laptop:px-0 py-8 tablet:py-0 absolute tablet:relative z-[-1] ${
              dropdown
                ? "top-[68px] transition-all duration-300 ease-in border-y"
                : "-top-80"
            }`}
          >
            <NavLink onClick={() => setDropdown(false)} url="#">
              our menu
            </NavLink>
            <NavLink onClick={() => setDropdown(false)} url="#">
              blog
            </NavLink>
            <NavLink onClick={() => setDropdown(false)} url="#">
              about us
            </NavLink>
            <NavLink onClick={() => setDropdown(false)} url="#">
              contact us
            </NavLink>
          </ul>
          <div className="flex flex-1 gap-4 justify-end">
            <button
              onClick={() => setDropdown(!dropdown)}
              className={`h-6 w-6 tablet:hidden ${
                dropdown
                  ? "skew-y-12 transition-all duration-300 ease-in"
                  : "skew-y-0"
              }`}
            >
              {dropdown ? (
                <AiOutlineClose className="h-full w-full" />
              ) : (
                <AiOutlineMenu className="h-full w-full" />
              )}
            </button>
            <button
              onClick={() => {
                setCart(true),
                  setDropdown(false),
                  (document.body.style.overflow = "hidden");
              }}
              className="h-6 w-6"
            >
              <BsHandbag className="h-full w-full" />
            </button>
          </div>
        </div>
        {cart && (
          <div className="flex justify-end absolute top-0 right-0 w-screen h-screen border">
            <div className="bg-black w-full opacity-80" />
            <div className="flex flex-col tablet:flex-[1_1_30%] min-w-[100%] tablet:min-w-[35ch] h-screen bg-white text-personal-textPrimary">
              <div className="flex justify-between border-b py-5 px-4">
                <span className="font-bold text-xl">YOUR CART</span>
                <button
                  onClick={() => {
                    setCart(false), (document.body.style.overflow = "auto");
                  }}
                  className="h-6 w-6"
                >
                  <AiOutlineClose className="h-full w-full" />
                </button>
              </div>
              <div className="flex justify-center">
                <p className="text-personal-textPrimary">Your cart is empty.</p>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
