import React from 'react'
import { Main } from '../Main'

export const ProtectedRoutesMain = ({ isLoggedIn, children }) =>  {
  
  if (!isLoggedIn) {
    return <Main />  
  }
  
  return children
}

