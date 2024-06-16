import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa";
import AOS from "aos"
import "aos/dist/aos.css"
const Footer = () => {
  React.useEffect(()=>{
    AOS.init({
      duration:"800",
      delay:"500",
      easing:"ease-in",

    })
  })
  return (
    <div className=" bg-gradient-to-r from-primary to-secondary pt-12 pb-8 text-white " >
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-white  ">
          {/* company details  */}
          <div className=" space-y-6 " data-aos="zoom-in" data-aos-delay="300">
            <h1 className="font-bold text-4xl">Orange mint</h1>
            <p className="text-dark text-sm max-w-[300px] ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              totam reprehenderit tempore dolorem ratione odio itaque delectus,
              maiores, laboriosam unde minima eum eligendi. Eaque sequi sapiente
              tenetur aut nobis itaque.
            </p>
          </div>
          {/* navlinks */}
          <div className=" space-y-6" data-aos="zoom-in" data-aos-delay="300">
            <h1 className="font-bold text-4xl  ">Quick links</h1>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <ul className=" space-y-2">
                  <li>
                    <a href="">home</a>
                  </li>

                  <li>
                    <a href="">about</a>
                  </li>

                  <li>
                    <a href="">contanct</a>
                  </li>

                  <li>
                    <a href="">search</a>
                  </li>

                  <li>
                    <a href="">privacy policy</a>
                  </li>
                </ul>
              </div>
              <div>
                <ul className=" space-y-2">
                  <li>
                    <a href="">home</a>
                  </li>
              
                
                  <li>
                    <a href="">about</a>
                  </li>
                
                
                  <li>
                    <a href="">contact</a>
                  </li>
              
              
                  <li>
                    <a href="">search</a>
                  </li>
                
                
                  <li>
                    <a href="">privact policy</a>
                  </li>
                  </ul>
              </div>
            </div>
          </div>
          {/* socail link section  */}
          <div className=" space-y-6" data-aos="fade-up" data-aos-delay="300">
            <h1 className="text-4xl font-bold">
              follow us
            </h1>
            <div>
              <p className="text-xl">
                01096975997
              </p>
              
            </div>
            <div className="flex items-center gap-3 ">
              <FaFacebook className="text-3xl hover:scale-110 duration-300"/>
              <FaInstagram className="text-3xl hover:scale-110 duration-300"/>
              <FaLinkedin className="text-3xl hover:scale-110 duration-300"  href="https://www.linkedin.com/in/ahmed-ayman-0193b3230/" />
              <FaTelegram className="text-3xl hover:scale-110 duration-300"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
