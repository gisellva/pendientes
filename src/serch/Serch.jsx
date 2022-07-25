import React from "react";

import "../serch/serch.css"

function TodoSearch({serch ,setSerch}){
   
    function change(event) {
      console.log(event.target.value) 
      setSerch(event.target.value)
    }
    return[
        <input 
        value={serch}
        onChange={change}
        placeholder="escribe tu TODO" 
        className="TodoSearch" />,
        <p>
            {serch}
        </p>
    ];
}
export {TodoSearch};