import React from "react";
import { socials } from "../constant";
import { IoArrowForward, IoCopyOutline } from "react-icons/io5";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative w-full bg-black flex flex-col items-center justify-center"
    >
      <div className="hero-main relative  w-full h-[25rem] md:h-[35rem] flex  items-start justify-center pt-7">
        <img
          src="/img/hero.png"
          className="w-[18rem] md:w-[25rem] z-20"
          alt=""
        />
        <div className="flex flex-col items-center justify-center gap-7">
          <h1 className="text-red-600 text-xl md:text-3xl font-bold absolute bottom-0 left-1/2 -translate-x-1/2">
            ENTER THE
          </h1>
        </div>
      </div>
      <div className="max-w-5xl w-full mx-auto  flex flex-col items-center justify-center pt-12 px-2">
        <h1 className="text-shadow text-white text-2xl md:text-5xl font-bold text-center px-1">
          Ravenous Bugblatter Beast of Trael
        </h1>
        <div className="flex items-center justify-between gap-7 px-7 mt-12 mb-10">
          {socials.map((item, index) => (
            <a
              key={index}
              href={item.url}
              className="p-3 rounded-full bg-[#fb2121]"
            >
              <img
                src={item.img}
                className="w-10 h-10 md:w-12 md:h-12"
                alt=""
              />
            </a>
          ))}
        </div>
        <div className="flex items-center justify-center gap-4 md:gap-7 mx-auto bg-white shadow-xl shadow-red-950 py-3 px-7 rounded-full mb-9 md:mb-12">
          <h1 className="text-xs md:text-lg text-black font-semibold ">
            0x0ZSJA7A9D9S9AS8S7HBBS8S7S7888
          </h1>
          <IoCopyOutline className="text-xl md:text-4xl text-red-500" />
        </div>
        <button className="btn-2 mb-9 md:mb-0"> BUY NOW</button>
      </div>
    </section>
  );
};

export default Hero;
