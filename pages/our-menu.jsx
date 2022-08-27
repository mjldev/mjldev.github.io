import React, { useState } from "react";
import NewsletterForm from "../components/Newsletter/NewsletterForm";
import { MenuTab } from "../components/MenuTab/MenuTab";

const OurMenu = () => {
  const [currentTab, setCurrentTab] = useState("1");

  const handleTabClick = (e) => {
    setCurrentTab(e.target.id);
  };

  return (
    <div className="overflow-hidden">
      <header>
        {MenuTab.map((MenuTab, i) => (
          <div key={i} className="w-screen object-contain">
            {currentTab === `${MenuTab.id}` && (
              <div className="relative">
                <img
                  src={MenuTab.image}
                  alt={MenuTab.alt}
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
            {MenuTab.map((MenuTab, i) => (
              <button
                className="flex-1 bg-transparent hover:bg-gray-300 disabled:bg-gray-500 border transition-all duration-300 ease-ou py-4"
                key={i}
                id={MenuTab.id}
                disabled={currentTab === `${MenuTab.id}`}
                onClick={handleTabClick}
              >
                {MenuTab.tabTitle}
              </button>
            ))}
          </div>
        </section>
        <section>
          <div className="container max-w-[90%] relative">
            {MenuTab.map((MenuTab, i) => (
              <div key={i}>
                {currentTab === `${MenuTab.id}` && (
                  <div className="flex flex-col items-center text-center py-20">
                    <p className="title">{MenuTab.title}</p>
                    <p>{MenuTab.content}</p>
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
