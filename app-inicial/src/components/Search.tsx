import React from 'react'

const Search = ({search,setSearch, className}) => {
  return <div className='search'>
    
    <input className={className} type="text" value ={search} onChange = {(e)=> setSearch(e.target.value)} placeholder='Buscar tarefa'/>
  </div>
}

export default Search