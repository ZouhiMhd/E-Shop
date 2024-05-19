import PropTypes from 'prop-types';

export const Article = ({ article }) => {
    return (
      <div className="one-article">
        <div>
          
            <img src={article.img} alt={article.nom} />
          
        </div>
        <div className="quantity-article">
          
            <div>{article.nom}</div>
        
          <div>
            <ul>
              
                <li>{article.qte}</li>
                
              <li style={{ margin: "10px" }}> x </li>
             
                <li className="sum">
                  Rs.{article.prix}
                </li>
          
            </ul>
          </div>
        </div>
        <button className="btn-no">
          <i className="fa-sharp fa-solid fa-xmark"></i>
        </button>
      </div>
    );
  };
  
Article.propTypes = {
    article: PropTypes.object.isRequired
  };