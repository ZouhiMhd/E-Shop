import {lazy, Suspense} from 'react';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import {Layout} from './Layout.jsx';
import {ErrorPage} from './error-page'
import Auth from "../context/Auth.js";
import { useContext } from 'react';
import {CartContext} from '../pages/shop/components/CartContext'


 
const HomeUI = lazy(() => import('../pages/home/home.ui'));
const CheckoutUI = lazy(() => import('../pages/checkout/checkout.ui'));
const SinglgeProductUI = lazy(() => import('../pages/singleprod/singleprod.ui'));
const CartUI = lazy(() => import('../pages/cart/cart.ui'));
const ShopUI = lazy(() => import('../pages/shop/shop.ui'));
const FavorisUI = lazy(() => import('../pages/favoris/favoris.ui'));
const ContactUI = lazy(() => import('../pages/contact/contact.ui'));
let RegisterUI = lazy(() => import('../pages/register/register.ui'));
let LoginUI = lazy(() => import('../pages/login/login.ui'));
let CompteUI = lazy(() => import('../pages/compte/compte.ui'));
const AboutUI = lazy(() => import('../pages/about/about.ui'));

export default function AppRouter() {
	
	const { cart, ajouterDansPanier, supprimerDansPanier, hasAuthenticated, setHasAuthenticated} = useContext(CartContext)

	if(hasAuthenticated){
		RegisterUI = CompteUI;
	}
	
	
	const router = createBrowserRouter([
		{
			path: '/',
			errorElement: <ErrorPage/>,
			element: <Layout/>,
			children: [
				{
					path: '',
					index: true,
					element: <HomeUI/>
				},
				{
					path: 'checkout',
					element: <CheckoutUI/>,
				},
				{
					path: 'about',
					element: <AboutUI/>,
				},
				{
					path: 'compte',
					element: <CompteUI/>,
				},
				{
					path: 'singleprod',
					element: <SinglgeProductUI/>,
				},
				{
					path: 'cart',
					element: <CartUI/>,
				},
				{
					path: 'shop',
					element: <ShopUI/>,
				},
				{
					path: 'favoris',
					element: <FavorisUI/>,
				},
				{
					path: 'contact',
					element: <ContactUI/>,
				},
				{
					path: 'register',
					element: <RegisterUI/>,
				},
				{
					path: 'login',
					element: <LoginUI/>,
				}

			],
		}
	])

	return <Suspense>
		<RouterProvider router={router}/>
	</Suspense>
}


