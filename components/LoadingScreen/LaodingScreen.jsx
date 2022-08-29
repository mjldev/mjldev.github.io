import React, { useRef } from "react";
import { useIsVisible } from "react-is-visible";
import FadeScreen from "../Animation/FadeScreen";
import FadeUpTransition from "../Animation/FadeUpTransition";

const LaodingScreen = () => {
  const nodeRef = useRef();
  const IsVisible = useIsVisible(nodeRef, { once: true });

  return (
    <div
      ref={nodeRef}
      className="flex justify-center items-center text-center bg-personal-primary w-screen h-screen"
    >
      <FadeUpTransition open={IsVisible}>
        <p className="font-oswald font-bold text-5xl tablet:text-8xl text-white select-none">
          MJL KITCHEN
        </p>
      </FadeUpTransition>

      <FadeScreen
        open={IsVisible}
        className="flex top-0 absolute bg-personal-neutralDark z-10 w-screen h-screen"
      ></FadeScreen>
    </div>
  );
};

export default LaodingScreen;
