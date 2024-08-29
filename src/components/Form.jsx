import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BsArrowUpRight } from "react-icons/bs";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

export default function Form() {
  const triggerRef = useRef(null);

  //   useGSAP(() => {
  //     const tl_form = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: triggerRef.current,
  //         start: "-25% 80%",
  //         end: "top top",
  //         pin: true,
  //         scrub: 1,
  //         autoAlpha: 1,
  //         markers: true,
  //       },
  //     });

  //     // tl_form.fromTo(".form", { y: "-120vh" }, { y: "-120vh" });
  //   });

  return (
    <section className="form w-full mb-5 px-5 relative overflow-hidden" ref={triggerRef}>
      <div className="box-form flex justify-between my-10">
        <h2 className="font-soehne text-6xl tracking-wider overflow-hidden">Let's Jam.</h2>
        <button type="button" className="btn-form flex items-center text-2xl border-2 rounded-full gap-3 px-5 py-3 relative overflow-hidden border-black">
          Contact Me
          <span>
            <BsArrowUpRight />
          </span>
        </button>
      </div>
      <div className="flex mt-14 mb-28">
        <div className="border-s-2 border-t-2 border-black w-3/5"></div>
        <div className="ml-auto flex-end">
          <h4 className="">I always up for a tea and a chat,</h4>
          <p>
            <a href="" className="mr-1">
              Send me a message
            </a>
            and i'll get back to you!
          </p>
        </div>
      </div>
      <div className="flex border-2 rounded-lg h-2/5">
        <div className="socmed-box flex flex-col p-8 w-full justify-between border-r-2">
          <FaGithub className="github text-3xl" />
          <p className="font-bold tracking-wider font-soehne">GitHub</p>
        </div>
        <div className="socmed-box flex flex-col p-8 w-full justify-between border-r-2">
          <FaInstagram className="instagram text-3xl" />
          <p className="font-bold tracking-wider font-soehne">Instagram</p>
        </div>
        <div className="socmed-box flex flex-col p-8 w-full justify-between">
          <FaLinkedin className="linkedin text-3xl" />
          <p className="font-bold tracking-wider font-soehne">LinkedIn</p>
        </div>
      </div>
    </section>
  );
}
