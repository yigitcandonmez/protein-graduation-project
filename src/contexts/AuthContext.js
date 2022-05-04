/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useContext, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from '../services/axios';
import { FullPageSpinner } from '../components';
import * as usersApi from '../services/api/users';

const AuthContext = createContext();

export function AuthProvider({ children }) {
	const [user, setUser] = useState({});
	const [loading, setLoading] = useState(false);
	const [loadingInitial, setLoadingInitial] = useState(true);
	const [error, setError] = useState();
	const [cookies, setCookie, removeCookie] = useCookies(['AUTH_TOKEN']);

	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		if (error) setError(null);
	}, [location.pathname]);

	useEffect(() => {
		if (cookies.AUTH_TOKEN) {
			axios.defaults.headers.common.Authorization = `Bearer ${cookies.AUTH_TOKEN}`;
			usersApi
				.getCurrentUser()
				.then((responseUser) => setUser(responseUser))
				.catch((responseError) => setError(responseError))
				.finally(() => setLoadingInitial(false));
		} else {
			setLoadingInitial(false);
		}
	}, [cookies.AUTH_TOKEN]);

	const login = (email, password) => {
		setLoading(true);
		usersApi
			.login(email, password)
			.then((response) => {
				setUser(response.user);
				setCookie('AUTH_TOKEN', response.jwt);
				axios.defaults.headers.common.Authorization = `Bearer ${cookies.AUTH_TOKEN}`;
				navigate('/');
			})
			.catch((responseError) => setError(responseError))
			.finally(() => setLoading(false));
	};

	const register = (email, password) => {
		setLoading(true);
		usersApi
			.register(email, password)
			.then((response) => {
				setUser(response.user);
				setCookie('AUTH_TOKEN', response.jwt);
				axios.defaults.headers.common.Authorization = `Bearer ${cookies.AUTH_TOKEN}`;
				navigate('/');
			})
			.catch((responseError) => setError(responseError))
			.finally(() => setLoading(false));
	};

	const logout = () => {
		removeCookie('AUTH_TOKEN');
	};

	const value = {
		user,
		loading,
		error,
		login,
		logout,
		register,
	};

	return <AuthContext.Provider value={value}>{loadingInitial ? <FullPageSpinner /> : children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
