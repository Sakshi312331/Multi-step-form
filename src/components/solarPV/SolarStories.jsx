import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SolarStories() {
  const navigate = useNavigate();
  let data = JSON.parse(localStorage.getItem("data")) || {};

  function setPropertityStories(value) {
    let newData = { ...data, propertyStories: value };
    localStorage.setItem("data", JSON.stringify(newData));
  }

  useEffect(() => {
    const handlePopState = () => {
      let newData = { ...data };
      delete newData.propertySize; // Optionally remove other data as needed
      delete newData.propertyStories; // Remove propertyStories data if needed
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
            How many stories does your property have?
          </h1>
        </div>
        <div className="main gap-5 flex pt-10 items-center justify-center">
          <Link
            to="/solar/solarHomeTimming"
            className="item flex justify-center items-center"
            onClick={() => setPropertityStories("One Story")}
          >
            <div className="item h-[37vh] w-[15vw] bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl border hover:border-[#4BA4A1]">
              <div>
                <img
                  src="/src/assets/dining-table.png"
                  alt="One Story"
                  className="h-[10vh]"
                />
              </div>
              <div>
                <p className="text-lg p-5">One Story</p>
              </div>
            </div>
          </Link>
          <Link
            to="/solar/solarHomeTimming"
            className="item flex justify-center items-center"
            onClick={() => setPropertityStories("Two Stories")}
          >
            <div className="item h-[37vh] w-[15vw] border bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl hover:border-[#4BA4A1]">
              <div>
                <img
                  src="/src/assets/real-estate.png"
                  alt="Two Stories"
                  className="h-[10vh]"
                />
              </div>
              <div>
                <p className="text-lg p-5">Two Stories</p>
              </div>
            </div>
          </Link>
          <Link
            to="/solar/solarHomeTimming"
            className="item flex justify-center items-center"
            onClick={() => setPropertityStories("Three Stories+")}
          >
            <div className="item h-[37vh] w-[15vw] bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl border hover:border-[#4BA4A1]">
              <div>
                <img
                  src="/src/assets/house-front-of-three-floors.png"
                  alt="Three Stories+"
                  className="h-[10vh]"
                />
              </div>
              <div>
                <p className="text-lg p-5">Three Stories+</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
