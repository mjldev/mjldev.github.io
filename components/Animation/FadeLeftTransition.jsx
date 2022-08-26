import React from "react";
import { animated, useTransition } from "react-spring";

const FadeLeftTransition = ({ open = false, children, ...props }) => {
  const fadeTransition = useTransition(open, {
    delay: 800,
    from: {
      opacity: 0,
      x: 50,
    },
    enter: {
      opacity: 1,
      x: 0,
    },
  });
  return fadeTransition(
    (animStyles, isOpen) =>
      isOpen && (
        <animated.div className={props.className} style={animStyles}>
          {children}
        </animated.div>
      )
  );
};

export default FadeLeftTransition;
