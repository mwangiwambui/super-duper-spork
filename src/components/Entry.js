import React from "react";

const Entry = () => {
  return (
    <div>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td className="w-4 p-4">
          <div className="flex items-center">
            <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
          </div>
        </td>
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
          Apple MacBook Pro 17"
        </th>
        <td className="px-6 py-4">
          Sliver
        </td>
        <td className="px-6 py-4">
          Laptop
        </td>
        <td className="px-6 py-4">
          $2999
        </td>
        <td className="px-6 py-4 text-right">
          <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
        </td>
      </tr>
    </div>
  )
}

export default Entry;