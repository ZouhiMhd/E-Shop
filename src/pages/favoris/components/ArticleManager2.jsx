import React, { useState, useEffect, useContext} from 'react';
import '../../../../public/publicNath/styles/global2.css';
import FilterSection from '../components/FilterSection';
import ArticleList from '../components/ArticleList';
import Pagination from '../components/Pagination';
import { FavorisContext } from '../components/FavorisContext'

const ArticleManager2 = () => {
    const {favoris, ajouterDansFavoris, retirerDansFavoris} = useContext(FavorisContext)
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [articles, setArticles] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const articlesPerPage = 16;
    const [totalPages, setTotalPages] = useState(0);
    const [numbArticles, setNumArticles] = useState(0);
    
    console.log(favoris)
    useEffect(() => {
        fetchArticles();
    }, [selectedCategory, currentPage]);

    const fetchArticles = () => {
        const allArticles = favoris
        const filteredArticles = selectedCategory === 'All'
            ? allArticles
            : allArticles.filter(article => article.categorie === selectedCategory);
                            
        const totalArticles = filteredArticles.length;
        setNumArticles(totalArticles);
                    
        const totalPagesCount = Math.ceil(totalArticles / articlesPerPage);
        setTotalPages(totalPagesCount);

        const startIndex = (currentPage - 1) * articlesPerPage;
        const endIndex = Math.min(startIndex + articlesPerPage, totalArticles);

        setArticles(filteredArticles.slice(startIndex, endIndex));
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1);
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="article-manager">
             <FilterSection
                numbArticles={numbArticles}
                selectedCategory={selectedCategory}
                onCategoryChange={handleCategoryChange}
            />
            <ArticleList articles={articles} />
            <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={handlePageChange} 
            />
        </div>
    );
};

export default ArticleManager2;


