import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const Entry = () => {
  const [ entry, setEntry ] = useState([])
  let entryJson = require('../journal.json');
  const { id } = useParams();

  const getEntryById = (id) => {  
    return entryJson.find(item => item.id === id)
  }

  useEffect(() => {
    if(id){
    setEntry(getEntryById(id))
    }
  },[]);
  
  return (
    <div className="container mx-auto">
      <div className="flex-row py-4 grid-cols-2 place-content-between">
      <h2 className="font-extrabold w-full text-3xl">{entry.title}</h2>
      <p className="text-gray-500 mt-3 w-full text-sm">{entry.date}</p>
      </div>
      <hr></hr>    
      <p className="text-justify">{entry.body}</p>
      
    </div>
  )
}

export default Entry;