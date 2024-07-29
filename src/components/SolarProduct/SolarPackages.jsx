import React from "react";
import "../../SolarproductStyle.css";
import { Link } from "react-router-dom";
import EllipsComponent from "./EllipsComponent";
import EllipsComponentDown from "./EllipsComponentDown";
const SolarPackages = () => {
  return (
    <>
      <EllipsComponent />
      <div className="box text-center ">
        <h3 className="box text-[25px]">
          Not sure the one for you? Don't worry!
          <br />
          We have plenty of{" "}
          <span className="text-teal-500">Solar PV packages</span> that suit
          your needs!
        </h3>
      </div>

      <div className="box flex flex-col sm:flex-row justify-center">
        <div className="w-full sm:w-1/3 mb-4">
          <div className="bg-white shadow-lg rounded-lg p-5 m-5">
            <div className="flex justify-center mb-4">
              <img
                loading="lazy"
                src="/src/assets/Frame 2 (4).png"
                alt="75.25kW 175 Panel System &amp; Huawei Inverter"
                className="w-full h-auto"
              />
            </div>
            <div className="text-center">
              <p>
                3.48kW 10 Panel System &amp; Solis Inverter incl. SEAI <br />
                Grant
              </p>
              <div className="my-2">
                <p>Starting from</p>
                <p>
                  <span>€59,305.00</span>
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center mt-4">
              <Link
                to="https://calendly.com/navyakrishna-dewarplumbers/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-500 text-center border p-3 rounded-[50px] w-full mb-3"
              >
                Book a Call
              </Link>
              <button className="text-white bg-[#4ba4a1] text-center p-3 rounded-[50px] w-full mb-3">
                View Details
              </button>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-1/3 mb-4">
          <div className="bg-white shadow-lg rounded-lg p-4 m-5">
            <div className="flex justify-center mb-4">
              <img
                loading="lazy"
                src="/src/assets/Frame 2 (4).png"
                alt="75.25kW 175 Panel System"
                className="w-full h-auto"
              />
            </div>
            <div className="text-center">
              <p>
                4.35kW 13 Panel System & Solis Inverter incl. SEAI <br />
                Grant
              </p>
              <div className="my-2">
                <p>Starting from</p>
                <p>
                  <span>€59,305.00</span>
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-between items-center mt-4 w-full">
              <Link
                to="https://calendly.com/navyakrishna-dewarplumbers/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-500 text-center border p-3 rounded-[50px] w-full mb-3"
              >
                Book a Call
              </Link>
              <button className="text-white bg-[#4ba4a1] text-center p-3 rounded-[50px] w-full mb-3">
                View Details
              </button>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-1/3 mb-4">
          <div className="bg-white shadow-lg rounded-lg p-4 m-5">
            <div className="flex justify-center mb-4">
              <img
                loading="lazy"
                src="/src/assets/Frame 2 (4).png"
                alt="75.25kW 175 Panel System &amp; Huawei Inverter"
                className="w-full h-auto"
              />
            </div>
            <div className="text-center">
              <p>
                4.35kW 13 Panel System, Solis Inverter & Eddi Diverter incl.{" "}
                <br />
                SEAI Grant
              </p>
              <div className="my-2">
                <p>Starting from</p>
                <p>
                  <span>€59,305.00</span>
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-between items-center mt-4">
              <Link
                to="https://calendly.com/navyakrishna-dewarplumbers/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-500 border text-center p-3 rounded-[50px] w-full mb-3"
              >
                Book a Call
              </Link>
              <button className="text-white bg-[#4ba4a1] text-center p-3 rounded-[50px] w-full mb-3">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>

      <EllipsComponentDown />
    </>
  );
};

export default SolarPackages;
