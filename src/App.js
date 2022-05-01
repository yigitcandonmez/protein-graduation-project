import React from 'react';
import { Routes, Route } from 'react-router-dom';
import loadable from '@loadable/component';

const Home = loadable(() => import('./pages/home/Home'));
const Authentication = loadable(() => import('./pages/authentication/Authentication'));
const Product = loadable(() => import('./pages/product/Product'));

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/auth" element={<Authentication />} />
				<Route path="/product/:productID" element={<Product />} />
			</Routes>
		</div>
	);
}

export default App;
