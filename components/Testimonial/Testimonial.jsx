import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
// import { TestimonialItem } from "./TestimonialItem";
import PreviousButton from "./PreviousButton";
import NextButton from "./NextButton";
import Rating from "./Rating";

const Testimonial = () => {
  
  const TestimonialItem = [
    {
      name: "Review by Lorem Ipsum",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias obcaecati aperiam itaque et porro. Odit dolor placeat praesentium! Asperiores.",
    },
    {
      name: "Review by Lorem Ipsum",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias obcaecati aperiam itaque et porro. Odit dolor placeat praesentium! Asperiores.",
    },
    {
      name: "Review by Lorem Ipsum",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias obcaecati aperiam itaque et porro. Odit dolor placeat praesentium! Asperiores.",
    },
    {
      name: "Review by Lorem Ipsum",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias obcaecati aperiam itaque et porro. Odit dolor placeat praesentium! Asperiores.",
    },
    {
      name: "Review by Lorem Ipsum",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias obcaecati aperiam itaque et porro. Odit dolor placeat praesentium! Asperiores.",
    },
  ];

  const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false, loop: true });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
   
    embla.on("select", onSelect);
  }, [embla, onSelect]);

  return (
    <div className="flex justify-center items-center relative max-w-full tablet:max-w-[50vw] mx-auto">
      <div className="w-full overflow-hidden" ref={viewportRef}>
        <div className="container flex gap-4">
          {TestimonialItem.map((item, index) => {
            return (
              <div key={index} className="relative min-w-full">
                <div className="flex flex-col justify-center items-center text-center gap-y-4 relative overflow-hidden px-4 laptop:px-16">
                  <p className="leading-relaxed text-base">
                    {item.text}
                  </p>
                  <Rating />
                  <p className="text-black font-oswald font-normal text-base">
                    {item.name}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="hidden laptop:flex justify-between w-full gap-x-4 absolute">
        <PreviousButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      </div>
    </div>
  );
};

export default Testimonial;
