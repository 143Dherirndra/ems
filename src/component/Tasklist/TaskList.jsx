import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

export const TaskList = ({data}) => {
  console.log(data)
  return (
    <div id='tasklist' className='  overflow-x-auto flex  items-center justify-start flex-nowrap  gap-3 w-full h-[55%]  mt-10'>
      {data.tasks.map((elem,idx)=>{
        if(elem.active){
          return<AcceptTask key={idx} data={elem}/>
        }
        if(elem.new){
          return<NewTask key={idx} data={elem}/>
        }
        if(elem.completed){
          return<CompleteTask key={idx} data={elem}/>
        }
        if(elem.failed){
          return<FailedTask key={idx}data={elem}/>
        }
      })}
      
      
      
      
      
      
      
      
      {/* <div className=' flex-shrink-0 h-80 w-[300px] rounded-xl py-5 bg-yellow-500'>
        <div className='flex justify-between items-center'>
          <h3 className='font-bold text-xl bg-emerald-300 rounded-md px-3 '>High</h3>
          <h4 className='text-sm'>07/01/2005</h4>
         

        </div>
         <h2 className='mt-3 px-4 font-semibold text-2xl '>make a youtube video</h2>
          <p className='text-sm px-3 mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
             Corrupti illo facilis quam suscipit culpa voluptate voluptatibus fugia
             t iure dolorum porro voluptas quas deleniti, qui, ipsam natus officia tempora 
             tenetur aliquam!</p>
      </div> */}
     
     
     
      {/* <AcceptTask/>
      <NewTask/>
      <CompleteTask/>
      <FailedTask/> */}



       {/* <div className=' flex-shrink-0 h-80 w-[300px] rounded-xl py-5 bg-yellow-500'>
        <div className='flex justify-between items-center'>
          <h3 className='font-bold text-xl bg-emerald-300 rounded-md px-3 '>High</h3>
          <h4 className='text-sm'>07/01/2005</h4>
         

        </div>
         <h2 className='mt-3 px-4 font-semibold text-2xl '>make a youtube video</h2>
          <p className='text-sm px-3 mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
             Corrupti illo facilis quam suscipit culpa voluptate voluptatibus fugia
             t iure dolorum porro voluptas quas deleniti, qui, ipsam natus officia tempora 
             tenetur aliquam!</p>
      </div> */}
       {/* <div className=' flex-shrink-0 h-80 w-[300px] rounded-xl py-5 bg-red-500'>
        <div className='flex justify-between items-center'>
          <h3 className='font-bold text-xl bg-emerald-300 rounded-md px-3 '>High</h3>
          <h4 className='text-sm'>07/01/2005</h4>
         

        </div>
         <h2 className='mt-3 px-4 font-semibold text-2xl '>make a youtube video</h2>
          <p className='text-sm px-3 mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
             Corrupti illo facilis quam suscipit culpa voluptate voluptatibus fugia
             t iure dolorum porro voluptas quas deleniti, qui, ipsam natus officia tempora 
             tenetur aliquam!</p>
      </div> */}
       <div className=' flex-shrink-0 h-80 w-[300px] rounded-xl py-5 bg-blue-300'>
        <div className='flex justify-between items-center'>
          <h3 className='font-bold text-xl bg-emerald-300 rounded-md px-3 '>High</h3>
          <h4 className='text-sm'>07/01/2005</h4>
         

        </div>
         <h2 className='mt-3 px-4 font-semibold text-2xl '>make a youtube video</h2>
          <p className='text-sm px-3 mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
             Corrupti illo facilis quam suscipit culpa voluptate voluptatibus fugia
             t iure dolorum porro voluptas quas deleniti, qui, ipsam natus officia tempora 
             tenetur aliquam!</p>
      </div>
       {/* <div className=' flex-shrink-0 h-80 w-[300px] rounded-xl py-5 bg-emerald-400'>
        <div className='flex justify-between items-center'>
          <h3 className='font-bold text-xl bg-emerald-300 rounded-md px-3 '>High</h3>
          <h4 className='text-sm'>07/01/2005</h4>
         

        </div>
         <h2 className='mt-3 px-4 font-semibold text-2xl '>make a youtube video</h2>
          <p className='text-sm px-3 mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
             Corrupti illo facilis quam suscipit culpa voluptate voluptatibus fugia
             t iure dolorum porro voluptas quas deleniti, qui, ipsam natus officia tempora 
             tenetur aliquam!</p>
      </div>
       */}
      
      
       
      
    </div>
  )
}
{/* <div className=' flex-shrink-0 h-80 w-[300px] rounded-xl py-5 bg-yellow-500'>

      </div>
       <div className=' flex-shrink-0 h-80 w-[300px] rounded-xl py-5 bg-yellow-500'>

      </div>
       <div className=' flex-shrink-0 h-80 w-[300px] rounded-xl py-5 bg-yellow-500'>

      </div>
       <div className=' flex-shrink-0 h-80 w-[300px] rounded-xl py-5 bg-yellow-500'>

      </div>
       <div className=' flex-shrink-0 h-80 w-[300px] rounded-xl py-5 bg-yellow-500'>

      </div> */}
