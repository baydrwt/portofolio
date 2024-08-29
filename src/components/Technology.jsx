import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MyIcon from "../assets/svg/technology.svg?react";

gsap.registerPlugin(ScrollTrigger);

export default function Technology() {
  const triggerRef = useRef(null);

  useGSAP(() => {
    const tl_tech = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "-10% top",
        end: "1500 bottom",
        pin: true,
        scrub: 1,
        autoAlpha: 1,
        // markers: true,
      },
    });

    tl_tech
      .to(".element1", { strokeDashoffset: 0, duration: 1 })
      .fromTo(".element2", { scale: 0.5 }, { opacity: 1, duration: 0.2, scale: 1 })
      .fromTo(".element3", { scale: 0.5 }, { opacity: 1, duration: 0.2, scale: 1 })
      .fromTo(".element4", { scale: 0.5 }, { opacity: 1, duration: 0.2, scale: 1 })
      .fromTo(".element5", { scale: 0.5 }, { opacity: 1, duration: 0.2, scale: 1 })
      .fromTo(".element6", { scale: 0.5 }, { opacity: 1, duration: 0.2, scale: 1 })
      .fromTo(".element7", { scale: 0.5 }, { opacity: 1, duration: 0.2, scale: 1 })
      .fromTo(".element8", { scale: 0.5 }, { opacity: 1, duration: 0.2, scale: 1 })
      .fromTo(".element9", { scale: 0.5 }, { opacity: 1, duration: 0.2, scale: 1 })
      .fromTo(".element10", { scale: 0.5 }, { opacity: 1, duration: 0.2, scale: 1 })
      .fromTo(".element11", { scale: 0.5 }, { opacity: 1, duration: 0.2, scale: 1 })
      .fromTo(".element12", { scale: 0.5 }, { opacity: 1, duration: 0.2, scale: 1 })
      .fromTo(".element13", { scale: 0.5 }, { opacity: 1, duration: 0.2, scale: 1 })
      .fromTo(".element14", { scale: 0.5 }, { opacity: 1, duration: 0.2, scale: 1 })
      .fromTo(".element15", { scale: 0.5 }, { opacity: 1, duration: 0.2, scale: 1 })
      .fromTo(".element16", { scale: 0.5 }, { opacity: 1, duration: 0.2, scale: 1 })
      .fromTo(".element17", { scale: 0.5 }, { opacity: 1, duration: 0.2, scale: 1 })
      // .to(".technology", { y: "-100vh", duration: 3 });

    return () => {
      tl_tech.kill();
    };
  });

  return (
    <section className="technology w-full flex z-40" ref={triggerRef}>
      <div className="box-technology border-4 rounded-xl mt-16 border-black relative w-full overflow-hidden p-7">
        <h2 className="text-tech font-soehne text-2xl leading-normal tracking-wider">Technology</h2>
        <MyIcon className="technology-svg -mt-20 scale-125" />
      </div>
    </section>
  );
}
