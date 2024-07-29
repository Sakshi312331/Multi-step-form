import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import "../App.css";

export default function Home() {
  let data = {};

  function SolarType(value) {
    let newdata = { ...data, solarType: value };
    localStorage.setItem("data", JSON.stringify(newdata));
  }

  return (
    <div>
      <Nav />
      <div className="h-[90vh] w-full flex items-center flex-col  p-10">
        <h1 className="text-4xl">Choose your service</h1>
        <h1 className="text-xl p-5">
          Get your free online estimate in seconds
        </h1>

        <div className="solarpv flex gap-10 solarpv">
          <div>
            <div className="Homeitem h-[50vh] w-[23vw] rounded-xl flex flex-col justify-center items-center mt-10 shadow-lg shadow-gray-500/50">
              <div className="solarhomepage-img">
                <img
                  src="../src/assets/transparentsolarpv.png"
                  alt=""
                  className="h-[20vh] object-contain "
                />
              </div>
              <div>
                <h1 className="text-3xl p-10">Solar PV</h1>
              </div>
              <Link
                className=" Solarbtn p-3 w-[10vw] text-xl bg-teal-600 rounded-full text-white hover:bg-teal-700 text-center"
                to="/solar"
                onClick={() => SolarType("Solar PV")}
              >
                Get Estimate
              </Link>
            </div>
          </div>
          <div>
            <div className="Homeitem h-[50vh] w-[23vw] bg-slate-50 rounded-xl flex flex-col justify-center items-center mt-10 shadow-lg shadow-gray-500/50">
              <div className="solarhomepage-img">
                <img
                  src="../src/assets/HO_I_System_Preview.png"
                  alt=""
                  className="h-[20vh] object-contain "
                />
              </div>
              <div>
                <h1 className="text-3xl p-10">Boiler</h1>
              </div>

              <Link
                className=" Solarbtn p-3 w-[10vw] text-xl bg-teal-600 rounded-full text-white hover:bg-teal-700 text-center"
                to="/boiler"
                onClick={() => SolarType("Solar PV")}
              >
                Get Estimate
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
