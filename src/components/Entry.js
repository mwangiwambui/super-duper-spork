import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";


const Entry = () => {
  const [entry, setEntry] = useState([])
  const location = useLocation();
  // let entryJson = require('../journal.json');
  // const { id } = useParams();

  // const getEntryById = (id) => {  
  //   return entryJson.find(item => item.id === id)
  // }

  useEffect(() => {
    setEntry(location.state)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container mx-auto">
      <div className="flex-row py-4 grid-cols-2 place-content-between">
        <h2 className="font-extrabold w-full text-3xl">{entry.title}</h2>
        <p className="text-gray-500 mt-3 w-full text-sm">{entry.date}</p>
      </div>
      <hr></hr>
      
      <div className="text-justify">
        <div dangerouslySetInnerHTML={{__html: entry.body}}></div>
      </div>

    </div>
  )
}

export default Entry;