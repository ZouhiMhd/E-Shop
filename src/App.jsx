import ContextsProvider from "./context/ContextProvider";
import AppRouter from "./router/router.jsx";
// import { PanierContextProvider } from "./store/panier-context.jsx";
import { useEffect, useState } from "react";
import { hasAuthenticated } from "./services/AuthAPI.js";
import Auth from "./context/Auth.js";
import {axiosInstance} from "./axios.js"
import { article } from "../public/datas/ArticleList.js";

function App() {

	// const [categories, setCategories] = useState([]);
	
	// useEffect(() => {
	//   axiosInstance.get("/produit")
	// 		.then(function (response) {
	// 			if (response.status ===200) {
	// 				// setCategories(response.data);
	// 				console.log(response.data)
	// 				let allArticles = response.data
	// 				console.log(allArticles)
	// 				{
	// 					allArticles.map((article) => { console.log(article.nomCat)})
	// 				}
	// 				console.log(response.data[0].categorie.nomCat)
	// 			}
				
	// 		})
	// 		.catch(function (error) {
	// 			// en cas d’échec de la requête
	// 			console.log(error);
	// 		  })
	// }, [])
	
	 const [isAuthenticated, setIsAuthenticated] = useState(hasAuthenticated());
	
	return (
		 <Auth.Provider value = {{isAuthenticated}}>
		
			<AppRouter/>

		 </Auth.Provider>
	)
}

export default App
