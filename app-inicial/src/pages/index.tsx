import React from "react";
import { useState } from "react";
import TodoApp from '../components/TodoApp'
import TodoForm from '../components/TodoForm'
import Search from "@/components/Search";
import Filter from "@/components/Filter";

export default function Home() {
  const [textInput, setTextInput] = useState('')
  const [todo,setTodos] = useState([])
  function Add(){
    setArray(array=>[...array,textInput])

  }
  const addTodo =  (text:string) => {
    const newTodos = [...todo,{
      id: Math.floor(Math.random()*1000),
      text,
      isCompleted:false
    }]
    setTodos(newTodos)
  }

  const removeTodo = (id:number) => {
    const newTodos= [...todo]
    const filteredTodos = newTodos.filter(todo=> todo.id!== id? todo : null);
    setTodos(filteredTodos)
  }

  const completeTodo = (id:number) => {
    const newTodos = [...todo]
    newTodos.map((todo)=> todo.id=== id? todo.isCompleted = !todo.isCompleted : todo)
    setTodos(newTodos)
  }

  const [search,setSearch] = useState("");
  const [filter,setFilter] = useState("All");
  const[sort,setSort] = useState("Asc");
  
  
  return (
    <main className ="relative accent-blue-200 items-center justify-between p-20 box-border selection:text-white selection:bg-[#de6c5c] min-h-[100vh]" >
        <div>
        <div className="inline-flex">
        <h1 className='text-5xl flex font-medium text-left font-Montserrat tracking-wide tracking-wide mb-8 '>PraFazê! </h1>
        <svg className ="" xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="currentColor" class="bi bi-journal-bookmark" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M6 8V1h1v6.117L8.743 6.07a.5.5 0 0 1 .514 0L11 7.117V1h1v7a.5.5 0 0 1-.757.429L9 7.083 6.757 8.43A.5.5 0 0 1 6 8z"/>
            <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
            <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
        </svg>
        </div>
        <TodoForm  addTodo= {addTodo}/>
        <Search  search={search} setSearch={setSearch}/>
        
        <div className='select-none text-center content-center  text-[17px] w-300 h-200 border-2 border-black overflow-y-auto'>
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
    </main>
  )
          }

function setArray(arg0: (array:any) => any[]) {
  throw new Error("Function not implemented.");
}

