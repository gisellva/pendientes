import React from "react";
import { AppUi } from "./appui/appui";


function useLocalStorage(itemName,inicialvalue) {
  const [loading ,setLoading]=React.useState(true);
  const [error,seterror]=React.useState(false)
  
  //estado inicial de los todos
   const [item,setitem]=React.useState(inicialvalue);
 
   //use effect
   React.useEffect(()=>{
    setTimeout(()=>{
       //uso de localstorage
   try {
    const localStorageitem = localStorage.getItem(itemName);
    let parseditem;
  
    if (!localStorageitem) {
    
      localStorage.setItem(itemName, JSON.stringify(inicialvalue));
      parseditem = inicialvalue;
    } else {
      
      parseditem = JSON.parse(localStorageitem);
    }
    
    setitem(parseditem)
    setLoading(false);
   } catch (error) {
    seterror(error)
   }

    },1000)
   });
   
   
  
    //funcion para guardad los todos en localstorage
    function save(newitem) {
      try {
        const s =JSON.stringify(newitem)
      localStorage.setItem(itemName,s);
      setitem(newitem);
      } catch (error) {
        seterror(error)
      }

    };

    return{
      item,
      save,
      loading,
      error,
    };

}


function App() {

  //estados de la app
  const {
    item:todos,
    save,
    loading,
    error
  }=useLocalStorage("TODOS_V1",[])
  const [serch,setSerch]=React.useState("");
  
 

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
 //logica para completar , eliminar , añadir todos
 
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
     const add=(text)=>{
     
      const newtodo =[...todos];
      newtodo.push({
        completed:false,
        text
      })
      save(newtodo)
     }

     

  return [
   
      <AppUi
      error={error}
      loading={loading}
     contar={contar}
     total={total}
     serch ={serch}
    setSerch={setSerch}
    searchedTodos={searchedTodos}
    completeTodo={completeTodo}
    deleteTodo={deleteTodo}
    add={add}
  
  
  
  />
  ]

  ;
}

export default App;

