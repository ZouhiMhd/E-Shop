import React, { useState, useContext } from 'react';
import { IoCartOutline, IoCart } from "react-icons/io5";
import { CartContext } from '../../shop/components/CartContext';

function ShoppingCartIcon({ article }) {
    const [isIncart, setIsIncart] = useState(false);
    const [isFavorited, setIsFavorited] = useState(false);
    const { cart, ajouterDansPanier} = useContext(CartContext)

    const handleAddToCart = () => {
        setIsIncart(!isIncart);
        if (!isIncart) {
            ajouterDansPanier(article)
            console.log('Article ajouté au panier', article.nom);
            console.log(cart)
            
        } else {
            console.log('Article retiré du panier', article.nom);
        }
    };

    const handleClick = () => {
        setIsFavorited(!isFavorited);
    };

    return (
        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
            {isFavorited ? (
                <IoCart size={20} color="dark" onClick={handleAddToCart} />

            ) : (
                <IoCartOutline size={20} color="dark" onClick={handleAddToCart} />
            )}
        </div>
    );
};

export default ShoppingCartIcon;