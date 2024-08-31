import { React } from "react";
import Hero from "../components/Hero";
import Journey from "../components/Journey";
import Project from "../components/Project";
import Technology from "../components/Technology";
import Form from "../components/Form";
import { getExperience, getProject } from "../api";
import { useLoaderData, defer } from "react-router-dom";

export async function loader() {
  return defer({ experiences: getExperience(), projects: getProject() });
}

export default function Index() {
  const dataPromise = useLoaderData();

  return (
    <div className="content">
      <div className="flex flex-col justify-center items-center">
        <Hero />
        <Journey experiences={dataPromise.experiences} />
        <Project projects={dataPromise.projects} />
        <Technology />
        <Form />
      </div>
    </div>
  );
}
