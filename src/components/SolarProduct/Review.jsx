import React from "react";
import "../../SolarproductStyle.css";
const Review = () => {
  return (
    <div className="customers-say my-5 ">
      <div className="container mx-auto purple rounded-xl ">
        <div className="flex justify-center">
          <div className="w-full rounded-10 purple p-[50px] rounded-xl flex flex-col md:flex-row gap-5 mt-5">
            <div className="w-full md:w-6/12 order-last order-last flex justify-center">
              <img
                src="/src/assets/solar panels shutterstock.jpg"
                alt="Solar panels"
                className="w-full object-contain rounded-md"
              />
            </div>
            <div className="w-full md:w-6/12 mt-2 text-center md:text-left">
              <h2 className="text-white text-[2rem]">What our customers say</h2>
              <p className="paragraph mt-4 text-white leading-7">
                We are delighted on ROI since we had our solar panels installed
                6 months ago. All the teams at green energy homes have been so
                helpful from start to finish and I would have no hesitation in
                recommending their 5 star service for Solar PV panels.
              </p>
              <p className="paragraph mt-5 text-white leading-10">
                - Tom & Judith Malony
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
