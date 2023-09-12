import {useState} from 'react';
import addTodo from '../pages/index';

const TodoForm = ({addTodo}) => {
    const[value,setValue] = useState("");
   
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!value) return;
        else addTodo(value)
        setValue("")
        
        console.log(value)
      }
  return( <div className="bg-blue-500">
    
    <form onSubmit = {handleSubmit}>
        <input 
        value = {value} 
        type="text" 
        placeholder='Título da nova tarefa' 
        onChange = {(e)=>setValue(e.target.value)}/>
        <button type ='submit'>Criar</button>
    </form>

  </div>)
}

export default TodoForm