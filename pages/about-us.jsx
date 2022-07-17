import Footer from "../components/Footer/Footer";
import HeaderItem from "../components/Header/HeaderItem";

const aboutUs = () => {
 
  return (
    <div>
      <header className="flex justify-center w-full h-auto bg-[url('https://picsum.photos/760/536?grayscale=6')] bg-no-repeat bg-cover bg-center">
        <HeaderItem title="About Us" />
      </header>
      <main className="flex flex-col justify-center px-4 md:px-10 lg:px-20 xl:px-40 py-4 md:py-4 lg:py-10 xl:py-20 relative min-h-screen">
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, nesciunt incidunt excepturi perspiciatis voluptas at! Vero ut minima ad iste. Rerum expedita architecto ipsam perferendis itaque distinctio! Voluptate, aut cumque!</p>
      </main>
      <Footer />
    </div>
  );
};

export default aboutUs;
