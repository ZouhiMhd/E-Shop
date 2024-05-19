import React from 'react'

export const OneInfo = ({title,children}) => {
  return (
    <span style={
        {
          marginLeft : "300px", 
          marginTop : "20px",
          display:"flex", 
          justifyContent:"space-between" , 
          alignItems : "center",
          with:"50%"
          }}>
        <span><h3> {title} </h3></span>
        <span>{children} </span>
      </span>
  )
}

