import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="overflow-hidden">
        <section className="container relative">
          <div className="flex flex-col justify-center text-center gap-y-4 py-10">
            <p className="font-oswald font-bold tracking-tighter text-4xl desktop:text-5xl">
              MJL KITCHEN
            </p>
            <p>©2022 MJL KITCHEN</p>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
