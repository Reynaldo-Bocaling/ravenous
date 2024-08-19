import React from "react";
import { socials } from "../constant";

const Contact = () => {
  return (
    <section id="contact" className="relative w-full -mt-2">
      <div className="w-full scale-y-[-1] mb-20">
        <svg
          id="wave"
          style={{ transform: "rotate(0deg)", transition: "0.3s" }}
          viewBox="0 0 1440 230"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
              <stop stopColor="rgba(0, 0, 0, 1)" offset="0%"></stop>
              <stop stopColor="rgba(0, 0, 0, 1)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            style={{ transform: "translate(0, 0px)", opacity: 1 }}
            fill="url(#sw-gradient-0)"
            d="M0,138L10,130.3C20,123,40,107,60,99.7C80,92,100,92,120,107.3C140,123,160,153,180,172.5C200,192,220,199,240,191.7C260,184,280,161,300,134.2C320,107,340,77,360,53.7C380,31,400,15,420,15.3C440,15,460,31,480,53.7C500,77,520,107,540,130.3C560,153,580,169,600,149.5C620,130,640,77,660,46C680,15,700,8,720,38.3C740,69,760,138,780,141.8C800,146,820,84,840,72.8C860,61,880,100,900,126.5C920,153,940,169,960,149.5C980,130,1000,77,1020,46C1040,15,1060,8,1080,23C1100,38,1120,77,1140,92C1160,107,1180,100,1200,107.3C1220,115,1240,138,1260,153.3C1280,169,1300,176,1320,153.3C1340,130,1360,77,1380,72.8C1400,69,1420,115,1430,138L1440,161L1440,230L1430,230C1420,230,1400,230,1380,230C1360,230,1340,230,1320,230C1300,230,1280,230,1260,230C1240,230,1220,230,1200,230C1180,230,1160,230,1140,230C1120,230,1100,230,1080,230C1060,230,1040,230,1020,230C1000,230,980,230,960,230C940,230,920,230,900,230C880,230,860,230,840,230C820,230,800,230,780,230C760,230,740,230,720,230C700,230,680,230,660,230C640,230,620,230,600,230C580,230,560,230,540,230C520,230,500,230,480,230C460,230,440,230,420,230C400,230,380,230,360,230C340,230,320,230,300,230C280,230,260,230,240,230C220,230,200,230,180,230C160,230,140,230,120,230C100,230,80,230,60,230C40,230,20,230,10,230L0,230Z"
          ></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center gap-12 pb-10 md:pb-20">
        <div className="relative flex items-center justify-center mt-7">
          <h1 className="absolute -top-20 md:-top-32  text-shadow text-white text-7xl md:text-9xl font-bold text-center mt-7 opacity-10 whitespace-nowrap">
            CONTACT US
          </h1>
          <h1 className="text-shadow text-white text-4xl md:text-6xl font-bold text-center">
            Please Join Us
          </h1>
        </div>
        <div className="flex items-center justify-between gap-7 px-7 mt-7 mb-10">
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
      </div>
    </section>
  );
};

export default Contact;
