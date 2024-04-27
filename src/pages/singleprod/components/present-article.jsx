import {FieldText} from "../../../components/fields"
import { useState } from "react"

const useCount = () => {
    const [count, setCount] = useState(0)
    const counter = (e) => {
        if(e.target.value==='minus'){
            setCount(c=>c-1)
        }else{
            setCount(c=>c+1)
        }
    }
    return [count, counter]

}

const Compteur = () =>{
    const [count, counter] = useCount()
    return(
    <div className="quantity">
        <ul>
            <li><button onClick={counter} value ="minus"><i className="fa-solid fa-minus"></i></button></li>
            <li>{count}</li>
            <li><button onClick={counter} value="plus"><i className="fa-solid fa-plus"></i></button></li>
        </ul>
    </div>)
}
export const PresentArticle = ({article}) => {
    
    return (
    <main>
        <div className="presentation">
            <div className="presentation-product">
                
                <div className="auxilary">
                    <div>
                        {article.map (e=> <img src={e.img} alt=""/>)}
                    </div>
                    <div>
                        {article.map (e=> <img src={e.img} alt=""/>)}
                    </div>
                    <div>
                        {article.map (e=> <img src={e.img} alt=""/>)}
                    </div>
                    <div>
                        {article.map (e=> <img src={e.img} alt=""/>)}
                    </div>
                    <div>
                        {article.map (e=> <img src={e.img} alt=""/>)}
                    </div>
                </div>

                <div className="principal">
                    {article.map (e=> <img src={e.img} alt=""/>)}
                </div>          
            </div>
            
            <div className="presentation-desc">
                <div>
                    {article.map (e=><h1>{e.name}</h1>)}
                    {article.map (e=><h2>Rs. {e.price}</h2>)}
                    <ul className="stars">
                        <li>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </li>
                        <li><hr/></li>
                        <li>
                            {article.map (e=><p>{e.custumers} Custumers Review</p>)}
                        </li>
                    </ul>
                    {article.map (e=><p>{e.description}</p>)}
                </div>
                <div className="caracteristics">
                    <div>
                        <ul className="sizes">
                            {article.map (e=><FieldText text={e.typeSize}>Size</FieldText>)}
                        </ul>
                    </div>
                    <div>
                        <ul className="color">
                            {article.map (e=><FieldText>Color</FieldText>)}
                        </ul>
                    </div>
                </div>
                
                <div className="buy">
                    <Compteur/>
                    <div className="add">
                        <button >Add To Cart</button>
                    </div>
                </div>
                <div>
                        <hr/>
                    <table>
                        <tr>
                            <td>SKU</td>
                            {article.map (e=>
                            <td>: {e.code}</td>
                            )}
                        </tr>
                        <tr>
                            <td>Categiry</td>
                            {article.map (e=>
                            <td>: {e.categorie}</td>
                            )}
                        </tr>
                        <tr>
                            <td>Tags</td> 
                            <td>: Clothes, Shoeses, Men, Women</td>
                        </tr>
                        <tr>
                            <td>Share</td>
                            <td> : 
                                    <li><i className="fa-brands fa-facebook"></i></li>
                                    <li><i className="fa-brands fa-linkedin"></i></li>
                                    <li><i className="fa-brands fa-twitter"></i></li>
                            </td>
                            <td> <i className="fa-regular fa-heart"></i></td>
                        </tr>
                    </table>

                </div>
            </div>
        </div>
    </main>
)
}