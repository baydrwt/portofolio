import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin();

export default function Header() {
  const [menu, setmenu] = useState(false);
  const main = useRef();

  useGSAP(() => {
    gsap.timeline().fromTo(".container", { y: -100, opacity: 0 }, { y: 0, opacity: 1, delay: 1, duration: 1.5 });
  });
  return (
    <header className="container w-screen fixed left-1/2 transform -translate-x-1/2 py-6 flex justify-around z-50" ref={main}>
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
