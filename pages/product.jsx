import React from "react";
import BestSeller from "../components/Badge/BestSeller";
import Footer from "../components/Footer/Footer";
import HeaderItem from "../components/Header/HeaderItem";
import ProductItem from "../components/Product/ProductItem";

const product = () => {
  return (
    <div>
      <header className="flex justify-center w-full h-auto bg-[url('https://picsum.photos/760/536?random-21')] bg-no-repeat bg-cover bg-center">
        <HeaderItem title="Product" />
      </header>
      <main className="flex flex-col justify-center px-4 md:px-10 lg:px-20 xl:px-40 py-4 md:py-4 lg:py-10 xl:py-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-x-2">
          <ProductItem
            badge={<BestSeller />}
            img="https://picsum.photos/760/536?random=4"
            alt="Lorem 4"
            description="Lorem Ipsum"
            price="₱0.00"
          />
          <ProductItem
            badge={<BestSeller />}
            img="https://picsum.photos/760/536?random=5"
            alt="Lorem 5"
            description="Lorem Ipsum"
            price="₱0.00"
          />
          <ProductItem
            badge={<BestSeller />}
            img="https://picsum.photos/760/536?random=6"
            alt="Lorem 6"
            description="Lorem Ipsum"
            price="₱0.00"
          />
          <ProductItem
            badge={<BestSeller />}
            img="https://picsum.photos/760/536?random=7"
            alt="Lorem 7"
            description="Lorem Ipsum"
            price="₱0.00"
          />
          <ProductItem
            img="https://picsum.photos/760/536?random=8"
            alt="Lorem 4"
            description="Lorem Ipsum"
            price="₱ 0.00"
          />
          <ProductItem
            img="https://picsum.photos/760/536?random=9"
            alt="Lorem 5"
            description="Lorem Ipsum"
            price="₱0.00"
          />
          <ProductItem
            img="https://picsum.photos/760/536?random=10"
            alt="Lorem 6"
            description="Lorem Ipsum"
            price="₱0.00"
          />
          <ProductItem
            img="https://picsum.photos/760/536?random=11"
            alt="Lorem 7"
            description="Lorem Ipsum"
            price="₱0.00"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default product;
