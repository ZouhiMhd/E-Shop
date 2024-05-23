import React, { useState, useEffect } from 'react';
import '../../../../public/publicNath/styles/global2.css';
import FilterSection from './FilterSection';
import ArticleList from './ArticleList';
import Pagination from './Pagination';
import { autreArticles} from "../../../../public/datas/ArticleList"
import {axiosInstance} from "../../../axios.js"

const ArticleManager = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [articles, setArticles] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const articlesPerPage = 16;
    const [totalPages, setTotalPages] = useState(0);
    const [numbArticles, setNumArticles] = useState(0);
	
	// useEffect(() => {
	//   axiosInstance.get("/produit")
	// 		.then(function (response) {
	// 			if (response.status ===200) {
	// 				console.log(response.data[0].categorie.nomCat)
	// 			}
				
	// 		})
	// 		.catch(function (error) {
	// 			// en cas d’échec de la requête
	// 			console.log(error);
	// 		  })
	// }, [])
    
    useEffect(() => {
        fetchArticles();
    }, [selectedCategory, currentPage]);

    const fetchArticles = () => {

        axiosInstance.get("/produit")
			.then(function (response) {
				if (response.status ===200) {
					console.log(response.data[0].categorie.nomCat)


        const allArticles = response.data
        const filteredArticles = selectedCategory === 'All'
            ? allArticles
            : allArticles.filter(article => article.categorie.nomCat === selectedCategory);
                            
        const totalArticles = filteredArticles.length;
        setNumArticles(totalArticles);
                    
        const totalPagesCount = Math.ceil(totalArticles / articlesPerPage);
        setTotalPages(totalPagesCount);

        const startIndex = (currentPage - 1) * articlesPerPage;
        const endIndex = Math.min(startIndex + articlesPerPage, totalArticles);

        setArticles(filteredArticles.slice(startIndex, endIndex));
				}			
			})
			.catch(function (error) {
				// en cas d’échec de la requête
				console.log(error);
			  })

        // const allArticles = tousArticles
        // const filteredArticles = selectedCategory === 'All'
        //     ? allArticles
        //     : allArticles.filter(article => article.categorie === selectedCategory);
                            
        // const totalArticles = filteredArticles.length;
        // setNumArticles(totalArticles);
                    
        // const totalPagesCount = Math.ceil(totalArticles / articlesPerPage);
        // setTotalPages(totalPagesCount);

        // const startIndex = (currentPage - 1) * articlesPerPage;
        // const endIndex = Math.min(startIndex + articlesPerPage, totalArticles);

        // setArticles(filteredArticles.slice(startIndex, endIndex));
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
            {/* <ArticleList articles={articles} /> */}
            <ArticleList articles={autreArticles} />
            <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </div>
    );
};

export default ArticleManager;


;