import React from "react";
import Nav from "./components/Nav";
import { Outlet } from "react-router-dom";
import Progress from "./components/Progress";
import IdealLBoiler from "./BoilerProductforoil/IdealLBoiler";
import IndoorBoiler from "./BoilerProductforoil/IndoorBoiler";
import ExternalBoiler from "./BoilerProductforoil/ExternalBoiler";
import Euroflame from "./BoilerProductforoil/Euroflame";
import HouseBoiler from "./BoilerProductforoil/HouseBoiler";
import EuroflameHouseBoiler from "./BoilerProductforoil/EuroflameHouseBoiler";

export default function BoilerProductforoil() {
  return (
    <div>
      <Nav />
      <Progress />
      <IdealLBoiler />
      <IndoorBoiler />
      <ExternalBoiler />
      <Euroflame />
      <HouseBoiler />
      <EuroflameHouseBoiler />
      <Outlet />
    </div>
  );
}
