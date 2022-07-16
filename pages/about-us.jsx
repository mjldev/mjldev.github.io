import Footer from "../components/Footer/Footer";
import HeaderItem from "../components/Header/HeaderItem";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import SampleForm from "../components/sampleForm";

const aboutUs = () => {
  const MAILCHIMP_URL = process.env.NEXT_PUBLIC_MAILCHIMP_URL;

  return (
    <div>
      <header className="flex justify-center w-full h-auto bg-[url('https://picsum.photos/760/536?grayscale=6')] bg-no-repeat bg-cover bg-center">
        <HeaderItem title="About Us" />
      </header>
      <main className="flex flex-col justify-center px-4 md:px-10 lg:px-20 xl:px-40 py-4 md:py-4 lg:py-10 xl:py-20 relative min-h-screen">
        <MailchimpSubscribe
          url={MAILCHIMP_URL}
          render={(props) => {
            const { subscribe, status, message } = props || {};
            return (
              <SampleForm
                status={status}
                message={message}
                onValidated={(formData) => subscribe(formData)}
              />
            );
          }}
        />
      </main>
      <Footer />
    </div>
  );
};

export default aboutUs;
