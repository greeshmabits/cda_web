import React from 'react'
import pic from "./resources/PageNotFound.jpg";



export const NoMatch = (properties) => {
  properties.funcNav(false);
  return (
    <form><img src={pic}  alt="Page not found" /></form>
    
    
    
  )
}
