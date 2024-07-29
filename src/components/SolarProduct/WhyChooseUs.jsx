import React from "react";
import "../../SolarproductStyle.css";
const WhyChooseUs = () => {
  return (
    <div className="py-10 ">
      <div className="container mx-auto">
        <div className="text-center mt-5">
          <h3 className="text-2xl font-semibold">
            Why choose&nbsp;
            <span className="text-[#4ba4a1]">Green Energy Homes</span>
          </h3>
        </div>
        <div className="flex flex-col md:flex-row items-center mt-5 mx-auto w-10/12">
          <div className="w-full md:w-3/12 flex justify-center mb-5 md:mb-0">
            <img
              src="/src/assets/profile-user.png"
              alt="profile"
              className="p-img"
            />
          </div>
          <div className="w-full md:w-7/12">
            <p className="text-gray-700">
              Green Energy Homes Ltd is a 100% Irish-owned independent energy
              retrofit company. We are SEAI accredited and we can provide you
              with all services under one umbrella solution, from start to
              finish including all grants, renewable services, and project
              management. Our expert team has over 30 years of experience and
              long-established credibility within the marketplace. We bring the
              experience we have gained from within the industry, together with
              our state-of-the-art cloud-based Project, Quality, Health & Safety
              Management Operational Systems. We offer competitive pricing
              without compromise and a high level of service provided to every
              client, no matter the size of the project. <br />
              <br />
              We have successfully delivered our services to over 17,000
              customers to date in various sectors, from Boiler Upgrades and
              Home Upgrades to Deep Retrofits and now we offer all this under
              one umbrella. <br />
              <br />
              We at Green Energy Homes do not compromise on our quality and
              always deliver on our promise.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center mt-5 mx-auto w-10/12">
          <div className="w-full md:w-3/12 flex justify-center mb-5 md:mb-0">
            <img
              src="/src/assets/contact.png"
              alt="contact"
              className="p-img"
            />
          </div>
          <div className="w-full md:w-7/12">
            <p className="text-lg font-semibold">Our Team</p>
            <p className="text-gray-700">
              Green Energy Homes Ltd is a 100% Irish owned, independent energy
              retrofit company. SEAI accredited, we can provide you with a 1
              stop shop solution from start to finish to include all grants,
              renewable services and project management.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center mt-5 mx-auto w-10/12">
          <div className="w-full md:w-3/12 flex justify-center mb-5 md:mb-0">
            <img
              src="/src/assets/diploma.png"
              alt="diploma"
              className="p-img"
            />
          </div>
          <div className="w-full md:w-7/12">
            <p className="text-lg font-semibold">Our Certificates</p>
            <div className="grid grid-cols-3 gap-4">
              <img src="/src/assets/certi1.png" alt="certificate1" />
              <img src="/src/assets/certi2.jpeg" alt="certificate2" />
              <img src="/src/assets/certi3.png" alt="certificate3" />
              <img src="/src/assets/certi4.png" alt="certificate4" />
              <img src="/src/assets/certi5.png" alt="certificate5" />
              <img src="/src/assets/certi6.png" alt="certificate6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
