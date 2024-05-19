import ContextsProvider from "./context/ContextProvider";
import AppRouter from "./router/router.jsx";
// import { PanierContextProvider } from "./store/panier-context.jsx";
import { useEffect, useState } from "react";
import { hasAuthenticated } from "./services/AuthAPI.js";
import Auth from "./context/Auth.js";
import axios from "axios";

function App() {
	
	// useEffect(() => {
	//   axios.get("http://192.168.237.30:5000/api/produit")
	// 		.then(function (response) {
	// 			if (response.status ===200) {
	// 				console.log(response)
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
