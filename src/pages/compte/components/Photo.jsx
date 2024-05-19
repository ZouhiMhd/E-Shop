import React from 'react'

export const Photo = ({img}) => {
  return (
    <div style={{
        width : "100%",
        display: "flex",
        alignItems : "center",
        justifyContent : "center"
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
    </div>
  )
}

