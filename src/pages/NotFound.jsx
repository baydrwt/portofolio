import { React } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

export default function NotFound() {
  return (
    <div className="h-screen">
      <Header />
      <div className="main-notfound-page h-full flex justify-center items-center flex-col">
        <h1 className="font-soehne text-3xl overflow-hidden mb-2">Sorry, the page you were looking for was not found. 😔</h1>
        <Link to=".." className="font-soehne">
          Return to <span className="home-link">Home</span>
        </Link>
      </div>
    </div>
  );
}
