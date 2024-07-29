import React from "react";
import { Link } from "react-router-dom";

export default function BoilerHome() {
  let data = JSON.parse(localStorage.getItem("data")) || {};

  function setPropertity(value) {
    let newdata = { ...data, property: value };
    localStorage.setItem("data", JSON.stringify(newdata));
  }

  const handlePopState = () => {
    let newData = { ...data };

    delete newData.property;
    localStorage.setItem("data", JSON.stringify(newData));
  };

  window.onpopstate = handlePopState;
  return (
    <div>
      <div className="h-[90vh] w-full ">
        <div>
          <h3 className="item flex items-center justify-center pt-10 text-xl font-bold">
            Just a few short questions and we will have quotation to you.
          </h3>
          <p className="item flex items-center justify-center pt-10 text-md font-lg">
            Join the 20,000 happy customers throughout Leinster that have chosen
            us for the boiler services.
          </p>
        </div>
        <div className="main gap-5 flex pt-10 items-center justify-center">
          <Link
            to="/boiler/year"
            className="item flex justify-center items-center "
            onClick={() => setPropertity("Semi-Detached")}
          >
            <div className="item h-[37vh] w-[15vw] bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl border hover:border-[#4BA4A1]">
              <div>
                <img
                  src="/src/assets/semi-detached.png"
                  alt=""
                  className="h-[10vh]"
                />
              </div>
              <div>
                <p className="text-lg p-5">Semi-Detached</p>
              </div>
            </div>
          </Link>
          <Link
            to="/boiler/year"
            className="item flex justify-center items-center"
            onClick={() => setPropertity("Detached")}
          >
            <div className="item h-[37vh] w-[15vw] border bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl hover:border-[#4BA4A1]">
              <div>
                <img
                  src="/src/assets/detached.png"
                  alt=""
                  className="h-[10vh]"
                />
              </div>
              <div>
                <p className="text-lg p-5">Detached</p>
              </div>
            </div>
          </Link>
          <Link
            to="/boiler/year"
            className="item flex justify-center items-center"
            onClick={() => setPropertity("Terrace")}
          >
            <div className="item h-[37vh] w-[15vw] bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl border hover:border-[#4BA4A1]">
              <div>
                <img src="/src/assets/facade.png" alt="" className="h-[10vh]" />
              </div>
              <div>
                <p className="text-lg p-5">Terrace</p>
              </div>
            </div>
          </Link>
          <Link
            to="/boiler/year"
            className="item flex justify-center items-center"
            onClick={() => setPropertity("Apartment")}
          >
            <div className="item h-[37vh] w-[15vw] bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl border hover:border-[#4BA4A1]">
              <div>
                <img
                  src="/src/assets/apartment.png"
                  alt=""
                  className="h-[10vh]"
                />
              </div>
              <div>
                <p className="text-lg p-5">Apartment</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
