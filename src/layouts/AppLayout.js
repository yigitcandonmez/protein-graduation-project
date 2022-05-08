/* eslint-disable no-unneeded-ternary */
import { Outlet } from 'react-router-dom';
import { Header } from './Header';

function AppLayout({ children }) {
	return (
		<>
			<Header />
			{children ? children : <Outlet />}
		</>
	);
}

export { AppLayout };
