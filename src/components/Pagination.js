import React from "react";
const Pagination = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-800">
      <div className="flex select-none space-x-1 text-gray-700">
        <a href="#" className="rounded-md bg-gray-200 px-4 py-2 transition duration-300 hover:bg-gray-400"> Previous </a>
        <a href="#" className="rounded-md bg-gray-200 px-4 py-2 transition duration-300 hover:bg-gray-400"> 1 </a>
        <a href="#" className="rounded-md bg-gray-200 px-4 py-2 transition duration-300 hover:bg-gray-400"> 2 </a>
        <a href="#" className="rounded-md bg-gray-200 px-4 py-2 transition duration-300 hover:bg-gray-400"> 3 </a>
        <span className="rounded-md px-4 py-2"> ... </span>
        <a href="#" className="rounded-md bg-gray-200 px-4 py-2 transition duration-300 hover:bg-gray-400"> 10 </a>
        <a href="#" className="rounded-md bg-gray-200 px-4 py-2 transition duration-300 hover:bg-gray-400"> Next </a>
      </div>
    </div>
  )
}

export default Pagination;