import React, { useState } from "react";
import NewsletterForm from "../components/Newsletter/NewsletterForm";
import { Tab } from "../components/MenuTab/Tab";

const OurMenu = () => {
  const [currentTab, setCurrentTab] = useState("1");

  const handleTabClick = (e) => {
    setCurrentTab(e.target.id);
  };

  return (
    <div className="overflow-hidden">
      <header>
        {Tab.map((Tab, i) => (
          <div key={i} className="w-screen object-contain">
            {currentTab === `${Tab.id}` && (
              <div className="relative">
                <img
                  src={Tab.image}
                  alt={Tab.alt}
                  className="absolute w-full h-full object-cover"
                />
                <div className="absolute bg-black opacity-50 w-full h-full" />
                <div className="container flex justify-center flex-col min-h-[60vh] max-w-[90%] relative">
                  <div className="flex flex-col items-start gap-y-4">
                    <p className="font-oswald font-bold text-2xl desktop:text-4xl text-white uppercase underline underline-offset-8  decoration-4">
                      must try!
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </header>
      <main>
        <section>
          <div className="container flex justify-between max-w-full relative">
            {Tab.map((Tab, i) => (
              <button
                className="flex-1 bg-transparent hover:bg-gray-300 disabled:bg-gray-500 border transition-all duration-300 ease-ou py-4"
                key={i}
                id={Tab.id}
                disabled={currentTab === `${Tab.id}`}
                onClick={handleTabClick}
              >
                {Tab.tabTitle}
              </button>
            ))}
          </div>
        </section>
        <section>
          <div className="container max-w-[90%] relative">
            {Tab.map((Tab, i) => (
              <div key={i}>
                {currentTab === `${Tab.id}` && (
                  <div className="flex flex-col items-center text-center py-20">
                    <p className="title">{Tab.title}</p>
                    <p>{Tab.content}</p>
                  </div>
                )}
              </div>
            ))}
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
