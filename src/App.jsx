import React, { useEffect } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Index, { loader as indexLoader } from "./pages/Index";
import Layout from "./components/Layout";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Error from "./pages/Error";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<Error />}>
      <Route index element={<Index />} loader={indexLoader} />
      <Route path="contact" element={<Contact />} />
      <Route path="about" element={<About />} />

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  // useEffect(() => {
  //   const smoothScroll = (event) => {
  //     event.preventDefault();

  //     const delta = Math.sign(event.deltaY);
  //     const scrollAmount = 80;

  //     window.scrollBy({
  //       top: delta * scrollAmount,
  //       behavior: "smooth",
  //     });
  //   };

  //   window.addEventListener("wheel", smoothScroll, { passive: false });

  //   return () => window.removeEventListener("wheel", smoothScroll);
  // }, []);

  return <RouterProvider router={router} />;
}

export default App;
