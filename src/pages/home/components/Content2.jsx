import ArticleCard from './ArticleCard';
import '../../../../public/publicNath/styles/global.css';
import { useState, useEffect } from 'react';
import { axiosInstance } from '../../../axios';

export default function Content2() {
  // const article = articleMixte;
  // const randomIndex1 = Math.floor(Math.random() * article.length);
  
  // let randomIndex2 = Math.floor(Math.random() * article.length);
  // while (randomIndex1 === randomIndex2) {
  //   randomIndex2 = Math.floor(Math.random() * article.length);
  // }
  
  // const randomElements = [article[randomIndex1], article[randomIndex2]];
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

          const randomIndex1 = Math.floor(Math.random() * allArticles.length);
          let randomIndex2 = Math.floor(Math.random() * allArticles.length);
          while (randomIndex1 === randomIndex2) {
          randomIndex2 = Math.floor(Math.random() *allArticles.length);

          setAllArticles([allArticles[randomIndex1], allArticles[randomIndex2]]);
          }
					console.log(allArticles)
					
				}
				
			})
			.catch(function (error) {
				// en cas d’échec de la requête
				console.log(error);
			  })
	
   }

  return (
    <section className="home-content2">
      <div className="Table">        
          <ArticleCard articles={allArticles} />
      </div>
    </section>
  );
}