import React from 'react'
import { Main } from '../Main'

export const ProtectedRoutes = ({ isLoggedIn, children }) =>  {
  if (!isLoggedIn) {
    console.log('ProtectedRoutes isLoggedIn = '+isLoggedIn);
    return <Main />
  }
  return children
}
