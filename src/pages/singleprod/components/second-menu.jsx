import { Link } from "react-router-dom"

export const SecondMenu = () =>{
    return ( 
    <header>  
    <div className="menu-second">
        <ul>
            <Link to="/"><li style={{color:"grey"}}>Home</li></Link>
            <li><i className="fa-solid fa-chevron-right"></i></li>
            <Link to="/shop"><li style={{color:"grey"}}>Shop</li></Link>
            <li><i className="fa-solid fa-chevron-right"></i></li>
            <li><p><hr/></p></li>
            <li className="active" >Article</li>
        </ul>
    </div>
    </header>)
}