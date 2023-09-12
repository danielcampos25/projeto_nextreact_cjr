import React from 'react'

const TodoApp = ({todo,removeTodo,completeTodo}: any) => {
  return (
    <div className='select-none text-center content-center  text-[20px] pb-2 flex space-x-7  border-2 border-black' style ={{
      textDecoration:todo.isCompleted ? "line-through" : ""
    }}>
              <div className=''>
                <p>{todo.text}</p>
                
                </div>
                <div>
                  <button className ='complete' onClick={()=>completeTodo(todo.id)}>Completar</button>
                  <button className = 'remove' onClick={()=>removeTodo(todo.id)}>Excluir</button>
                </div>

            </div>
  )
}

export default TodoApp