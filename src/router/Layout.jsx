import {Outlet} from 'react-router-dom';
import {NavBar} from "../components/nav-bar.jsx";
import { Footer } from '../components/footer.jsx';
import { PopupCart } from '../components/popup-cart.jsx';
export function Layout() {
	return (
		<>
			<div className="popup" id="popup" style={{
            justifyContent : "center"
        }}>
				<PopupCart/>
			</div>
			<div id="conteneur">
				<div>
				<NavBar/>
				</div>
				<Outlet/>
				<Footer/>
			</div>
		</>
	);
}
