import { useState } from "react";
import ReactCardFlip from "react-card-flip";

export default function About() {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="about flex justify-center md:justify-between w-full h-screen items-center gap-5 md:gap-12 flex-col md:flex-row">
      <div className="w-2/4 md:w-1/4 bg-white p-4 pb-16 shadow-xl relative z-10 transform transition-all duration-300 ease-in-out cursor-pointer hover:shadow-2xl" onClick={handleClick}>
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" className="reactFlipz-10">
          <div className="front z-10 flex items-center">
            <img src="/image/about/bayu.webp" alt="bayu_darwanto" className="w-full h-full object-cover shadow-lg z-50" />
          </div>
          <div className="back z-10 text-center flex items-center justify-center border border-black">
            <p className="font-orbitron text-xl md:text-3xl h-1/2 -rotate-12 flex items-center justify-center">25/11/01</p>
          </div>
        </ReactCardFlip>
      </div>
      <div className="description font-soehne text-justify md:w-3/4 flex flex-col gap-3 md:gap-5">
        <h1 className="md:text-2xl text-center md:text-start">Bayu Darwanto | 22 Years Old.</h1>
        <h2 className="text-xs md:text-base">
          I am a graduate of University of Gunadarma with a degree in Informatics, achieving a GPA of 3.84. I have a strong interest in website development, particularly in frontend development. Throughout my studies, I gained significant
          programming experience, especially in web development. I also completed internships as a Web Developer at Hashmicro through the MSIB Kampus Merdeka program and as a Software Developer at Transretail Indonesia. During these
          internships, I successfully completed all assigned tasks within the specified deadlines.
        </h2>
      </div>
    </div>
  );
}
