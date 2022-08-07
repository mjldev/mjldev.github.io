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
    id: 1,
    image: chicken_bg.src,
    title: "CHICKEN ADOBO",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    button: "LEARN MORE",
  },
  {
    id: 2,
    image: pork_bg.src,
    title: "PORK PATA HUMBA",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    button: "LEARN MORE",
  },
  {
    id: 3,
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
    <div className="flex justify-center h-auto">
      <div className="overflow-hidden" ref={viewportRef}>
        <div className="grid grid-flow-col">
          {slide.map(({ id, image, title, text, button }) => {
            return (
              <div key={id} className="h-auto w-screen object-contain">
                <div className="relative h-full">
                  <BannerImage url={image} />
                  <Overlay />
                  <div className="container flex justify-center flex-col min-h-screen max-w-full mx-auto px-4 laptop:px-12 relative">
                    <div className="flex flex-col items-start gap-y-4 laptop:gap-y-8">
                      <h2 className="font-oswald font-semibold text-5xl laptop:text-6xl text-white">
                        {title}
                      </h2>
                      <p className="text-white text-base">{text}</p>
                      <ButtonPrimary url="#">{button}</ButtonPrimary>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
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
