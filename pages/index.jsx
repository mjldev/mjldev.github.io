import Head from "next/head";
import chicken_bg from "../assets/images/chicken_bg.jpg";
import cook_bg from "../assets/images/cook_bg.jpg";
import ButtonPrimary from "../components/Button/ButtonPrimary";
import Carousel from "../components/Carousel/Carousel";
import BackgroundImage from "../components/Main/BackgroundImage";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 overflow-hidden -mt-20">
      <Head>
        <title>MJL Kitchen</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Carousel />
      </header>
      <main className="flex flex-col gap-4 tablet:gap-12">
        <section>
          <div className="container flex flex-col tablet:flex-row gap-4 max-w-[90%] relative">
            <div className="flex flex-col justify-center basis-1/3 min-w-[25ch] tablet:max-w-[30ch] gap-4 tablet:gap-8 laptop:mx-4 desktop:mx-8">
              <div className="flex flex-col items-center text-center border-y border-y-personal-neutralLight py-4">
                <h2 className="font-oswald uppercase font-bold text-3xl laptop:text-4xl desktop:text-5xl">
                  order online
                </h2>
                <h3 className="font-semibold uppercase text-xl laptop:text-2xl desktop:text-3xl">
                  pickup/delivery
                </h3>
              </div>
              <div className="flex flex-col items-start gap-4 tablet:gap-8">
                <p className="leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Molestias obcaecati aperiam itaque et porro. Odit dolor
                  placeat praesentium! Asperiores, itaque?
                </p>
                <ButtonPrimary url="#">LEARN MORE</ButtonPrimary>
              </div>
            </div>
            <div className="basis-3/4">
              <BackgroundImage url={cook_bg.src} />
            </div>
          </div>
        </section>
        <section>
          <div className="container flex flex-col tablet:flex-row-reverse gap-4 max-w-[90%] relative">
            <div className="flex flex-col justify-center basis-1/3 min-w-[25ch] tablet:max-w-[30ch] gap-4 tablet:gap-8 laptop:mx-4 desktop:mx-8">
              <div className="flex flex-col-reverse items-center text-center border-y border-y-personal-neutralLight py-4">
                <h2 className="font-oswald uppercase font-bold text-3xl laptop:text-4xl desktop:text-5xl">
                  THE MENU
                </h2>
                <h3 className="font-semibold uppercase text-xl laptop:text-2xl desktop:text-3xl">
                  WHAT&apos;S ON
                </h3>
              </div>
              <div className="flex flex-col items-start gap-4 tablet:gap-8">
                <p className="leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates architecto exercitationem reiciendis reprehenderit
                  quaerat quasi doloribus explicabo ipsa. Dolores, quaerat?
                </p>
                <ButtonPrimary url="#">LEARN MORE</ButtonPrimary>
              </div>
            </div>
            <div className="basis-3/4">
              <BackgroundImage url={chicken_bg.src} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
