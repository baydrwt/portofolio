import React, { useEffect } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Index, { loader as indexLoader } from "./pages/Index";
import Layout from "./components/Layout";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Error from "./pages/Error";
import NotFound from "./pages/NotFound";
import Certificate, { loader as certificateLoader } from "./pages/Certificate";
import Friend, { loader as friendLoader } from "./pages/Friend";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<Error />}>
      <Route index element={<Index />} loader={indexLoader} />
      <Route path="contact" element={<Contact />} />
      <Route path="about" element={<About />} />
      <Route path="certificate" element={<Certificate />} loader={certificateLoader} />
      <Route path="friends" element={<Friend />} loader={friendLoader} />

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
