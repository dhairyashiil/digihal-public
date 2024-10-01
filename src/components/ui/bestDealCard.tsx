import React from "react";
import { FaMobileAlt, FaLaptop, FaTabletAlt, FaHeadphones, FaClock, } from "react-icons/fa";

const BestDeals: React.FC = () => {
    return (
        <div className="m-10 font-semibold rounded-lg shadow-xl">
            <div className="m-2 p-5 overflow-hidden transition-all duration-500 ease-in-out bg-gray-800 rounded-lg shadow-md hover:shadow-lg">
                <div className="text-lg sm:text-xl md:text-2xl text-white uppercase font-bold text-center mb-4">
                    Best Deals In Different Categories
                </div>
                <div className="px-5 pt-2 pb-3 space-y-2 sm:px-3">
                    {[
                        {
                            href: "/mobiles",
                            icon: <FaMobileAlt className="mr-2" />,
                            label: "Mobiles",
                        },
                        {
                            href: "/laptops",
                            icon: <FaLaptop className="mr-2" />,
                            label: "Laptops",
                        },
                        {
                            href: "/smartwatch",
                            icon: <FaClock className="mr-2" />,
                            label: "Smartwatches",
                        },
                        {
                            href: "/tablets",
                            icon: <FaTabletAlt className="mr-2" />,
                            label: "Tablets",
                        },
                        {
                            href: "/twsAndHeadphones",
                            icon: <FaHeadphones className="mr-2" />,
                            label: "TWS & Headphones",
                        },
                    ].map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            target="_blank"
                            className="flex items-center m-2 p-3 border rounded-lg border-yellow-500 text-gray-100 hover:text-black hover:bg-blue-200 transition-all transform hover:scale-105"
                        >
                            {item.icon}
                            {item.label}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BestDeals;
