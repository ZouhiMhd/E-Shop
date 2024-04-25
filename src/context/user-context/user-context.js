import {createContext} from 'react';

export const UserContext = createContext({
	currentUser: null,
	defineCurrentUser: (user) => {
		if (user === null)
			return;
		return;
	}
});

