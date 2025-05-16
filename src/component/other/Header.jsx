// import React from 'react'

// function Header({data}) {
//   console.log(data)
//   return (
//     <div className='flex items-end justify-between'>
//         <h1 className='text-2xl'>Hello <br/><span className='text-3xl font-semibold'>{data.firstName:''}</span></h1>
//         <button className='bg-red-500 text-white px-5 py-2 text-lg font-medium rounded-sm'>log out</button>
//     </div>
//   )
// }

// export default Header

import React from 'react';

function Header({ data = {} }) {
  const firstName = data.firstName || 'Guest';
const logOutUser=()=>{
  localStorage.setItem('logedInUser','')
  window.location.reload();
}
  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl">
        Hello <br />
        <span className="text-3xl font-semibold">{firstName}</span>
      </h1>
      <button onClick={logOutUser} className="bg-red-500 text-white px-5 py-2 text-lg font-medium rounded-sm">
        Log Out
      </button>
    </div>
  );
}

export default Header;
