import React, { useState } from "react";
import { useTrail, animated } from "react-spring";
import { Waypoint } from "react-waypoint";

const FadeInTrailProduct = ({ children }, props) => {
  const items = React.Children.toArray(children);
  const [active, setActive] = useState(false);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    delay: 500 * (active + 1),
    to: {
      y: !active ? 24 : 0,
      opacity: !active ? 0 : 1,
    },
  });
  return (
    <Waypoint onEnter={() => setActive(true)}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-x-2">
        {trail.map(({ height, ...props }, index) => (
          <animated.div key={index} style={{ ...props }}>
            {children[index]} 
          </animated.div>
        ))}
      </div>
    </Waypoint>
  );
};

export default FadeInTrailProduct;
