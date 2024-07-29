import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SolarElectricity() {
  const navigate = useNavigate();
  let data = JSON.parse(localStorage.getItem("data")) || {};

  function setElectricity(value) {
    let newData = { ...data, electricityConsume: value };
    localStorage.setItem("data", JSON.stringify(newData));
  }

  const handlePopState = () => {
    let newData = { ...data };
    delete newData.propertySize;
    delete newData.electricityConsume;
    localStorage.setItem("data", JSON.stringify(newData));
    navigate(-1); // Go back one step in history
  };

  useEffect(() => {
    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [data, navigate]);

  return (
    <div>
      {/* for back button */}
      <div
        className="backbutton w-[80px] h-[40px] bg-[#4BA4A1] rounded-[5px] absolute top-[50%] left-[0px] main flex justify-center items-center text-white text-lg font-bold flip-button cursor-pointer"
        tabIndex="0"
      >
        <button id="prevBtn" className="button" onClick={() => navigate(-1)}>
          <span>{"<"}Back</span>
        </button>
      </div>
      <div className="h-[90vh] w-full">
        <div>
          <h3 className="flex items-center justify-center pt-10 text-xl font-bold">
            What type of agri enterprise do you operate?
          </h3>
        </div>
        <div className="main gap-5 flex pt-10 items-center justify-center">
          <Link
            to="/solar/solarRequire"
            className="item flex justify-center items-center"
            onClick={() => setElectricity("€300")}
          >
            <div className="item h-[37vh] w-[15vw] bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl border hover:border-[#4BA4A1]">
              <div>
                <img src="/src/assets/coins.png" alt="" className="h-[10vh]" />
              </div>
              <div>
                <p className="text-lg p-5">{"<"}€300</p>
              </div>
            </div>
          </Link>
          <Link
            to="/solar/solarRequire"
            className="item flex justify-center items-center"
            onClick={() => setElectricity("€400")}
          >
            <div className="item h-[37vh] w-[15vw] bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl border hover:border-[#4BA4A1]">
              <div>
                <img
                  src="/src/assets/coin-stack.png"
                  alt=""
                  className="h-[10vh]"
                />
              </div>
              <div>
                <p className="text-lg p-5">{"<"}€400</p>
              </div>
            </div>
          </Link>
          <Link
            to="/solar/solarRequire"
            className="item flex justify-center items-center"
            onClick={() => setElectricity("€500")}
          >
            <div className="item h-[37vh] w-[15vw] bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl border hover:border-[#4BA4A1]">
              <div>
                <img
                  src="/src/assets/coins%20(1).png"
                  alt=""
                  className="h-[10vh]"
                />
              </div>
              <div>
                <p className="text-lg p-5">{"<"}€500</p>
              </div>
            </div>
          </Link>
          <Link
            to="/solar/solarRequire"
            className="item flex justify-center items-center"
            onClick={() => setElectricity("€500+")}
          >
            <div className="item h-[37vh] w-[15vw] bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl border hover:border-[#4BA4A1]">
              <div>
                <img
                  src="/src/assets/coins%20(1).png"
                  alt=""
                  className="h-[10vh]"
                />
              </div>
              <div>
                <p className="text-lg p-5">{"<"}€500+</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
