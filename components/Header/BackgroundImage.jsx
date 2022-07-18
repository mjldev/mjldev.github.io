import React from "react";

const BackgroundImage = () => {
  return (
    <div className="h-1/2 min-h-1/2 left-0 top-0 right-0 bottom-0 flex justify-center items-center overflow-hidden max-w-none mr-auto ml-auto">
      <img
        className="absolute left-0 top-0 right-0 bottom-0 h-1/2 min-h-1/2 w-screen max-w-none flex object-fill"
        src="https://picsum.photos/1467/672?grayscale=6"
        alt="bg-image"
      />
      <div className="bg-black opacity-40 absolute left-0 top-0 right-0 bottom-0 h-1/2 min-h-1/2 mr-auto ml-auto" />
    </div>
  );
};

export default BackgroundImage;
