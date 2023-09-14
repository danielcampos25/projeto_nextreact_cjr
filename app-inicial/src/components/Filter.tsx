import React from 'react'

const Filter = ({filter,setFilter,setSort}:any) => {
  return (
    <div className='border-2 border-black rounded-lg h-20'>
    <div className="  filter-options flex justify-between w-1/2 ">
            <div>
                <p className='ml-2 text-lg font-bold'>Filtrar:</p>
                <select value ={filter} onChange={(e)=>setFilter(e.target.value)}>
                    <option value="All">Todas</option>
                    <option value="Completed">Feitas</option>
                    <option value="Incompleted">Não feitas (ainda...)</option>
                </select>
            </div>
            <div>
                <p className='ml-2 text-lg font-bold'>Ordenar?</p>
                <div className='flex inline'>
                <button className="mr-4 p-2 transition-transform transform hover:scale-110 hover:bg-[#de6c5c] rounded-full" onClick={()=>setSort('Asc')}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-alphabet" viewBox="0 0 16 16">
                <path d="M2.204 11.078c.767 0 1.201-.356 1.406-.737h.059V11h1.216V7.519c0-1.314-.947-1.783-2.11-1.783C1.355 5.736.75 6.42.69 7.27h1.216c.064-.323.313-.552.84-.552.527 0 .864.249.864.771v.464H2.346C1.145 7.953.5 8.568.5 9.496c0 .977.693 1.582 1.704 1.582Zm.42-.947c-.44 0-.845-.235-.845-.718 0-.395.269-.684.84-.684h.991v.538c0 .503-.444.864-.986.864Zm5.593.937c1.216 0 1.948-.869 1.948-2.31v-.702c0-1.44-.727-2.305-1.929-2.305-.742 0-1.328.347-1.499.889h-.063V3.983h-1.29V11h1.27v-.791h.064c.21.532.776.86 1.499.86Zm-.43-1.025c-.66 0-1.113-.518-1.113-1.28V8.12c0-.825.42-1.343 1.098-1.343.684 0 1.075.518 1.075 1.416v.45c0 .888-.386 1.401-1.06 1.401Zm2.834-1.328c0 1.47.87 2.378 2.305 2.378 1.416 0 2.139-.777 2.158-1.763h-1.186c-.06.425-.313.732-.933.732-.66 0-1.05-.512-1.05-1.352v-.625c0-.81.371-1.328 1.045-1.328.635 0 .879.425.918.776h1.187c-.02-.986-.787-1.806-2.14-1.806-1.41 0-2.304.918-2.304 2.338v.65Z"/>
                </svg></button>
                <button className="mr-4 p-2 transition-transform transform hover:scale-110 hover:bg-[#de6c5c] rounded-full" onClick={()=>setSort('Desc')}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
                </svg></button>
                </div>
    </div>
        
        
    </div>
    </div>
  )
}

export default Filter