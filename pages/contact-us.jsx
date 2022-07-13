import Footer from "../components/Footer/Footer";
import HeaderItem from "../components/Header/HeaderItem";

const contactUs = () => {
  return (
    <div>
      <header className="flex justify-center w-full h-auto bg-[url('https://picsum.photos/760/536?random-23')] bg-no-repeat bg-cover bg-center">
        <HeaderItem title="Contact Us" />
      </header>
      <main className="flex flex-col justify-center px-4 md:px-10 lg:px-20 xl:px-40 py-4 md:py-4 lg:py-10 xl:py-20 relative min-h-screen">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
          architecto recusandae deleniti fugiat laudantium iusto rem ut ea
          animi, non dolore voluptate ipsum. Eos reprehenderit, debitis ad
          eveniet iusto officiis!
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default contactUs;
