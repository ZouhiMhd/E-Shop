import React from 'react'
import { FaUser } from "react-icons/fa"
// import profile from '../../../../public/img/profile.jpeg'

export const User = ({user}) => {
  return (
    <span style={
        {
          marginLeft : "20px", 
          minWidth:"300px",
          justifyContent:"space-between" , 
          alignItems : "center",
          with:"50%",
          textAlign:"center"
         
          }}>
        {user.map((user,index) =>(
          <div style={{ background:"#FBEBB5",padding:"50px"}} >
             <img src="" style={{
            alignItems : "center",
            justifyContent : "center",
            maxWidth: "150px",
            height:" auto",
            borderRadius: "50%",
            }}/>
             <h2 style={{textAlign:"center"}}> {user.nom} </h2>
             <span>{user.email} </span>
          </div>
        ))}
           
      </span>
  )
}
