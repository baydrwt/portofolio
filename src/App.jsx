import React, { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Journey from "./components/Journey";

function App() {
  useEffect(() => {
    const smoothScroll = (event) => {
      event.preventDefault();

      const delta = Math.sign(event.deltaY);
      const scrollAmount = 50;

      window.scrollBy({
        top: delta * scrollAmount,
        behavior: "smooth",
      });
    };

    window.addEventListener("wheel", smoothScroll, { passive: false });

    return () => window.removeEventListener("wheel", smoothScroll);
  }, []);
  return (
    <>
      <Header />

      <div className="content">
        <div className="px-32 flex flex-col justify-center items-center">
          <Hero />
          <Journey />
        </div>
      </div>
    </>
  );
}

export default App;
