import React from "react";
import { TodoCounter } from "../coutaniner/Countainer";
import { TodoSearch } from "../serch/Serch";
import { TodoList } from "../list/list";
import { TodoItem } from "../item/items";
import { CreateTodoButtom } from "../button/ButtonC";

function AppUi(
    {
     contar,
     total,
     serch ,
    setSerch,
    searchedTodos,
    completeTodo,
    deleteTodo,
    }
    ) {
    return(
        <div>
      <TodoCounter 
        contar={contar}
        total={total}
      />    
      <TodoSearch 
        serch ={serch}
        setSerch={setSerch}
      />
      <TodoList>
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
      <CreateTodoButtom />      
   </div>
    );
}
export {AppUi};