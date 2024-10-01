import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

export interface rowProps {
  mobName: string;
  regularPrice: number;
  salePrice: number;
  link: string;
  priority: number;
  note: string;
}

export function Row({ mobName, regularPrice, salePrice, link, note }: rowProps) {
  const websiteName = getWebsiteName(link);

  // Format the salePrice and regularPrice values
  const formattedSalePrice = getFormattedNumber(salePrice);
  const formattedRegularPrice = getFormattedNumber(regularPrice);

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-300 ">
      
      {/* Responsive for Mobile */}
      <td className="px-6 py-4 block md:hidden">
        <div className="font-semibold text-gray-900 dark:text-white">
          {mobName}
        </div>
        <div className="italic text-sm text-blue-300">{note}</div>
      </td>
      
      <td className="px-6 py-4 md:hidden">
        <span className="text-green-500 font-semibold">₹{formattedSalePrice}</span>
        <span className="line-through block text-gray-400">₹{formattedRegularPrice}</span>
        <a href={link} className="text-yellow-300 hover:underline text-sm">{websiteName} 
        <FaExternalLinkAlt className="inline ml-1" />
        </a>
      </td>

      {/* Full Table Row for Larger Screens */}
      <td className="hidden md:table-cell px-6 py-4 font-semibold text-gray-900 dark:text-white">{mobName}</td>
      <td className="hidden md:table-cell px-6 py-4 italic text-sm text-gray-300">{note}</td>
      <td className="hidden md:table-cell sm:w-16 md:w-32 lg:w-36 xl:w-48 px-10 py-4 font-semibold text-gray-900 dark:text-gray-300">₹{formattedRegularPrice}</td>
      <td className="hidden md:table-cell sm:w-16 md:w-32 lg:w-44 xl:w-48 px-10 py-4 font-bold text-green-500 dark:text-white">₹{formattedSalePrice}</td>
      <td className="hidden md:table-cell sm:w-16 md:w-24 lg:w-48 px-6 py-4">
        <a href={link} target="_blank" className="text-yellow-400 hover:underline">{websiteName} 
          <FaExternalLinkAlt className="inline ml-1" /> </a>
      </td>
    </tr>
  );
}

function getFormattedNumber(Price: number) {
    const formattedNumber = Price.toLocaleString('en-IN', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });
    return formattedNumber;
}

function getWebsiteName(url: string): string {
  const regex = /^(?:https?:\/\/)?(www\.)?([^/?]+)/i;
  return url.match(regex)?.[2] || "Unknown";
}

