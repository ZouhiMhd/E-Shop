import {lazy, Suspense} from 'react';
import {
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom';
import {Layout} from './Layout.jsx';
import {ErrorPage} from './error-page'

const AuthUI = lazy(() => import('../pages/auth/auth.ui'));
const HomeUI = lazy(() => import('../pages/home/home.ui'));
const CheckoutUI = lazy(() => import('../pages/checkout/checkout.ui'));
const SinglgeProductUI = lazy(() => import('../pages/singleprod/singleprod.ui'));
const CartUI = lazy(() => import('../pages/cart/cart.ui'));
const ShopUI = lazy(() => import('../pages/shop/shop.ui'));
const ContactUI = lazy(() => import('../pages/contact/contact.ui'));
const RegisterUI = lazy(() => import('../pages/register/register.ui'));
const LoginUI = lazy(() => import('../pages/login/login.ui'));
const CompteUI = lazy(() => import('../pages/compte/compte.ui'));
const AboutUI = lazy(() => import('../pages/about/about.ui'));

export default function AppRouter() {
	const router = createBrowserRouter([
		{
			path: '/',
			errorElement: <ErrorPage/>,
			element: <Layout/>,
			children: [
				{
					path: 'home',
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
		},
		{
			path: 'auth',
			element: <AuthUI/>,
		},

	])
	return <Suspense>
		<RouterProvider router={router}/>
	</Suspense>
}


