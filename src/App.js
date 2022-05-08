/* eslint-disable prefer-const */
import React from 'react';
import { useRoutes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RouteConfig from './routes/route';

function App() {
	let routeElement = useRoutes(RouteConfig());
	return (
		<div className="App">
			<ToastContainer autoClose={2000} />
			{routeElement}
		</div>
	);
}

export default App;
