import react from "react";
import "../button/boton.css"

function CreateTodoButtom(){
    function click(params) {
        alert("aca va el modal")
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