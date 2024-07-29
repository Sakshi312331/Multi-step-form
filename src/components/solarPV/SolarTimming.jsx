import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SolarTimming() {
  const navigate = useNavigate();
  let data = JSON.parse(localStorage.getItem("data")) || {};

  function setTimming(value) {
    let newData = { ...data, solarTimming: value };
    localStorage.setItem("data", JSON.stringify(newData));
  }

  useEffect(() => {
    const handlePopState = () => {
      let newData = { ...data };
      delete newData.propertySize;
      delete newData.solarTimming; // Remove solarTimming data if needed
      localStorage.setItem("data", JSON.stringify(newData));
      navigate(-1); // Go back one step in history
    };

    // Attach event listener
    window.addEventListener("popstate", handlePopState);

    // Clean up event listener
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
            When do you use your home the most?
          </h1>
        </div>
        <div className="main gap-5 flex pt-10 items-center justify-center">
          <Link
            to="/solar/solarRequire"
            className="item flex justify-center items-center"
            onClick={() => setTimming("Monday to Friday 9-5")}
          >
            <div className="item h-[37vh] w-[15vw] bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl border hover:border-[#4BA4A1]">
              <div>
                <img
                  src="/src/assets/calendar (3).png"
                  alt="Monday to Friday 9-5"
                  className="h-[10vh]"
                />
              </div>
              <div>
                <p className="text-lg p-5">Monday to Friday 9-5</p>
              </div>
            </div>
          </Link>
          <Link
            to="/solar/solarRequire"
            className="item flex justify-center items-center"
            onClick={() => setTimming("Monday to Sunday 9-5")}
          >
            <div className="item h-[37vh] w-[15vw] border bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl hover:border-[#4BA4A1]">
              <div>
                <img
                  src="/src/assets/calendar (4).png"
                  alt="Monday to Sunday 9-5"
                  className="h-[10vh]"
                />
              </div>
              <div>
                <p className="text-lg p-5">Monday to Sunday 9-5</p>
              </div>
            </div>
          </Link>
          <Link
            to="/solar/solarRequire"
            className="item flex justify-center items-center"
            onClick={() => setTimming("24/7")}
          >
            <div className="item h-[37vh] w-[15vw] bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl border hover:border-[#4BA4A1]">
              <div>
                <img
                  src="/src/assets/weekly-calendar.png"
                  alt="24/7"
                  className="h-[10vh]"
                />
              </div>
              <div>
                <p className="text-lg p-5">24/7</p>
              </div>
            </div>
          </Link>
          <Link
            to="/solar/solarRequire"
            className="item flex justify-center items-center"
            onClick={() => setTimming("Other")}
          >
            <div className="item h-[37vh] w-[15vw] bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl border hover:border-[#4BA4A1]">
              <div>
                <img
                  src="/src/assets/calendar (5).png"
                  alt="Other"
                  className="h-[10vh]"
                />
              </div>
              <div>
                <p className="text-lg p-5">Other</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
