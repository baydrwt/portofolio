import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import Loader from "../components/Loader";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [selectedValue, setSelectedValue] = useState({
    help: "",
    about: "",
    deadline: "",
  });
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, {
        publicKey: import.meta.env.VITE_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setLoading(false);
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          setLoading(false);
        }
      );
  };

  useGSAP(() => {
    gsap.to(".help-text", {
      y: 215,
      scrollTrigger: {
        trigger: ".about",
        scroller: ".box-form",
        start: "top 60%",
        end: "top 10%",
        scrub: 1.5,
        autoAlpha: 1,
        // markers: true,
      },
    });

    gsap.to(".about-text", {
      y: 140,
      scrollTrigger: {
        trigger: ".deadline",
        scroller: ".box-form",
        start: "top 60%",
        end: "top 10%",
        scrub: 1.5,
        autoAlpha: 1,
        // markers: true,
      },
    });

    gsap.to(".deadline-text", {
      y: 270,
      scrollTrigger: {
        trigger: ".contact",
        scroller: ".box-form",
        start: "top 80%",
        end: "top 10%",
        scrub: 1.5,
        autoAlpha: 1,
        // markers: true,
      },
    });
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSelectedValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="h-screen w-full">
      <div className="flex flex-col md:flex-row h-5/6 justify-between mt-24 gap-6 md:gap-0">
        <div className={`box-form relative bg-transparent border-2 border-black px-5 py-10 rounded-xl h-full w-full md:w-3/5 overflow-auto`}>
          <div className={`${loading && `absolute inset-0 bg-slate-700 bg-opacity-50 backdrop-blur-xl z-30`}`}>
            <form ref={form} onSubmit={sendEmail}>
              <div className="help box-question flex w-full justify-between border-b-2 pb-10 overflow-hidden">
                <h3 className="help-text w-2/4 md:w-3/4 text-2xl md:text-3xl font-soehne mr-3">How can i help?</h3>
                <div className="radio-button-box w-2/3 flex flex-col gap-2 ">
                  <label htmlFor="fullstack" className={`radio-grup w-full text-xs md:text-md flex justify-between border-2 border-slate-3 px-3 py-4 rounded-3xl font-soehne ${selectedValue.help === `fullstack` && `border-black`}`}>
                    Fullstack Development
                    <input type="radio" checked={selectedValue.help === "fullstack"} onChange={handleChange} id="fullstack" name="help" value="fullstack" required />
                  </label>
                  <label htmlFor="frontend" className={`radio-grup w-full text-xs md:text-md flex justify-between border-2 border-slate-3 px-3 py-4 rounded-3xl font-soehne ${selectedValue.help === `frontend` && `border-black`}`}>
                    Frontend Development
                    <input type="radio" checked={selectedValue.help === "frontend"} onChange={handleChange} id="frontend" name="help" value="frontend" />
                  </label>
                  <label htmlFor="backend" className={`radio-grup w-full text-xs md:text-md flex justify-between border-2 border-slate-3 px-3 py-4 rounded-3xl font-soehne ${selectedValue.help === `backend` && `border-black`}`}>
                    Backend Development
                    <input type="radio" checked={selectedValue.help === "backend"} onChange={handleChange} id="backend" name="help" value="backend" />
                  </label>
                  <label htmlFor="wordpress" className={`radio-grup w-full text-xs md:text-md flex justify-between border-2 border-slate-3 px-3 py-4 rounded-3xl font-soehne ${selectedValue.help === `wordpress` && `border-black`}`}>
                    Wordpress Development
                    <input type="radio" checked={selectedValue.help === "wordpress"} onChange={handleChange} id="wordpress" name="help" value="wordpress" />
                  </label>
                </div>
              </div>
              <div className="about box-question flex w-full justify-between border-b-2 pb-10 pt-10 overflow-hidden">
                <h3 className="about-text w-2/3 md:w-3/3 text-xl md:text-3xl font-soehne md:mr-9">Tell me about your Project</h3>
                <div className="radio-button-box w-2/3 flex flex-col gap-2 ">
                  <label htmlFor="scratch" className={`radio-grup w-full text-xs md:text-md flex justify-between border-2 border-slate-3 px-3 py-4 rounded-3xl font-soehne ${selectedValue.about === `scratch` && `border-black`}`}>
                    Development from Scratch
                    <input type="radio" checked={selectedValue.about === "scratch"} onChange={handleChange} id="scratch" name="about" value="scratch" required />
                  </label>
                  <label htmlFor="improve" className={`radio-grup w-full text-xs md:text-md flex justify-between border-2 border-slate-3 px-3 py-4 rounded-3xl font-soehne ${selectedValue.about === `improve` && `border-black`}`}>
                    Improve Existing System
                    <input type="radio" checked={selectedValue.about === "improve"} onChange={handleChange} id="improve" name="about" value="improve" />
                  </label>
                  <label htmlFor="other" className={`radio-grup w-full text-xs md:text-md flex justify-between border-2 border-slate-3 px-3 py-4 rounded-3xl font-soehne ${selectedValue.about === `other` && `border-black`}`}>
                    Other
                    <input type="radio" checked={selectedValue.about === "other"} onChange={handleChange} id="other" name="about" value="other" />
                  </label>
                </div>
              </div>
              <div className="deadline box-question flex w-full justify-between border-b-2 pb-10 pt-10 overflow-hidden">
                <h3 className="deadline-text w-2/3 md:w-3/3 text-xl md:text-3xl font-soehne mr-2">What do deadlines look like?</h3>
                <div className="radio-button-box w-2/3 flex flex-col gap-2 ">
                  <label htmlFor="1" className={`radio-grup w-full text-xs md:text-md flex justify-between border-2 border-slate-3 px-3 py-4 rounded-3xl font-soehne ${selectedValue.deadline === `1` && `border-black`}`}>
                    1 - 3 Month
                    <input type="radio" checked={selectedValue.deadline === "1"} onChange={handleChange} id="1" name="deadline" value="1" required />
                  </label>
                  <label htmlFor="2" className={`radio-grup w-full text-xs md:text-md flex justify-between border-2 border-slate-3 px-3 py-4 rounded-3xl font-soehne ${selectedValue.deadline === `2` && `border-black`}`}>
                    4 - 6 Month
                    <input type="radio" checked={selectedValue.deadline === "2"} onChange={handleChange} id="2" name="deadline" value="2" />
                  </label>
                  <label htmlFor="3" className={`radio-grup w-full text-xs md:text-md flex justify-between border-2 border-slate-3 px-3 py-4 rounded-3xl font-soehne ${selectedValue.deadline === `3` && `border-black`}`}>
                    6 - 12 Month
                    <input type="radio" checked={selectedValue.deadline === "3"} onChange={handleChange} id="3" name="deadline" value="3" />
                  </label>
                  <label htmlFor="ongoing" className={`radio-grup w-full text-xs md:text-md flex justify-between border-2 border-slate-3 px-3 py-4 rounded-3xl font-soehne ${selectedValue.deadline === `ongoing` && `border-black`}`}>
                    Ongoing Work
                    <input type="radio" checked={selectedValue.deadline === "ongoing"} onChange={handleChange} id="ongoing" name="deadline" value="ongoing" />
                  </label>
                  <label htmlFor="others" className={`radio-grup w-full text-xs md:text-md flex justify-between border-2 border-slate-3 px-3 py-4 rounded-3xl font-soehne ${selectedValue.deadline === `other` && `border-black`}`}>
                    Other
                    <input type="radio" checked={selectedValue.deadline === "other"} onChange={handleChange} id="others" name="deadline" value="other" />
                  </label>
                </div>
              </div>
              <div className="contact box-question flex w-full justify-between pb-10 pt-10">
                <h3 className="w-3/3 md:w-2/3 text-xl md:text-3xl font-soehne mr-2 md:mr-12">Enter your contact info</h3>
                <div className="contact-info w-2/3 flex flex-col gap-4 mr-5 md:mr-0">
                  <div className="fn flex flex-col">
                    <label htmlFor="fullname" className="fn font-soehne text-sm md:text-md">
                      Full Name <span className="text-red-600 font-bold ">*</span>
                    </label>
                    <input type="text" id="fullname" name="full_name" className="bg-transparent h-12" required />
                    <span className="line w-full border border-slate-200"></span>
                  </div>
                  <div className="email flex flex-col">
                    <label htmlFor="email" className="fn font-soehne text-sm md:text-md">
                      Email <span className="text-red-600 font-bold ">*</span>
                    </label>
                    <input type="email" id="email" name="email" className="bg-transparent h-12" required />
                    <span className="line2 w-full border border-slate-200"></span>
                  </div>
                  <div className="company flex flex-col">
                    <label htmlFor="company" className="company font-soehne text-sm md:text-md">
                      Company
                    </label>
                    <input type="company" id="company" name="company" className="bg-transparent h-12" />
                    <span className="line3 w-full border border-slate-200"></span>
                  </div>
                  <div className="message flex flex-col">
                    <label htmlFor="message" className="font-soehne text-sm md:text-md">
                      Message
                    </label>
                    <textarea id="message" name="message" rows="4" cols="50" className="bg-transparent"></textarea>
                    <span className="line4 w-full border border-slate-200"></span>
                  </div>
                </div>
                {loading && <Loader />}
              </div>
              <div className="w-full text-center">
                <button type="submit" value="send" className="btn-submit border-2 border-black px-12 py-2 rounded-3xl font-orbitron tracking-widest font-extrabold z-20">
                  SEND
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="flex w-full md:w-1/3 flex-col gap-5">
          <div className="border-2 border-black h-full md:h-2/5 rounded-xl px-4 py-2 md:p-5 flex flex-col justify-between overflow-hidden">
            <div className="">
              <p className="font-sans text-xs md:text-sm">Need an interactive website?</p>
              <h3 className="font-soehne md:text-3xl border-b border-slate-800 pb-5">Have a cool project to develop?</h3>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col">
                <p className="text-xs md:text-sm font-sans text-slate-600 font-thin">Or just say hi?</p>
                <a href="mailto:bayu0825.bd@gmail.com" className="form-email text-sm font-sans text-slate-700 font-medium">
                  bayu0825.bd@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className="border-2 border-black h-3/5 rounded-xl p-4 md:p-5 text-justify">
            <p>
              <span className="ml-10">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span> Dignissimos inventore qui autem dolore ullam quidem animi? Ducimus ratione inventore dignissimos sed, saepe ex neque nisi voluptate
              aperiam explicabo ipsum mollitia eum nam laborum animi minima iusto esse alias. Cum non quos laboriosam quas eligendi ipsa dolor quisquam minus delectus asperiores?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
