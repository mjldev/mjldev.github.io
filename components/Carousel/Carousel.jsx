import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import DotButton from "./DotButton";
import pork_bg from "/assets/images/pork_bg.jpg";
import beef_bg from "/assets/images/beef_bg.jpg";
import chicken_bg from "/assets/images/chicken_bg.jpg";
import BannerImage from "../Header/BannerImage";
import Overlay from "../Header/Overlay";
import ButtonPrimary from "../Button/ButtonPrimary";

const Carousel = () => {
  const options = {
    delay: 4000,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
  };
  const autoplay = Autoplay(options);
  const [viewportRef, embla] = useEmblaCarousel(
    { skipSnaps: false, loop: true },
    [autoplay]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const scrollTo = useCallback(
    (index) => embla && embla.scrollTo(index),
    [embla]
  );

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  return (
    <div className="flex justify-center h-auto">
      <div className="overflow-hidden" ref={viewportRef}>
        <div className="grid grid-flow-col">
          <div className="h-auto w-screen object-contain">
            <div className="relative h-full">
              <BannerImage url={chicken_bg.src} />
              <Overlay />
              <div className="container relative flex justify-center flex-col min-h-screen md:min-h-screen max-w-full mr-auto ml-auto px-4 md:px-12">
                <div className="grid grid-col-1 justify-items-start gap-6">
                  <span className="text-white text-3xl underline underline-offset-4 font-oswald">
                    MUST TRY!
                  </span>
                  <span className="font-oswald font-semibold text-6xl md:text-7xl text-white">
                    CHICKEN ADOBO
                  </span>
                  <span className="text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </span>
                  <ButtonPrimary url="/our-menu">LEARN MORE</ButtonPrimary>
                </div>
              </div>
            </div>
          </div>
          <div className="h-auto w-screen object-contain">
            <div className="relative h-full">
              <BannerImage url={pork_bg.src} />
              <Overlay />
              <div className="container relative flex justify-center flex-col min-h-screen md:min-h-screen max-w-full mr-auto ml-auto px-4 md:px-12">
                <div className="grid justify-items-start grid-cols-1 gap-y-6">
                  <span className="text-white text-3xl underline underline-offset-4 font-oswald">
                    MUST TRY!
                  </span>
                  <span className="font-oswald font-semibold text-6xl md:text-7xl text-white">
                    PORK PATA HUMBA
                  </span>
                  <span className="text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </span>
                  <ButtonPrimary url="/our-menu">LEARN MORE</ButtonPrimary>
                </div>
              </div>
            </div>
          </div>
          <div className="h-auto w-screen object-contain">
            <div className="relative h-full">
              <BannerImage url={beef_bg.src} />
              <Overlay />
              <div className="container relative flex justify-center flex-col min-h-screen md:min-h-screen max-w-full mr-auto ml-auto px-4 md:px-12">
                <div className="grid justify-items-start grid-cols-1 gap-y-6">
                  <span className="text-white text-3xl underline underline-offset-4 font-oswald">
                    MUST TRY!
                  </span>
                  <span className="font-oswald font-semibold text-6xl md:text-7xl text-white">
                    BEEF SOUP
                  </span>
                  <span className="text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </span>
                  <ButtonPrimary url="/our-menu">LEARN MORE</ButtonPrimary>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-8 self-end absolute">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
