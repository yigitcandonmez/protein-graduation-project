import React from 'react';
import { Routes, Route } from 'react-router-dom';
import loadable from '@loadable/component';
import NewProduct from './pages/new-product/NewProduct';
import Profile from './pages/profile/Profile';

const Home = loadable(() => import('./pages/home/Home'));
const Authentication = loadable(() => import('./pages/authentication/Authentication'));
const Product = loadable(() => import('./pages/product-detail/ProductDetail'));

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/auth" element={<Authentication />} />
				<Route path="/product/:productID" element={<Product />} />
				<Route path="/product/newProduct" element={<NewProduct />} />
				<Route path="/profile" element={<Profile />} />
			</Routes>
		</div>
	);
}

export default App;
