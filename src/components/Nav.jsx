import React from "react";
import logo from "../assets/greenlogo.png";
import "../App.css";

export default function Nav() {
  return (
    <div>
      <div className="greenlogo h-[10vh] w-[100vw]  bg-slate-50 drop-shadow-md flex justify-center items-center ">
        <img src={logo} alt="" className="h-[3.95vh]" />
      </div>
    </div>
  );
}
