//provider qui va utiliser les cookies pour stocker le tableau d'articles

import { useState } from "react";
import { useCookies } from "react-cookie";
import { CartContext } from "./CartContext";


export const CookiesProvider = ({children}) => {
    const [cookies, setCookie] = useCookies(['tableau'])
    const [cart, setCart] = useState([])

    //Mettre à jour le tableau d'articles
    const ajouterDansPanier = (article) => {
        const newCart = [...cart, article]
        setCart(newCart)
        setCookie('tableau', newCart, {path:'/'})
    }

    return (
        <CartContext.Provider value={{cart, ajouterDansPanier}}>
            {children}
        </CartContext.Provider>
    )
}

