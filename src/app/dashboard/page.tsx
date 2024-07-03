/* 
THIS IS THE DASHBOARD PAGE
FEATURES:
  - Displays various components such as:
    - An interactive map of India showing the location and basic information of different microgrids in india
*/

"use client"; // This is essential to avoid compile time error since the code uses useEffect

import React from "react";
import Map from "@/components/Map";
import Graphs from "@/components/Graphs";
import Chart from "@/components/Charts";


export default function Dashboard() {
  return (
    <main className="flex flex-col gap-8 p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            Map of Microgrids and Macrogrids in India
          </h2>
          <Map />
        </div>
      </div>
      <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-8 text-center">
        <span className="text-green-400">Green</span> Trends in India
      </h1>
      <div className="text-xs md:text-sm text-gray-400 pb-4 md:pb-10 text-center">
        <p>
          All the data is according to latest Annual Report (2022-2023) by the
          Ministry of New and Renewable Energy and other publicly disclosed
          sources*
        </p>
      </div>
      <div className="w-full">
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          <div className="flex justify-center items-center w-full md:w-2/4">
            {/* Displays various graphs */}
            <Graphs />
          </div>
          <div className=" flex justify-center items-center w-full md:w-1/3">
            {/* Displays a chart */}
            <Chart />
          </div>
        </div>
      </div>
      <div className="flex text-sm text-gray-400">
        <p>
          All the data is according to latest Annual Report (2022-2023) by the
          Ministry of New and Renewable Energy and other publicly disclosed
          sources*
        </p>
      </div>
    </main>
  );
}