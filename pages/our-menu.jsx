import React, { useState } from "react";
import Title from "../components/Header/Title";
import pork_bg from "../assets/images/pork_bg.jpg";
import beef_bg from "../assets/images/beef_bg.jpg";
import chicken_bg from "../assets/images/chicken_bg.jpg";
import NewsletterForm from "../components/Newsletter/NewsletterForm";
import ButtonPrimary from "../components/Button/ButtonPrimary";
import BackgroundImage from "../components/Header/BackgroundImage";
import ChickenMenu from "../components/MenuTab/ChickenMenu";
import PorkMenu from "../components/MenuTab/PorkMenu";
import BeefMenu from "../components/MenuTab/BeefMenu";

const OurMenu = () => {
  const [chickenTab, setChickenTab] = useState(true);
  const [porkTab, setPorkTab] = useState(false);
  const [beefTab, setBeefTab] = useState(false);

  return (
    <div className="overflow-hidden -mt-20">
      <header>
        <div className="w-screen object-contain">
          <div className="relative">
            {chickenTab && (
              <BackgroundImage url={chicken_bg.src} alt="Chicken Adobo" />
            )}
            {porkTab && (
              <BackgroundImage url={pork_bg.src} alt="Pork Pata Humba" />
            )}
            {beefTab && (
              <BackgroundImage url={beef_bg.src} alt="Special Beef Soup" />
            )}
            <div className="flex justify-center flex-col min-h-[80vh] backdrop-brightness-50 relative">
              <div className="flex flex-col items-center text-center gap-y-8">
                <Title heading="mjl kitchen menu" />
                <ButtonPrimary>order online</ButtonPrimary>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="mt-[-109px] tablet:mt-[-110px] desktop:tablet:mt-[-120px]">
        <div className="container flex max-w-full relative">
          <button
            onClick={() => {
              setChickenTab(true), setPorkTab(false), setBeefTab(false);
            }}
            className={`flex-1 font-oswald font-semibold text-xl tablet:text-2xl laptop:text-4xl uppercase py-10 border-t ${
              chickenTab
                ? "bg-white text-personal-textPrimary"
                : "bg-transparent text-white hover:backdrop-brightness-75"
            }`}
          >
            chicken
          </button>
          <button
            onClick={() => {
              setChickenTab(false), setPorkTab(true), setBeefTab(false);
            }}
            className={`flex-1 font-oswald font-semibold text-xl tablet:text-2xl laptop:text-4xl uppercase py-10 border-t ${
              porkTab
                ? "bg-white text-personal-textPrimary"
                : "bg-transparent text-white hover:backdrop-brightness-75"
            }`}
          >
            pork
          </button>
          <button
            onClick={() => {
              setChickenTab(false), setPorkTab(false), setBeefTab(true);
            }}
            className={`flex-1 font-oswald font-semibold text-xl tablet:text-2xl laptop:text-4xl uppercase py-10 border-t ${
              beefTab
                ? "bg-white text-personal-textPrimary"
                : "bg-transparent text-white hover:backdrop-brightness-75"
            }`}
          >
            beef
          </button>
        </div>
      </section>
      <section>
        <div className="container w-[90%] relative">
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
    </div>
  );
};

export default OurMenu;
