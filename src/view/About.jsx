import React from "react";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <section id="about" className="relative w-full -mt-5">
      <svg
        id="wave"
        style={{ transform: "rotate(0deg)", transition: "0.3s" }}
        viewBox="0 0 1440 230"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
            <stop
              stopColor="rgba(92.494, 91.336, 91.841, 1)"
              offset="0%"
            ></stop>
            <stop
              stopColor="rgba(30.262, 29.098, 26.523, 1)"
              offset="100%"
            ></stop>
          </linearGradient>
        </defs>
        <path
          style={{ transform: "translate(0, 0px)", opacity: 1 }}
          fill="url(#sw-gradient-0)"
          d="M0,0L10,23C20,46,40,92,60,107.3C80,123,100,107,120,118.8C140,130,160,169,180,157.2C200,146,220,84,240,65.2C260,46,280,69,300,95.8C320,123,340,153,360,141.8C380,130,400,77,420,49.8C440,23,460,23,480,38.3C500,54,520,84,540,115C560,146,580,176,600,180.2C620,184,640,161,660,149.5C680,138,700,138,720,138C740,138,760,138,780,134.2C800,130,820,123,840,99.7C860,77,880,38,900,26.8C920,15,940,31,960,65.2C980,100,1000,153,1020,153.3C1040,153,1060,100,1080,88.2C1100,77,1120,107,1140,126.5C1160,146,1180,153,1200,134.2C1220,115,1240,69,1260,53.7C1280,38,1300,54,1320,80.5C1340,107,1360,146,1380,149.5C1400,153,1420,123,1430,107.3L1440,92L1440,230L1430,230C1420,230,1400,230,1380,230C1360,230,1340,230,1320,230C1300,230,1280,230,1260,230C1240,230,1220,230,1200,230C1180,230,1160,230,1140,230C1120,230,1100,230,1080,230C1060,230,1040,230,1020,230C1000,230,980,230,960,230C940,230,920,230,900,230C880,230,860,230,840,230C820,230,800,230,780,230C760,230,740,230,720,230C700,230,680,230,660,230C640,230,620,230,600,230C580,230,560,230,540,230C520,230,500,230,480,230C460,230,440,230,420,230C400,230,380,230,360,230C340,230,320,230,300,230C280,230,260,230,240,230C220,230,200,230,180,230C160,230,140,230,120,230C100,230,80,230,60,230C40,230,20,230,10,230L0,230Z"
        ></path>
      </svg>

      <div className="w-full bg-[rgba(92,91,92,1)] -mt-2">
        {" "}
        <div className="max-w-6xl mx-auto flex flex-col items-center justify-center gap-7 py-12">
          <div className="relative flex items-center justify-center mt-7">
            <h1 className="absolute -top-20 md:-top-32  text-shadow text-white text-7xl md:text-9xl font-bold text-center mt-7 opacity-5 whitespace-nowrap">
              ABOUT US
            </h1>
            <h1 className="text-shadow text-white text-5xl md:text-6xl font-bold text-center ">
              Who is <span className="bg-red-600 px-4 my-2">Ravenous?</span>
            </h1>
          </div>

          <p className="text-lg text-center text-white tracking-wider max-w-4xl bg-red-5s00 leading-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            rerum reprehenderit molestiae eligendi autem similique sed nesciunt
            vitae praesentium sapiente qui omnis soluta, sint ut repellat,
            fugiat delectus molestias. Quas?
          </p>
          <div className="flex flex-col md:flex-row items-center gap-9 mt-7">
            <button className="btn-2"> BUY NOW</button>
            <button className="cta mt-12 flex items-center gap-2">
              <span className="text-2xl">Go To Tokenomics</span>
              <IoArrowForward size={30} className="icon text-red-500" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
