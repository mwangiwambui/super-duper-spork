import React from "react";

const Sidebar = () => {
  return (
    <aside className="z-20 hidden w-64 overflow-y-auto md:block flex-shrink-0" aria-label="Sidebar">
      <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
        <ul className="space-y-2">
          <li>
            <a href="#" className="flex items-center p-2 text-base font-normal text-gray-500 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
              <span className="ml-3">Write</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-2 text-base font-normal text-gray-500 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               <svg className="flex-shrink-0 w-6 h-6 transition duration-75 group-hover:text-gray-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
               <span className="ml-3">Entries</span>
               <span className="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">3</span>
            </a>
         </li>
        </ul>
      </div>
    </aside>

  )
}

export default Sidebar;