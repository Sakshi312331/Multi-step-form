import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SolarType() {
  const navigate = useNavigate();
  let data = JSON.parse(localStorage.getItem("data")) || {};

  function setPropertitySize(value) {
    let newdata = { ...data, propertySize: value };
    localStorage.setItem("data", JSON.stringify(newdata));
  }

  const handlePopState = () => {
    let newData = { ...data };
    delete newData.propertySize;
    localStorage.setItem("data", JSON.stringify(newData));
    navigate(-1); // Go back one step in history
  };

  useEffect(() => {
    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [data]);

  return (
    <div>
      {/* for back button */}
      <div
        className="backbutton w-[80px] h-[40px] bg-[#4BA4A1] rounded-[5px] absolute top-[50%] left-[0px] main flex justify-center items-center text-white text-lg font-bold flip-button cursor-pointer"
        tabIndex="0"
      >
        <button id="prevBtn" className="button" onClick={handlePopState}>
          <span>{"<"}Back</span>
        </button>
      </div>
      <div className="h-[90vh] w-full ">
        <div className="flex justify-center pt-10 font-bold text-center">
          <h1 className="text-xl text-bold">
            Please select the option that most accurately represents your
            property?
          </h1>
        </div>

        <div className="main gap-5 flex pt-10 items-center justify-center">
          <Link
            to="/solar/solarTimming"
            className="item flex justify-center items-center"
            onClick={() => setPropertitySize("small")}
          >
            <div className="item h-[37vh] w-[15vw] bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl border hover:border-[#4BA4A1]">
              <div>
                <img
                  src="/src/assets/business (1).png"
                  alt=""
                  className="h-[10vh]"
                />
              </div>
              <div>
                <p className="text-lg p-5">
                  Small - Electricity Spend Less than €120,000 / Year
                </p>
              </div>
            </div>
          </Link>
          <Link
            to="/solar/solarTimming"
            className="item flex justify-center items-center"
            onClick={() => setPropertitySize("Medium")}
          >
            <div className="item h-[37vh] w-[15vw] border bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl hover:border-[#4BA4A1]">
              <div>
                <img
                  src="/src/assets/working-factory.png"
                  alt=""
                  className="h-[10vh]"
                />
              </div>
              <div>
                <p className="text-lg p-5">
                  Medium - Electricity Spend Between €120,000 and €300,000 /
                  Year
                </p>
              </div>
            </div>
          </Link>
          <Link
            to="/solar/solarTimming"
            className="item flex justify-center items-center"
            onClick={() => setPropertitySize("Large")}
          >
            <div className="item h-[37vh] w-[15vw] bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl border hover:border-[#4BA4A1]">
              <div>
                <img
                  src="/src/assets/factory.png"
                  alt=""
                  className="h-[10vh]"
                />
              </div>
              <div>
                <p className="text-lg p-5">
                  Large - Electricity Spend More than €300,000 / Year
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
