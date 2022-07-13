import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import FeaturedBlogItem from "../components/Main/FeaturedBlogItem";
import PopularProductItem from "../components/Main/PopularProductItem";
import Footer from "../components/Footer/Footer";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import BestSeller from "../components/Badge/BestSeller";

export default function Home() {
  return (
    <dev className="m-0">
      <Head>
        <title>Sample Website</title>
      </Head>
      <header>
        <ParallaxProvider>
          <Parallax speed={-10}>
            <div className="flex items-center justify-center w-full min-h-screen bg-[url('https://picsum.photos/760/536?random-50')] bg-no-repeat bg-cover bg-center">
              <div className="min-h-screen w-screen bg-black opacity-40" />
              <Parallax
                speed={10}
                className="flex justify-center w-full min-h-screen items-center text-center absolute"
              >
                <p className="font-work-sans font-bold text-7xl text-white absolute">
                  Hello World
                </p>
              </Parallax>
            </div>
          </Parallax>
          <Parallax speed={-1}></Parallax>
        </ParallaxProvider>
      </header>
      <main className="flex flex-col justify-center bg-white px-4 md:px-10 lg:px-20 xl:px-40 py-4 md:py-4 lg:py-10 xl:py-20 relative">
        <div id="blog" className="flex flex-col justify-center min-h-screen">
          <div className="flex justify-center mb-8">
            <p className="font-work-sans font-bold text-4xl">Featured Blog</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-x-4 mb-12">
            <FeaturedBlogItem
              img="https://picsum.photos/760/536?random=1"
              title="Lorem Ipsum"
              alt="Lorem 1"
              text=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
              debitis ipsam nesciunt, sapiente tempore unde numquam? Asperiores
              cupiditate omnis voluptatum fugit quas saepe optio illo, sit
              temporibus aliquam, molestiae neque."
            />
            <FeaturedBlogItem
              img="https://picsum.photos/760/536?random=2"
              title="Lorem Ipsum"
              alt="Lorem 2"
              text=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
              debitis ipsam nesciunt, sapiente tempore unde numquam? Asperiores
              cupiditate omnis voluptatum fugit quas saepe optio illo, sit
              temporibus aliquam, molestiae neque."
            />
            <FeaturedBlogItem
              img="https://picsum.photos/760/536?random=3"
              title="Lorem Ipsum"
              alt="Lorem 3"
              text=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
              debitis ipsam nesciunt, sapiente tempore unde numquam? Asperiores
              cupiditate omnis voluptatum fugit quas saepe optio illo, sit
              temporibus aliquam, molestiae neque."
            />
          </div>
        </div>
        <div className="flex justify-center mb-8">
          <p className="font-work-sans font-bold text-4xl">Popular Product</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-x-2">
          <PopularProductItem
            badge={<BestSeller />}
            img="https://picsum.photos/760/536?random=4"
            alt="Lorem Ipsum"
            name="Lorem Ipsum"
            price="₱0.00"
          />
          <PopularProductItem
            badge={<BestSeller />}
            img="https://picsum.photos/760/536?random=5"
            alt="Lorem Ipsum"
            name="Lorem Ipsum"
            price="₱0.00"
          />
          <PopularProductItem
            badge={<BestSeller />}
            img="https://picsum.photos/760/536?random=6"
            alt="Lorem Ipsum"
            name="Lorem Ipsum"
            price="₱0.00"
          />
          <PopularProductItem
            badge={<BestSeller />}
            img="https://picsum.photos/760/536?random=7"
            alt="Lorem Ipsum"
            name="Lorem Ipsum"
            price="₱0.00"
          />
        </div>
      </main>
      <Footer />
    </dev>
  );
}
