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
    
    <form onSubmit = {handleSubmit} className=' h-20 inline-box'>
        <input 
        value = {value} 
        type="text" 
        placeholder='Título da nova tarefa' 
        onChange = {(e)=>setValue(e.target.value)}
        className= 'relative bg-inherit border-2 border-black rounded-full w-full py-5 pl-9'/>
        <button type ='submit' className='absolute text-[#383736] bg-inherit p-2 right-6 top-[93px] font-medium uppercase cursor-pointer rounded-3xl hover:text-[#ffffff] hover:bg-[#de6c5c] 
          transition ease-in-out delay-150 bg-inherit  hover:scale-110 hover:bg-[#de6c5c] duration-100'>+</button>
    </form>

  )
}

export default TodoForm