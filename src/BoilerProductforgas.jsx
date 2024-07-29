import React from "react";
import Nav from "./components/Nav";
import { Outlet } from "react-router-dom";
import Progress from "./components/Progress";
import IdealLogicBoiler from "./components/BoilerProductforgas/IdealLogicBoiler";
import IdealLogicBoilerproduct from "./components/BoilerProductforgas/IdealLogicBoilerproduct";
import IdealLogicHiveSmartThermostat from "./components/BoilerProductforgas/IdealLogicHiveSmartThermostat";
import IdealLogicmax from "./components/BoilerProductforgas/IdealLogicmax";
import IdealLogicMaxHiveSmartThermostat from "./components/BoilerProductforgas/IdealLogicMaxHiveSmartThermostat";
import IdealVogueMax from "./components/BoilerProductforgas/IdealVogueMax";
import WorcesterBoschGreenstar from "./components/BoilerProductforgas/WorcesterBoschGreenstar";
import Vitodens from "./components/BoilerProductforgas/Vitodens";
import Modal from "./components/BoilerProductforgas/Modal";

export default function BoilerProductforgas() {
  return (
    <div>
      <Nav />
      <Progress />
      <IdealLogicBoiler />
      <IdealLogicBoilerproduct />
      <IdealLogicHiveSmartThermostat />
      <IdealLogicmax />
      <IdealLogicMaxHiveSmartThermostat />
      <IdealVogueMax />
      <WorcesterBoschGreenstar />
      <Vitodens />

      <Outlet />
    </div>
  );
}
