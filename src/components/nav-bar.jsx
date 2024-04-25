import {NavLink} from "react-router-dom";

export const NavBar = () => {
	return (
        <>
		<header>
        <div className="menu-haut">
            <div className="menu">
                <ul>
                    <li>
                        <NavLink to="/home">
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
            <div className="option">
                <ul>
                    <li>
                        <NavLink to="/compte">
                            <button className="fa fa-user"></button>
                        </NavLink>
                    </li>
                    <li>
                        {/* <NavLink to="/"> */}
                            <button className="fa fa-search"></button>
                        {/* </NavLink> */}
                    </li>
                    <li>
                        {/* <NavLink to="/"> */}
                            <button className="fa fa-heart"></button>
                        {/* </NavLink> */}
                    </li>
                    <li>
                        <NavLink to="/Checkout"> 
                            <button className="fa fa-shopping-cart" type="button"></button>
                        </NavLink> 
                    </li>
                </ul>
            </div>
        </div>    
     </header>
     </>
    )
}