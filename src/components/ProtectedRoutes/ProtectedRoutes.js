import React from 'react'
import { Redirect } from 'react-router'
import { Navigate, useNavigate } from 'react-router-dom'
import { Main } from '../Main'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export const ProtectedRoutes = ({ isLoggedIn, children }) =>  {
  
  if (!isLoggedIn) {
    return <Navigate to='/' />
  }
  return children
}

