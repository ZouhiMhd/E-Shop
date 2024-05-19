import ArticleCard from './ArticleCard';
import '../../../../public/publicNath/styles/global.css';
import { articleMixte } from '../../../../public/datas/ArticleList';

export default function Content2() {
  const article = articleMixte;
  const randomIndex1 = Math.floor(Math.random() * article.length);
  
  let randomIndex2 = Math.floor(Math.random() * article.length);
  while (randomIndex1 === randomIndex2) {
    randomIndex2 = Math.floor(Math.random() * article.length);
  }
  
  const randomElements = [article[randomIndex1], article[randomIndex2]];
  

  return (
    <section className="home-content2">
      <div className="Table">        
          <ArticleCard articles={randomElements} />
      </div>
    </section>
  );
}