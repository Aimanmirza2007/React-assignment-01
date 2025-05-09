import React from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let arr = [
    "box1",
    "box2",
    "box3",
    "box4",
    "box5",
    "box6",
    "box7",
    "box8",
    "box9",
    "box10",
  ];

  return (
    <>
      <div className=" bg-teal-800 flex flex-wrap justify-center items-center gap-8 p-8 ">
        {arr.map((item) => (
          <div className="w-50 h-50 bg-white flex items-center justify-center  cursor-pointer hover:scale-105 duration-300 ease-in-out">
            <div className="text-2xl font-bold ">{item}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
