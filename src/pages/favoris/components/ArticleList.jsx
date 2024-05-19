import ArticleCard from '../../home/components/ArticleCard';

const ArticleList = ({ articles }) => (
  <div className='articles'>
      <ArticleCard articles={articles} />
  </div>
);

export default ArticleList