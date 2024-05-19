import PropTypes from 'prop-types';

export const Article = ({ article }) => {
    return (
      <div className="list-articles">
        <div>
          {article.map((e, index) => (
            <img key={index} src={e.img} alt={e.nom} />
            // eslint-disable-next-line react/no-array-index-key
          ))}
          
        </div>
        <div className="quantity-article">
          <div>
          {article.map((e, index) => (
            <h1 className="sum" key={index}>{e.nom}</h1>
            // eslint-disable-next-line react/no-array-index-key
          ))}
          </div>
          <div>
            <ul>
              <br/><br/>
              {article.map((e, index) => (
                <li key={index}>{e.description}</li>
                // eslint-disable-next-line react/no-array-index-key
              ))}
              
              {article.map((e, index) => (
                <li key={index} className="sum">
                  Rs.{e.prix}
                </li>
                // eslint-disable-next-line react/no-array-index-key
              ))}
            </ul>
          </div>
        </div>
        <button className="btn-no">
          <i className="fa fa-eye"></i>
        </button>
      </div>
    );
  };
  
Article.propTypes = {
    article: PropTypes.object.isRequired
  };