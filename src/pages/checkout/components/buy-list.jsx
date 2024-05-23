import { useContext } from "react"
import { CartContext } from "../../shop/components/CartContext"


   




export const BuyList =() =>{

    const { cart, setCart} = useContext(CartContext)
    console.log(cart)
    
  let total = 0;

  for (const onecart of cart) {
    total = total + onecart.prix * 1
    console.log(total);
  }
    return(
    <div className="payment">
        <table>
            <colgroup/>
            <thead>
                <tr>
                    <th style={{textAlign : "left"}}>Product</th>
                    <th style={{textAlign : "right"}}>Subtotal</th>
                </tr>
            </thead>
            <tbody>
                {cart.map((item) => (
                       <tr key={item.codePro}>
                       <td style={{textAlign : "left"}}><i className="unactive">{item.nomPro}</i> x 1</td>
                       <td style={{textAlign : "right"}}>{item.prix}</td>
                       </tr>
                       
                )
                    
                 
                )}
                
                
                <tr>
                    <td style={{textAlign : "left"}}>Total</td>
                    <td style={{textAlign : "right"}}><h2>{total} fCFA</h2></td>
                </tr>
            </tbody>
                    
            </table>
                <hr/>
        </div>
            
    )
}