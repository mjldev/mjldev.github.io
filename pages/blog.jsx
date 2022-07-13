import React from "react";
import Footer from "../components/Footer/Footer";
import HeaderItem from "../components/Header/HeaderItem";
import BlogItem from "../components/Blog/BlogItem";

const blog = () => {
  return (
    <div>
      <header className="flex justify-center w-full h-full bg-[url('https://picsum.photos/760/536?random-20')] bg-no-repeat bg-cover bg-center relative">
        <HeaderItem title="Blog" />
      </header>
      <main className="flex flex-col justify-center px-4 md:px-10 lg:px-20 xl:px-40 py-4 md:py-4 lg:py-10 xl:py-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-x-2">
          <BlogItem
            img="https://picsum.photos/760/536?random=1"
            title="Lorem Ipsum"
            alt="Lorem 1"
            text=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
              debitis ipsam nesciunt, sapiente tempore unde numquam? Asperiores
              cupiditate omnis voluptatum fugit quas saepe optio illo, sit
              temporibus aliquam, molestiae neque."
          />
          <BlogItem
            img="https://picsum.photos/760/536?random=2"
            title="Lorem Ipsum"
            alt="Lorem 2"
            text=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
              debitis ipsam nesciunt, sapiente tempore unde numquam? Asperiores
              cupiditate omnis voluptatum fugit quas saepe optio illo, sit
              temporibus aliquam, molestiae neque."
          />
          <BlogItem
            img="https://picsum.photos/760/536?random=3"
            title="Lorem Ipsum"
            alt="Lorem 3"
            text=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
              debitis ipsam nesciunt, sapiente tempore unde numquam? Asperiores
              cupiditate omnis voluptatum fugit quas saepe optio illo, sit
              temporibus aliquam, molestiae neque."
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default blog;
