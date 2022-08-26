import React, { useRef } from "react";
import { useIsVisible } from "react-is-visible";
import FadeRightTrail from "../Animation/FadeRightTrail";
import Title from "./Title";
import Text from "./Text";

const ChickenMenu = () => {
  const nodeRef = useRef();
  const isVisible = useIsVisible(nodeRef, { once: true });
  return (
    <div ref={nodeRef}>
      <FadeRightTrail
        open={isVisible}
        className="flex flex-col items-center text-center"
      >
        <Title title="chicken adobo" />
        <Text text="Lorem ipsum, dolor sit amet consectetur adipisicing elit." />
        <Title title="salted egg fried chicken" />
        <Text text="Lorem ipsum, dolor sit amet consectetur adipisicing elit." />
        <Title title="buffalo wings" />
        <Text text="Lorem ipsum, dolor sit amet consectetur adipisicing elit." />
        <Title title="buttered chicken" />
        <Text text="Lorem ipsum, dolor sit amet consectetur adipisicing elit." />
      </FadeRightTrail>
    </div>
  );
};

export default ChickenMenu;
