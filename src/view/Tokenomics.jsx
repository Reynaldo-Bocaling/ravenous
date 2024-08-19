import React from "react";
import { tokenomics } from "../constant";

const Tokenomics = () => {
  return (
    <section
      id="tokenomics"
      className="relative w-full bg-[rgba(92,91,92,1)] -mt-2 pb-20"
    >
      <img src="/img/tokenomics_line.png" alt="" />
      <div className="container mx-auto ">
        <h1 className="text-shadow text-white text-5xl md:text-7xl font-bold text-center mt-7">
          TOKENOMICS
        </h1>
        <div className="relative flex items-center justify-center mt-7">
          <h1 className="absolute text-white text-7xl md:text-9xl font-bold text-center mt-7 opacity-5">
            SUPPLY
          </h1>
          <h1 className=" text-white text-2xl md:text-5xl font-bold text-center mt-7">
            1,000,00,000
          </h1>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-9 w-full px-12 mt-28">
          {tokenomics.map((item, index) => (
            <div
              key={index}
              className="w-1/3 flex flex-col items-center justify-center gap-5"
            >
              <h1 className=" text-white text-5xl font-bold">{item.value}</h1>
              <h1 className="text-red-500  text-2xl font-semibold">
                {item.name}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
