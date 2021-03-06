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
import MainHeader from "../components/Header/MainHeader";

export default function Home() {
  return (
    <dev className="m-0">
      <Head>
        <title>Sample Store</title>
      </Head>
      <header>
        <MainHeader/>
      </header>
      <main className="flex flex-col justify-center items-center bg-white relative overflow-hidden">
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
                    price="???0.00"
                  />
                </FadeIn>
                <FadeIn>
                  <PopularProductItem
                    img="https://picsum.photos/760/536?grayscale=2"
                    alt="Lorem Ipsum"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    price="???0.00"
                  />
                </FadeIn>
                <FadeIn>
                  <PopularProductItem
                    img="https://picsum.photos/760/536?grayscale=2"
                    alt="Lorem Ipsum"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    price="???0.00"
                  />
                </FadeIn>
                <FadeIn>
                  <PopularProductItem
                    img="https://picsum.photos/760/536?grayscale=2"
                    alt="Lorem Ipsum"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    price="???0.00"
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
