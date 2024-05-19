import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Content6 ({img1, img2, img3, img4}) {
    return (
        <section className="related" >
     
        <div className="list-articles" style={{height : "100px"}}>
                <div className="article-card">
                    <div className="article-photo">
                        <img src={img1} alt="" />
                    </div>
                    <Link to='/shop'><h1 className="sum">Habit pour Hommes</h1> </Link>            
                </div>
                <div className="article-card">
                    <div className="article-photo">
                        <img src={img2} alt="" />
                    </div>
                    <Link to='/shop'><h1 className="sum">Habit pour Femmes</h1></Link>                
                </div>
                <div className="article-card">
                    <div className="article-photo">
                        <img src={img3} alt="" />
                    </div>
                    <Link to='/shop'><h1 className="sum">Habit pour Enfants</h1></Link>                
                </div>
                <div className="article-card">
                    <div className="article-photo">
                        <img src={img4} alt="" />
                    </div>
                    <Link to='/shop'><h1 className="sum">Habit pour Tous genre</h1></Link>             
                </div>
        </div>
    </section>
    )
}
Content6.propTypes = {
    img1: PropTypes.object.isRequired,
    img2: PropTypes.object.isRequired,
    img3: PropTypes.object.isRequired,
    img4: PropTypes.object.isRequired,
  };
  export default Content6