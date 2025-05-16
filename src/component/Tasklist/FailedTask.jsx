import React from 'react'

const FailedTask = (data) => {
  return (
    <div className=' flex-shrink-0 h-80 w-[300px] rounded-xl py-5 bg-emerald-400'>
        <div className='flex justify-between items-center'>
          <h3 className='font-bold text-xl bg-emerald-300 rounded-md px-3 '>{data.category}</h3>
          <h4 className='text-sm'>{data.taskDate}</h4>
         

        </div>
         <h2 className='mt-3 px-4 font-semibold text-2xl '>{data.taskTitle}</h2>
          <p className='text-sm px-3 mt-2'>{data.taskDescription}</p>
              <div className='mt-2'>
                <button className='w-full'>failed Task</button>
             </div>
      </div>
      
  )
}

export default FailedTask