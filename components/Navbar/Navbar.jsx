import React, { useEffect, useState } from "react";
import NavbarItem from "./NavbarItem";


const Navbar = (props) => {
  // onClick & Scroll Navbar Anim
  const [navdropDown, setNavdropDown] = useState(0);
  const [navdropDownLink, setNavdropDownLink] = useState(0);
  const navbarDropDown = () => {
    const navbar = document.getElementById("navbarLinks");
    if (navbar.style.display == "block") {
      navbar.style.display = "none";
    } else {
      navbar.style.display = "block";
    }
  };
  const navbarLink = () => {
    const navbar = document.getElementById("navbarLinks");
    if (navbar.style.display == "block") {
      navbar.style.display = "none";
    } else {
      navbar.style.display = "block";
    }
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("dropdown", navbarDropDown);

      return () => {
        window.removeEventListener("dropdown", navbarDropDown);
      };
    }
  }, [navdropDown]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("link", navbarLink);

      return () => {
        window.removeEventListener("link", navbarLink);
      };
    }
  }, [navdropDownLink]);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [windowWidth, setWindowWidth] = useState(768);
  const controlNavbar = () => {
    if (window.innerWidth < windowWidth) {
      if (window.scrollY > lastScrollY) {
        document.getElementById("navbar").style.top = "-150px";
        document.getElementById("navbarLinks").style.display = "none";
      } else {
        document.getElementById("navbar").style.top = "0";
      }
      setLastScrollY(window.scrollY);
    } else {
      document.getElementById("navbar").style.top = "0";
    }
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);
  const widthResizeNavbar = () => {
    if (window.innerWidth > windowWidth) {
      document.getElementById("navbarLinks").style.display = "none";
    }
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", widthResizeNavbar);
      return () => {
        window.removeEventListener("resize", widthResizeNavbar);
      };
    }
  }, [windowWidth]);
  /////////////////////////////////////////////////////////////
  return (
    <div
      id="navbar"
      className="flex flex-col justify-center w-full h-auto min-w-screen bg-white sticky top-0 z-50"
    >
      <div className="flex-row justify-between items-center hidden md:flex lg:flex xl:flex px-8">
        <ul className="w-20 h-auto block p-2">
          <NavbarItem url="/">
            <img
              src="http://cdn.onlinewebfonts.com/svg/img_148071.png"
              alt="Sample Icon"
            />
          </NavbarItem>
        </ul>
        <ul className="flex flex-row gap-x-4 p-4">
          <NavbarItem url="/product">PRODUCT</NavbarItem>
          <NavbarItem url="/blog">BLOG</NavbarItem>
          <NavbarItem url="/about-us">ABOUT US</NavbarItem>
          <NavbarItem url="/contact-us">CONTACT US</NavbarItem>
        </ul>
      </div>
      <div
        id="hamburger"
        className="flex flex-row justify-between items-center md:hidden lg:hidden xl:hidden px-4"
      >
        <ul>
          <div className="w-20 h-auto block p-2">
            <NavbarItem url="/">
              <img
                src="http://cdn.onlinewebfonts.com/svg/img_148071.png"
                alt="Sample Icon"
              />
            </NavbarItem>
          </div>
        </ul>
        <ul onClick={navbarDropDown} className="w-14 h-auto block p-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
            alt=""
          />
        </ul>
      </div>
      <div
        id="navbarLinks"
        className="hidden text-center bg-white w-screen top-16 p-4 absolute"
      >
        <ul onClick={navbarLink} className="flex flex-col gap-y-4">
          <NavbarItem url="/product">PRODUCT</NavbarItem>
          <NavbarItem url="/blog">BLOG</NavbarItem>
          <NavbarItem url="/about-us">ABOUT US</NavbarItem>
          <NavbarItem url="/contact-us">CONTACT US</NavbarItem>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
