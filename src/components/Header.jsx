import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin();

export default function Header() {
  const navbarRef = useRef(null);
  let lastScrollTop = 0;
  const [isAtTop, setIsAtTop] = useState(true);
  const [menu, setmenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        gsap.to(navbarRef.current, { y: "-100%", ease: "power2.out" });
      } else {
        gsap.to(navbarRef.current, { y: "0%", ease: "power2.out" });
      }

      if (scrollTop === 0) {
        setIsAtTop(true);
      } else {
        setIsAtTop(false);
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useGSAP(() => {
    gsap.timeline().fromTo(".container", { y: -100, opacity: 0 }, { y: 0, opacity: 1, delay: 1, duration: 1.5 });
  });
  return (
    <header className={`container w-screen fixed left-1/2 transform -translate-x-1/2 py-6 flex justify-around z-50 rounded-b-2xl ${isAtTop ? "bg-transparent" : "bg-white"}`} ref={navbarRef}>
      <h1 className="py-2">Lorem, ipsum dolor.</h1>
      <div className="menu w-3/3 px-4 py-1 flex justify-center text-center gap-3 rounded-md border-2 border-slate-300">
        <a href="" className="bg-transition py-1 px-5 w-24 rounded-3xl">
          lorem
        </a>
        <span className="py-1 text-slate-400">I</span>
        <a href="" className="bg-transition py-1 px-5 w-24 rounded-3xl">
          Lorem
        </a>
        <span className="py-1 text-slate-400">I</span>
        <a href="" className="bg-transition py-1 px-5 w-24 rounded-3xl">
          Lorem
        </a>
        <span className="py-1 text-slate-400">I</span>
        <a href="" className="bg-transition py-1 px-5 w-24 rounded-3xl">
          Lorem
        </a>
      </div>
      <h2 className="py-2">Lorem, ipsum.</h2>
    </header>
  );
}
