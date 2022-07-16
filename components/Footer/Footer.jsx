import React from "react";
// import FooterImageLink from "./FooterImageLink";
import FooterItem from "./FooterItem";
import NewsletterSubscribe from './NewsletterSubscribe';

const Footer = (props) => {
  return (
    <div>
      <div className="flex justify-center items-center py-20 bg-gray-100">
        <NewsletterSubscribe/>
      </div>
      <footer className="flex flex-col justify-center bg-gray-700 relative">
        <div className="container flex flex-col justify-center text-center items-center p-10">
          {/* <div className="flex gap-x-4 mb-5">
          <div>
            <FooterImageLink
              url="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Facebook-icon-1.png/640px-Facebook-icon-1.png"
              alt="fb"
            />
          </div>
          <div>
            <FooterImageLink
              url="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/800px-Instagram-Icon.png"
              alt="ig"
            />
          </div>
        </div> */}
          <FooterItem copyright="Copyright 2022 © Sample Website" />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
