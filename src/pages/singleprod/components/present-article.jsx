import {FieldText} from "../../../components/fields"
import { useState } from "react"
import PropTypes from 'prop-types';

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
export const PresentArticle = ({article}) => {
    
    return (
              <main>
                <div className="presentation">
                  <div className="presentation-product">
                  
                    <div className="principal">
                      {article.map((e, index) => (
                        <img key={index} src={e.img} alt="" />
                      ))}
                    </div>
                  </div>
          
                  <div className="presentation-desc">
                    <div>
                       {article.map((e, index) => (
                        <div key={index}>
                          <h1>{e.nom}</h1>
                          <h2>Rs. {e.prix}</h2>
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
                            <li>{e.custumers} Custumers Review</li>
                          </ul>
                          <p>{e.description}</p>
                        </div>
                      ))}
                    </div>
          
                    <div className="caracteristics">
                      <div>
                        <ul className="sizes">
                        {article.map((e, index) => (
                            <FieldText key={index} text={e.typeSize}>
                              Size
                            </FieldText>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <ul className="color">
                        {article.map((e, index) => (
                            <FieldText key={index} text={e.code}>
                              Color
                            </FieldText>
                          ))}
                        </ul>
                      </div>
                    </div>
          
                    <div className="buy">
                      <Compteur />
                      <div className="add">
                        <button>Add To Cart</button>
                      </div>
                    </div>
          
                    <hr />
                    <table>
                      <tr>
                        <td>SKU</td>
                        {article.map((e, index) => (
                          <td key={index}>: {e.code}</td>
                        ))}
                      </tr>
                      <tr>
                        <td>Category</td>
                        {article.map((e, index) => (
                          <td key={index}>: {e.categorie}</td>
                        ))}
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
          
PresentArticle.propTypes = {
article: PropTypes.object.isRequired
};