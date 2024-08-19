import React from "react";
import Header from "./components/header";
import Hero from "./view/Hero";
import About from "./view/About";
import Tokenomics from "./view/Tokenomics";
import Contact from "./view/Contact";

const App = () => {
  return (
    <main className="w-full relative overflow-hidden bg-black">
      <Header />
      <Hero />
      <About />
      <Tokenomics />
      <Contact />
    </main>
  );
};

export default App;
