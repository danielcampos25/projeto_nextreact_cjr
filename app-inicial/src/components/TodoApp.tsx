import React from 'react'

const TodoApp = ({todo,removeTodo,completeTodo}: TodoAppProps) => {
  return (
    <div className='todo' style ={{
      textDecoration:todo.isCompleted ? "line-through" : ""
    }}>
              <div className='content'>
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