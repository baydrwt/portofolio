import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout() {
  return (
    <>
      <div className="site-wrapper px-10 md:px-32">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}
