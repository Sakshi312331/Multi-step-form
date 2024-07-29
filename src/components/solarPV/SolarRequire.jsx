import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SolarRequire() {
  const navigate = useNavigate();
  let data = JSON.parse(localStorage.getItem("data")) || {};

  function setRequire(value) {
    let newData = { ...data, solarRequirement: value };
    localStorage.setItem("data", JSON.stringify(newData));
  }

  useEffect(() => {
    const handlePopState = () => {
      let newData = { ...data };
      delete newData.propertySize; // Optionally remove other data as needed
      delete newData.solarRequirement; // Remove solarRequirement data if needed
      localStorage.setItem("data", JSON.stringify(newData));
      navigate(-1); // Go back one step in history
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [data, navigate]);

  return (
    <div>
      {/* For back button */}
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
            Bi-monthly Bill
          </h1>
        </div>
        <div className="main gap-5 flex pt-10 items-center justify-center">
          <Link
            to="/form"
            className="item flex justify-center items-center"
            onClick={() => setRequire("Immediate")}
          >
            <div className="item h-[37vh] w-[15vw] bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl border hover:border-[#4BA4A1]">
              <div>
                <img
                  src="/src/assets/stopwatch.png"
                  alt="Immediate"
                  className="h-[10vh]"
                />
              </div>
              <div>
                <p className="text-lg p-5">Immediate</p>
              </div>
            </div>
          </Link>
          <Link
            to="/form"
            className="item flex justify-center items-center"
            onClick={() => setRequire("1 Month")}
          >
            <div className="item h-[37vh] w-[15vw] border bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl hover:border-[#4BA4A1]">
              <div>
                <img
                  src="/src/assets/calendar.png"
                  alt="1 Month"
                  className="h-[10vh]"
                />
              </div>
              <div>
                <p className="text-lg p-5">1 Month</p>
              </div>
            </div>
          </Link>
          <Link
            to="/form"
            className="item flex justify-center items-center"
            onClick={() => setRequire("3 - 6 Months")}
          >
            <div className="item h-[37vh] w-[15vw] bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl border hover:border-[#4BA4A1]">
              <div>
                <img
                  src="/src/assets/calendar (1).png"
                  alt="3 - 6 Months"
                  className="h-[10vh]"
                />
              </div>
              <div>
                <p className="text-lg p-5">3 - 6 Months</p>
              </div>
            </div>
          </Link>
          <Link
            to="/form"
            className="item flex justify-center items-center"
            onClick={() => setRequire("6 Months+")}
          >
            <div className="item h-[37vh] w-[15vw] bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl border hover:border-[#4BA4A1]">
              <div>
                <img
                  src="/src/assets/calendar (2).png"
                  alt="6 Months+"
                  className="h-[10vh]"
                />
              </div>
              <div>
                <p className="text-lg p-5">6 Months+</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
