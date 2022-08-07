import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import NavbarLink from "./NavbarLink";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [cart, setCart] = useState(false);
  const [search, setSearch] = useState(false);

  const handleWidth = () => {
    if (window.innerWidth >= 640) {
      setDropdown(false);
      setSearch(false);
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

  const navRef = useRef(null);
  const [nav, setNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleBackground = () => {
    navRef.current.style.backgroundColor = "red";
  };

  const controlNavbar = () => {
    if (window.scrollY > window.innerHeight) {
      navRef.current.style.backgroundColor = "#F24150";
    } else {
      navRef.current.style.backgroundColor = "transparent";
    }

    if (window.scrollY > lastScrollY) {
      setNav(false);
    } else {
      setNav(true);
    }
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
      ref={navRef}
      className={`sticky z-50 duration-700 ease-in-out ${
        nav ? "top-0" : "-top-80"
      }`}
    >
      <div className="container max-w-full py-4 px-4 laptop:px-10 z-20 relative">
        <div className="grid grid-flow-col desktop:grid-cols-3 items-center">
          <Link href="/">
            <a className="text-white font-oswald font-bold tracking-tighter text-3xl desktop:text-5xl">
              MJL KITCHEN
            </a>
          </Link>
          <div className="menu hidden tablet:flex justify-center">
            <ul className="flex gap-x-4 laptop:gap-x-8 text-md text-white">
              <NavbarLink url="#">MENU</NavbarLink>
              <NavbarLink url="#">BLOG</NavbarLink>
              <NavbarLink url="#">ABOUT US</NavbarLink>
              <NavbarLink url="#">CONTACT US</NavbarLink>
            </ul>
          </div>
          <div className="flex justify-end items-center gap-x-4 laptop:gap-x-8">
            <button
              className={
                "hover:text-personal-primary hover:bg-white " +
                (search ? "text-personal-primary bg-white" : "text-white")
              }
              onClick={() => {
                setSearch(!search), setDropdown(false), setCart(false);
              }}
            >
              <AiOutlineSearch className="w-6 h-6" />
            </button>
            <button
              className={
                "hover:text-personal-primary hover:bg-white " +
                (cart ? "text-personal-primary bg-white" : "text-white")
              }
              onClick={() => {
                setCart(!cart), setDropdown(false), setSearch(false);
              }}
            >
              <AiOutlineShoppingCart className="w-6 h-6" />
            </button>
            <div
              className="flex tablet:hidden"
              onClick={() => {
                setDropdown(!dropdown), setCart(false), setSearch(false);
              }}
            >
              <button
                className={
                  "hover:text-personal-primary hover:bg-white " +
                  (dropdown
                    ? "text-personal-primary bg-white rotate-90 duration-700"
                    : "text-white")
                }
              >
                {dropdown ? (
                  <AiOutlineClose className="w-6 h-6" />
                ) : (
                  <AiOutlineMenu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          "absolute flex flex-col items-center bg-white w-full tablet:w-1/2 laptop:w-1/3 desktop:w-1/4 border right-0 p-5 duration-700 ease-in-out z-20 " +
          (cart ? "mt-0" : "-mt-96")
        }
      >
        <span>Your cart is empty</span>
      </div>
      <div
        className={
          "absolute w-full duration-700 ease-in-out z-10 " +
          (dropdown ? "mt-0" : "-mt-96")
        }
      >
        <ul className="flex flex-col gap-y-5 py-10 text-lg text-center bg-white w-full border-y">
          <li onClick={() => setDropdown(false)}>
            <NavbarLink url="#">MENU</NavbarLink>
          </li>
          <li onClick={() => setDropdown(false)}>
            <NavbarLink url="#">BLOG</NavbarLink>
          </li>
          <li onClick={() => setDropdown(false)}>
            <NavbarLink url="#">ABOUT US</NavbarLink>
          </li>
          <li onClick={() => setDropdown(false)}>
            <NavbarLink url="#">CONTACT US</NavbarLink>
          </li>
        </ul>
      </div>
      {search && (
        <div className="flex justify-center w-full border bg-white absolute">
          <div className="flex flex-col tablet:flex-row py-5">
            <input
              type="search"
              className="form-control relative flex-auto min-w-0 block w-full px-3 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none"
              placeholder="Search"
              autoFocus
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
