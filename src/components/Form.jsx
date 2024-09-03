import React, { useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BsArrowUpRight } from "react-icons/bs";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

export default function Form() {
  const triggerRef = useRef(null);

  useGSAP(() => {
    const tl_form = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "-25% bottom",
        end: "bottom -80%",
        pin: true,
        scrub: 1,
        // markers: true,
      },
    });

    tl_form.fromTo(".form", { y: "-130vh", opacity: 0 }, { y: "-130vh", opacity: 1 }).fromTo(".form", { y: "-130vh", opacity: 1 }, { y: "-125vh" }).fromTo(".technology", { y: 0 }, { y: "-110vh" }).to(".form", { opacity: 1 });
  });

  return (
    <section className="form w-full md:h-full mb:mb-10 md:px-5 relative overflow-hidden md:pb-36 pt-28" ref={triggerRef}>
      <div className="box-form flex justify-between">
        <h2 className="font-soehne text-xl md:text-6xl tracking-wider overflow-hidden">Let's Jam.</h2>
        <Link to="/contact" type="button" className="btn-form font-soehne flex items-center text-sm md:text-2xl border-2 rounded-full gap-1 md:gap-3 px-3 md:px-5 py-0 md:py-3 relative overflow-hidden border-black">
          Contact Me
          <span className="hidden md:inline">
            <BsArrowUpRight />
          </span>
        </Link>
      </div>
      <div className="flex mt-7 mb-28">
        <div className="border-s-2 border-t-2 border-black w-3/5 mr-5"></div>
        <div className="ml-auto flex-end text-xs md:text-lg">
          <h4 className="font-soehne">I always up for a tea and a chat,</h4>
          <p className="font-soehne">
            <a href="mailto:bayu0825.bd@gmail.com" target="blank_" className="form-email mr-1">
              Send me a message
            </a>
            and i'll get back to you!
          </p>
        </div>
      </div>
      <div className="flex border-2 rounded-lg h-1/4 md:h-2/5">
        <a href="https://github.com/baydrwt/" target="blank_" className="socmed-box flex flex-col p-1 md:p-8 w-full justify-evenly md:justify-between border-r-2">
          <FaGithub className="github text-lg md:text-3xl" />
          <p className="font-bold tracking-wider font-soehne text-xs md:text-xl">GitHub</p>
        </a>
        <a href="https://www.instagram.com/baydrwt/" target="blank_" className="socmed-box flex flex-col p-1 md:p-8 w-full justify-evenly md:justify-between border-r-2">
          <FaInstagram className="instagram text-lg md:text-3xl" />
          <p className="font-bold tracking-wider font-soehne text-xs md:text-xl">Instagram</p>
        </a>
        <a href="https://www.linkedin.com/in/bayu-darwanto/" target="blank_" className="socmed-box flex flex-col p-1 md:p-8 w-full justify-evenly md:justify-between">
          <FaLinkedin className="linkedin text-lg md:text-3xl" />
          <p className="font-bold tracking-wider font-soehne text-xs md:text-xl">LinkedIn</p>
        </a>
      </div>
    </section>
  );
}
