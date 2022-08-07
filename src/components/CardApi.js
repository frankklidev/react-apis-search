import React from 'react'

const CardApi = ({api}) => {

    const renderDetali = (text,field)=> <p>{text}:<span className='font-semibold'>{api[field] || "-"}</span></p>
  return (
    <a href={api.Link} target="_blank">
        <div className='border-2 p-2 border-blue-500 text-gray-600 rounded-md bg-blue-100
         hover:bg-blue-300 cursor:pointer h-full'>
         {renderDetali("Title","API")}
         {renderDetali("Description","Description")}
         {renderDetali("Auth","Auth")}
         {renderDetali("Cors","Cors")}
         {renderDetali("Category","Category")}
        </div>
    </a>
    
  )
}

export default CardApi