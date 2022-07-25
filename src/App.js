import React from "react";
import { AppUi } from "./appui/appui";




function App() {
  //uso de localstorage
  const localStorageTodos = localStorage.getItem('TODOS_V1');
  let parsedTodos;

  if (!localStorageTodos) {
  
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedTodos = [];
  } else {
    
    parsedTodos = JSON.parse(localStorageTodos);
  }

  //estados de la app
  const [serch,setSerch]=React.useState("")
  const [todos,setTodos]=React.useState(parsedTodos)

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
    function save(newtodo) {
      const s =JSON.stringify(newtodo)
      localStorage.setItem("TODOS_V1",s);
      setTodos(newtodo)

    }
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

  return (
  <AppUi
     contar={contar}
     total={total}
     serch ={serch}
    setSerch={setSerch}
    searchedTodos={searchedTodos}
    completeTodo={completeTodo}
    deleteTodo={deleteTodo}
  />
  );
}

export default App;

