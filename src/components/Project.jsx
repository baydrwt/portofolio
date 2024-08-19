import React from "react";
import Image from "../assets/image/test.jpg";
import { FaHtml5 as Html, FaCss3 as Css, FaReact as ReactLogo } from "react-icons/fa";
import { IoLogoJavascript as Javascript, IoLogoFirebase as Firebase } from "react-icons/io5";
import { SiMysql as Mysql, SiPhp as Php, SiReactrouter as ReactRoutear, SiGreensock as GsapLogo } from "react-icons/si";
import { BiLogoPostgresql as Postgre } from "react-icons/bi";
import { GoArrowUpRight } from "react-icons/go";

export default function Project(props) {
  return (
    <section className="h-screen w-full -mt-52">
      <h2 className="font-soehne text-2xl text-end flex flex-col uppercase gap-2">
        Built with care <span>and</span> <span>true dedication.</span>
      </h2>
      <div className="columns-2 h-3/4">
        <a href="">
          <div className="card w-full h-4/5">
            <img src={Image} alt="" className="h-2/3 w-full" />
            <div className="card-info py-2 px-4 flex flex-col">
              <a className="font-orbitron flex justify-between items-center" href="">
                Lorem ipsum dolor sit.{" "}
                <span className="text-3xl">
                  <GoArrowUpRight />
                </span>
              </a>
              <div className="card-keyword flex gap-4">
                <h4>Web Development</h4>
                <h4>Frontend</h4>
                <h4>Backend</h4>
              </div>
              <div className="card-technology flex gap-2">
                <h5>
                  <Html />
                </h5>
                <h5>
                  <Css />
                </h5>
                <h5>
                  <Javascript />
                </h5>
                <h5>
                  <Php />
                </h5>
                <h5>
                  <Postgre />
                </h5>
                <h5>
                  <Mysql />
                </h5>
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
