import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Fuel() {
  const navigate = useNavigate();
  let data = JSON.parse(localStorage.getItem("data")) || {};

  function setBoilerFuel(value) {
    let newData = { ...data, boilerFuel: value };
    localStorage.setItem("data", JSON.stringify(newData));
  }

  useEffect(() => {
    const handlePopState = () => {
      let newData = { ...data };
      delete newData.propertySize;
      localStorage.setItem("data", JSON.stringify(newData));
      navigate(-1); // Go back one step in history
    };

    // Attach event listener
    window.addEventListener("popstate", handlePopState);

    // Clean up event listener on component unmount
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
      <div className="h-[90vh] w-full ">
        <div>
          <h1 className="flex items-center justify-center pt-10 font-bold">
            What fuel do you currently use to heat your property?
          </h1>
        </div>
        <div className="main gap-5 flex pt-10 items-center justify-center">
          <Link
            to="/boiler/timming"
            className="item gap-5 flex items-center justify-center"
          >
            <div
              className="main flex justify-center items-center"
              onClick={() => setBoilerFuel("Natural Gas")}
            >
              <div className="item h-[37vh] w-[15vw] bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl border hover:border-[#4BA4A1]">
                <div>
                  <img
                    src="/src/assets/flame.png"
                    alt="Natural Gas"
                    className="h-[10vh]"
                  />
                </div>
                <div>
                  <p className="text-lg p-5">Natural Gas</p>
                </div>
              </div>
            </div>
          </Link>
          <Link
            to="/boiler/timming"
            className="item flex justify-center items-center ms:mt-5"
            onClick={() => setBoilerFuel("Oil")}
          >
            <div className="item h-[37vh] w-[15vw] border bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl hover:border-[#4BA4A1]">
              <div>
                <img src="/src/assets/oil.png" alt="Oil" className="h-[10vh]" />
              </div>
              <div>
                <p className="text-lg p-5">Oil</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
