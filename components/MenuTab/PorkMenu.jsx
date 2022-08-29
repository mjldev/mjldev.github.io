import React, { useRef } from "react";
import { useIsVisible } from "react-is-visible";
import FadeUpTrail from "../Animation/FadeUpTrail";
import Title from "./Title";
import Text from "./Text";

const PorkMenu = () => {
  const nodeRef = useRef();
  const isVisible = useIsVisible(nodeRef, { once: true });

  const menuItems = [
    {
      name: "pork pata humba",
      discription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
    {
      name: "pork sinigang",
      discription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
    {
      name: "lechon kawali",
      discription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
    {
      name: "pork sisig",
      discription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
  ];

  return (
    <div ref={nodeRef} className="py-8 tablet:py-20">
      <FadeUpTrail
        open={isVisible}
        className="flex flex-col items-center text-center gap-y-4 tablet:gap-y-8"
      >
        {menuItems.map((item, i) => (
          <div key={i}>
            <Title title={item.name} />
            <Text text={item.discription} />
          </div>
        ))}
      </FadeUpTrail>
    </div>
  );
};

export default PorkMenu;
