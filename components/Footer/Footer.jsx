import React from "react";
import FooterLink from "./FooterLink";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="overflow-hidden">
      <section className="container relative">
        <div className="flex flex-col justify-center text-center gap-y-8 py-10">
          <p className="font-oswald font-bold text-4xl text-personal-textPrimary select-none laptop:text-5xl">
            MJL KITCHEN
          </p>
          <ul className="flex flex-wrap justify-center gap-x-8">
            <FooterLink url="#!">our menu</FooterLink>
            <FooterLink url="#!">blog</FooterLink>
            <FooterLink url="#!">about us</FooterLink>
            <FooterLink url="#!">contact us</FooterLink>
          </ul>
          <ul className="flex justify-center gap-x-8">
            <FooterLink url="#!"><FaFacebookF className="w-8 h-8"/></FooterLink>
            <FooterLink url="#!"><AiOutlineInstagram className="w-8 h-8"/></FooterLink>
            <FooterLink url="#!"><AiOutlineTwitter className="w-8 h-8"/></FooterLink>
          </ul>
          <p className="text-base text-personal-textPrimary">©2022 MJL KITCHEN</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
