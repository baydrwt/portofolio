import { React } from "react";
import { useRouteError } from "react-router-dom";
import Header from "../components/Header";

export default function Error() {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="h-screen">
      <Header />
      <div className="h-full flex justify-center items-center">
        <h1 className="text-4xl font-soehne overflow-hidden">
          {error.status} | {error.statusText} {error.message}
        </h1>
      </div>
    </div>
  );
}
