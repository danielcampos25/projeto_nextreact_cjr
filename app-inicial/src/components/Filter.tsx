import React from 'react'

const Filter = ({filter,setFilter,setSort}:any) => {
  return (
    <div className='border-2 border-black'>
        <div className="filter-options">
            <div>
                <p>Filtrar:</p>
                <select value ={filter} onChange={(e)=>setFilter(e.target.value)}>
                    <option value="All">Todas</option>
                    <option value="Completed">Feitas</option>
                    <option value="Incompleted">Não feitas (ainda...)</option>
                </select>
            </div>
            <div>
                <p>Ordenar</p>
                <button onClick={()=>setSort('Asc')}>Asc</button>
                <button onClick={()=>setSort('Desc')}>Desc</button>
            </div>
        </div>
        
    </div>
  )
}

export default Filter