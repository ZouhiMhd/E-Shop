import "../../../../public/publicNath/styles/global2.css"
import { FaRegTrashCan } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../shop/components/CartContext";

export default function Cart1 () {
  const { cart, ajouterDansPanier, supprimerDansPanier} = useContext(CartContext)
  
let quantity = 1
  function handleQuantity () {
    quantity = quantity + 1 
  }

  let total = 0;

  for (const onecart of cart) {
    total = total+onecart.prix*1;
  }


    return (
        <section className="Cart-content2">
          <div className="first">
            <div className="first1">
                <h4>Product</h4>
                <h4>Price</h4>
                <h4>Quantity</h4>
                <h4>Subtotal</h4>
            </div>
            <div className="first2">
            {cart.map((article)=>(
                  <div className="cart-articles">
                    <div class="first21">
                      <img src={article.photos[0].lienPhoto}/>
                      <p class="product">{article.nomPro}</p>
                    </div>
                    <p class="price">{article.prix} fCFA</p>
                    <button class="one"  onClick={handleQuantity}>{quantity}</button>
                    <p class="sub">{quantity*article.prix} FCFA</p>
                    <FaRegTrashCan color="red" style={{ cursor: 'pointer' }} onClick={() => supprimerDansPanier(article)} /> 
                  </div>
                ))}
            </div>
            
          </div>
          <div className="second">
            <h1>Cart Totals</h1>
            <div className="second1">
                <h4>Subtotal</h4>
                <p>{total} fCFA</p>
            </div>
            <div className="second2">
                <h4>Total</h4>
                <p>{total} fCFA</p>
            </div >
                <Link to="/checkout">
                  <button className="check" style={{ cursor: 'pointer' }}>Check Out</button>
                </Link>
          </div> 
  </section>
            
    )
}