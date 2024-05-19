import { Article } from "./article"
import PropTypes from 'prop-types';

export const RelatedProduct =({article1,article2,article3,article4}) =>{
    return (
        <section className="related">
        <div>
            <h1>Related Products</h1>
        </div>
        
        <div className="list-articles">
            <Article article={article1}/>
            <Article article={article2}/>
            <Article article={article3}/>
            <Article article={article4}/>
        </div>
        <div > 
            <h1><br/>View-product</h1>
            <hr/>
        </div>
    </section>
    )
}
RelatedProduct.propTypes = {
    article1: PropTypes.object.isRequired,
    article2: PropTypes.object.isRequired,
    article3: PropTypes.object.isRequired,
    article4: PropTypes.object.isRequired,
  };