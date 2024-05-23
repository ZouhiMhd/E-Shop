import React from 'react'

export const Photo = ({img}) => {
  return (
    <div style={{
        width : "100%",
        display: "flex",
        alignItems : "center",
        justifyContent : "center",
        background:"#FBEBB5",
        color:"#B88E2"
        }}
        >
        <img src={img} style={{
            width : "200px",
            height : "auto",
            borderRadius : "25%",
            display: "flex",
            alignItems : "center",
            justifyContent : "center"
            }}/>
        <h1>BIENVENUE SUR L'ESPACE DE VOTRE COMPTE</h1>
    </div>
  )
}

