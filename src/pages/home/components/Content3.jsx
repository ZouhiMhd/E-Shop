import '../../../../public/publicNath/styles/global.css'
import ArticleCard from "./ArticleCard"
import { articleMixte } from '../../../../public/datas/ArticleList';
import { Link } from 'react-router-dom'

function Content3 () {
    const article = articleMixte;
    return (
        <section className="home-content3">
            <div className="elt1">
                <h3>Top picks for you</h3>
                <p>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
            </div>
            <div className="content3-List">
                <ArticleCard articles={article}/>
            </div>
            <Link to="/shop" className= "content3-button">
                <p>View more</p>
            </Link>
          
        </section>
    )
}

export default Content3