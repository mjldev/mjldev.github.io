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

  const [state, setState] = useState(0);
  const [errorMsg, seterrorMsg] = useState("");
  // 0 - initial , 1 - loading, 2 - success, 2 - error
  const subscribe = async (e) => {
    e.preventDefault();

    setState(1);
    seterrorMsg("");
    console.log(e.target[0].value);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        body: e.target[0].value,
      });

      const data = await res.json();
      if (data.error !== null) {
        throw data.error;
      }
      setState(2);
    } catch (e) {
      seterrorMsg(e);
      setState(3);
    }
  };
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
        <div>
      {state == 2 ? (
        <p className="font-medium mt-4 text-xl text-green-800">
          Thanks for subscribing, you will receive mail once we launch our
          website.
        </p>
      ) : (
        <form onSubmit={subscribe} className="flex flex-col mb-9 mt-4">
          <input required placeholder="Email address" type="email" />
          <button type="submit">Subscribe</button>
          {state === 3 ? <p className="text-red-500 mt-3">{errorMsg}</p> : ""}
        </form>
      )}
    </div>
      </main>
      <Footer />
    </dev>
  );
}
