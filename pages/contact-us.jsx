import React from "react";
import contact_us_banner from "../assets/images/contact_us_banner.jpg";
import ButtonPrimary from "../components/Button/ButtonPrimary";
import ContactInput from "../components/Contact/ContactInput";
import BackgroundImage from "../components/Header/BackgroundImage";
import Title from "../components/Header/Title";
import NewsletterForm from "../components/Newsletter/NewsletterForm";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import restaurant from "../assets/images/restaurant.jpg";

const ContactUs = () => {
  return (
    <div className="flex flex-col gap-8 tablet:gap-20 overflow-hidden -mt-20 ">
      <header>
        <div className="w-screen object-contain">
          <div className="relative">
            <BackgroundImage url={contact_us_banner.src} alt="Contact Us" />
            <div className="flex justify-center flex-col min-h-[70vh] backdrop-brightness-50 relative">
              <div className="flex flex-col items-center text-center gap-y-4">
                <Title heading="contact us" />
              </div>
            </div>
          </div>
        </div>
      </header>
      <section>
        <div className="container grid grid-cols-1 laptop:grid-cols-2 gap-8 w-[90%] relative">
          <form action="" className="flex flex-col gap-8">
            <p className="font-oswald font-bold text-personal-textPrimary text-xl tablet:text-2xl uppercase">
              Always happy to hear from you.
            </p>
            <div className="grid grid-cols-1 tablet:grid-cols-2 gap-4">
              <div className="flex flex-col gap-y-4">
                <ContactInput
                  label="name"
                  htmlFor="full_name"
                  type="text"
                  name="name"
                  id="full_name"
                />
                <ContactInput
                  label="Phone"
                  htmlFor="phone"
                  type="tel"
                  name="phone"
                  id="phone"
                />
                <ContactInput
                  label="email"
                  htmlFor="email"
                  type="email"
                  name="email"
                  id="email"
                />
              </div>
              <div className="flex flex-col gap-y-4">
                <select
                  name=""
                  id=""
                  className="border border-gray-400 p-4"
                  required
                >
                  <option value="">-SELECT-</option>
                  <option value="Enquiries">BUSINESS ENQUIRIES</option>
                  <option value="Service">SERVICE</option>
                  <option value="Other">OTHER</option>
                </select>
                <textarea
                  placeholder="MESSAGE"
                  name="message"
                  id=""
                  cols="30"
                  rows="5"
                  className="border border-gray-400 pl-4 py-4"
                  required
                ></textarea>
              </div>
              <div className="flex flex-col gap-y-4 items-start">
                <div className="flex items-center">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-personal-primary border-personal-borderDark"
                    required
                  />
                  <label
                    htmlFor="default-checkbox"
                    className="ml-2 text-xs text-personal-textSecondary"
                  >
                    I agree to the terms and conditions.
                  </label>
                </div>
                <ButtonPrimary>submit</ButtonPrimary>
              </div>
            </div>
          </form>
          <iframe
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=Dap-dap%20Legazpi%20City&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
            className="w-full h-full min-h-[50vh]"
          />
        </div>
      </section>
      <section>
        <div className="container grid grid-cols-1 laptop:grid-cols-2 gap-4 w-[90%] relative">
          <div>
            <div className="flex flex-col gap-4 border border-gray-400 overflow-hidden p-4">
              <div className="flex gap-x-4 items-center">
                <HiOutlineLocationMarker className="h-5 w-5" />
                <p className="text-base text-personal-textPrimary">
                  Lorem ipsum dolor sit amet consecteturs
                </p>
              </div>
              <div className="flex gap-x-4 items-center">
                <AiOutlinePhone className="h-5 w-5" />
                <p className="text-base text-personal-textPrimary">
                  +63 911 111 1111
                </p>
              </div>
              <div className="flex gap-x-4 items-center">
                <AiOutlineMail className="h-5 w-5" />
                <p className="text-base text-personal-textPrimary">
                  loremipsum@dolor.sit
                </p>
              </div>
            </div>
          </div>
          <img
            src={restaurant.src}
            alt=""
            className="w-full h-full min-h-[50vh] object-cover"
          />
        </div>
      </section>
      <section>
        <div className="container relative max-w-full">
          <NewsletterForm />
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
