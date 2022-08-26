import React from "react";
import { useTrail, animated } from "react-spring";

const FadeRightTrail = ({ open, children, ...props}) => {
    const items = React.Children.toArray(children)
    const trail = useTrail(items.length, {
      config: { mass: 5, tension: 2000, friction: 200 },
      delay: 500,
      to: {
        x: !open ? -50 : 0,
        opacity: !open ? 0 : 1,
      },
    })
  
    return (
      <div className={props.className}>
         {trail.map(({ ...style }, index) => (
            <animated.div key={index} style={{ ...style }}>
              {items[index]}
            </animated.div>
          ))}
      </div>
    );
}

export default FadeRightTrail