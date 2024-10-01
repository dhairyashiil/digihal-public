import React from "react";

const HomeBanner: React.FC = () => {
  return (
    <div className="m-10 p-10 text-justify sm:text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-lg shadow-xl transition-all duration-300 hover:shadow-2xl">
      <div className="text-lg sm:text-xl md:text-2xl font-extrabold italic text-gray-900 hover:text-black transition-colors duration-700">
        We will provide you with the best deals from <br />
        <span className="text-lg sm:text-xl md:text-2xl font-bold italic text-gray-800">
          &#39;Flipkart Big Billion Days 2024&#39; & &#39;Amazon Great Indian Festival Sale
          2024&#39;
        </span>
      </div>
    </div>
  );
};

export default HomeBanner;
