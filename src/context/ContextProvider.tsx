import {UserContextProvider} from './user-context/user-context.provider.jsx';

 export default function ContextsProvider({children}: { children: React.ReactNode }) {
  return <>{children}</>;

 	return (
 		<UserContextProvider>
 			{children}
 			{/* <FilterContextProvider>{children}</FilterContextProvider>; */}
 		</UserContextProvider>
 	);
 }

//provider du contexte

// import { AuthContext } from "./Auth";
// import { Children, useState } from "react";
// export const Provider = ({Children} ) => {
// 	const [isAuthenticated, setIsAuthenticated] = useState(false)
// 	return (
// 		<AuthContext.Provider value={{isAuthenticated, setIsAuthenticated}}>
// 			{Children}
// 		</AuthContext.Provider>
// 	)

// }
