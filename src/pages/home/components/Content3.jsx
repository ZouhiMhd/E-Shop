import '../../../../public/publicNath/styles/global.css'
import ArticleCard from "./ArticleCard"
import { articleMixte } from '../../../../public/datas/ArticleList';
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { axiosInstance } from '../../../axios';

function Content3 () {
    


    const [allArticles, setAllArticles] = useState([])
  
	useEffect(() => {
    fetchArticles()
	}, [])


  const fetchArticles = () => {
      axiosInstance.get("/produit")
			.then(function (response) {
				if (response.status ===200) {
				
					console.log(response.data)
					let allArticles = response.data
                    setAllArticles([allArticles[0],allArticles[1],allArticles[2],allArticles[3]]);
					console.log(allArticles)
					
				}
				
			})
			.catch(function (error) {
				// en cas d’échec de la requête
				console.log(error);
			  })
	
   }

 
    return (
        <section className="home-content3">
            <div className="elt1">
                <h3>Top picks for you</h3>
                <p>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
            </div>
            <div className="content3-List">
                <ArticleCard articles={allArticles}/>
            </div>
            <Link to="/shop" className= "content3-button">
                <p>View more</p>
            </Link>
          
        </section>
    )
}

export default Content3