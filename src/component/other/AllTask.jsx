import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
const authdata =useContext(AuthContext)


  return (
    <div className='p-5 bg-[#1c1c1c] mt-5 rounded h-text '>

        <div className='bg-red-300 mb-2 py-3 px-4 flex justify-between rounded'>
            <h2  className='text-lg font-medium w-1/5'>EmployeeName</h2>
            <h3 className='text-lg font-medium  w-1/5'> NewTask</h3>
            <h3 className='text-lg font-medium  w-1/5'> ActiveTask</h3>
            <h3 className='text-lg font-medium w-1/5'>Completed Task</h3>
            <h3 className='text-lg font-medium  w-1/5'> FailedTask</h3>
        </div>
        <div className='h-[80%] overflow-auto'>
            {authdata.employees.map(function(elem,idx){

            return <div key={idx} className='border-emerald-400 mb-2 py-3 border-y-2 px-4 flex justify-between rounded'>
            <h2  className='text-lg font-medium   text-green-400 w-1/5'>{elem.firstName}</h2>
            <h3 className='text-lg font-medium text-blue-400 w-1/5'> {elem.taskCount.new}</h3>
            <h3 className='text-lg font-medium text-purple-400 w-1/5'>{elem.taskCount.active}</h3>
            <h3 className='text-lg font-medium text-yellow-400 w-1/5'>{elem.taskCount.completed}</h3>
            <h3 className='text-lg font-medium text-yellow-400 w-1/5'>{elem.taskCount.failed}</h3>

        </div>
        })}
        </div>
{/*         
        <div className='bg-yellow-400 mb-2 py-3 px-4 flex justify-between rounded'>
            <h2>Hemant</h2>
            <h3>Make a UI design</h3>
            <h3>status</h3>
        </div>
        <div className='bg-green-400 mb-2 py-3 px-4 flex justify-between rounded'>
            <h2>Hemant</h2>
            <h3>Make a UI design</h3>
            <h3>status</h3>
        </div>
        <div className='bg-purple-400 mb-2 py-3 px-4 flex justify-between rounded'>
            <h2>Hemant</h2>
            <h3>Make a UI design</h3>
            <h3>status</h3>
        </div> */}
    </div>
  )
}

export default AllTask