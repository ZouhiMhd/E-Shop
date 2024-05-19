import React from "react";
import { ImEye } from "react-icons/im";
import HeartIcon from './HeartIcon';
import ShoppingCartIcon from "./ShoppingCartIcon";



export default function ArticleCard({articles}) {

    
   
   
    return (
        <div className="article-list">
            {articles.map((article, index) => (
                <div key={index} className="article-card">
                    <div className="article-photo">
                        <img src={article.img} alt={article.nom} />
                    </div>
                    <h3 className="article-name">{article.nom}</h3>
                    <p className="article-price">{article.prix} fCFA</p>
                    <div className="article-icons">
                        <HeartIcon article={article}/>
                        <ShoppingCartIcon article={article}/>
                        <ImEye size={20} color="black" />
                    </div>
                    
                </div>
            ))}
        </div>
    )
}