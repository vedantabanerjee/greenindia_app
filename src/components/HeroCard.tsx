// Hard coded sentences to be displayed as cards in the Hero section of the landing page

import React from "react";

const HeroCard = () => {
  return (
    <section className="flex flex-col items-center min-h-screen flex-grow flex-shrink bg-cover bg-center space-y-10 p-5">
      <section className="flex flex-col space-y-5 sm:space-y-0 sm:flex-row sm:space-x-10">
        <div className="w-full max-w-xl p-3 bg-black bg-opacity-30 rounded-lg text-green-400 text-center">
          <p className="text-lg md:text-xl">What We Offer:</p>
        </div>
      </section>

      <section className="flex flex-col space-y-5 sm:space-y-0 sm:flex-row sm:space-x-10">
        <div className="w-full max-w-xl p-8 bg-black bg-opacity-60 rounded-lg text-white text-center">
          <p className="text-lg md:text-xl">
            <span className="text-green-400">Comprehensive Information: </span>{" "}
            Stay informed with the latest data and research on green energy 
            and climate change affecting India. Our articles, reports, and updates provide a deep dive into 
            the current state and future projections.


          </p>
        </div>

        <div className="w-full max-w-xl p-8 bg-black bg-opacity-60 rounded-lg text-white text-center">
          <p className="text-lg md:text-xl">
            <span className="text-green-400">Interactive Infographics: </span>{" "}
            Visualize complex data through our interactive infographics. 
            Understand trends, impacts, and progress in a clear and engaging way.


          </p>
        </div>
      </section>

      <section className="flex flex-col space-y-5 sm:space-y-0 sm:flex-row sm:space-x-10">
        <div className="w-full max-w-xl p-8 bg-black bg-opacity-60 rounded-lg text-white text-center">
          <p className="text-lg md:text-xl">
            <span className="text-green-400">AI-Powered Insights:</span>{" "} Utilize
            the power of AI to analyze and interpret green energy data.
            This app helps business leaders and individuals make
            well-informed decisions by providing predictive analytics and
            actionable insights tailored to your sustainability goals.
          </p>
        </div>

        <div className="w-full max-w-xl p-8 bg-black bg-opacity-60 rounded-lg text-white text-center">
          <p className="text-lg md:text-xl">
            <span className="text-green-400">Contribute and Collaborate:</span> {" "}
            Be part of the change! Share your own data, insights, and stories. Collaborate with 
              like-minded individuals and organizations to drive collective action towards a sustainable future.
          </p>
        </div>
      </section>

      <div className="w-full max-w-6xl p-8 bg-black bg-opacity-60 rounded-lg text-white text-center">
        <p className="text-lg md:text-xl">
          <span className="text-green-400"> Our Mission:</span>{" "}
          To empower individuals and communities by providing them with the tools and knowledge needed to 
          contribute to India’s sustainable goals. Together, we can make a significant impact on the 
          environment and ensure a greener, cleaner future for all.
        </p>
      </div>
    </section>
  );
};

export default HeroCard;