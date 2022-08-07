import React, { useState } from 'react'

const Jumbotron = ({fetchData}) => {
  const [value,setValue]= useState(''); 

  const handleEnter = (e)=>{
    if (e.key ==='Enter') {
        fetchData({params:{title:value}});
        setValue('');
    }
  }



  const handleButtonSearch=()=>{
    if (value.length) {
      fetchData({params:{title:value}});
        setValue('');
    }
  }
  return (
    <div className="
    bg-gradient-to-r from-cyan-500 to-blue-500 py-20 text-center px-2">
      <h3 className="text-2xl text-white font-semibold">Search Apis</h3>
      <div className='flex items-center mt-6 max-w-md mx-auto bg-white rounded-md'>
        <input
         type="text"
         className='w-full px-4 py-2 rounded-md text-gray-800 focus:outline-none '
         placeholder='Random Search ' 
         value={value}
         onChange={e=>setValue(e.target.value)}
         onKeyDown={handleEnter}
        />
        <button

         className='bg-blue-500 w-20 h-12 text-white rounded-r-md flex items-center justify-center'
         onClick={handleButtonSearch}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
</svg>
        </button>
      </div>
    </div>
  )
}

export default Jumbotron;