import React from "react";
import "../../SolarproductStyle.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" container bg-white mx-auto">
      <div className=" bg-white w-full">
        {/* <div
          id="hideelement"
          className="flex justify-center items-center mt-5 gap-10 w-full"
        >
          <div className="happiness">
            <img src="/src/assets/recycle.png" alt="" className="p-img" />
            <p className="font">
              Green Homes Energy <br />
              environment-friendly
            </p>
          </div>
          <div className="Workmanship">
            <img
              src="/src/assets/construction-and-tools.png"
              alt=""
              className="p-img"
            />
            <p className="font">
              Green Homes Energy <br />
              Workmanship Guarantee
            </p>
          </div>
          <div className="Installations">
            <img src="/src/assets/contact.png" alt="" className="p-img" />
            <p className="font">
              Installations done by <br /> experience professionals.
            </p>
          </div>
          <div className="reviews">
            <img src="/src/assets/rating.png" alt="" className="p-img" />
            <p className="font">
              4.8+
              <br />
              google rating
            </p>
          </div>
          <div className="investors">
            <img
              src="/src/assets/best-customer-experience.png"
              alt=""
              className="p-img"
            />
            <p className="font">
              30 years
              <br />
              of Experience
            </p>
          </div>
        </div> */}
        <div
          id="hideelement"
          className="hidden md:flex justify-center items-center mt-5 gap-10 w-full"
        >
          <div className="happiness">
            <img src="/src/assets/recycle.png" alt="" className="p-img" />
            <p className="font">
              Green Homes Energy <br />
              environment-friendly
            </p>
          </div>
          <div className="Workmanship">
            <img
              src="/src/assets/construction-and-tools.png"
              alt=""
              className="p-img"
            />
            <p className="font">
              Green Homes Energy <br />
              Workmanship Guarantee
            </p>
          </div>
          <div className="Installations">
            <img src="/src/assets/contact.png" alt="" className="p-img" />
            <p className="font">
              Installations done by <br /> experience professionals.
            </p>
          </div>
          <div className="reviews">
            <img src="/src/assets/rating.png" alt="" className="p-img" />
            <p className="font">
              4.8+
              <br />
              google rating
            </p>
          </div>
          <div className="investors">
            <img
              src="/src/assets/best-customer-experience.png"
              alt=""
              className="p-img"
            />
            <p className="font">
              30 years
              <br />
              of Experience
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center gap-5 w-full mt-5">
          <div>
            <h3 className="font-bold text-[25px] mt-5 text-center">
              Hi&nbsp;
              <span style={{ color: "#4ba4a1" }}>Green Energy Homes,</span>
            </h3>
            <h3 className="font-bold text-[25px] ">
              We have designed the
              <span style={{ color: "#4ba4a1" }}>
                perfect Solar PV quote
              </span>{" "}
              for you!
            </h3>
          </div>
        </div>
        <div className="w-full">
          <div className="flex justify-center items-center mb-5">
            <div className="flex flex-col md:flex-row justify-center items-center mt-5 mx-auto gap-5">
              <div className="forslider w-full md:w-1/2">
                <div className="card slider">
                  <img
                    src="/src/assets/Frame 2 (4).png"
                    className="slide active"
                    alt="Slider"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="main-heading text-center">
                  <h3 className="font-normal text-[25px] ">
                    Solar PV system <br />
                    Solis hybrid battery inverter <br />
                    Longi 440W all black mono panels
                  </h3>
                </div>
                <div className="product-details flex justify-center items-center text-center gap-5 mt-5">
                  <div>
                    <p className="text-sm">Final cost to you incl. grants</p>
                  </div>
                  <div>
                    <Link
                      to="#"
                      className="text-lg font-semibold text-black underline"
                    >
                      €8030.00
                    </Link>
                  </div>
                </div>
                <div className="mt-5">
                  <button className="book-a-call w-full py-2 bg-blue-500 text-white">
                    <Link
                      style={{ textDecoration: "none", color: "white" }}
                      to="https://calendly.com/navyakrishna-dewarplumbers/30min"
                    >
                      Book a Call
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
