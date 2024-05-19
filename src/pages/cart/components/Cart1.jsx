import "../../../../public/publicNath/styles/global2.css"
import { FaRegTrashCan } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../shop/components/CartContext";

export default function Cart1 () {
  const [quantity, setQuantity] = useState(1)
  const { cart, setCart} = useContext(CartContext)
  // console.log(cart)
  // console.log(cart.length)

  function handleQuantity () {
    setQuantity(quantity + 1 )
  }

  let total = 0;

  for (const onecart of cart) {
    total = total+onecart.prix*onecart.qte;
    // console.log(cart.prix);
  }

  function supprimerArticle(articles, cle) {
    return articles.filter((element) => element.key !== cle);
}
  const handleSupprimer = (cle) => {
    const nouveauPanier = supprimerArticle(cart, cle);
    console.log("element supprimé")
    setCart(nouveauPanier)
};

  
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
                      <img src={article.img}/>
                      <p class="product">{article.nom}</p>
                    </div>
                    <p class="price">{article.prix} FCFA</p>
                    <button class="one" style={{ cursor: 'pointer' }} onClick={handleQuantity}>{quantity}</button>
                    <p class="sub">{quantity*article.prix} FCFA</p>
                    <FaRegTrashCan color="red" style={{ cursor: 'pointer' }} onClick={() => handleSupprimer(article.key)} /> 
                  </div>
                ))}
            </div>
            
          </div>
          <div className="second">
            <h1>Cart Totals</h1>
            <div className="second1">
                <h4>Subtotal</h4>
                <p>Rs.{total}</p>
            </div>
            <div className="second2">
                <h4>Total</h4>
                <p>Rs.{total}</p>
            </div >
                <Link to="/checkout">
                  <button className="check" style={{ cursor: 'pointer' }}>Check Out</button>
                </Link>
          </div> 
  </section>
            
    )
}