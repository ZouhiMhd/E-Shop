//provider qui va utiliser les cookies pour stocker le tableau d'articles

import { useState } from "react";
import { useCookies } from "react-cookie";
import { FavorisContext } from "./FavorisContext";


export const CookiesProvider2 = ({children}) => {
    const [cookies, setCookie] = useCookies(['tableau2'])
    const [favoris, setFavoris] = useState([])

    //Mettre à jour le tableau d'articles
    const ajouterDansFavoris = (article) => {
        const newFavoris = [...favoris, article]
        setFavoris(newFavoris)
        setCookie('tableau2', newFavoris, {path:'/'})
    }
    const retirerDansFavoris = (article) => {
        const newFavoris = favoris.filter((item) => item !== article)
        setFavoris(newFavoris)
        setCookie('tableau2', newFavoris, {path:'/'})
    }



    return (
        <FavorisContext.Provider value={{favoris, ajouterDansFavoris, retirerDansFavoris}}>
            {children}
        </FavorisContext.Provider>
    )
}

