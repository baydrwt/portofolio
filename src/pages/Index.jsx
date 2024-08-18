import { React } from "react";
import Header from "../components/Header"
import Hero from "../components/Hero"
import Journey from "../components/Journey"

export default function Index() {
  return (
    <>
      <Header />
      <div className="content">
        <div className="px-32 flex flex-col justify-center items-center">
          <Hero />
          <Journey />
        </div>
      </div>
    </>
  );
}
