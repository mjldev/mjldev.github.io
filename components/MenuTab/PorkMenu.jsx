import React, { useRef } from "react";
import { useIsVisible } from "react-is-visible";
import FadeUpTrail from "../Animation/FadeUpTrail";
import Title from "./Title";
import Text from "./Text";

const PorkMenu = () => {
  const nodeRef = useRef();
  const isVisible = useIsVisible(nodeRef, { once: true });

  return (
    <div ref={nodeRef}>
      <FadeUpTrail
        open={isVisible}
        className="flex flex-col items-center text-center"
      >
        <Title title="pork pata humba" />
        <Text text="Lorem ipsum, dolor sit amet consectetur adipisicing elit." />
        <Title title="pork sinigang" />
        <Text text="Lorem ipsum, dolor sit amet consectetur adipisicing elit." />
        <Title title="lechon kawali" />
        <Text text="Lorem ipsum, dolor sit amet consectetur adipisicing elit." />
        <Title title="pork sisig" />
        <Text text="Lorem ipsum, dolor sit amet consectetur adipisicing elit." />
      </FadeUpTrail>
    </div>
  );
};

export default PorkMenu;
