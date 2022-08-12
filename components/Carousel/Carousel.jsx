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

const slide = [
  {
    image: chicken_bg.src,
    title: "CHICKEN ADOBO",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    button: "LEARN MORE",
  },
  {
    image: pork_bg.src,
    title: "PORK PATA HUMBA",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    button: "LEARN MORE",
  },
  {
    image: beef_bg.src,
    title: "BEEF SOUP",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    button: "LEARN MORE",
  },
];

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
    <div className="flex justify-center max-w-full h-auto relative">
      <div className="overflow-hidden" ref={viewportRef}>
        <div className="grid grid-flow-col">
          {slide.map((item, index) => {
            return (
              <div key={index} className="w-screen object-contain">
                <div className="relative">
                  <BannerImage url={item.image} />
                  <Overlay />
                  <div className="flex justify-center flex-col min-h-screen px-4 laptop:px-12 relative">
                    <div className="flex flex-col items-start gap-y-4 laptop:gap-y-8">
                      <h2 className="font-oswald font-semibold text-5xl laptop:text-6xl text-white">
                        {item.title}
                      </h2>
                      <p className="text-white text-md">{item.text}</p>
                      <ButtonPrimary url="#">{item.button}</ButtonPrimary>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex py-8 self-end absolute">
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
