import React, { useRef } from "react";
import Head from "next/head";
import chicken_adobo from "../assets/images/chicken_adobo.jpg";
import cook_bg from "../assets/images/cook_bg.jpg";
import ButtonLink from "../components/Button/ButtonLink";
import Carousel from "../components/Carousel/Carousel";
import BackgroundImage from "../components/Main/BackgroundImage";
import TitlePrimary from "../components/Main/TitlePrimary";
import TitleSecondary from "../components/Main/TitleSecondary";
import Text from "../components/Main/Text";
import Testimonial from "../components/Testimonial/Testimonial";
import NewsletterForm from "../components/Newsletter/NewsletterForm";
import { useIsVisible } from "react-is-visible";
import FadeUpTrail from "../components/Animation/FadeUpTrail";
import FadeUpTransition from "../components/Animation/FadeUpTransition";
import FadeLeftTransition from "../components/Animation/FadeLeftTransition";
import FadeRightTransition from "../components/Animation/FadeRightTransition";

export default function Home() {
  const orderRef = useRef();
  const orderIsVisible = useIsVisible(orderRef, { once: true });

  const menuRef = useRef();
  const menuIsVisible = useIsVisible(menuRef, { once: true });

  const testimonialRef = useRef();
  const testimonialIsVisible = useIsVisible(testimonialRef, { once: true });

  return (
    <div className="flex flex-col gap-8 tablet:gap-20 overflow-hidden -mt-20">
      <Head>
        <title>MJL Kitchen</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Carousel />
      </header>
      <main className="flex flex-col gap-8 tablet:gap-20">
        <section ref={orderRef}>
          <div className="container flex flex-col laptop:flex-row gap-8 w-[90%] relative">
            <FadeUpTrail
              open={orderIsVisible}
              className="flex flex-col justify-center basis-2/6 laptop:min-w-[25rem] gap-4 tablet:gap-8 px-0 laptop:px-8"
            >
              <div className="flex flex-col items-center text-cente border-y-4 border-y-personal-borderDark py-4">
                <TitlePrimary title="order online" />
                <TitleSecondary title="pickup/delivery" />
              </div>
              <div className="flex flex-col items-start gap-4 tablet:gap-8">
                <Text text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quia ipsum illo provident molestias doloremque non eligendi. Facilis, harum, perspiciatis dolorem quia eos quisquam quis, inventore praesentium dolores corrupti numquam." />
                <ButtonLink url="#!">order now</ButtonLink>
              </div>
            </FadeUpTrail>
            <FadeLeftTransition
              open={orderIsVisible}
              className="basis-4/6"
            >
              <BackgroundImage url={cook_bg.src} alt="Chef Cooking" />
            </FadeLeftTransition>
          </div>
        </section>
        <section ref={menuRef}>
          <div className="container flex flex-col laptop:flex-row-reverse gap-8 w-[90%] relative">
            <FadeUpTrail
              open={menuIsVisible}
              className="flex flex-col justify-center basis-2/6 laptop:min-w-[25rem] gap-4 tablet:gap-8 px-0 laptop:px-8"
            >
              <div className="flex flex-col-reverse items-center text-center border-y-4 border-y-personal-borderDark py-4">
                <TitlePrimary title="the menu" />
                <TitleSecondary title="what's on" />
              </div>
              <div className="flex flex-col items-start gap-4 tablet:gap-8">
                <Text text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quia ipsum illo provident molestias doloremque non eligendi. Facilis, harum, perspiciatis dolorem quia eos quisquam quis, inventore praesentium dolores corrupti numquam." />
                <ButtonLink url="#!">view menu</ButtonLink>
              </div>
            </FadeUpTrail>
            <FadeRightTransition open={menuIsVisible} className="basis-4/6">
              <BackgroundImage url={chicken_adobo.src} alt="Chicken Adobo" />
            </FadeRightTransition>
          </div>
        </section>
        <section ref={testimonialRef}>
          <FadeUpTransition
            open={testimonialIsVisible}
            className="container flex justify-center w-[90%] border-4 border-personal-borderDark rounded-xl py-8 relative"
          >
            <Testimonial />
          </FadeUpTransition>
        </section>
        <section>
          <div className="container relative max-w-full">
            <NewsletterForm />
          </div>
        </section>
      </main>
    </div>
  );
}
