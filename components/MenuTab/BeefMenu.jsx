import React, { useRef } from "react";
import { useIsVisible } from "react-is-visible";
import FadeLeftTrail from "../Animation/FadeLeftTrail";
import Title from "./Title";
import Text from "./Text";

const BeefMenu = () => {
  const nodeRef = useRef();
  const isVisible = useIsVisible(nodeRef, { once: true });

  return (
    <div ref={nodeRef}>
      <FadeLeftTrail
        open={isVisible}
        className="flex flex-col items-center text-center py-10"
      >
        <Title title="special beef soup" />
        <Text text="Lorem ipsum, dolor sit amet consectetur adipisicing elit." />
        <Title title="bestik tagalog" />
        <Text text="Lorem ipsum, dolor sit amet consectetur adipisicing elit." />
        <Title title="beef caldereta" />
        <Text text="Lorem ipsum, dolor sit amet consectetur adipisicing elit." />
      </FadeLeftTrail>
    </div>
  )
}

export default BeefMenu