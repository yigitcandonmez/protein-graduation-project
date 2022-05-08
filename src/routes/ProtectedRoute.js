/* eslint-disable no-unneeded-ternary */
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function ProtectedRoute({ redirectPath = '/auth', children }) {
	const { user } = useAuth();

	if (typeof user.id === 'undefined') {
		return <Navigate to={redirectPath} replace />;
	}

	return children ? children : <Outlet />;
}
