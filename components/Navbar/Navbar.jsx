import React, { useEffect, useState } from "react";
import Link from "next/link";
import NavbarLink from "./NavbarLink";

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

  return (
    <>
      <nav className="sticky bg-white top-0 z-50">
        <div className="containerl bg-white max-w-full py-5 px-4 laptop:px-10 z-20 relative">
          <div className="grid grid-flow-col desktop:grid-cols-3 items-center">
            <Link href="/">
              <a className="flex font-oswald font-bold tracking-tighter text-2xl desktop:text-3xl">
                MJL KITCHEN
              </a>
            </Link>
            <div className="menu hidden tablet:flex justify-center">
              <ul className="flex gap-x-8 text-md">
                <NavbarLink url="#">MENU</NavbarLink>
                <NavbarLink url="#">BLOG</NavbarLink>
                <NavbarLink url="#">ABOUT US</NavbarLink>
                <NavbarLink url="#">CONTACT US</NavbarLink>
              </ul>
            </div>
            <div className="flex justify-end items-center gap-x-4 laptop:gap-x-8">
              <button
                className={
                  "w-6 h-6 bg-search-icon bg-no-repeat " +
                  (search ? "border bg-gray-300 rounded-md" : "border-none")
                }
                onClick={() => {
                  setSearch(!search), setDropdown(false), setCart(false);
                }}
              />
              <button
                className={
                  "w-6 h-6 bg-shopping-bag-icon bg-no-repeat" +
                  (cart ? "border bg-gray-300 rounded-md" : " border-none")
                }
                onClick={() => {
                  setCart(!cart), setDropdown(false), setSearch(false);
                }}
              />
              <div
                className="flex tablet:hidden"
                onClick={() => {
                  setDropdown(!dropdown), setCart(false), setSearch(false);
                }}
              >
                <button
                  className={
                    "w-6 h-6 duration-700 ease-in-out " +
                    (dropdown ? "rotate-90 bg-close-icon" : "bg-menu-icon")
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            "absolute flex flex-col items-center bg-white w-1/2 laptop:w-1/3 desktop:w-1/4 border right-0 p-5 duration-700 ease-in-out z-20 " +
            (cart ? "mt-0" : "-mt-96")
          }
        >
          <span>Your cart is empty</span>
        </div>
        <div
          className={
            "absolute w-full duration-700 ease-in-out z-10 " +
            (dropdown ? "mt-0" : "-mt-80")
          }
        >
          <ul className="flex flex-col gap-y-5 py-10 text-lg text-center bg-white w-full border-y">
            <li onClick={() => setDropdown(false)}>
              <NavbarLink url="/our-menu">MENU</NavbarLink>
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
                aria-label="Search"
                aria-describedby="button-addon3"
                autoFocus
              />
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
