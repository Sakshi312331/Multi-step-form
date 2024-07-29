import React from "react";
import Nav from "./components/Nav";
import { Outlet } from "react-router-dom";
import Progress from "./components/Progress";

export default function Boiler() {
  return (
    <div>
      <Nav />
      <Progress />
      <Outlet />
    </div>
  );
}
