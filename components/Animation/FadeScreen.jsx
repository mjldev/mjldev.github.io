import React from "react";
import { animated, useTransition } from "react-spring";

const FadeScreen = ({ open = false, children, ...props }) => {
  const fadeTransition = useTransition(open, {
    delay: 1500,
    from: {
      opacity: 0,
      x: -1000,
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

export default FadeScreen;
