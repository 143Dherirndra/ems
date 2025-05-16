import React from 'react'

const AcceptTask = ({data}) => {
  
  return (
    <div className=' flex-shrink-0 h-80 w-[300px] rounded-xl py-5 bg-yellow-500'>
        <div className='flex justify-between items-center'>
          <h3 className='font-bold text-xl bg-emerald-300 rounded-md px-3 '>{data.category}</h3>
          <h4 className='text-sm'>{data.taskDate}</h4>
         

        </div>
         <h2 className='mt-3 px-4 font-semibold text-2xl '>{data.taskTitle}</h2>
          <p className='text-sm px-3 mt-2'>{data.taskDescription}</p>
             <div className='flex justify-between mt-4'>
                <button className=' bg-green-300 px-2 py-1 text-sm'>Mark as completed</button>
                <button className=' bg-red-300 px-2 py-1 text-sm'>Mark as failed</button>
             </div>
      </div>
  )
}

export default AcceptTask