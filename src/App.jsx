import React, { useEffect } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Index from "./pages/Index";
import Journey from "./components/Journey";
import ExperienceInfo from "./components/ExperienceInfo";
import { loader as experienceLoader } from "./components/Journey";

const router = createBrowserRouter(createRoutesFromElements(<Route path="/" element={<Index />} loader={experienceLoader}></Route>));

function App() {
  useEffect(() => {
    const smoothScroll = (event) => {
      event.preventDefault();

      const delta = Math.sign(event.deltaY);
      const scrollAmount = 50;

      window.scrollBy({
        top: delta * scrollAmount,
        behavior: "smooth",
      });
    };

    window.addEventListener("wheel", smoothScroll, { passive: false });

    return () => window.removeEventListener("wheel", smoothScroll);
  }, []);
  return <RouterProvider router={router} />;
}

export default App;
