import React, {useRef} from "react";
import newsletter_bg from "/assets/images/newsletter_bg.jpg";
import ButtonPrimary from "../Button/ButtonPrimary";
import { useIsVisible } from "react-is-visible";
import FadeUpTrail from "../Animation/FadeUpTrail";

const NewsletterForm = () => {
  const newsletterRef = useRef();
  const newsletterIsVisible = useIsVisible(newsletterRef, { once: true });

  return (
    <div ref={newsletterRef} className="w-full">
      <img
        src={newsletter_bg.src}
        alt=""
        className="absolute w-full h-full object-cover"
      />
      <div className="absolute bg-black opacity-50 w-full h-full" />
      <FadeUpTrail open={newsletterIsVisible} className="container relative flex flex-col justify-center items-center text-center gap-y-8 max-w-full min-h-[60vh]">
        <p className="text-white font-oswald uppercase font-bold text-4xl desktop:text-5xl">
          subscribe to our newsletter
        </p>
        <form
          action=""
          className="flex flex-col tablet:flex-row justify-center"
        >
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            className="px-4 py-2 border-gray-700"
            required
          />
          <ButtonPrimary type="submit">subscribe now</ButtonPrimary>
        </form>
      </FadeUpTrail>
    </div>
  );
};

export default NewsletterForm;
