import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link, NavLink } from "react-router-dom";

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

  const getCurrentGreeting = () => {
    const currentHour = new Date().getHours();

    if (currentHour >= 5 && currentHour < 12) {
      return "Hi, Good Morning! 🌞";
    } else if (currentHour >= 12 && currentHour < 18) {
      return "Hi, Good Afternoon! 🌞";
    } else if (currentHour >= 18 && currentHour < 21) {
      return "Hi, Good Evening! 🌤️";
    } else {
      return "Hi, Good Night! 🌚";
    }
  };
  return (
    <header className={`container w-screen fixed left-1/2 transform -translate-x-1/2 py-6 flex justify-around z-50 rounded-b-2xl ${isAtTop ? "bg-transparent" : "bg-white"}`} ref={navbarRef}>
      <Link to="/" className="font-soehne py-2">
        BYD | Portofolio
      </Link>
      <div className="menu ml-10 w-3/3 px-4 py-1 flex justify-center text-center gap-3 rounded-md border-2 border-slate-300">
        <NavLink to="/about" className="bg-transition font-sans font-bold py-1 px-5 w-24 rounded-3xl">
          About
        </NavLink>
        <span className="py-1 text-slate-400">I</span>
        <NavLink to="/certificate" className="bg-transition font-sans font-bold py-1 w-24 rounded-3xl">
          Certificate
        </NavLink>
        <span className="py-1 text-slate-400">I</span>
        <NavLink to="/contact" className="bg-transition font-sans font-bold py-1 px-4 w-24 rounded-3xl">
          Contact
        </NavLink>
        <span className="py-1 text-slate-400">I</span>
        <NavLink to="/friends" className="bg-transition font-sans font-bold py-1 px-5 w-24 rounded-3xl">
          Friends
        </NavLink>
      </div>
      <h2 className="font-soehne py-2">{getCurrentGreeting()}</h2>
    </header>
  );
}
