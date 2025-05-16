// src/context/AuthProvider.jsx
import React, { createContext, useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../utill/LocalStorage';

// Create context
export const AuthContext = createContext();

// AuthProvider component
export const AuthProvider = ({ children }) => {
  // Initialize user data from localStorage safely
  const [userdata, setUserData] = useState()
  useEffect(() => {
    setLocalStorage();
    const {employees,admin}=getLocalStorage();
  console.log(admin);
    setUserData({employees,admin})

  
    
  }, [])
  
  
  return (
    <AuthContext.Provider value={userdata}>
      {children}
    </AuthContext.Provider>
  );
};
