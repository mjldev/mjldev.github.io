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

export default function Home() {
  return (
    <dev className="m-0">
      <Head>
        <title>Sample Website</title>
      </Head>
      <header>
        <ParallaxProvider>
          <Parallax speed={-10}>
            <div className="flex items-center justify-center w-full h-auto min-w-screen bg-[url('https://picsum.photos/760/536?grayscale')] bg-no-repeat bg-cover bg-center relative">
              <div className="min-h-screen w-screen bg-black opacity-40" />
              <Parallax
                speed={10}
                className="flex justify-center w-full min-h-screen items-center text-center absolute"
              >
                <FadeIn>
                  <div className="flex flex-col justify-center">
                    <p className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-16">
                      Sample Website
                    </p>
                    <span>
                      <a
                        className="py-4 px-8 bg-gray-50 hover:opacity-90"
                        href={"/product"}
                      >
                        SHOP NOW
                      </a>
                    </span>
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
                title="Popular Products"
                title2="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              />
            </FadeIn>
            <div>
              <FadeInTrailProduct>
                <FadeIn>
                  <PopularProductItem
                    badge={<BestSeller />}
                    img="https://picsum.photos/760/536?grayscale=2"
                    alt="Lorem Ipsum"
                    description="Lorem Ipsum"
                    price="₱0.00"
                  />
                </FadeIn>
                <FadeIn>
                  <PopularProductItem
                    badge={<BestSeller />}
                    img="https://picsum.photos/760/536?grayscale=2"
                    alt="Lorem Ipsum"
                    description="Lorem Ipsum"
                    price="₱0.00"
                  />
                </FadeIn>
                <FadeIn>
                  <PopularProductItem
                    badge={<BestSeller />}
                    img="https://picsum.photos/760/536?grayscale=2"
                    alt="Lorem Ipsum"
                    description="Lorem Ipsum"
                    price="₱0.00"
                  />
                </FadeIn>
                <FadeIn>
                  <PopularProductItem
                    badge={<BestSeller />}
                    img="https://picsum.photos/760/536?grayscale=2"
                    alt="Lorem Ipsum"
                    description="Lorem Ipsum"
                    price="₱0.00"
                  />
                </FadeIn>
              </FadeInTrailProduct>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center w-full items-center bg-gray-100 relative">
          <FadeIn>
            <div className="flex flex-col justify-cente text-center px-4 md:px-20 lg:px-40 xl:px-60 py-4 md:py-10 lg:py-20 xl:py-40">
              <p className="text-3xl lg:text-4xl xl:text-4xl mb-4">
                Sign up for our newsletter
              </p>
              <p className="text-gray-400 mb-4">
                Sign up to receive updates from our shop, including new
                products, blog and upcoming sale.
              </p>
              <div>
                <input className="text-sm border mr-1 py-2 px-4" type="text" />
                <button className="bg-gray-700 text-sm text-white hover:opacity-90 py-2 px-4">
                  SUBMIT
                </button>
              </div>
            </div>
          </FadeIn>
        </div>
      </main>
      <Footer />
    </dev>
  );
}
