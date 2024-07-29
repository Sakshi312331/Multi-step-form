import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SolarFarmAgri() {
  const navigate = useNavigate();
  let data = JSON.parse(localStorage.getItem("data")) || {};

  function setFarmAgri(value) {
    let newData = { ...data, farmAgri: value };
    localStorage.setItem("data", JSON.stringify(newData));
  }

  const handlePopState = () => {
    let newData = { ...data };
    delete newData.propertySize;
    delete newData.farmAgri;
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
            to="/solar/solarFarmMounting"
            className="item flex justify-center items-center"
            onClick={() => setFarmAgri("Dairy & beef suckler")}
          >
            <div className="item h-[37vh] w-[15vw] bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl border hover:border-[#4BA4A1]">
              <div>
                <img
                  src="https://getyourquote.greenenergyhomes.ie/unique-image/dairy-products1.png"
                  alt="Dairy & beef suckler"
                  className="h-[10vh]"
                />
              </div>
              <div>
                <p className="text-lg p-5">Dairy & beef suckler</p>
              </div>
            </div>
          </Link>
          <Link
            to="/solar/solarFarmMounting"
            className="item flex justify-center items-center"
            onClick={() => setFarmAgri("Horses - Equestrian")}
          >
            <div className="item h-[37vh] w-[15vw] border bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl hover:border-[#4BA4A1]">
              <div>
                <img
                  src="/src/assets/jumping-horse-silhouette-facing-left-side-view.png"
                  alt="Horses - Equestrian"
                  className="h-[10vh]"
                />
              </div>
              <div>
                <p className="text-lg p-5">Horses - Equestrian</p>
              </div>
            </div>
          </Link>
          <Link
            to="/solar/solarFarmMounting"
            className="item flex justify-center items-center"
            onClick={() => setFarmAgri("Other")}
          >
            <div className="item h-[37vh] w-[15vw] bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl border hover:border-[#4BA4A1]">
              <div>
                <img
                  src="/src/assets/dog-house.png"
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
