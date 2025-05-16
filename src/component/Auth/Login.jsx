import React, { useState } from "react";

function Login({handleLogin}) {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email,password);
    setEmail("");
    setPassword("");
  };
  return (
    <div className=" flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-600 p-20 rounded-xl">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="  outline-none bg-transparent border-2 border-emerald-400 text-xl py-3 px-5  rounded-full"
            type="email"
            placeholder="enter you Email"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className=" outline-none bg-transparent border-2 border-emerald-400 text-xl py-3 px-5  rounded-full mt-4"
            type="password"
            placeholder="enter your password"
          />
          <button className=" text-white border-none outline-none mt-7 bg-transparent w-full  bg-emerald-400 text-xl py-3 px-5  rounded-full" type="submit"
          onClick={()=>{
            console.log(email)
             console.log(password)
          }}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
