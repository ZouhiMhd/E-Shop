import {Link, useRouteError} from 'react-dom';
import './error-page.css'

export function ErrorPage() {
	const error = useRouteError();
	console.error(error);


	return (
		<div id="error-page">
			<h1>Oops!</h1>

			<p>Désolé, une erreur est survenue</p>
			<p>
				{error.statusText || error.message}
			</p>
			<Link to="/" className="safe-return">
				Revenir en lieu sûr
			</Link>
		</div>
	);
}
