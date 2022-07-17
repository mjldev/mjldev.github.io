import Head from "next/head";
import FeaturedBlogItem from "../components/Blog/FeaturedBlogItem";
import PopularProductItem from "../components/Product/PopularProductItem";
import Footer from "../components/Footer/Footer";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import BestSeller from "../components/Badge/BestSeller";
import MainTitle from "../components/Main/MainTitle";
import FadeIn from "../components/anim/FadeIn";
import FadeInTrailBlog from "../components/Anim/FadeInTrailBlog";
import FadeInTrailProduct from "../components/Anim/FadeInTrailProduct";
import { useState } from "react";

export default function Home() {
  return (
    <dev className="m-0">
      <Head>
        <title>Sample Store</title>
      </Head>
      <header>
        <ParallaxProvider>
          <Parallax speed={-10}>
            <div className="flex justify-center items-center min-h-screen">
              <div className="absolute left-0 top-0 right-0 bottom-0 flex justify-center items-center overflow-hidden w-full mr-auto ml-auto">
                <img
                  className="left-0 top-0 right-0 bottom-0 h-full max-w-none flex object-fill"
                  src="https://picsum.photos/1467/672?grayscale"
                  alt="bg-image"
                />
                <div className="bg-black opacity-40 absolute left-0 top-0 right-0 bottom-0 w-full h-full mr-auto ml-auto" />
              </div>
              <Parallax
                speed={10}
                className="flex justify-center w-full min-h-screen items-center text-center absolute"
              >
                <FadeIn>
                  <div className="container relative w-[1440px] max-w-full mr-auto ml-auto">
                    <div className="grid justify-items-center text-center grid-cols-1 gap-y-8">
                      <p className="text-4xl font-semibold md:text-5xl lg:text-6xl xl:text-6xl text-white">
                        SAMPLE WEBSITE
                      </p>
                      <p className="text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                      <a
                        className="py-4 px-8 bg-white rounded-md ease-in-out block"
                        href={"/product"}
                      >
                        EXPLORE
                      </a>
                    </div>
                  </div>
                </FadeIn>
              </Parallax>
            </div>
          </Parallax>
          <Parallax speed={-1}></Parallax>
        </ParallaxProvider>
      </header>
      <main className="flex flex-col justify-center items-center bg-white relative">
        <div className="container flex flex-col justify-cente px-4 md:px-10 lg:px-20 xl:px-40 py-4 md:py-4 lg:py-10 xl:py-20">
          <div className="min-h-screen">
            <div id="blog" className="flex flex-col justify-center">
              <FadeIn>
                <MainTitle
                  title="Store Blog"
                  title2="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                />
              </FadeIn>
              <div>
                <FadeInTrailBlog>
                  <FadeIn>
                    <FeaturedBlogItem
                      img="https://picsum.photos/760/536?grayscale=1"
                      title="Lorem Ipsum"
                      alt="Lorem Ipsum"
                      text=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
              debitis ipsam nesciunt, sapiente tempore unde numquam? Asperiores
              cupiditate omnis voluptatum fugit quas saepe optio illo, sit
              temporibus aliquam, molestiae neque."
                    />
                  </FadeIn>
                  <FadeIn>
                    <FeaturedBlogItem
                      img="https://picsum.photos/760/536?grayscale=1"
                      title="Lorem Ipsum"
                      alt="Lorem Ipsum"
                      text=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
              debitis ipsam nesciunt, sapiente tempore unde numquam? Asperiores
              cupiditate omnis voluptatum fugit quas saepe optio illo, sit
              temporibus aliquam, molestiae neque."
                    />
                  </FadeIn>
                  <FadeIn>
                    <FeaturedBlogItem
                      img="https://picsum.photos/760/536?grayscale=1"
                      title="Lorem Ipsum"
                      alt="Lorem 3"
                      text=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
              debitis ipsam nesciunt, sapiente tempore unde numquam? Asperiores
              cupiditate omnis voluptatum fugit quas saepe optio illo, sit
              temporibus aliquam, molestiae neque."
                    />
                  </FadeIn>
                </FadeInTrailBlog>
              </div>
            </div>
          </div>
          <div>
            <FadeIn>
              <MainTitle
                title="Popular Product"
                title2="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              />
            </FadeIn>
            <div>
              <FadeInTrailProduct>
                <FadeIn>
                  <PopularProductItem
                    img="https://picsum.photos/760/536?grayscale=2"
                    alt="Lorem Ipsum"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    price="₱0.00"
                  />
                </FadeIn>
                <FadeIn>
                  <PopularProductItem
                    img="https://picsum.photos/760/536?grayscale=2"
                    alt="Lorem Ipsum"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    price="₱0.00"
                  />
                </FadeIn>
                <FadeIn>
                  <PopularProductItem
                    img="https://picsum.photos/760/536?grayscale=2"
                    alt="Lorem Ipsum"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    price="₱0.00"
                  />
                </FadeIn>
                <FadeIn>
                  <PopularProductItem
                    img="https://picsum.photos/760/536?grayscale=2"
                    alt="Lorem Ipsum"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    price="₱0.00"
                  />
                </FadeIn>
              </FadeInTrailProduct>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </dev>
  );
}
