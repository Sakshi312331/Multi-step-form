import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SolarFarmPhase() {
  const navigate = useNavigate();
  let data = JSON.parse(localStorage.getItem("data")) || {};

  function setFarmPhase(value) {
    let newData = { ...data, farmPhase: value };
    localStorage.setItem("data", JSON.stringify(newData));
  }

  const handlePopState = () => {
    let newData = { ...data };
    delete newData.propertySize;
    delete newData.farmPhase;
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
          <h1 className="flex items-center justify-center pt-10 text-xl font-bold">
            Which best describes your enterprise?
          </h1>
        </div>
        <div className="main gap-5 flex pt-10 items-center justify-center">
          <Link
            to="/solar/solarHomeTimming"
            className="item flex justify-center items-center"
            onClick={() => setFarmPhase("Single Phase")}
          >
            <div className="item h-[37vh] w-[15vw] bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl border hover:border-[#4BA4A1]">
              <div>
                <img
                  src="/src/assets/electric-power.png"
                  alt="Single Phase"
                  className="h-[10vh]"
                />
              </div>
              <div>
                <p className="text-lg p-5">Single Phase</p>
              </div>
            </div>
          </Link>
          <Link
            to="/solar/solarHomeTimming"
            className="item flex justify-center items-center"
            onClick={() => setFarmPhase("3-Phase")}
          >
            <div className="item h-[37vh] w-[15vw] border bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl hover:border-[#4BA4A1]">
              <div>
                <img
                  src="/src/assets/electricity.png"
                  alt="3-Phase"
                  className="h-[10vh]"
                />
              </div>
              <div>
                <p className="text-lg p-5">3-Phase</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
