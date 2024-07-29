import React from "react";

import { Link, useNavigate } from "react-router-dom";

export default function SolarMain() {
  let data = JSON.parse(localStorage.getItem("data")) || {};

  function setPropertity(value) {
    let newdata = { ...data, propertyType: value };
    localStorage.setItem("data", JSON.stringify(newdata));
  }

  const handlePopState = () => {
    let newData = { ...data };

    delete newData.propertyType;
    localStorage.setItem("data", JSON.stringify(newData));
  };

  window.onpopstate = handlePopState;
  return (
    <div>
      <div className="h-[90vh] w-full ">
        <div className="flex justify-center pt-10 font-bold text-center">
          <h1 className="text-xl text-bold">
            Just a few short questions and we will have quotation to you.
          </h1>
        </div>
        <div>
          <h1 className="flex items-center justify-center pt-10">
            Join the 20,000 happy customers throughout Leinster that have chosen
            our services.
          </h1>
        </div>
        <div className="main gap-5 flex pt-10 items-center justify-center">
          <Link
            to="/solar/solarType"
            className="item flex justify-center items-center "
            onClick={() => setPropertity("Business")}
          >
            <div className="item h-[37vh] w-[15vw] bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl border hover:border-[#4BA4A1]">
              <div>
                <img
                  src="/src/assets/business.png"
                  alt=""
                  className="h-[10vh]"
                />
              </div>
              <div>
                <p className="text-lg p-10">Business</p>
              </div>
            </div>
          </Link>

          <Link
            to="/solar/solarHome"
            className="item flex justify-center items-center"
            onClick={() => setPropertity("Home")}
          >
            <div className="item h-[37vh] w-[15vw] border bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl hover:border-[#4BA4A1]">
              <div>
                <img
                  src="/src/assets/home-page (1).png"
                  alt=""
                  className="h-[10vh]"
                />
              </div>
              <div>
                <p className="text-lg p-10">Home</p>
              </div>
            </div>
          </Link>
          <Link
            to="/solar/solarFarmAgri"
            className="item flex justify-center items-center"
            onClick={() => setPropertity("Farm")}
          >
            <div className="item h-[37vh] w-[15vw] bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl border hover:border-[#4BA4A1]">
              <div>
                <img src="/src/assets/house.png" alt="" className="h-[10vh]" />
              </div>
              <div>
                <p className="text-lg p-10">Farm</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
