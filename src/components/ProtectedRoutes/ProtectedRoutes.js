import React from 'react'
import { Main } from '../Main'

export const ProtectedRoutes = ({ isLoggedIn, children }) =>  {
  if (!isLoggedIn) {
    return <Main />
  }
  return children
}
