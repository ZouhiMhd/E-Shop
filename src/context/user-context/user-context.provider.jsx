import React, {createContext, useContext, useState} from 'react';
import {UserContext} from './user-context.js';


const CURRENT_USER_KEY = import.meta.env.VITE_CURRENT_USER_KEY || 'currentUser';

export function UserContextProvider({children}) {

	const localUser = localStorage.getItem(CURRENT_USER_KEY);
	let user;
	if (localUser) {
		user = JSON.parse(localUser);
	}

	const [currentUser, setCurrentUser] = useState(user);

	//toggle method for User
	const defineCurrentUser = (user) => {
		localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
		setCurrentUser(user);
	};


	return (
		<UserContext.Provider value={{currentUser, defineCurrentUser}}>
			{children}
		</UserContext.Provider>
	);
}

export const UseUserContext = () => useContext(UserContext);
