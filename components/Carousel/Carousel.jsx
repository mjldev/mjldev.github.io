import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import DotButton from "./DotButton";
import ButtonLink from "../Button/ButtonLink";
import { CarouselItem } from "./CarouselItem";

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
          {CarouselItem.map((item, i) => (
            <div key={i} className="w-screen object-contain">
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="absolute w-full h-full object-cover"
                />
                <div className="absolute bg-black opacity-50 w-full h-full" />
                <div className="container flex justify-center flex-col min-h-screen max-w-[90%] relative">
                  <div className="flex flex-col items-start gap-y-4">
                    <p className="font-oswald font-bold text-2xl desktop:text-4xl text-white uppercase underline underline-offset-8  decoration-4">
                      must try!
                    </p>
                    <p className="font-oswald font-semibold text-5xl laptop:text-6xl text-white uppercase">
                      {item.title}
                    </p>
                    <p className="text-white font-oswald text-2xl uppercase">
                      {item.text}
                    </p>
                    <ButtonLink url={item.path}>{item.button}</ButtonLink>
                  </div>
                </div>
              </div>
            </div>
          ))}
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
