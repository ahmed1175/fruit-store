import React from "react";

const Service = () => {
  const servicedata = [
    {
      id: 1,
      image: "/src/assets/s.webp",
      aosdelay: "300",
      title: "Fruit ",
      subtitle:
        "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos corrupti recusandae quasi",
    },
    {
      id: 2,
      image: "/src/assets/fruits2-BRxfLPDp.png",
      aosdelay: "500",
      title: "Fresh fruit",
      subtitle:
        "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos corrupti recusandae quasi",
    },
    {
      id: 3,
      image: "/src/assets/fruits3.png",
      aosdelay: "700",
      title: "Orange",
      subtitle:
        "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos corrupti recusandae quasi",
    },
  ];
  return (
    <div className="my-16 container space-y-4  ">
      {/* header section */}
      <div className="  text-center space-y-2  max-w-lg mx-auto ">
        <h1 className="text-3xl font-bold text-dark">
          Fresh and <span className=" text-primary">Tasty fruit</span>
        </h1>
        <p className="text-sm opacity-50 ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          corrupti recusandae quasi. Ex, ad nobis! Repellendus perspiciatis eius
          doloremque facilis recusandae repellat, consequuntur illo cum odit
          quis ipsum voluptatibus rerum!
        </p>
      </div>
      {/* card section */}
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2  gap-8">
        {servicedata.map((item) => {
          return (
            <div
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={item.aosdelay}
              className="p-4 text-center space-y-6 items-center"
            >
              <div>
                <img
                  src={item.image}
                  alt=""
                  className="max-w-[200px] mx-auto hover:scale-110 duration-300 img-shadow"
                />
              </div>
              <div className=" space-y-2 ">
                <h1 className="text-2xl font-bold text-primary">
                  {item.title}
                </h1>
                <p className="text-dark ">{item.subtitle}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Service;
