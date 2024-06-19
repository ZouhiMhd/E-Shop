import React from "react";
import { ImEye } from "react-icons/im";
import HeartIcon from './HeartIcon';
import ShoppingCartIcon from "./ShoppingCartIcon";
import { Link } from "react-router-dom";
// import {useHistory } from "react-router-dom"; // Import useHistory
import { EyeContext } from "../../singleprod/components/EyeContext";
import { useContext } from "react";



export default function ArticleCard({articles}) {

   
    const {eyeCart, ajouterDansEye} = useContext(EyeContext)
        
    const handleEye = (article) => {
        ajouterDansEye(article)
        console.log(eyeCart)
        
    }
    
   
   
    return (
        <div className="article-list" >
            <div className="slider-container slider-1" >
                <div className='slider' >
                {articles.map((article) => (
                        <div style={{marginInline:"70px"}}>
                            <div key={article.codePro} className="article-card">
                                <div className="article-photo">
                                    <img src={article.photos[0].lienPhoto} alt={article.nom} />
                                </div>
                                <h3 className="article-name">{article.nomPro}</h3>
                                <p className="article-price">{article.prix} fCFA</p>
                                <div className="article-icons">
                                    <HeartIcon article={article}/>
                                    <ShoppingCartIcon article={article}/>
                                    <Link to = "/singleprod"><ImEye size={20} color="black" onClick={() => handleEye(article)} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}