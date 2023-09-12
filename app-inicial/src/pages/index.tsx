import React from "react";
import { useState } from "react";
import TodoApp from '../components/TodoApp'
import TodoForm from '../components/TodoForm'
import Search from "@/components/Search";
import Filter from "@/components/Filter";

export default function Home() {
  const [textInput, setTextInput] = useState('')
  const [todo,setTodos] = useState([{
    id:1,
    text:'tarefa fixa',
    isCompleted:false,
  }])
  function Add(){
    setArray(array=>[...array,textInput])

  }
  const addTodo =  (text) => {
    const newTodos = [...todo,{
      id: Math.floor(Math.random()*1000),
      text,
      isCompleted:false
    }]
    setTodos(newTodos)
  }

  const removeTodo = (id) => {
    const newTodos= [...todo]
    const filteredTodos = newTodos.filter(todo=> todo.id!== id? todo : null);
    setTodos(filteredTodos)
  }

  const completeTodo = (id) => {
    const newTodos = [...todo]
    newTodos.map((todo)=> todo.id=== id? todo.isCompleted = !todo.isCompleted : todo)
    setTodos(newTodos)
  }

  const [search,setSearch] = useState("");
  const [filter,setFilter] = useState("All");
  const[sort,setSort] = useState("Asc");
  
  
  return (
    <div className ="bg-purple placeholder-slate-200" >
        <h1>PraFazê!</h1>
        <TodoForm  addTodo= {addTodo}/>
        <Search className="bg-black" search={search} setSearch={setSearch}/>
        
        <div className='todo-list '>
          {todo
          .filter((todo)=> filter === "All" ? true : filter === 'Completed' ? todo.isCompleted : !todo.isCompleted)
          .filter((todo)=>
          todo.text.toLowerCase().includes(search.toLowerCase())
          )
          .sort((a,b)=> sort ==='Asc' ? a.text.localeCompare(b.text): b.text.localeCompare(a.text))
          .map((todo)=>(
            <TodoApp key ={todo.id} todo ={todo} removeTodo = {removeTodo} completeTodo = {completeTodo}/>
          ))}

        </div>
        <Filter filter={filter} setFilter = {setFilter} setSort = {setSort}/>
        
    </div>
  )
          }

function setArray(arg0: (array) => any[]) {
  throw new Error("Function not implemented.");
}

