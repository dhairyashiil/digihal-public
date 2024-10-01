import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

export interface TableProps {
  data: rowProps[];
}

export interface rowProps {
  mobName: string;
  regularPrice: number;
  salePrice: number;
  link: string;
  priority: number;
  note: string;
}

export const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <div className="relative overflow-x-auto shadow-md rounded-lg">
      <table className="table-auto w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {/* Mobile header */}
            <th className="md:hidden px-6 py-3 text-sm">Smartphones</th>
            <th className="md:hidden px-6 py-3 text-xm">
              Price with Bank Discount
            </th>
            <th className="hidden md:table-cell px-8 py-3">Smartphones</th>
            <th className="hidden md:table-cell px-8 py-3">Editor&#39;s Note</th>
            <th className="hidden md:table-cell px-6 py-3">Regular Price</th>
            <th className="hidden md:table-cell px-6 py-3">
              Price with Bank Discount
            </th>
            <th className="hidden md:table-cell px-6 py-3">Best Buy Link</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-300"
            >
              {/* Responsive for Mobile */}
              <td className="px-6 py-4 block md:hidden">
                <div className="font-semibold text-gray-900 dark:text-white">
                  {row.mobName}
                </div>
                <div className="italic text-sm text-blue-300">{row.note}</div>
              </td>

              <td className="px-6 py-4 md:hidden">
                <span className="text-green-500 font-semibold">
                  ₹{getFormattedNumber(row.salePrice)}
                </span>
                <span className="line-through block text-gray-400">
                  ₹{getFormattedNumber(row.regularPrice)}
                </span>
                <a
                  href={row.link}
                  className="text-yellow-300 hover:underline text-sm"
                >
                  {getWebsiteName(row.link)}
                  <FaExternalLinkAlt className="inline ml-1" />
                </a>
              </td>

              {/* Full Table Row for Larger Screens */}
              <td className="hidden md:table-cell px-6 py-4 font-semibold text-gray-900 dark:text-white">
                {row.mobName}
              </td>
              <td className="hidden md:table-cell px-6 py-4 italic text-sm text-gray-300">
                {row.note}
              </td>
              <td className="hidden md:table-cell sm:w-16 md:w-32 lg:w-36 xl:w-48 px-10 py-4 font-semibold text-gray-900 dark:text-gray-300">
                ₹{getFormattedNumber(row.regularPrice)}
              </td>
              <td className="hidden md:table-cell sm:w-16 md:w-32 lg:w-44 xl:w-48 px-10 py-4 font-bold text-green-500 dark:text-white">
                ₹{getFormattedNumber(row.salePrice)}
              </td>
              <td className="hidden md:table-cell sm:w-16 md:w-24 lg:w-48 px-6 py-4">
                <a
                  href={row.link}
                  target="_blank"
                  className="text-yellow-400 hover:underline"
                >
                  {getWebsiteName(row.link)}
                  <FaExternalLinkAlt className="inline ml-1" />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

function getFormattedNumber(Price: number) {
  const formattedNumber = Price.toLocaleString("en-IN", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    
  });
  return formattedNumber;
}

// function getWebsiteName(url: string): string {
//   const regex = /^(?:https?:\/\/)?(www\.)?([^/?]+)/i;
//   return url.match(regex)?.[2] || "Unknown";
// }

function getWebsiteName(url: string): string {
  const regex = /^(?:https?:\/\/)?(www\.)?([^/?]+)/i;
  const domain = url.match(regex)?.[2] || "Unknown";

  // Custom handling for Amazon short URLs
  if (domain === "amzn.to") {
    return "amazon.in";
  }

  return domain;
}