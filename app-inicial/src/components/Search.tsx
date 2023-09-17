import React from 'react'

const Search = ({search,setSearch, className}:any) => {
  return <div className='h-20 flex'>
    
<input className="flex-1 relative bg-inherit border-2 border-black rounded-l-full py-5 pl-9 h-12 w-1/3" type="text" value ={search} onChange = {(e)=> setSearch(e.target.value)} placeholder='Buscar tarefa'/>
  <div  className="text-[#383736] w-20 bg-inherit border-2 border-black p-1  h-12 rounded-r-full bg-[#de6c5c]  hover:bg-[#de6c5c]">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className=" ml-5 mt-2" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
  </svg>
  </div>
  </div>
}

export default Search;