import React from "react";
import SocialMediaLink from "./SocialMediaLink";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <ul className="flex justify-center gap-x-4">
      <SocialMediaLink url="#!">
        <FaFacebookF className="w-6 h-6" />
      </SocialMediaLink>
      <SocialMediaLink url="#!">
        <AiOutlineInstagram className="w-6 h-6" />
      </SocialMediaLink>
      <SocialMediaLink url="#!">
        <AiOutlineTwitter className="w-6 h-6" />
      </SocialMediaLink>
    </ul>
  );
};

export default SocialMedia;
