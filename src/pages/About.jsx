import { useState } from "react";
import ReactCardFlip from "react-card-flip";

export default function About() {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="about flex justify-between w-full h-screen items-center gap-12">
      <div className="w-1/4 bg-white p-4 pb-16 shadow-xl relative z-10 transform transition-all duration-300 ease-in-out cursor-pointer hover:shadow-2xl" onClick={handleClick}>
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" className="reactFlipz-10">
          <div className="front z-10 flex items-center">
            <img src="/image/about/bayu.jpg" alt="" className="w-full h-full object-cover shadow-lg z-50" />
          </div>
          <div className="back z-10">
            <p className="z-10 font-sans">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur similique perspiciatis voluptatem, sit corporis unde nesciunt cum hic neque animi sequi, consequuntur, quasi tenetur aperiam harum blanditiis? Atque quo
              excepturi vel quis rem ab, officiis doloribus inventore reprehenderit et
            </p>
          </div>
        </ReactCardFlip>
      </div>
      <div className="description font-soehne text-justify w-3/4 flex flex-col gap-5">
        <h1 className="text-2xl">Bayu Darwanto | 22 Years Old.</h1>
        <h2 className="">
          I am a graduate of Universitas Gunadarma with a degree in Informatics, achieving a GPA of 3.84. I have a strong interest in website development, particularly in frontend development. Throughout my studies, I gained significant
          programming experience, especially in web development. I also completed internships as a Web Developer at Hashmicro through the MSIB Kampus Merdeka program and as a Software Developer at Transretail Indonesia. During these
          internships, I successfully completed all assigned tasks within the specified deadlines.
        </h2>
      </div>
    </div>
  );
}
