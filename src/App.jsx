
import Login from './component/Auth/Login';
import EmployeeDashboard from './component/DashBoard/EmployeeDashboard';
import AdminDashboard from './component/DashBoard/AdminDashboard';
import Header from './component/other/Header';
import { getLocalStorage, setLocalStorage } from './utill/LocalStorage';
import { AuthContext } from './context/AuthProvider';
import React, { useState,useContext, useEffect } from 'react';



const App = () => {
  // const [user, setUser] = useState(null); // null: not logged in
const [user, setUser] = useState(null)
const authdata =useContext(AuthContext)
const [logedInUserData, setlogedInUserData] = useState(null)
  useEffect(()=>{
  const logedInUser=localStorage.getItem('logedInUser')
 if(logedInUser){
 const userdata=JSON.parse(logedInUser)
 setUser(userdata.role);
 setlogedInUserData(userdata.data)

 }
  },[])
  
  const handleLogin = (email, password) => {
    
    

    if (email === 'admin@example.com' && password === '123') {
      setUser({role:'admin'});
     localStorage.setItem('logedInUser',JSON.stringify({role:'admin'}))
    } else if (authdata){
     const employee=authdata && authdata.employees.find((e)=>email==e.email && e.password==password)
     if(employee){
      setUser({ role: 'employee' });

       setlogedInUserData(employee)
      localStorage.setItem('logedInUser',JSON.stringify({role:'employee', data:employee}))
     }
    }
    else{
      alert("invalid credential")
    }
  };
  
  

  return (
    <>
      <Header />
      {!user && <Login handleLogin={handleLogin} />}
      {user?.role === 'admin' && <AdminDashboard changeUser={setUser} />}
     {user?.role=='employee' ? <EmployeeDashboard changeUser={setUser}  data={logedInUserData}/> : null}
    </>
  );
};

export default App;
