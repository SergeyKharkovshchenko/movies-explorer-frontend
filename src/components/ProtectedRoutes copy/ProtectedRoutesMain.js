import React from 'react'
import { Redirect } from 'react-router'
import { Navigate, useNavigate } from 'react-router-dom'
import { Main } from '../Main'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export const ProtectedRoutesMain = ({ isLoggedIn, children }) =>  {
  
  if (!isLoggedIn) {
    return children
  }
  return <Navigate to='/movies' />
}

