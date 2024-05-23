import { Decor } from "../../components/decor.jsx"
import { MoreInfo } from "../../components/more-infos.jsx"
import { FormCheckUI } from "./components/form-check.jsx"
import { PlaceOrder } from "./components/place-order.jsx"
import { BuyList } from "./components/buy-list.jsx"
import { useContext } from "react"
import { CartContext } from "../shop/components/CartContext.jsx"

export default function CheckoutUI() {
    const { cart, setCart} = useContext(CartContext)
    console.log(cart)
    // const article = [{
	// 	name:"Asggard Safa" ,  
	// 	price : "250,000.00", 
	// 	qte: "1" ,
    //     subtotal:"250,000.00"
	// }]
    const total="250,000.00"

    return(<div id="conteneur">  
    <Decor title="Checkout" imgfond="../../../public/vendors/images/image1.jpg" imglogo="../../../public/vendors/images/sauver.png"/>
    <section className="billing-details">
        <FormCheckUI/>
        <div className="place-order">
            {/* {
            cart.map(e=>
            <BuyList 
                name={e.nomPro} 
                price={e.prix}
               />)
            } */}

            <BuyList />
            <PlaceOrder/>
        </div>
    </section>
    <MoreInfo/>
    </div>)
}