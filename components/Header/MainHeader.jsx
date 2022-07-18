import React from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import FadeIn from "../anim/FadeIn";

const MainHeader = () => {
  return (
    <ParallaxProvider>
      <Parallax speed={-10}>
        <div className="flex justify-center items-center min-h-screen max-w-none">
          <div className="absolute left-0 top-0 right-0 bottom-0 flex justify-center items-center overflow-hidden max-w-none mr-auto ml-auto">
            <img
              className="left-0 top-0 right-0 bottom-0 h-full max-w-none flex object-fill"
              src="https://picsum.photos/1467/672?grayscale"
              alt="bg-image"
            />
            <div className="bg-black opacity-40 absolute left-0 top-0 right-0 bottom-0 w-full h-full mr-auto ml-auto" />
          </div>
          <Parallax
            speed={10}
          >
            <FadeIn>
              <div className="container relative max-w-full mr-auto ml-auto">
                <div className="grid justify-items-center text-center grid-cols-1 gap-y-8">
                  <p className="text-4xl font-semibold md:text-5xl lg:text-6xl xl:text-6xl text-white">
                    SAMPLE WEBSITE
                  </p>
                  <p className="text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <a
                    className="py-4 px-8 bg-white rounded-md ease-in-out block"
                    href={"/product"}
                  >
                    EXPLORE
                  </a>
                </div>
              </div>
            </FadeIn>
          </Parallax>
        </div>
      </Parallax>
      <Parallax speed={-1}></Parallax>
    </ParallaxProvider>
  );
};

export default MainHeader;
