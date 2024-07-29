import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-center mt-[100px]">
      {/* Section: Social media */}
      <section className="flex justify-center lg:justify-between p-4 border-b">
        {/* Left */}
        <div className="hidden lg:block">
          <img
            src="/src/assets/greenlogo.png"
            alt=""
            className="w-320 mx-auto"
          />
        </div>
        {/* Right */}
        <div className="flex space-x-4 ">
          <Link
            to="https://www.facebook.com/"
            className="text-white-900 hover:text-white-900"
          >
            <i className="fab fa-facebook-f"></i>
          </Link>
          <Link
            to="https://x.com/"
            className="text-white-900 hover:text-white-900"
          >
            <i className="fab fa-twitter"></i>
          </Link>
          <Link
            to="https://www.instagram.com/"
            className="text-white-900 hover:text-white-900"
          >
            <i className="fab fa-instagram"></i>
          </Link>
        </div>
      </section>

      {/* Section: Links */}
      <section className="mt-[100px]">
        <div className="w-full lg:w-1/2 flex flex-col md:flex-row justify-between mt-[60px] md:mt-0 p-[50px]">
          <p>
            <Link
              to="#!"
              className="text-white-900 hover:text-white-900 no-underline"
            >
              68 Rathgar Avenue, <br />
              Rathgar, Dublin 6, D06 KN53
            </Link>
          </p>
          <p>
            <Link
              to="#!"
              className="text-white-900 hover:text-white-900 no-underline"
            >
              CORK <br />
              T: 01 685 5575 <br />
              E: info@greenenergyhomes.ie
            </Link>
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
