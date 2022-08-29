import React, { useRef } from "react";
import BackgroundImage from "../components/Header/BackgroundImage";
import Title from "../components/Header/Title";
import NewsletterForm from "../components/Newsletter/NewsletterForm";
import about_us_banner from "../assets/images/about_us_banner.jpg";
import restaurant_inside from "../assets/images/restaurant_inside.jpg";
import chef from "../assets/images/chef.jpg";
import team from "../assets/images/team.jpg";
import FadeUpTrail from "../components/Animation/FadeUpTrail";
import FadeUpTransition from "../components/Animation/FadeUpTransition";
import FadeLeftTransition from "../components/Animation/FadeLeftTransition";
import FadeRightTransition from "../components/Animation/FadeRightTransition";
import { useIsVisible } from "react-is-visible";

const AboutUs = () => {
  const aboutUsRef = useRef();
  const aboutUsIsVisible = useIsVisible(aboutUsRef, { once: true });

  const restaurantRef = useRef();
  const restaurantRefIsVisible = useIsVisible(restaurantRef, { once: true });

  const chefRef = useRef();
  const chefIsVisible = useIsVisible(chefRef, { once: true });

  const teamRef = useRef();
  const teamRefIsVisible = useIsVisible(teamRef, { once: true });

  return (
    <div className="flex flex-col gap-8 tablet:gap-20 overflow-hidden -mt-20 ">
      <header>
        <div className="w-screen object-contain">
          <div className="relative">
            <BackgroundImage url={about_us_banner.src} alt="About Us" />
            <div className="flex justify-center flex-col min-h-[70vh] backdrop-brightness-50 relative">
              <div className="flex flex-col items-center text-center gap-y-4">
                <Title heading="About Us" />
              </div>
            </div>
          </div>
        </div>
      </header>
      <section ref={aboutUsRef}>
        <FadeUpTrail
          open={aboutUsIsVisible}
          className="container flex justify-center relative w-[90%]"
        >
          <div className="flex flex-col gap-y-4 max-w-[50rem]">
            <div className="flex flex-col items-center text-center border-y-4 border-y-personal-borderDark py-4">
              <p className="text-personal-textPrimary font-oswald uppercase font-bold text-4xl desktop:text-5xl">
                our team
              </p>
              <p className="text-personal-textPrimary font-semibold uppercase text-base desktop:text-xl">
                passion for food
              </p>
            </div>
            <div className="flex flex-col items-start gap-4 tablet:gap-8">
              <p className="text-personal-textPrimary text-base leading-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                atque sit omnis laborum corrupti adipisci minima dicta dolore
                consequatur voluptate vero autem, doloribus cum amet et fugit
                culpa delectus molestias reprehenderit explicabo. Illum
                reprehenderit laudantium odio odit dolorum vitae quae numquam
                ipsa, repellendus, quibusdam natus dolor! Amet minima saepe ut.
              </p>
            </div>
          </div>
        </FadeUpTrail>
      </section>
      <section>
        <div className="container relative w-[90%]">
          <div className="grid grid-cols-1 tablet:grid-cols-2 gap-4">
            <div
              ref={restaurantRef}
              className="flex justify-center items-center"
            >
              <FadeRightTransition
                open={restaurantRefIsVisible}
                className=" tablet:h-[80%] tablet:w-[100%]"
              >
                <img
                  src={restaurant_inside.src}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </FadeRightTransition>
            </div>
            <div ref={chefRef} className="tablet:row-span-2 flex justify-end">
              <FadeLeftTransition
                open={chefIsVisible}
                className=" tablet:h-[70%] tablet:w-[80%]"
              >
                <img
                  src={chef.src}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </FadeLeftTransition>
            </div>
            <div ref={teamRef} className="flex justify-center items-end">
              <FadeUpTransition
                open={teamRefIsVisible}
                className="tablet:h-[80%] tablet:w-[80%]"
              >
                <img
                  src={team.src}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </FadeUpTransition>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container relative max-w-full">
          <NewsletterForm />
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
