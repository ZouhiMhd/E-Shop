import {Outlet} from 'react-router-dom';
import {NavBar} from "../components/nav-bar.jsx";
import { Footer } from '../components/footer.jsx';

export function Layout() {
	return (
		<>
			<NavBar/>

			<section>
			<Outlet/>
			</section>

			<Footer/>
		</>
	);
}
