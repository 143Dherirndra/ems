// import React from "react";

// const TaskListnumber = ({data}) => {
//   return (
//     <div className="flex mt-10 justify-between gap-5 screen">
//       <div className="p-10 rounded-xl px-9 py-6 w-[45%] bg-red-400">
//         <h3 className="text-xl font-medium">new Task</h3>
//       </div>
//       <div className="p-10 rounded-xl px-9 py-6 w-[45%] bg-blue-400">
//         <h2 className="text-3xl font-semibold">{data.taskCounter.completed}</h2>
//         <h3 className="text-xl font-medium">  Completed Task</h3>
//       </div>
//       <div className="p-10 rounded-xl px-9 py-6 w-[45%] bg-green-400">
//         <h2 className="text-3xl font-semibold">{data.taskCounter.active}</h2>
//         <h3 className="text-xl font-medium">Acceptable Task</h3>
//       </div>
//       <div className="p-10 rounded-xl px-9 py-6 w-[45%] bg-yellow-400">
//         <h2 className="text-3xl font-semibold">{data.taskCounter.failed}</h2>
//         <h3 className="text-xl font-medium">failed Task</h3>
//       </div>
//     </div>
//   );
// };

// export default TaskListnumber;

import React from "react";

const TaskListnumber = ({ data = {} }) => {
  const taskCounter = data.taskCounter || {};

  return (
    <div className="flex mt-10 justify-between gap-5 screen flex-wrap">
      <div className="p-10 rounded-xl px-9 py-6 w-[45%] bg-red-400">
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="p-10 rounded-xl px-9 py-6 w-[45%] bg-blue-400">
        <h2 className="text-3xl font-semibold">{taskCounter.completed || 0}</h2>
        <h3 className="text-xl font-medium">Completed Task</h3>
      </div>
      <div className="p-10 rounded-xl px-9 py-6 w-[45%] bg-green-400">
        <h2 className="text-3xl font-semibold">{taskCounter.active || 0}</h2>
        <h3 className="text-xl font-medium">Acceptable Task</h3>
      </div>
      <div className="p-10 rounded-xl px-9 py-6 w-[45%] bg-yellow-400">
        <h2 className="text-3xl font-semibold">{taskCounter.failed || 0}</h2>
        <h3 className="text-xl font-medium">Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskListnumber;
