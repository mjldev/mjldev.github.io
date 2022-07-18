import Navbar from "../components/Navbar/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col justify-start m-0 box-border min-h-full">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
