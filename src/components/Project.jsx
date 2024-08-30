import React, { useRef, Suspense } from "react";
import { Await } from "react-router-dom";
import gsap from "gsap";
import { FaHtml5 as HtmlLogo, FaCss3 as CssLogo, FaReact as ReactLogo, FaLaravel as LaravelLogo, FaBootstrap as BootstrapLogo, FaWordpress as WordpressLogo } from "react-icons/fa";
import { IoLogoJavascript as JavascriptLogo, IoLogoFirebase as FirebaseLogo } from "react-icons/io5";
import { SiMysql as MysqlLogo, SiPhp as PhpLogo, SiReactrouter as ReactrouterLogo, SiGreensock as GsapLogo, SiTailwindcss as TailwindLogo, SiThreedotjs as ThreeLogo } from "react-icons/si";
import { TbWorldOff, TbWorldShare } from "react-icons/tb";
import { BiLogoPostgresql as PostgreLogo } from "react-icons/bi";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Project(props) {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useGSAP(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-205vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "500 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );

    return () => {
      pin.kill();
    };
  });

  function cardElement(projects) {
    const path = "/image/projects/";
    const project = projects.map((project) => {
      const keywords = project.keyword.split(", ");
      const technologys = project.technology.split(", ");
      const logos = {
        HtmlLogo,
        CssLogo,
        JavascriptLogo,
        PhpLogo,
        LaravelLogo,
        ReactLogo,
        BootstrapLogo,
        FirebaseLogo,
        MysqlLogo,
        ReactrouterLogo,
        GsapLogo,
        TailwindLogo,
        ThreeLogo,
        PostgreLogo,
        WordpressLogo,
      };

      return (
        <div className="scroll-section h-3/4 mt-24 mr-8" key={project.name}>
          <a href={project.link !== "" ? project.link : null} target="blank_">
            <div className={`card w-full h-4/5 ${project.publish && `hover:scale-95`}`}>
              <img src={`${path + project.image}.png`} alt={project.image} className="h-2/3 w-full" />
              <div className="card-info py-2 px-4 flex flex-col">
                <h3 className="font-orbitron flex justify-between items-center">
                  {project.name}
                  <span className="text-3xl">{project.publish ? <TbWorldShare /> : <TbWorldOff />}</span>
                </h3>
                <div className="card-keyword flex gap-4">
                  {keywords.map((keyword, index) => (
                    <h4 key={index} className="uppercase">
                      {keyword}
                    </h4>
                  ))}
                </div>
                <div className="card-technology flex gap-2">
                  {technologys.map((technology, i) => {
                    const techElement = `${technology.charAt(0).toUpperCase()}${technology.slice(1)}Logo`;

                    const TechLogoComponent = logos[techElement];

                    return TechLogoComponent ? (
                      <h5 key={i}>
                        <TechLogoComponent />
                      </h5>
                    ) : null;
                  })}
                </div>
              </div>
            </div>
          </a>
        </div>
      );
    });

    return project;
  }

  return (
    <section className="h-full w-full -mt-52 scroll-section-outer">
      <h2 className="bridging1-project font-soehne text-3xl w-2/3 flex flex-col uppercase gap-1">
        Project with care <span className="birdging2-project text-center overflow-hidden ml-20">and</span> <span className="bridging3-project text-end overflow-hidden">true dedication.</span>
      </h2>
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">
          <Suspense fallback={<h2>Loading Data</h2>}>
            <Await resolve={props.projects}>{cardElement}</Await>
          </Suspense>
        </div>
      </div>
    </section>
  );
}
