import React from 'react'
import { OneInfo } from './OneInfo'
import { Card } from './Card'

export const InfoUser = ({user}) => {
  return (
    <div style = {
      {
        padding:"50px 20px",
        alignItems: "start",
        width : "80%",
        display : "inline-block",
        marginBottom : "20px"
      }
    }>
  <Card>
  {user.map((user,index) =>(
          <>
            <h3>Informations du Compte</h3>
            <OneInfo title="Nom d'utilisateur">{user.nom}</OneInfo>
            <OneInfo title="Email">{user.email}</OneInfo>
            <OneInfo title="Adresse">{user.adresse}</OneInfo>  
            <OneInfo title="Date d'inscription">{user.date}</OneInfo>
            <OneInfo title="Status">{user.status}</OneInfo>
          </>
        ))}
    
   </Card>

   </div>
  )
}

