export const BuyList =({name, price, qte, subtotal, total}) =>{
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
                <tr>
                    <td style={{textAlign : "left"}}><i className="unactive">{name}</i> x {qte}</td>
                    <td style={{textAlign : "right"}}>{price}</td>
                </tr>
                <tr>
                    <td style={{textAlign : "left"}}>Subtotal</td>
                    <td style={{textAlign : "right"}}>{subtotal}</td>
                </tr>
                <tr>
                    <td style={{textAlign : "left"}}>Total</td>
                    <td style={{textAlign : "right"}}><h2>{total}</h2></td>
                </tr>
            </tbody>
                    
            </table>
                <hr/>
        </div>
            
    )
}