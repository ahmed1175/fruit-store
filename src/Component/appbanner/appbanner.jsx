import React from "react";
import bannerimg from "../../assets/banner.jpg";
import playstoreimg from "../../assets/play_store.png";
import appstoreimg from "../../assets/app_store.png";
const Appbanner = () => {
  const bannerstyle = {
    backgroundImage: `url(${bannerimg})`,
    backgroundPostion: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%",
  };
  return (
    <>
      <div className="container my-14 ">
        <div
          style={bannerstyle}
          className=" min-h-[400px] sm:flex sm:justify-end sm:items-center rounded-lg"
        >
          <div>
            <div className="space-y-6 max-w-xl mx-auto ">
              <h1 className="text-2xl text-center sm:text-4xl font-semibold text-white sm:text-black md:text-black  " data-aos="zoom-in">
                Dowenload the app
              </h1>
              <p
                className="text-center sm:px-20 text-white sm:text-black md:text-black"
                data-aos-delay="300"
                data-aos="fade-up"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente repellat earum explicabo numquam perferendis atque odit
                in vel itaque ut ipsa, dolor, dolorem veniam deleniti tenetur
                blanditiis amet illum officiis.
              </p>
              {/* image links  */}
              <div className="flex justify-center items-center">
                <a href="#">
                  <img
                    src={playstoreimg}
                    alt=""
                    className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                  />
                </a>
                <a href="#">
                  <img
                    src={appstoreimg}
                    alt=""
                    className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Appbanner;
