import React from "react";
import NavbarLink from "./NavbarLink";

const MobileMenu = () => {
  return (
    <ul className="flex flex-col gap-y-5 py-10 text-lg text-center bg-white w-full border-y">
      <li
        onClick={() => setDropdown(false)}
        className="bg-gradient-to-r from-personal-primary to-personal-primary bg-left-bottom bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] group-hover:bg-right-bottom transition-all duration-500 ease-out"
      >
        <NavbarLink url="#">MENU</NavbarLink>
      </li>
      <li
        onClick={() => setDropdown(false)}
        className="bg-gradient-to-r from-personal-primary to-personal-primary bg-left-bottom bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] group-hover:bg-right-bottom transition-all duration-500 ease-out"
      >
        <NavbarLink url="#">BLOG</NavbarLink>
      </li>
      <li
        onClick={() => setDropdown(false)}
        className="bg-gradient-to-r from-personal-primary to-personal-primary bg-left-bottom bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] group-hover:bg-right-bottom transition-all duration-500 ease-out"
      >
        <NavbarLink url="#">ABOUT US</NavbarLink>
      </li>
      <li
        onClick={() => setDropdown(false)}
        className="bg-gradient-to-r from-personal-primary to-personal-primary bg-left-bottom bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] group-hover:bg-right-bottom transition-all duration-500 ease-out"
      >
        <NavbarLink url="#">CONTACT US</NavbarLink>
      </li>
    </ul>
  );
};

export default MobileMenu;
