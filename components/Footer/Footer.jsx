import React from "react";
import FooterLink from "./FooterLink";
import SocialMedia from "../SocialMedia.jsx/SocialMedia";

const Footer = () => {
  return (
    <footer className="overflow-hidden">
      <section className="container relative">
        <div className="flex flex-col justify-center text-center gap-y-8 py-20">
          <p className="font-oswald font-bold text-4xl text-personal-textPrimary select-none laptop:text-5xl">
            MJL KITCHEN
          </p>
          <ul className="flex flex-wrap justify-center gap-x-8">
            <FooterLink url="/our-menu">our menu</FooterLink>
            <FooterLink url="/about-us">about us</FooterLink>
            <FooterLink url="/contact-us">contact us</FooterLink>
          </ul>
          <SocialMedia/>
          <p className="text-base text-personal-textPrimary">©2022 MJL KITCHEN</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
