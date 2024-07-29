import "@fortawesome/fontawesome-free/css/all.min.css";
import React from "react";
import Nav from "./components/Nav";
import { Outlet } from "react-router-dom";
import Footer from "./components/SolarProduct/Footer";
import Header from "./components/SolarProduct/Header";
import PackageDetails from "./components/SolarProduct/PackageDetails";
import WhyChooseUs from "./components/SolarProduct/WhyChooseUs";
import Review from "./components/SolarProduct/Review";
import SolarPackages from "./components/SolarProduct/SolarPackages";

export default function SolarProductDetails() {
  return (
    <div>
      <Nav />
      <Header />

      <PackageDetails />
      <WhyChooseUs />
      <Review />
      <SolarPackages />

      <Outlet />
      <Footer />
    </div>
  );
}
