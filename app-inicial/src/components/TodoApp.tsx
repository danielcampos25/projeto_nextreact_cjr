import React from 'react'

const TodoApp = ({todo,removeTodo,completeTodo}: any) => {
  return (
    <div className='select-none text-center content-center text-[20px] pb-2 flex space-x-7'>
  <div className='flex-grow'>
    <p className="text-left" style={{ textDecoration: todo.isCompleted ? "line-through" : "none" }}>{todo.text}</p>
  </div>
  <div className="flex items-center space-x-2">
    <button  className="mr-2 p-2 transition-transform transform hover:scale-140 hover:bg-[#de6c5c] rounded-full" onClick={() => completeTodo(todo.id)} style={{ textDecoration: "none" }}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
</svg></button>
    <button  className=" ml-2 p-2  rounded-full" onClick={() => removeTodo(todo.id)}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg></button>
  </div>
</div>
  )
}

export default TodoApp