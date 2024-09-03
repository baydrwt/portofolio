import React, { useState, useCallback, Suspense } from "react";
import { useLoaderData, defer, Await } from "react-router-dom";
import ImageViewer from "react-simple-image-viewer";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { getCertificates } from "../api";
import Loader from "../components/Loader";

export async function loader() {
  return defer({ certificates: getCertificates() });
}

export default function Certificate() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [
    "/image/certificate/webdev.webp",
    "/image/certificate/softdev.webp",
    "/image/certificate/funda_js.webp",
    "/image/certificate/funda_dbms.webp",
    "/image/certificate/basic_web_app_design.webp",
    "/image/certificate/basic_web_app_develop.webp",
    "/image/certificate/funda_desktop.webp",
    "/image/certificate/java_beginner.webp",
    "/image/certificate/java_intermediate.webp",
    "/image/certificate/vb_beginner.webp",
    "/image/certificate/vb_intermediate.webp",
    "/image/certificate/uiux_design_journey.webp",
  ];
  const loaderData = useLoaderData();

  function cardsCertificate(certificates) {
    const sortedCertificates = certificates.sort((a, b) => a.id - b.id);
    const certificate = sortedCertificates.map((certif, index) => {
      const path = `/image/certificate/${certif.name_file}`;
      return (
        <div className="card-certificate bg-white p-4 pb-16 shadow-xl relative z-10  overflow-hidden transform transition-all duration-300 ease-in-out cursor-pointer hover:shadow-2xl" key={index}>
          <img
            src={path}
            onClick={() => openImageViewer(index)}
            key={index}
            style={{ margin: "2px" }}
            alt={certif.name}
            className={`shadow-lg w-full ${certif.vertikal ? `object-center object-cover` : `object-fit`} transition-all duration-300 ease-in-out  hover:scale-105`}
          />
          <p className="font-soehne mt-1">{certif.name}</p>
          <p className="text-slate-400 about-certif mb-2">
            {certif.activity} | {certif.company}
          </p>
          <p className="font-soehne text-sm">{certif.date}</p>
        </div>
      );
    });

    return certificate;
  }

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div className="h-full w-full flex flex-col md:py-10 ">
      <h2 className="mt-24 text-lg md:text-4xl font-soehne overflow-hidden tracking-wide">Certificate That I Achieved</h2>
      <div className="grid md:grid-cols-3 gap-8 w-full place-items-center mt-7 md:mt-14 mb-5 pb-8">
        <Suspense
          fallback={
            <h2 className="h-screen w-full">
              <Loader />
            </h2>
          }
        >
          <Await resolve={loaderData.certificates}>{cardsCertificate}</Await>
        </Suspense>
      </div>
      {isViewerOpen && (
        <ImageViewer
          src={images}
          currentIndex={currentImage}
          disableScroll={false}
          closeOnClickOutside={true}
          onClose={closeImageViewer}
          backgroundStyle={{
            backgroundColor: "rgba(1, 1, 1, 0.5)",
            backdropFilter: "blur(10px)",
          }}
          leftArrowComponent={<IoIosArrowBack />}
          rightArrowComponent={<IoIosArrowForward />}
        />
      )}
    </div>
  );
}
