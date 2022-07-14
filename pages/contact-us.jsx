import Footer from "../components/Footer/Footer";
import HeaderItem from "../components/Header/HeaderItem";

const contactUs = () => {
  return (
    <div>
      <header className="flex justify-center w-full h-auto bg-[url('https://picsum.photos/760/536?grayscale=7')] bg-no-repeat bg-cover bg-center">
        <HeaderItem title="Contact Us" />
      </header>
      <main className="flex flex-col justify-center px-4 md:px-10 lg:px-20 xl:px-40 py-4 md:py-4 lg:py-10 xl:py-20 relative min-h-screen">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
            <div className="flex flex-col px-10 py-7 mb-2 md:mb-0 lg:mb-0 xl:mb-0 bg-gray-50 relative">
              <label
                htmlFor="name"
                className="text-sm ml-2 mb-2"
              >
                Name:{" "}
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="text-sm border w-full p-2 mb-7"
              />
              <label
                htmlFor="name"
                className="text-sm ml-2 mb-2"
              >
                Phone:{" "}
              </label>
              <input
                type="text"
                placeholder="Your phone"
                className="text-sm border w-full p-2 mb-7"
              />
              <label
                htmlFor="name"
                className="text-sm ml-2 mb-2"
              >
                Email:{" "}
              </label>
              <input
                type="text"
                placeholder="Your email address"
                className="text-sm border w-full p-2 mb-7"
              />
              <label
                htmlFor="name"
                className="text-sm ml-2 mb-2"
              >
                Message:{" "}
              </label>
              <textarea
                name="Message"
                id=""
                cols="30"
                rows="10"
                className="text-sm border mb-7 h-24 pt-4 pl-4"
                placeholder="  Your message"
              ></textarea>
              <button className="bg-gray-700 text-white hover:opacity-90 mb-7 p-2">
                {" "}
                Submit
              </button>
            </div>
            <div>
              <iframe
                className="h-full w-full"
                src="https://maps.google.com/maps?q=dap-dap%20legazpi%20city&t=&z=13&ie=UTF8&iwloc=&output=embed"
              ></iframe>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default contactUs;
