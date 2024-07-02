// Hard coded sentences to be displayed as cards in the Hero section of the landing page

import React from "react";

const HeroCard = () => {
  return (
    <section className="flex flex-col items-center min-h-screen flex-grow flex-shrink bg-cover bg-center space-y-10 p-5">
      <section className="flex flex-col space-y-5 sm:space-y-0 sm:flex-row sm:space-x-10">
        <div className="w-full max-w-xl p-3 bg-black bg-opacity-30 rounded-lg text-green-400 text-center">
          <p className="text-lg md:text-xl">Why Us?</p>
        </div>
      </section>

      <section className="flex flex-col space-y-5 sm:space-y-0 sm:flex-row sm:space-x-10">
        <div className="w-full max-w-xl p-8 bg-black bg-opacity-60 rounded-lg text-white text-center">
          <p className="text-lg md:text-xl">
            <span className="text-green-400">User-Friendly Interface:</span>{" "}
            Enjoy a seamless and intuitive experience with our user-centric
            design. Whether you're a business leader looking for investment
            opportunities or an individual interested in sustainable living, our
            platform is designed to cater to your needs with ease and
            efficiency.
          </p>
        </div>

        <div className="w-full max-w-xl p-8 bg-black bg-opacity-60 rounded-lg text-white text-center">
          <p className="text-lg md:text-xl">
            <span className="text-green-400">Comprehensive Data:</span> Gain
            access to extensive information on both microgrids and macrogrids
            producing green energy throughout India. Our platform provides
            up-to-date data on energy production, excess energy available for
            trade, and more, ensuring you have all the details you need at your
            fingertips.
          </p>
        </div>
      </section>

      <section className="flex flex-col space-y-5 sm:space-y-0 sm:flex-row sm:space-x-10">
        <div className="w-full max-w-xl p-8 bg-black bg-opacity-60 rounded-lg text-white text-center">
          <p className="text-lg md:text-xl">
            <span className="text-green-400">AI-Powered Insights:</span> Utilize
            the power of AI to analyze and interpret green energy data.
            Renewablexchange helps business leaders and individuals make
            well-informed decisions by providing predictive analytics and
            actionable insights tailored to your sustainability goals.
          </p>
        </div>

        <div className="w-full max-w-xl p-8 bg-black bg-opacity-60 rounded-lg text-white text-center">
          <p className="text-lg md:text-xl">
            <span className="text-green-400">Interactive Map:</span> Discover
            green energy sources near you with our interactive map. Click on
            various locations to view detailed information about each grid.
            This feature makes it easy to visualize and understand the landscape
            of renewable energy in India.
          </p>
        </div>
      </section>

      <div className="w-full max-w-6xl p-8 bg-black bg-opacity-60 rounded-lg text-white text-center">
        <p className="text-lg md:text-xl">
          In India's growing energy landscape, there's a pressing need for
          reliable green energy sources;
          <span className="text-green-400"> Renewablexchange</span> bridges this
          gap by providing real-time data and trading capabilities for
          sustainable energy.
        </p>
      </div>
    </section>
  );
};

export default HeroCard;
