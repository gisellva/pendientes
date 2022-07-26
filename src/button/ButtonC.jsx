import React from "react";
import "../button/boton.css"


function CreateTodoButtom(prosp){
    function click() {
   prosp. s(preve=>!preve)
    }
    return(
        <button 
        className="CreateTodoButton"
        onClick={click}>
        +
        </button>
    );
}

export { CreateTodoButtom};