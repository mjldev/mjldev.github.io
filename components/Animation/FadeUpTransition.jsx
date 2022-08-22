import React from "react";
import { animated, useTransition } from "react-spring";

const FadeUpTransition = ({ open = false, children, ...props }) => {
  const fadeTransition = useTransition(open, {
    delay: 800,
    from: {
      opacity: 0,
      y: 50,
    },
    enter: {
      opacity: 1,
      y: 0,
    },
  });

  return fadeTransition(
    (animStyles, isOpen) =>
      isOpen && <animated.div className={props.className} style={animStyles}>{children}</animated.div>
  );
};

export default FadeUpTransition;
