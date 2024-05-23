export const Card = ({children}) =>{
    return(
        <div style={
            {
                
                padding:"20px",
                flex: "1",
                margin:"auto",
                width:"full",
                border:"1px solid grey",
                borderRadius:"15px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
                }
            } >
                {children}
            
            </div>
    )
};