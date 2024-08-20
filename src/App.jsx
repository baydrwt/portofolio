import React, { useEffect } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Index, { loader as indexLoader } from "./pages/Index";

const router = createBrowserRouter(createRoutesFromElements(<Route path="/" element={<Index />} loader={indexLoader}></Route>));

function App() {
  useEffect(() => {
    const smoothScroll = (event) => {
      event.preventDefault();

      const delta = Math.sign(event.deltaY);
      const scrollAmount = 65;

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
