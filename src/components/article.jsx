import PropTypes from 'prop-types';
import {useContext} from 'react';
import { CartContext } from "../pages/shop/components/CartContext"

export const Article = ({ article }) => {
  const { cart, ajouterDansPanier, supprimerDansPanier} = useContext(CartContext)
  
    return (
      <div className="one-article">
        <div>
          
            <img src={article.photos[0].lienPhoto} alt={article.nomPro} />
          
        </div>
        <div className="quantity-article">
          
            <div>{article.nomPro}</div>
        
          <div>
            <ul>
              
                <li>1</li>
                
              <li style={{ margin: "10px" }}> x </li>
             
                <li className="sum">
                  {article.prix} fCFA
                </li>
          
            </ul>
          </div>
        </div>
        <button className="btn-no" onClick={() => supprimerDansPanier(article)}>
          <i className="fa-sharp fa-solid fa-xmark" ></i>
        </button>
      </div>
    );
  };
  
Article.propTypes = {
    article: PropTypes.object.isRequired
  };