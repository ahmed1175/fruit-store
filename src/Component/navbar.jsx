import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = ({ sidebar, setsidebar }) => {
  return (
    <div className=" absolute top-0 left-0 w-full py-2 z-20 ">
      <div className="container">
        <div className="flex justify-between items-center">
          {/* logo section  */}
          <h1 className="text-4xl font-bold uppercase text-white">
            Orange <span className="font-normal text-2xl">mint</span>
          </h1>
          {/* Navlink section  */}
          <ul className="space-x-4 lg:flex hidden text-xl text-white cursor-pointer ">
            <li>
              <a href="#">home</a>
            </li>
            <li>
              <a href="#">info</a>
            </li>
            <li>
              <a href="#">about</a>
            </li>
          </ul>
          {/* hamberger icon  */}
          <div
            onClick={() => {
              setsidebar(!sidebar);
            }}
          >
            <GiHamburgerMenu className="text-3xl text-white hover:scale-105 cursor-pointer " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
