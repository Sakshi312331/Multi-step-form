import React, { useState } from "react";
import "../../BoilerProductforgas.css";
import { Link } from "react-router-dom";
import TwoModal from "./TwoModal";

const IdealLogicHiveSmartThermostat = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <>
      <div className="p-5">
        <style jsx>{`
          .green-bullets li::marker {
            color: #4ba4a1; /* Green color */
          }
        `}</style>
        <section className="ideal-logic-boiler m-5">
          <div className="widthofcontainer mx-auto shadow-lg">
            <div className="flex text-center justify-between flex-wrap bg-white p-5">
              <div className="w-full lg:w-1/2 xl:w-1/3 mb-5">
                <div>
                  <div className="overflow-hidden">
                    {/* <img
                      src="/src/assets/Bproduct3.jpg"
                      className="w-3/4 h-auto object-contain"
                      alt="Grant Vortex Indoor Boiler"
                    /> */}
                    <TwoModal />
                  </div>
                </div>
              </div>
              <div className="w-full text-start lg:w-1/2 xl:w-1/3 text-left mb-5">
                <h6 className="text-lg font-semibold text-gray-700">
                  Ideal Logic & Hive Smart Thermostat
                </h6>
                <p className="text-gray-700 mt-2">
                  This package includes Ideal Logic Max A rated condensing
                  boiler
                </p>
                <ul className="list-disc space-y-5 green-bullets">
                  <li>Free Hive Smart Thermostat worth €520</li>
                  <li>Free carbon monoxide alarm</li>
                  <li>12-month guarantee</li>

                  <li>Free upgrade to a 10 year warranty worth €230</li>
                  <li>Free magnetic filter to protect your heating system</li>
                  <li>
                    Free chemical inhibitor to protect your heating system
                  </li>
                  <li>Free €200 Solar PV Voucher</li>
                  <li>Free no obligation quotation</li>
                  <li>
                    All work will be carried out and completed by our insured
                    and directly employed staff
                  </li>
                  <li>We will remove the old boiler and recycle</li>
                  <li>
                    We will issue a gas certificate two on completion and
                    receipt of final payment
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-1/2 xl:w-1/3">
                <p className="text-gray-700">Starting from</p>
                <h5 className="text-gray-700 text-2xl font-semibold mt-2">
                  €3,318
                </h5>
                <button
                  type="button"
                  className="bg-[#4ba4a1] text-white py-2 px-6 rounded mt-2"
                  onClick={handleShow}
                >
                  <h6 className="font-semibold">View Details</h6>
                </button>
                <p className="text-gray-700 mt-2 text-center">OR</p>
                <button
                  type="button"
                  className="bg-[#4ba4a1] text-white py-2 px-4 rounded mt-2"
                >
                  <Link
                    to="https://calendly.com/navyakrishna-dewarplumbers/30min"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white py-2 px-3 rounded mt-2 font-semibold"
                  >
                    Book a Call
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </section>

        {showModal && (
          <div className="fixed inset-0 z-50 overflow-auto bg-smoke-light flex">
            <div className="relative p-8 bg-white w-full max-w-md m-auto flex-col flex rounded-lg shadow-lg">
              <h5 className="text-lg font-semibold mb-4">
                Product Description
              </h5>
              <section className="ideal-logic-boiler m-5">
                <div className="text-center mb-4">
                  <h5>Ideal Logic & Hive Smart Thermostat</h5>
                </div>
                <div className="container mx-auto">
                  <div className="flex flex-col justify-evenly">
                    <div>
                      <div>
                        <div>
                          <img
                            src="/src/assets/Bproduct3.jpg"
                            alt="Grant Vortex Indoor Boiler"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="w-full text-left ">
                      <p className="text-gray-700">Starting from</p>
                      <h5 className="text-gray-700 text-2xl font-semibold mt-2">
                        €3,318
                      </h5>
                      <button
                        type="button"
                        className="bg-[#4ba4a1] text-white py-2 px-4 rounded mt-2"
                        onClick={() =>
                          window.open(
                            "https://calendly.com/navyakrishna-dewarplumbers/30min",
                            "_blank"
                          )
                        }
                      >
                        <span className="text-white">Book a Call</span>
                      </button>
                      <p className="text-gray-700 mb-0">
                        This package includes Ideal Logic Max A rated condensing
                        boiler
                      </p>
                      <ul className="list-disc space-y-5 green-bullets">
                        <li>Free Hive Smart Thermostat worth €520</li>
                        <li>Free carbon monoxide alarm</li>
                        <li>12-month guarantee</li>

                        <li>Free upgrade to a 10 year warranty worth €230</li>
                        <li>
                          Free magnetic filter to protect your heating system
                        </li>
                        <li>
                          Free chemical inhibitor to protect your heating system
                        </li>
                        <li>Free €200 Solar PV Voucher</li>
                        <li>Free no obligation quotation</li>
                        <li>
                          All work will be carried out and completed by our
                          insured and directly employed staff
                        </li>
                        <li>We will remove the old boiler and recycle</li>
                        <li>
                          We will issue a gas certificate two on completion and
                          receipt of final payment
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end mt-4">
                  <button
                    type="button"
                    className="bg-gray-500 text-white py-2 px-4 rounded mt-3 mb-5"
                    onClick={handleClose}
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="bg-[#4ba4a1] text-white py-2 px-4 rounded mx-3 mt-3 mb-5"
                  >
                    Save changes
                  </button>
                </div>
              </section>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default IdealLogicHiveSmartThermostat;
