import React, { useState } from "react";
import FailedTask from "../Tasklist/FailedTask";

const CreateTask = () => {
const [taskTitle, settaskTitle] = useState('')
const [taskDescription, settaskDescription] = useState('')
const [taskDate, settaskDate] = useState('')
const [assignTo, setassignTo] = useState('')
const [category, setcategory] = useState('')


const [Newtask, setNewTask] = useState({})
const submitHandler=(e)=>{
  
  e.preventDefault()
  setNewTask({taskTitle,taskDescription,taskDate,category,active:false, new:true, failed:false,completed:false})
 const data= JSON.parse(localStorage.getItem('employees'))
// const data =userData.employees;
// console.log(data);
 data.forEach(function(elem){
  if(assignTo== elem.firstName){
    elem.tasks.push(Newtask);
    // elem.tasksCount.Newtask =elem.tasksCount.Newtask+1
  console.log(data)
  }
 })
// console.log(data)
 localStorage.setItem('employees',JSON.stringify(data))
console.log(data)
 setNewTask('')
 setassignTo('')
 setcategory('')
 settaskDate('')
 settaskDescription('')
 settaskTitle('')

  // settaskTitle('');
  // settaskDescription('');
  // settaskDate('');
  // setassignTo('');
  // setcategory('');
}

  return (
    <div className="p-5 bg-[#1c1c1c] mt-6 rounded">
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}
      className="flex flex-wrap  items-start justify-between">
        <div className="w-1/2 ">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">TaskTitle</h3>
            <input
            value={taskTitle}
            onChange={(e)=>{
              settaskTitle(e.target.value)
            }}
              className="text-sm w-4/5 px-1 py-2 rounded border-[1px] border-gray-400  outline-none bg-transparent bg-white-100"
              type="text"
              placeholder="Make a UI dsign "
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
             value={taskDate}
            onChange={(e)=>{
              settaskDate(e.target.value)
            }}
              className="'text-sm w-4/5 px-1 py-2 border-[1px]  outline-none rounded border-gray-400  bg-transparent bg-white-100'"
              type="date"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
            <input
             value={assignTo}
            onChange={(e)=>{
              setassignTo(e.target.value)
            }}
              className="'text-sm w-4/5 px-1 py-2 rounded border-[1px] border-gray-400 outline-none  bg-transparent bg-white-100'"
              type="text"
              placeholder="enter the employee name"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Catogary</h3>
            <input
             value={category}
            onChange={(e)=>{
              setcategory(e.target.value)
            }}
              className="text-sm w-4/5 px-1 py-2 rounded border-[1px] border-gray-400  outline-none  bg-transparent bg-white-100"
              type="text"
              placeholder="design , dev, etc"
            />
          </div>
        </div>

        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-sm text-gray-300 mb-0.5">discription</h3>
          <textarea
           value={taskDescription}
            onChange={(e)=>{
              settaskDescription(e.target.value)
            }}
            className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
            name=""
            id=""
            cols="30"
            rows="10"
          />
          <button className="bg-emerald-500 hover:bg-emerald-600 py-3 px-5 mt-3 rounded text-sm w-full">
            collect form
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
