import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Hero from "./Component/hero";
import Service from "./Component/service/service";

import Whereibuy from "./Component/whereIBuy/whereibuy";
import Appbanner from "./Component/appbanner/appbanner";
import Footer from "./Component/footer/footer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Hero />
    <Service />
    <Whereibuy />
    <Appbanner />
    <Footer />
  </React.StrictMode>
);
