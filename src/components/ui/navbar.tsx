import React from "react";
import {
  FaMobileAlt,
  FaLaptop,
  FaTabletAlt,
  FaHeadphones,
  FaClock,
} from "react-icons/fa";
import dynamic from "next/dynamic";


interface NavbarProps {
  showProductLinks: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ showProductLinks }) => {
  return (
    <nav className="px-7 pt-5 bg-gradient-to-r from-gray-800 via-gray-800 to-gray-800 dark:bg-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            {/* <h1 className="text-2xl font-bold text-white">Digiहल</h1> */}
            <a href="/" target="_blank" className="text-2xl font-bold text-white">
              Digiहल
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {showProductLinks &&
                [
                  {
                    href: "/mobiles",
                    icon: <FaMobileAlt className="inline mr-1" />,
                    label: "Mobiles",
                  },
                  {
                    href: "/laptops",
                    icon: <FaLaptop className="inline mr-1" />,
                    label: "Laptops",
                  },
                  {
                    href: "/smartwatch",
                    icon: <FaClock className="inline mr-1" />,
                    label: "Smartwatches",
                  },
                  {
                    href: "/tablets",
                    icon: <FaTabletAlt className="inline mr-1" />,
                    label: "Tablets",
                  },
                  {
                    href: "/twsAndHeadphones",
                    icon: <FaHeadphones className="inline mr-1" />,
                    label: "TWS & Headphones",
                  },
                ].map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    className="relative text-gray-100 hover:text-yellow-400 transition duration-700 group"
                  >
                    {item.icon}
                    {item.label}
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-400 transition-all duration-1000 group-hover:w-full"></span>
                  </a>
                ))}
            </div>
          </div>
        </div>
      </div>

      {showProductLinks && (
        <div className="max-h-screen overflow-hidden transition-all duration-500 ease-in-out md:hidden bg-gray-800">
          <div className="px-5 pt-2 pb-3 space-y-2 sm:px-3">
            <a
              href="/mobiles"
              target="_blank"
              className="flex items-center m-2 p-3 border rounded-lg border-yellow-500 text-gray-100 hover:text-black hover:bg-blue-200 transition-all transform hover:scale-105"
            >
              <FaMobileAlt className="mr-2" /> Mobiles
            </a>
            <a
              href="/laptops"
              target="_blank"
              className="flex items-center m-2 p-3 border rounded-lg border-yellow-500 text-gray-100 hover:text-black hover:bg-blue-200 transition-all transform hover:scale-105"
            >
              <FaLaptop className="mr-2" /> Laptops
            </a>
            <a
              href="/smartwatch"
              target="_blank"
              className="flex items-center m-2 p-3 border rounded-lg border-yellow-500 text-gray-100 hover:text-black hover:bg-blue-200 transition-all transform hover:scale-105"
            >
              <FaClock className="mr-2" /> Smartwatches
            </a>
            <a
              href="/tablets"
              target="_blank"
              className="flex items-center m-2 p-3 border rounded-lg border-yellow-500 text-gray-100 hover:text-black hover:bg-blue-200 transition-all transform hover:scale-105"
            >
              <FaTabletAlt className="mr-2" /> Tablets
            </a>
            <a
              href="/twsAndHeadphones"
              target="_blank"
              className="flex items-center m-2 p-3 border rounded-lg border-yellow-500 text-gray-100 hover:text-black hover:bg-blue-200 transition-all transform hover:scale-105"
            >
              <FaHeadphones className="mr-2" /> TWS & Headphones
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
// export default dynamic (() => Promise.resolve(Navbar), {ssr: false})

