import React from "react";

function Pagination({ currentPage, totalPages, onPageChange }) {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="flex justify-end pt-4 pr-7">
      <ul className="inline-flex gap-1">
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
            //   href="#"
              className={`${
                number === currentPage
                  ? "bg-gray-500 text-white"
                  : "text-gray-700"
              } hover:bg-gray-400 bg-white flex h-8 w-8 items-center justify-center rounded-full hover:text-white dark:border-strokedark dark:bg-boxdark`}
              onClick={() => onPageChange(number)}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
