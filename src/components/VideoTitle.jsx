import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className=" text-xl md:text-6xl font-bold">{title}</h1>
      <p className=" hidden md:inline-block py-6 w-1/4 text=xl">
        {overview.slice(0, 200)}
      </p>
      <div className="my-2 md:m-0">
        <button className="bg-white text-black py-1 md:py-4 px-3 md:px-12 text-xl  rounded-lg hover:bg-opacity-80">
          ▶Play
        </button>
        <button className="  hidden md:inline-block mx-2 bg-gray-500 text-white text-xl p-3 px-10 bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
