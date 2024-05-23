import { NavLink } from "react-router-dom"
import { FieldText } from "../../../components/fields"  
import { FieldEmail } from "../../../components/fields"
import { FieldPassword } from "../../../components/fields"
import { useContext, useState } from "react"
import {CartContext} from "../../shop/components/CartContext"
import {Link} from "react-router-dom"

export const FormRegister = () => {
    const { cart, ajouterDansPanier, supprimerDansPanier, hasAuthenticated, setHasAuthenticated} = useContext(CartContext)
    console.log(hasAuthenticated)

    const handleClick = (e) => {
        e.preventDefault()
        console.log("Connecté")
        setHasAuthenticated(true)
        console.log(hasAuthenticated)
    }
    
    return ( 
        <div className="register">
            <form>
                <h1>Register</h1>
                <FieldText name= "name">Username</FieldText>
                <FieldEmail name= "email">Adresse Email</FieldEmail>
                <FieldPassword name= "password">Password</FieldPassword>
                <div className="reg-submit">
                    
                        <button className="enregistrer" onClick={(e)=>{handleClick(e)}}>
                        <Link to='/compte'>
                            Register
                        </Link>
                        </button> 
                <div className="reg-link">
                <p>Déjà inscrit?</p> 
                <NavLink to ="/login">Login</NavLink></div>
                </div>            
                <p>Your personal data will be used to supportyour experience 
                throughout this webside to manage access to your account and 
                for others purpose described in our privacy policy.</p>
            </form>
        </div>
    )
}