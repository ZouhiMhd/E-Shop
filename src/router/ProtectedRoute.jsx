import {useContext} from 'react';
import {Navigate, Outlet, useLocation} from 'react-router-dom';
import swal from 'sweetalert';
import {UserContext} from '../context/user-context/user-context.js';

export function ProtectedRoute() {
	const {currentUser} = useContext(UserContext);
	const location = useLocation();
	if (!currentUser) {
		swal('Authentification requise', 'Il est necessaire de vous connecter à votre compte avant de continuer, Ne vous inquiétez pas, vous serez automatiquement redirigés une fois connecté.');

		return <Navigate to={`/auth?redirect=${location.pathname}`}/>
	}
	return (
		<Outlet/>
	);
}
