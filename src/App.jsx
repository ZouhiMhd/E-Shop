import ContextsProvider from "./context/ContextProvider";
import AppRouter from "./router/router.jsx";


function App() {
  
	
	return (
		<>
		<ContextsProvider>
			<AppRouter/>

		</ContextsProvider>
		</>
	)
}

export default App
