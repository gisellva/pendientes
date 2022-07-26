import React from "react";
import { AppUi } from "./appui/appui";

function useLocalStorage(itemName,inicialvalue) {
    //uso de localstorage
    const localStorageitem = localStorage.getItem(itemName);
    let parseditem;
  
    if (!localStorageitem) {
    
      localStorage.setItem(itemName, JSON.stringify(inicialvalue));
      parseditem = inicialvalue;
    } else {
      
      parseditem = JSON.parse(localStorageitem);
    }
    
    //estado inicial de los todos
    const [item,setitem]=React.useState(parseditem)
  
    //funcion para guardad los todos en localstorage
    function save(newitem) {
      const s =JSON.stringify(newitem)
      localStorage.setItem(itemName,s);
      setitem(newitem)

    }

    return[
      item,
      save,
    ]

}


function App() {

  //estados de la app
  const [todos,save]=useLocalStorage("TODOS_V1",[])
  const [serch,setSerch]=React.useState("")
 

  //logica para contar en el titulo
  const contar=todos.filter(todos=>!!todos.completed).length;
  const total=todos.length
  
  // Lógica para filtrar
  let searchedTodos = [];
  if (!serch.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = serch.toLowerCase();
      return todoText.includes(searchText);
    });
  }
 //logica para completar y eliminar todos
 
    const completeTodo=(text)=>{
      const index =todos.findIndex (todo=>todo.text===text)
      const newtodo =[...todos];
      newtodo[index].completed=true
      save(newtodo)
     }
     const deleteTodo=(text)=>{
      const index =todos.findIndex (todo=>todo.text===text)
      const newtodo =[...todos];
      newtodo.splice(index,1)
      save(newtodo)
     }

     

  return [
   
      <AppUi
     contar={contar}
     total={total}
     serch ={serch}
    setSerch={setSerch}
    searchedTodos={searchedTodos}
    completeTodo={completeTodo}
    deleteTodo={deleteTodo}
  />
  ]

  ;
}

export default App;

