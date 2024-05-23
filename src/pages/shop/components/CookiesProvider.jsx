//provider qui va utiliser les cookies pour stocker le tableau d'articles

import { useState } from "react";
import { useCookies } from "react-cookie";
import { CartContext } from "./CartContext";


export const CookiesProvider = ({children}) => {
    const [cookies, setCookie] = useCookies(['tableau'])
    const [cart, setCart] = useState([])
    const [hasAuthenticated , setHasAuthenticated] = useState(false)

    //Mettre à jour le tableau d'articles
    const ajouterDansPanier = (article) => {
        const newCart = [...cart, article]
        setCart(newCart)
        setCookie('tableau', newCart, {path:'/'})
    }
    //Mettre à jour le tableau d'articles
    const supprimerDansPanier = (article) => {
        const newCart = cart.filter(item => item.codePro !== article.codePro )
        setCart(newCart)
        setCookie('tableau', newCart, {path:'/'})
    }

    return (
        <CartContext.Provider value={{cart, ajouterDansPanier, supprimerDansPanier, hasAuthenticated, setHasAuthenticated}}>
            {children}
        </CartContext.Provider>
    )
}

