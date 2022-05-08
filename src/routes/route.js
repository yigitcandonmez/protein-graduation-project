/* eslint-disable prefer-const */
import loadable from '@loadable/component';
import { FullPageSpinner } from '../components';
import { AppLayout } from '../layouts/AppLayout';
import ProtectedRoute from './ProtectedRoute';

const Home = loadable(() => import('../pages/home/Home'), { fallback: <FullPageSpinner /> });
const Authentication = loadable(() => import('../pages/authentication/Authentication'));
const ProductDetail = loadable(() => import('../pages/product-detail/ProductDetail'), {
	fallback: <FullPageSpinner />,
});
const NewProduct = loadable(() => import('../pages/new-product/NewProduct'));
const Profile = loadable(() => import('../pages/profile/Profile'));

export default function RouteConfig() {
	let routes = [
		{
			path: '/',
			element: <AppLayout />,
			children: [
				{ index: true, element: <Home /> },
				{ path: '/product/:productID', element: <ProductDetail /> },
				{
					element: <ProtectedRoute />,
					children: [
						{ path: '/product/newProduct', element: <NewProduct /> },
						{ path: '/profile', element: <Profile /> },
					],
				},
			],
		},
		{ path: '/auth', element: <Authentication /> },
	];
	return routes;
}
