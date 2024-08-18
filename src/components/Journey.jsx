import { React } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Journey() {
  useGSAP(() => {
    gsap.timeline().fromTo(".box-journey", { y: 0, delay: 3 }, { y: -150, duration: 3 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".batas",
        start: "top bottom",
        end: "top 52%",
        scrub: 1.5,
        autoAlpha: 1,
        // markers: true,
      },
    });

    tl.fromTo(".box-journey", { y: -150 }, { y: -220, width: "75%", height: "75%", x: -140, ease: "slow(0.5, 0.8, true)" });
  });

  return (
    <>
      <section className="batas h-screen w-full flex justify-center overflow-visible">
        <div className="box-journey border-4 rounded-3xl border-black w-1/4 h-2/4 relative flex justify-center items-end">
          <svg className="journey pt-3" width="100%" height="100%" viewBox="0 0 51 16" fill="none">
            <path id="mainPath" d="M0 15H6.5L15.5 8H25L31.5 1.5H43H51" stroke="black" strokeDasharray="100" strokeDashoffset="100" />
            <path id="circle1" d="M8.00001 14.5C8.00001 15.3284 7.32844 16 6.50001 16C5.67158 16 5.00001 15.3284 5.00001 14.5C5.00001 13.6716 5.67158 13 6.50001 13C7.32844 13 8.00001 13.6716 8.00001 14.5Z" fill="black" opacity="0" />
            <circle id="circle2" cx="15.5" cy="7.5" r="1.5" fill="black" opacity="0" />
            <circle id="circle3" cx="31.5" cy="1.5" r="1.5" fill="black" opacity="0" />
            <path id="circle4" d="M45 1.5C45 2.32843 44.3284 3 43.5 3C42.6716 3 42 2.32843 42 1.5C42 0.671573 42.6716 0 43.5 0C44.3284 0 45 0.671573 45 1.5Z" fill="black" opacity="0" />
          </svg>
          <p className="sman absolute left-6 bottom-48 text-lg font-bold opacity-0">SMAN 97 Jakarta</p>
          <p className="univ absolute left-36 bottom-72 text-lg font-bold opacity-0">Universitas Gunadarma</p>
          <p className="magang1 absolute right-64 top-16 pr-2 text-lg font-bold opacity-0">Hashmicro</p>
          <p className="magang2 absolute right-2 top-16 text-lg font-bold opacity-0">Trans Retail Indonesia</p>
        </div>
      </section>
    </>
  );
}
