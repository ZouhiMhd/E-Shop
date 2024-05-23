import { closePopup } from "../../public/vendors/scripts/script";
import { Article } from "./article";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../pages/shop/components/CartContext"

export const PopupCart = () => {

  const [quantity, setQuantity] = useState(1)
  const { cart, ajouterDansPanier} = useContext(CartContext)
  

  let total = 0;

  for (const onecart of cart) {
    total = total+onecart.prix*onecart.qte;
  }

    const logo = "../../../public/vendors/images/sauver.png"
    return ( 
        <div>
            <img src={logo} alt=""/>
            <div className="title">
                <h2>Shopping Cart</h2>
                <i className="fa-solid fa-bag-shopping"></i>
            </div>
            <hr/>
            <div className="bilan-article" style={{
                overflow: 'auto',
                height : '300px',
                }}>
                {cart.map((e) =>
                <Article key={e.codePro} article={e}></Article>
                )}
                <div className="total">
                    <ul>
                        <li>Subtotal</li>
                        <li className="sum">{total} fCFA</li>
                    </ul>
                    <hr/>
                </div>
                
                <div className="next">
                    < Link to="/cart">
                    <button type="button" className="btn" onClick={closePopup} style={{width : "120px"}}>View cart</button>
                    </Link>
                    < Link to="/checkout">
                    <button type="button"  className="btn" onClick={closePopup} style={{width : "120px"}}>Checkout</button>
                    </Link>
                    < Link to="#">
                    <button type="button"  className="btn" onClick={closePopup} style={{width : "120px"}}>Back to page</button>
                    </Link>
                </div>
            </div>
        </div>
    )
    }