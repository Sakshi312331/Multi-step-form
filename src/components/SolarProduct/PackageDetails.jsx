import React from "react";
import "../../SolarproductStyle.css";
import EllipsComponent from "./EllipsComponent";
import EllipsComponentDown from "./EllipsComponentDown";
const PackageDetails = () => {
  return (
    <>
      <style jsx>{`
        .green-bullets li::marker {
          color: #4ba4a1; /* Green color */
        }
      `}</style>
      <EllipsComponent />
      <div className="box flex flex-col items-center">
        <div className="flex justify-center">
          <div>
            <div className="ellips-div w-full">
              <h2 className="text-center text-[30px] font-semibold pb-5">
                This package<span className="text-[#4ba4a1]"> includes</span>
              </h2>
              <div className="list-card">
                <div>
                  <ul className="list-disc green-bullets p-3 mt-3">
                    <li>
                      <div>Longi 440w Solar Panels with a 40 year warranty</div>
                    </li>
                    <li>
                      <div>Solis- 10 year warranty</div>
                    </li>
                    <li>
                      <div>
                        Van Der Valk Mounting system with a 12 year warranty
                      </div>
                    </li>
                    <li>
                      <div>Grant of €2,100 included</div>
                    </li>
                    <li>
                      <div>Free lifetime system monitoring</div>
                    </li>
                    <li>
                      <div>SEAI application & paperwork</div>
                    </li>
                    <li>
                      <div>Safe Electric Certification</div>
                    </li>
                    <li>
                      <div>2 year workmanship guarantee</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <EllipsComponentDown />
      </div>
    </>
  );
};

export default PackageDetails;
