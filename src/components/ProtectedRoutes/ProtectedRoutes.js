import React from 'react'
import { Navigate } from 'react-router-dom'

export const ProtectedRoutes = ({ isLoggedIn, children }) =>  {
  if (!isLoggedIn) {
    console.log('isLoggedIn = '+isLoggedIn);
    return <Navigate to="/" replace />
  }
  return children
}
