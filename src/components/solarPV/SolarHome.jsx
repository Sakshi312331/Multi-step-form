import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SolarHome() {
  const navigate = useNavigate();
  let data = JSON.parse(localStorage.getItem("data")) || {};

  function setPropertySize(value) {
    let newData = { ...data, propertySize: value };
    localStorage.setItem("data", JSON.stringify(newData));
  }

  useEffect(() => {
    const handlePopState = () => {
      let newData = { ...data };
      delete newData.propertySize;
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
            Please select the option that most accurately represents your
            property?
          </h1>
        </div>
        <div className="main gap-5 flex pt-10 items-center justify-center">
          <Link
            to="/solar/solarStories"
            className="item flex justify-center items-center"
            onClick={() => setPropertySize("Semi-Detached")}
          >
            <div className="item h-[37vh] w-[15vw] bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl border hover:border-[#4ba4a1]">
              <div>
                <img
                  src="/src/assets/semi-detached.png"
                  alt="Semi-Detached"
                  className="h-[10vh]"
                />
              </div>
              <div>
                <p className="text-lg p-5">Semi-Detached</p>
              </div>
            </div>
          </Link>
          <Link
            to="/solar/solarStories"
            className="item flex justify-center items-center"
            onClick={() => setPropertySize("Detached")}
          >
            <div className="item h-[37vh] w-[15vw] border bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl hover:border-[#4ba4a1]">
              <div>
                <img
                  src="/src/assets/detached.png"
                  alt="Detached"
                  className="h-[10vh]"
                />
              </div>
              <div>
                <p className="text-lg p-5">Detached</p>
              </div>
            </div>
          </Link>
          <Link
            to="/solar/solarStories"
            className="item flex justify-center items-center"
            onClick={() => setPropertySize("Terrace")}
          >
            <div className="item h-[37vh] w-[15vw] bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl border hover:border-[#4ba4a1]">
              <div>
                <img
                  src="/src/assets/facade.png"
                  alt="Terrace"
                  className="h-[10vh]"
                />
              </div>
              <div>
                <p className="text-lg p-5">Terrace</p>
              </div>
            </div>
          </Link>
          <Link
            to="/solar/solarStories"
            className="item flex justify-center items-center"
            onClick={() => setPropertySize("Apartment")}
          >
            <div className="item h-[37vh] w-[15vw] bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl border hover:border-[#4ba4a1]">
              <div>
                <img
                  src="/src/assets/apartment.png"
                  alt="Apartment"
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
