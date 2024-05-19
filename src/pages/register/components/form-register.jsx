import { NavLink } from "react-router-dom"
import { FieldText } from "../../../components/fields"  
import { FieldEmail } from "../../../components/fields"
import { FieldPassword } from "../../../components/fields"
import { useContext } from "react"
import { hasAuthenticated } from "../../../services/AuthAPI"
import { useState } from "react"

export const FormRegister = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(hasAuthenticated());
    return ( 
        <div className="register">
            <form>
                <h1>Register</h1>
                <FieldText name= "name">Username</FieldText>
                <FieldEmail name= "email">Adresse Email</FieldEmail>
                <FieldPassword name= "password">Password</FieldPassword>
                <div className="reg-submit"><button className="enregistrer" onClick={()=>{setIsAuthenticated(true); alert(isAuthenticated)}}>Register</button> <div className="reg-link"><p>Déjà inscrit?  </p> <NavLink to ="/login">Login</NavLink></div></div>            
                <p>Your personal data will be used to supportyour experience 
                throughout this webside to manage access to your account and 
                for others purpose described in our privacy policy.</p>
            </form>
        </div>
    )
}