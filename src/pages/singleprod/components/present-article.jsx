import {FieldText} from "../../../components/fields"
import { useContext, useState } from "react"
import PropTypes from 'prop-types';
import { EyeContext } from "./EyeContext";
import habit from "../../../../public/img/Hommes/Homme1.webp"
import { CartContext } from '../../shop/components/CartContext';


// const autreFemme=[
//   {
//     nomPro: "Ensemble classe",
//     prix: 5000,
//     photos: [{lienPhoto : habit}],
//     categorie : "Homme",
//     codePro : "004",
//     description : "Fabriqué à la main en cuir de haute qualité. Conception élégante avec des détails ciselés. Fermeture à lacets à l’arrière pour un ajustement parfait.          Idéal pour les fêtes costumées, les événements médiévaux ou simplement pour ajouter une touche unique à votre garde-robe.",
//     size1 :"XL, XXL, M, ML",
//     color : "blanc, bleu, rouge, vert"
//   }
//   ]

const useCount = () => {
    const [count, setCount] = useState(0)
    const counter = (e) => {
        if(e.target.value==="minus"){
            if(count !== 0){setCount(c=>c-1)}
            
        }else if(e.target.value==="plus"){
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
            <li><button value ="minus" onClick={counter}><i className="fa-solid fa-minus"></i></button></li>
            <li>{count}</li>
            <li><button value="plus" onClick={counter}><i className="fa-solid fa-plus"></i></button></li>
        </ul>
    </div>)
}
export const PresentArticle = () => {
  const { eyeCart, ajouterDansEye} = useContext(EyeContext)
  const { cart, ajouterDansPanier} = useContext(CartContext)

  const handleAddToCart = () => {
          ajouterDansPanier(eyeCart)
          console.log(eyeCart)
          console.log("article ajouté avec succès")
  };
  // let product = eyeCart;

  //const product =autreFemme[0]
  console.log(eyeCart)
    return (
              <main >
                <div className="presentation" >
                  <div className="presentation-product">
                  
                    <div className="principal" >
                        <img key={eyeCart.codePro} src={eyeCart.photos[0].lienPhoto} alt="" style={{height :'500px'}}/>
                     
                      {/* <img src={product.photos[0].lienPhoto} alt="" />  */}
                    </div>
                  </div>
          
                  <div className="presentation-desc" >
                    <div>
                      <div>
                       {/* {eyeCart.map((e) => (
                        <div key={e.codePro}>
                          <h1>{e.nomPro}</h1>
                          <h2>Rs. {e.prix}</h2> */}
                          <h1>{eyeCart.nomPro}</h1>
                          <h2>{eyeCart.prix} fCFA</h2>
                          <ul className="stars">
                            <li>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <hr />
                            </li>
                            <li>1 Custumers Review</li>
                          </ul>
                          <p>{eyeCart.description}</p> 
                          {/* <p>{product.description}</p> */}
                        </div>
                      
                    </div>
          
                    <div className="caracteristics" >
                      <div style={{display:'flex'}}>
                        {/* <ul className="sizes"> */}
                        {/* {eyeCart.map((e) => (
                            <FieldText key={e.codePro} text= {e.size1}  >
                              Size
                            </FieldText>
                          ))} */}

                            <FieldText
                            //  text= {product.size1}
                            >Size</FieldText>
                        {/* </ul>
                      </div>
                      <div>
                        <ul className="color"> */}
                        {/* {eyeCart.map((e) => (
                            <FieldText key={e.codePro} text="red blue white">
                              Color
                            </FieldText> 
                          ))}*/}
                          <FieldText text="red blue white">Color</FieldText>
                        {/* </ul> */}
                      </div>
                    </div>
          
                    <div className="buy">
                      <Compteur />
                      <div className="add">
                        <button onClick={handleAddToCart}>Add To Cart</button>
                      </div>
                    </div>
          
                    <hr />
                    <table>
                      <tr>
                        <td>SKU</td>
                        {/* {eyeCart.map((e) => (
                          <td key={e.codePro}>: {e.codePro}</td>
                        ))} */}
                        <td>
                          {/* : {product.codePro} */}
                          </td>
                      </tr>
                      <tr>
                        <td>Category</td>
                        {/* {eyeCart.map((e) => (
                          <td key={e.codePro}>: {e.categorie}</td>
                        ))} */}
                        <td>
                          {/* : {product.categorie} */}
                          </td>
                      </tr>
                      <tr>
                        <td>Tags</td>
                        <td>: Clothes, Shoes, Men, Women</td>
                      </tr>
                      <tr>
                        <td>Share</td>
                        <td>
                          <li>
                            <i className="fa-brands fa-facebook"></i>
                          </li>
                          <li>
                            <i className="fa-brands fa-linkedin"></i>
                          </li>
                          <li>
                            <i className="fa-brands fa-twitter"></i>
                          </li>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </main>
            );
          };
          
