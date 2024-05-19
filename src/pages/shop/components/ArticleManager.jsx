import React, { useState, useEffect } from 'react';
import '../../../../public/publicNath/styles/global2.css';
import FilterSection from './FilterSection';
import ArticleList from './ArticleList';
import Pagination from './Pagination';
import { tousArticles } from "../../../../public/datas/ArticleList"

const ArticleManager = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [articles, setArticles] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const articlesPerPage = 16;
    const [totalPages, setTotalPages] = useState(0);
    const [numbArticles, setNumArticles] = useState(0);
    
    useEffect(() => {
        fetchArticles();
    }, [selectedCategory, currentPage]);

    const fetchArticles = () => {
        const allArticles = tousArticles
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

export default ArticleManager;


//Lorsqu'il faudra se connecter via une API

// const fetchArticles = async () => {
//     try {
//         const response = await axios.get('YOUR_API_ENDPOINT_HERE');
//         const allArticles = response.data; // Assuming your API returns an array of articles
//         const filteredArticles = selectedCategory === 'All'
//             ? allArticles
//             : allArticles.filter(article => article.category === selectedCategory);
//         const totalArticles = filteredArticles.length;
//         setNumArticles(totalArticles);
//         const totalPagesCount = Math.ceil(totalArticles / articlesPerPage);
//         setTotalPages(totalPagesCount);
//         const startIndex = (currentPage - 1) * articlesPerPage;
//         const endIndex = Math.min(startIndex + articlesPerPage, totalArticles);
//         setArticles(filteredArticles.slice(startIndex, endIndex));
//         setError(null); // Clear any previous errors
//     } catch (error) {
//         console.error('Error fetching articles:', error);
//         setError('An error occurred while fetching articles. Please try again later.');
//     }
//};