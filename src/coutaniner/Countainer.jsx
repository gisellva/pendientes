import React from "react";
import "../coutaniner/countainer.css"
function TodoCounter({contar,total}){
    return(
        <h2 className="countainer"> Has complentado {contar} de {total} ToDos</h2>
    )
}

export {TodoCounter};