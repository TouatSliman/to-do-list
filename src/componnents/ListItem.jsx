import React from 'react'
import { useState } from 'react'

const ListItem = (props) => {
    const [completed, setCompleted] = useState(false)
    const [remove, setRemove] = useState(false)

  return (
    <>
      <li className={`flex justify-between items-center gap-2 p-2 border border-gray-300  bg-slate-200 hover:bg-slate-300 rounded cursor-grab ${remove ? "hidden" : ""} ${completed ? "bg-slate-400" : ""}`}>
        <span className={`flex items-center justify-center text-md font-semibold ${completed ? "line-through" : ""}`}>
            <input type="checkbox" onChange={() => {setCompleted(!completed)}} className={`mr-3 w-5 h-5 bg-gray-100 border-gray-300 rounded `} />
            {props.text.charAt(0).toUpperCase() + props.text.slice(1).toLowerCase()}
        </span>
        <button onClick={() => {setRemove(!remove)}} >
          <i className="fa fa-trash text-blue-500"></i>
        </button>
      </li>
    </>
  )
}

export default ListItem