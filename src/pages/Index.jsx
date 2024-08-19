import { React } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Journey from "../components/Journey";
import Project from "../components/Project";
import { getExperience, getProject } from "../api";
import { useLoaderData, defer } from "react-router-dom";

export async function loader() {
  return defer({ experiences: getExperience(), projects: getProject() });
}

export default function Index() {
  const dataPromise = useLoaderData();

  return (
    <>
      <Header />
      <div className="content">
        <div className="px-32 flex flex-col justify-center items-center">
          <Hero />
          <Journey experiences={dataPromise.experiences} />
          <Project projects={dataPromise.projects} />
        </div>
      </div>
    </>
  );
}
