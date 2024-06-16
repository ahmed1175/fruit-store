import { useState } from "react";
import orangeImg from "../assets/orangebg.png";
import Navbar from "./navbar";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
const Hero = () => {
  const [sidebar, setsidebar] = useState(false);
  return (
    <main className=" md:px-12 md:py-6 bg-primaryDark">
      <section className=" relative min-h-[650px] bg-gradient-to-r shadow-md from-primary to-secondary w-full md:rounded-xl">
        <div className="container">
          {/* Navbar section  */}
          <Navbar sidebar={sidebar} setsidebar={setsidebar} />
          {/* Hero section  */}
          <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 place-items-center min-h-[650px] ">
            {/* text content section  */}
            <div className="text-white mt-[100px] md:mt-0 p-4 space-y-4">
              <h1 className="text-5xl pl-6 md:pl-12 md:pt-7 lg:pl-1 font-bold uppercase text-shadow" data-aos="fade-up" data-aos-delay="500">
                A healthy fruit
              </h1>
              <p className="text-sm " data-aos="fade-up" data-aos-delay="500" >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                consequatur delectus necessitatibus itaque officia, et deleniti
                rem beatae laboriosam reprehenderit? Nostrum, cum? Natus, quis
                harum! Et illo cum nostrum minus!
              </p>
              <button className="primary-btn  " data-aos="fade-up" data-aos-delay="500"> shop now </button>
            </div>
            {/* image section  */}
            <div>
              <img
                src={orangeImg}
                data-aos="zoom-in"
                alt="not found"
                data-aos-delay="500"
                className="relative z-10 w-[400px] img-shadow"
              />
            </div>
            {/* blank div section  */}
            <div className="md:hidden"></div>
          </div>
          {/* background large text */}
          <h1 className="large-text hidden sm:flex md:justify-center sm:justify-center md:flex "data-aos-delay="500" data-aos="fade">Orange </h1>
          {/* sidebar section */}
          {sidebar && (
            <div className=" absolute top-0 right-0 w-[120px] h-full bg-gradient-to-b from-primary to-primaryDark z-10 ">
              <div className=" w-full h-full flex justify-center items-center ">
                <div className=" text-white flex flex-col justify-center items-center gap-6 ">
                  {/* line  */}
                  <div className="h-[70px] w-[1px] bg-white"></div>
                  <div className=" inline-block rounded-full p-2 cursor-pointer border border-white">
                    <FaFacebookF className="text-2xl font-bold hover:scale-105 hover:duration-200 cursor-pointer" />
                  </div>

                  <div className=" inline-block rounded-full p-2 cursor-pointer border border-white">
                    <FaInstagram className="text-2xl font-bold hover:scale-105 hover:duration-200 cursor-pointer" />
                  </div>

                  <div className=" inline-block rounded-full p-2 cursor-pointer border border-white">
                    <FaLinkedin className="text-2xl font-bold hover:scale-105 hover:duration-200 cursor-pointer" />
                  </div>
                  <div className="h-[70px] w-[1px] bg-white"></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Hero;
