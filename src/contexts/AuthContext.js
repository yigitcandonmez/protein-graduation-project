/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useContext, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import axios from '../axios';
import { FullPageSpinner } from '../components';

const AuthContext = createContext();

export function AuthProvider(props) {
	const [data, setData] = useState({});
	const [loading, setLoading] = useState(false);
	const [cookies, setCookie, removeCookie] = useCookies(['AUTH_TOKEN']);

	useEffect(() => {
		if (!data.id) {
			getMe();
		}
	}, []);

	if (loading) {
		return <FullPageSpinner />;
	}

	const getMe = async () => {
		if (cookies.AUTH_TOKEN) {
			setLoading(true);
			axios.defaults.headers.common.Authorization = `Bearer ${cookies.AUTH_TOKEN}`;
			try {
				const me = await axios({
					url: '/users/me',
					method: 'GET',
				});
				setData(me.data);
			} catch (error) {
				console.error(error);
			}
			setLoading(false);
		}
	};

	const login = async (url, email, password) => {
		try {
			const response = await axios({
				url,
				method: 'POST',
				data: {
					identifier: email,
					password,
				},
			});
			setCookie('AUTH_TOKEN', response.data.jwt);
			setData(response.data.user);
		} catch (error) {
			console.error(error);
		}
	};

	const register = async (url, email, password) => {
		try {
			const response = await axios({
				url,
				method: 'POST',
				data: {
					username: email,
					email,
					password,
				},
			});
			setCookie('AUTH_TOKEN', response.data.jwt);
			setData(response.data.user);
		} catch (error) {
			console.error(error);
		}
	};

	const logout = () => {
		removeCookie('AUTH_TOKEN');
	};

	const value = {
		data,
		login,
		register,
		logout,
		getMe,
	};

	return <AuthContext.Provider value={value} {...props} />;
}

export const useAuth = () => useContext(AuthContext);
