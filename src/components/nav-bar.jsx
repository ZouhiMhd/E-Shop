import {NavLink} from "react-router-dom";
import { openPopup } from "../../public/vendors/scripts/script";
import { SearchBar } from "./searchbar";
import { useContext } from "react";
import Auth from "../context/Auth";
import { CartContext } from "../pages/shop/components/CartContext"

export const NavBar = () => {
    const {isAuthenticated} = useContext(Auth);
    const { cart, ajouterDansPanier} = useContext(CartContext)
    const count = cart.length;
     return (
        <>
		<header>
        <div className="menu-haut">
            <div className="menu">
                <ul>
                    <li>
                        <NavLink to="/">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/shop">
                            Shop
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="option" >
                <ul>
                    <li>
                    <SearchBar/>
                    </li>
                    {(!isAuthenticated && (
                        <>
                    <li>
                        <NavLink to="/register">
                            <button className="fa fa-user"></button>
                        </NavLink>
                    </li>
                    </>))||(
                    <>
                    <li>
                    
                    <NavLink to="/compte"> 
                        <button style={
                            {
                                width : "30px",
                                height : "30px",
                                borderRadius: "50%",
                                backgroundColor : "gold",
                                display : "flex",
                                alignItems : "center",
                                justifyContent :"center",
                            }}>
                                NP
                            
                        </button>
                        </NavLink>
                    </li></> 
                    )}
                     <li>
                        <NavLink to="/favoris"> 
                            <button className="fa fa-heart"></button>
                        </NavLink>
                    </li>
                    <li className="notification">
                        <button className="fa fa-shopping-cart" type="button" onClick={openPopup} style={{position : "relative"}}></button>
                        <span className="num">{count}</span>
                    </li>
                    
                </ul>
            </div>
        </div>    
     </header>
     </>
    )
}