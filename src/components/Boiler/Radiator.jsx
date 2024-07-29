import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Radiator() {
  const navigate = useNavigate();
  let data = JSON.parse(localStorage.getItem("data")) || {};

  function setBoilerRadiator(value) {
    let newData = { ...data, boilerRadiator: value };
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
      <div className="h-[100vh] w-[100vw]">
        <div>
          <h3 className="item flex justify-center pt-10 text-lg font-bold">
            To assist us in determining the suitable boiler size for your home,
            please specify the total number of radiators you have.
          </h3>
        </div>
        <div className="gap-5 flex pt-10 items-center justify-center flex-wrap">
          <Link
            to="/boiler/fuel"
            className="item flex justify-center items-center"
            onClick={() => setBoilerRadiator("1-4")}
          >
            <div className="item h-[37vh] w-[15vw] bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl border hover:border-[#4BA4A1]">
              <div>
                <img
                  src="/src/assets/radiator%20(2).png"
                  alt="1-4 Radiators"
                  className="h-[10vh]"
                />
              </div>
              <div>
                <p className="text-lg p-5">1-4</p>
              </div>
            </div>
          </Link>
          <Link
            to="/boiler/fuel"
            className="item flex justify-center items-center"
            onClick={() => setBoilerRadiator("5-8")}
          >
            <div className="item h-[37vh] w-[15vw] bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl border hover:border-[#4BA4A1]">
              <div>
                <img
                  src="/src/assets/5-8img.png"
                  alt="5-8 Radiators"
                  className="h-[10vh]"
                />
              </div>
              <div>
                <p className="text-lg p-5">5-8</p>
              </div>
            </div>
          </Link>
          <Link
            to="/boiler/fuel"
            className="item flex justify-center items-center"
            onClick={() => setBoilerRadiator("9-12")}
          >
            <div className="item h-[37vh] w-[15vw] bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl border hover:border-[#4BA4A1]">
              <div>
                <img
                  src="/src/assets/5-8radiator.png"
                  alt="9-12 Radiators"
                  className="h-[10vh]"
                />
              </div>
              <div>
                <p className="text-lg p-5">9-12</p>
              </div>
            </div>
          </Link>
          <Link
            to="/boiler/fuel"
            className="item flex justify-center items-center"
            onClick={() => setBoilerRadiator("13-16")}
          >
            <div className="item h-[37vh] w-[15vw] bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl border hover:border-[#4BA4A1]">
              <div>
                <img
                  src="/src/assets/9-12radiator.png"
                  alt="13-16 Radiators"
                  className="h-[10vh]"
                />
              </div>
              <div>
                <p className="text-lg p-5">13-16</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="main radiator-second-row flex gap-5 text-center justify-start align-center mt-5 ml-[300px]">
          <Link
            to="/boiler/fuel"
            className="item flex justify-center items-center"
            onClick={() => setBoilerRadiator("17-19")}
          >
            <div className="item h-[37vh] w-[15vw] bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl border hover:border-[#4BA4A1]">
              <div>
                <img
                  src="/src/assets/13-16radiator.png"
                  alt="17-19 Radiators"
                  className="h-[10vh]"
                />
              </div>
              <div>
                <p className="text-lg p-5">17-19</p>
              </div>
            </div>
          </Link>
          <Link
            to="/boiler/fuel"
            className="item flex justify-center items-center"
            onClick={() => setBoilerRadiator("19+")}
          >
            <div className="item h-[37vh] w-[15vw] bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl border hover:border-[#4BA4A1]">
              <div>
                <img
                  src="/src/assets/19+radiator.png"
                  alt="19+ Radiators"
                  className="h-[10vh]"
                />
              </div>
              <div>
                <p className="text-lg p-5">19+</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
