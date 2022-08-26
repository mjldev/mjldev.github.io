import React, { useState } from "react";
import Overlay from "../components/Header/Overlay";
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
    <div className="overflow-hidden">
      
      <main>
        <section>
          <div className="container max-w-[90%] relative">
            {chickenTab && <ChickenMenu />}
            {porkTab && <PorkMenu />}
            {beefTab && <BeefMenu />}
          </div>
        </section>
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
          <div className="container relative max-w-full">
            <NewsletterForm />
          </div>
        </section>
      </main>
    </div>
  );
};

export default OurMenu;
