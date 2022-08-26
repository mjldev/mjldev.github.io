import React, { useState } from "react";
import Title from "../components/Header/Title";
import pork_bg from "../assets/images/pork_bg.jpg";
import beef_bg from "../assets/images/beef_bg.jpg";
import chicken_bg from "../assets/images/chicken_bg.jpg";
import NewsletterForm from "../components/Newsletter/NewsletterForm";
import ButtonPrimary from "../components/Button/ButtonPrimary";
import ChickenMenu from "../components/MenuTab/ChickenMenu";
import PorkMenu from "../components/MenuTab/PorkMenu";
import BeefMenu from "../components/MenuTab/BeefMenu";

const OurMenu = () => {
  const [chickenTab, setChickenTab] = useState(true);
  const [porkTab, setPorkTab] = useState(false);
  const [beefTab, setBeefTab] = useState(false);

  return (
    <div className="overflow-hidden">
      <header className="tablet:-mt-20">
        {chickenTab && (
          <img
            src={chicken_bg.src}
            alt="Chicken"
            className="absolute w-full h-full object-cover"
          />
        )}
        {porkTab && (
          <img
            src={pork_bg.src}
            alt="Pork"
            className="absolute w-full h-full object-cover"
          />
        )}
        {beefTab && (
          <img
            src={beef_bg.src}
            alt="Pork"
            className="absolute w-full h-full object-cover"
          />
        )}
        <div className="absolute bg-black opacity-50 w-full h-full" />
        <div className="container relative flex justify-center flex-col min-h-[100vh] max-w-full mr-auto ml-auto">
          <div className="grid grid-col-1 justify-items-center text-center gap-8 px-4">
            <Title heading="MJL KITCHEN MENU" />
            <ButtonPrimary url="/contact-us">ORDER ONLINE</ButtonPrimary>
          </div>
        </div>
      </header>
      <main>
        <section>
          <div className="container flex max-w-full relative">
            <button
              onClick={() => {
                setChickenTab(true), setPorkTab(false), setBeefTab(false);
              }}
              className={`flex-1 font-oswald font-semibold text-4xl uppercase py-10 border-t ${
                chickenTab
                  ? "bg-white text-personal-textPrimary"
                  : "bg-transparent text-white"
              }`}
            >
              chicken
            </button>
            <button
              onClick={() => {
                setChickenTab(false), setPorkTab(true), setBeefTab(false);
              }}
              className={`flex-1 font-oswald font-semibold text-4xl uppercase py-10 border-t ${
                porkTab
                  ? "bg-white text-personal-textPrimary"
                  : "bg-transparent text-white"
              }`}
            >
              pork
            </button>
            <button
              onClick={() => {
                setChickenTab(false), setPorkTab(false), setBeefTab(true);
              }}
              className={`flex-1 font-oswald font-semibold text-4xl uppercase py-10 border-t ${
                beefTab
                  ? "bg-white text-personal-textPrimary"
                  : "bg-transparent text-white"
              }`}
            >
              beef
            </button>
          </div>
        </section>
        <section>
          <div className="container max-w-[90%] relative">
            {chickenTab && <ChickenMenu />}
            {porkTab && <PorkMenu />}
            {beefTab && <BeefMenu />}
          </div>
        </section>
        <section>
          <div className="container relative max-w-full">
            <NewsletterForm />
          </div>
        </section>
      </main>
    </div>
  );
};

export default OurMenu;
