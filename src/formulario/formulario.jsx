import React from "react";
import "../formulario/formulario.css"

function Form({add,s}) {
    const[v, setV]=React.useState("")
    
    const ca =()=>{
      s(false)
    };
    const on =(event)=>{
        event.preventDefault();

if (!v) {
    s(false) 
} else {
    add(v)
     s(false) 
}
    
    };
    const onChange=(event)=>{
     setV(event.target.value)
        
    }


    return(
        <form onSubmit={on}>
            <label>escribe tu TODO</label>
            <textarea 
            value={v}
            onChange={onChange}
            
            ></textarea>
            <div className="TodoForm-buttonContainer">
                <button
                type="button"
                onClick={ca}
                className=" TodoForm-button--cancel">
                cancelar
                </button>
                <button
                className="TodoForm-button--add"
                type="submit">
                añadir
                </button>
            </div>
        </form>
    )
}

export {Form};