import React from "react";
import { TodoCounter } from "../coutaniner/Countainer";
import { TodoSearch } from "../serch/Serch";
import { TodoList } from "../list/list";
import { TodoItem } from "../item/items";
import { CreateTodoButtom } from "../button/ButtonC";
import  {Modal} from "../modal/modal";
import {Form} from "../formulario/formulario"


function AppUi(
  
    {
     contar,
     total,
     serch ,
    setSerch,
    searchedTodos,
    completeTodo,
    deleteTodo,
    loading,
    error,
    add,
   
    
    },

    ) 
    
    {
      const [o, s]=React.useState(false)
      
    return(
        <div>
        <h1>-pendientes-</h1>
      <TodoCounter 
        contar={contar}
        total={total}
      />    
      <TodoSearch 
        serch ={serch}
        setSerch={setSerch}
      />
      <TodoList>
      {loading && <p className="loading">Estamos cargando.....</p>}
      {error && <p className="error">Hubo un error</p>}
      {(!loading && !searchedTodos.length) && <p className="crea">¡Crea un  TODO!</p>}

        {searchedTodos.map(todo => (
            <TodoItem
             key={todo.text} 
             text={todo.text} 
             completed={todo.completed}
             oncomplete={()=>completeTodo(todo.text)}
             ondelete={()=>deleteTodo(todo.text)}
             />
        ))}
      </TodoList>
      
     
      <CreateTodoButtom
        s={s}
      />
      
      
      {!!o &&(
        <Modal>
         
        <Form
          add ={add}
          s={s}
        />
       
        </Modal>
      )}
      
      
   </div>
    );
}
export {AppUi};