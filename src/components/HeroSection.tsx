/**
 * THIS THE HERO COMPONENT OF THE LANDING PAGE
 * This page will contain:
 *      - A bg image w.r.t the application
 *      - Greeting and information cards
 *      - A button to jump to the /dashboard
 */

"use client";
import React from "react";
import CountUp from "react-countup";

const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-cover bg-center space-y-10 px-4">
      <div className="mt-10 max-w-xl p-8 bg-black bg-opacity-60 rounded-lg text-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-white">Welcome to </span>
          <span className="text-green-400">Renewablexchange</span>
        </h1>
        <p className="text-lg md:text-xl mt-6">
          Discover and learn about green energy produced across India. 
          Support sustainable energy and make responsible descisions.
        </p>
      </div>

      <div className="max-w-xl p-3 bg-black bg-opacity-80 rounded-sm text-white text-center px-4">
        <p className="text-lg md:text-xl">
          India's current renewable energy capacity:
          <span className="text-green-400 ml-2">
            <b>
              <CountUp end={193.57} duration={3} decimals={1} suffix=" GW" />
            </b>
          </span>
        </p>
      </div>

      <div className="w-full max-w-5xl p-5 bg-black bg-opacity-60 rounded-lg text-white text-center px-4">
        <p className="text-lg md:text-xl">
          <span className="text-green-400">Renewablexchange</span> enables it's users to 
          discover and learn about the green energy production and cultivation across India. 
          This AI powered website will help the business leaders and common man to make informed 
          decisions to contribute towards sustainability goals.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;