//provider qui va utiliser les cookies pour stocker le tableau d'articles
import { useState } from "react";
import { useCookies } from "react-cookie";
import { EyeContext } from "./EyeContext";


export const CookiesProvider3 = ({children}) => {
    const [cookies, setCookie] = useCookies(['tableau3'])
    const [eyeCart, setEyeCart] = useState(
        {
            "codePro": 1,
            "nomPro": "costume",
            "prix": "75000",
            "qte": 10,
            "description": "costume gris",
            "codeArrivage": "#12345ENSPY",
            "actif": 1,
            "idCategorie": 1,
            "dateInsertion": "2024-05-21 11:25:05",
            "prixAchat": "60000",
            "pourcentage": "0.25",
            "promo": 0,
            "size1": 20,
            "size2": 40,
            "typeSize": 10,
            "categorie": {
                "idCat": 1,
                "nomCat": "Homme"
            },
            "photos": [
                {
                    "idPhoto": 1,
                    "lienPhoto": "http://192.168.43.4:8000/photos_produits/21-05-2024-10-25-05_1(1).png",
                    "codePro": 1
                }
            ]
        }
    )

    //Mettre à jour le tableau d'articles
    const ajouterDansEye = (article) => {
        
        setEyeCart(article)
        setCookie('tableau3', eyeCart, {path:'/'})
    }

    return (
        <EyeContext.Provider value={{eyeCart, ajouterDansEye}}>
            {children}
        </EyeContext.Provider>
    )
}

