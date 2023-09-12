import React from 'react'

const Search = ({search,setSearch, className}:any) => {
  return <div className='search'>
    
    <input className="'relative bg-inherit border-2 border-black rounded-full w-full py-5 pl-9'" type="text" value ={search} onChange = {(e)=> setSearch(e.target.value)} placeholder='Buscar tarefa'/>
  </div>
}

export default Search;