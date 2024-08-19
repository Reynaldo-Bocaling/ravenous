import React, { useState } from "react";
import { navlinks, socials } from "../constant";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { CgMenuRight } from "react-icons/cg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className="relative w-full z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between pt-4 pb-9 px-5">
        <img src="/img/hero.png" className="w-12" alt="" />

        <ul className="hidden md:flex items-center gap-7">
          {navlinks.map((item, index) => (
            <li key={index}>
              <a href={item.url} className="text-white">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden md:flex items-center gap-9">
          <div className="flex items-center gap-5">
            {socials.slice(0, 2)?.map((item, index) => (
              <a
                key={index}
                href={item.url}
                className="h-12 w-12 bg-dark-violet rounded-lg flex items-center justify-center"
              >
                <img src={item.img} className="w-[2rem]" alt="" />
              </a>
            ))}
          </div>
          <button className="btn-2 mb-9 md:mb-0"> BUY NOW</button>
        </div>
        <button onClick={handleMenu} className="md:hidden">
          <CgMenuRight size={40} className="text-red-600 " />
        </button>
      </nav>

      {isOpen && (
        <nav className="shadow-effect fixed top-0 left-0 bottom-0 w-9/12 bg-[rgba(29,13,13,0.9)] border-r-2 border-red-600  z-[999] py-5 md:hidden flex flex-col items-center justify-start duration-300 transition-all">
          <img src="/img/hero.png" className="w-20 mb-20" alt="" />

          <ul className="flex flex-col items-center justify-center gap-9">
            {navlinks.map((item, index) => (
              <li key={index} onClick={() => setIsOpen(false)}>
                <a
                  href={item.url}
                  className="text-stroke-sm text-white text-3xl font-bold"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <button className="text-white text-3xl  font-bold mt-20 bg-red-600 py-3 px-9 rounded-lg">
              {" "}
              BUY NOW
            </button>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
