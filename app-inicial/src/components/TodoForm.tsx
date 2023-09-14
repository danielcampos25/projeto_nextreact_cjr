import {useState} from 'react';
import addTodo from '../pages/index';

const TodoForm = ({addTodo}:any) => {
    const[value,setValue] = useState("");
   
    const handleSubmit = (e:any) => {
        e.preventDefault();
        if(!value) return;
        else addTodo(value)
        setValue("")
        
        console.log(value)
      }
  return( 
    
    <form onSubmit={handleSubmit} className="h-20 flex">
    <input
      value={value}
      type="text"
      placeholder="Título da nova tarefa"
      onChange={(e) => setValue(e.target.value)}
      className="flex-1 relative bg-inherit border-2 border-black rounded-l-full py-5 pl-9 h-12"
    />
    <button
      type="submit"
      className="text-[#383736] w-20 bg-[#de6c5c] border-2 border-black p-2 font-medium uppercase cursor-pointer h-12 rounded-r-full hover:text-[#ffffff] hover:bg-[#ffbbb1] transition ease-in-out delay-250 bg-inherit  hover:bg-[#de6c5c] duration-250"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-plus-lg ml-5" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
</svg>
    </button>
  </form>

  )
}

export default TodoForm