import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ListEntries = () => {
  const [ entryItems, setEntry ] = useState(require('../../journal.json'))
  let navigate = useNavigate();

  const openEntries = (key) => {
    navigate(`/entry/${key}`);
  }

  const deleteItem = (id) => {
    setEntry([...entryItems.filter(entryItem => {
      return entryItem.id !== id
    })]);
  }

  useEffect(() => {
    displayEntries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entryItems])

  function displayEntries() {
    return (
      entryItems.map((item, index) => {
        return (

          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={index}>
            <td className="w-4 p-4">
              <div className="flex items-center">
                <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label className="sr-only">checkbox</label>
              </div>
            </td>
            <th onClick={() => openEntries(item.id)} style={{cursor : 'pointer'}}  scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
              {item.title}
            </th>
            <td onClick={() => openEntries(item.id)} style={{cursor : 'pointer'}}  className="px-6 py-4">
              {item.date}
            </td>
            <td className="px-6 py-4 text-right">
              <button onClick={() => deleteItem(item.id)}><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              </button>
              {/* <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a> */}
            </td>
          </tr>

        )
      })

    )
  }


  return (

    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className="p-4">
        <label for="table-search" className="sr-only">Search</label>
        <div className="relative mt-1">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
          </div>
          <input type="text" id="table-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items" />
        </div>
      </div>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center">
                <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label for="checkbox-all-search" className="sr-only">checkbox</label>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              Title
            </th>
            <th scope="col" className="px-6 py-3">
              Date
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {displayEntries()}
        </tbody>
      </table>
    </div>

  )
}

export default ListEntries;