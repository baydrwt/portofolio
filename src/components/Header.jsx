import React, { useState } from "react";

export default function Header() {
  const [menu, setmenu] = useState(false);
  return (
    <header className="container py-6 mx-auto flex justify-between">
      <h1 className="py-2">Lorem, ipsum dolor.</h1>
      <div className="menu w-3/3 px-4 py-1 flex justify-center text-center gap-3 rounded-md border">
        <a href="" className="bg-transition py-1 px-5 w-24 rounded-3xl z-20">
          lorem
        </a>
        <span className="py-1 text-slate-400">I</span>
        <a href="" className="bg-transition py-1 px-5 w-24 rounded-3xl z-20">
          Lorem
        </a>
        <span className="py-1 text-slate-400">I</span>
        <a href="" className="bg-transition py-1 px-5 w-24 rounded-3xl z-20">
          Lorem
        </a>
        <span className="py-1 text-slate-400">I</span>
        <a href="" className="bg-transition py-1 px-5 w-24 rounded-3xl z-20">
          Lorem
        </a>
      </div>
      <h2 className="py-2">Lorem, ipsum.</h2>
    </header>
  );
}
