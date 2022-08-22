import React from "react";
import newsletter_bg from "/assets/images/newsletter_bg.jpg";
import ButtonPrimary from "../Button/ButtonPrimary"

const NewsletterForm = () => {
  return (
    <div className="w-full">
      <img
        src={newsletter_bg.src}
        alt=""
        className="absolute w-full h-full object-cover"
      />
      <div className="absolute bg-black opacity-50 w-full h-full" />
      <div className="container relative flex flex-col justify-center items-center text-center gap-y-8 max-w-full min-h-[60vh]">
        <div>
          <p className="text-white font-oswald uppercase font-bold text-4xl desktop:text-5xl">
            subscribe to our newsletter
          </p>
        </div>
        <form action="" className="flex flex-col tablet:flex-row justify-center">
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            className="px-4 py-2 border-gray-700"
            required
          />
          <ButtonPrimary type="submit">subscribe now</ButtonPrimary>
        </form>
      </div>
    </div>
  );
};

export default NewsletterForm;
