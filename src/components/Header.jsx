import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link, NavLink } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { GrClose } from "react-icons/gr";

gsap.registerPlugin();

export default function Header() {
  const navbarRef = useRef(null);
  const menuMobileRef = useRef(null);
  let lastScrollTop = 0;
  const [isAtTop, setIsAtTop] = useState(true);
  const [isMobile, setisMobile] = useState(window.innerWidth);
  const [menuMobile, setMenuMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        gsap.to(navbarRef.current, { y: "-100%", ease: "power2.out" });
        setMenuMobile(false);
        if (menuMobile) {
          gsap.to(menuMobileRef.current, { y: "0%", ease: "power2.out" });
        } else {
          gsap.to(menuMobileRef.current, { y: "-100%", ease: "power2.out" });
        }
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

    const handleResize = () => {
      setisMobile(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (menuMobile) {
      gsap.to(menuMobileRef.current, { y: "0%", ease: "power2.out" });
    } else {
      gsap.to(menuMobileRef.current, { y: "-100%", ease: "power2.out" });
    }
  }, [menuMobile]);

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
    <header>
      <div
        className={`container w-11/12 fixed left-1/2 transform -translate-x-1/2 py-3 flex z-50 rounded-b-2xl justify-between items-center px-5 md:justify-around md:py-6 ${isAtTop ? "bg-transparent" : "bg-white"} ${
          menuMobile && "bg-white "
        }`}
        ref={navbarRef}
      >
        <Link to="/" className="font-soehne py-2 text-md">
          BYD | Portofolio
        </Link>
        <div className="menu hidden md:ml-10 md:w-3/3 md:px-4 py-1 md:flex md:justify-center md:text-center md:gap-3 md:rounded-md md:border-2 md:border-slate-300">
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
        {isMobile > 640 ? (
          <h2 className="font-soehne py-2">{getCurrentGreeting()}</h2>
        ) : (
          <div className="py-2 flex items-center">
            {menuMobile ? (
              <GrClose
                className="z-50 animate-[rotate-in_0.5s_ease-in-out] text-xl"
                onClick={(e) => {
                  setMenuMobile(!menuMobile);
                }}
              />
            ) : (
              <IoIosMenu
                className="z-50 animate-[rotate-in_0.5s_ease-in-out] text-2xl"
                onClick={(e) => {
                  setMenuMobile(!menuMobile);
                }}
              />
            )}
          </div>
        )}
      </div>
      <div className={`menu-mobile ${menuMobile ? `open` : `closed`} rounded-b-2xl  w-full fixed bg-slate-400 z-40 top-0 right-0 mx-0 py-0`} ref={menuMobileRef}>
        <div className="box-menu-mobile border-2 border-slate-500 rounded-lg h-1/3 m-5 mt-20">
          <div className="menu w-3/3 pt-1 flex flex-col text-center justify-center items-center gap-2 rounded-md">
            <NavLink to="/about" className="bg-transition font-sans font-bold py-1 px-5 w-full rounded-3xl border-b-2 border-slate-600 border-opacity-50">
              About
            </NavLink>
            <NavLink to="/certificate" className="bg-transition font-sans font-bold py-2 w-full rounded-3xl border-b-2 border-slate-600 border-opacity-50">
              Certificate
            </NavLink>
            <NavLink to="/contact" className="bg-transition font-sans font-bold py-2 px-4 w-full rounded-3xl border-b-2 border-slate-600 border-opacity-50">
              Contact
            </NavLink>
            <NavLink to="/friends" className="bg-transition font-sans font-bold py-2 px-5 w-full rounded-3xl">
              Friends
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}
