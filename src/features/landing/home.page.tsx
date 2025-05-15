import React from "react";
import { NavbarLanding } from "../../layouts/landing/navbar.landing";

const HomePage = () => {
  return (
    <div>
      <NavbarLanding />
      <h1>Home Page</h1>
      <div className="bg-slate-400 w-screen h-screen">
         <h1>Screen 1</h1>
      </div>
      <div className="bg-slate-600 w-screen h-screen">
        <h1>Screen 2</h1>
      </div>
      <div className="bg-stone-600 w-screen h-screen">
         <h1>Screen 3</h1>
      </div>
    </div>
  );
};

export default HomePage;
