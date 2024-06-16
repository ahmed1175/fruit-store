import React from "react";

const Whereibuy = () => {
  return (
    <>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center  ">
          {/* text content section  */}
          <div className="space-y-8">
            <h1 className="text-4xl font-bold text-dark font-serif"   data-aos="fade-up"
              data-aos-delay="300">
              Where to buy our products?
            </h1>
            <div className="flex items-center">
              <input
                data-aos="fade-up"
                data-aos-delay="300"
                type="text"
                placeholder="country"
                className="input-style w-full lg:w-[120px]"
              />{" "}
              <input
                data-aos="fade-up"
                data-aos-delay="300"
                type="text"
                placeholder="ZipCode"
                className="input-style w-full"
              />
            </div>
            <button
              data-aos="fade-up"
              data-aos-delay="300"
              className="primary-btn bg-primary text-white w-full px-4 py-2 rounded-md hover:bg-secondary duration-200 hover:scale-105"
            >
              Search
            </button>
          </div>
          {/* map section  */}
          <div className=" col-span-2">
            <img
              data-aos="zoom-in"
              data-aos-delay="300"
              src="/src/assets/world-map.png"
              alt="not found "
              className="w-full sm:w-[500px] mx-auto"
            />
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Whereibuy;
