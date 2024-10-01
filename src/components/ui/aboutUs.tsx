import React from "react";

const AboutUs: React.FC = () => {
  return (
    <div className="text-center">
      <div className="text-xl sm:text-2xl md:text-3xl text-white uppercase font-extrabold mb-4">
        About Us
      </div>
      <div className="m-10 p-10 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-lg shadow-xl transition-all duration-300 hover:shadow-2xl">
        <div className="text-sm sm:text-base md:text-lg text-gray-900 font-semibold text-justify hover:text-black transition-colors duration-700">
          Struggling to find the gadget that meets all your requirements?
          Have done a lot of research but still confused about what gadget to buy?
          Well, we have got your back. Digiहल is a platform that will help you overcome this situation. 
          We will provide suggestions for laptops, smartphones, and other devices.
        </div>
      </div>
    </div>

  )
}

export default AboutUs;