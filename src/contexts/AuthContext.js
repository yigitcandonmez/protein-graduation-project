/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useContext, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import toastify from '../utils/Toastify';
import axios from '../services/axios';
import { FullPageSpinner } from '../components';
import * as usersApi from '../services/api/users';

const AuthContext = createContext();

export function AuthProvider({ children }) {
	const [user, setUser] = useState();
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
		if (typeof cookies.AUTH_TOKEN !== 'undefined') {
			axios.defaults.headers.common.Authorization = `Bearer ${cookies.AUTH_TOKEN}`;
			usersApi
				.getCurrentUser()
				.then((responseUser) => setUser(responseUser))
				.catch((responseError) => setError(responseError))
				.finally(() => setLoadingInitial(false));
		} else {
			setUser({});
			setLoadingInitial(false);
		}
	}, [cookies.AUTH_TOKEN]);

	const authenticationSuccesfull = (token, toastLabel) => {
		setCookie('AUTH_TOKEN', token, { path: '/' });
		axios.defaults.headers.common.Authorization = `Bearer ${token}`;
		navigate('/');
		toastify('success', `Başarılı bir şekilde ${toastLabel}`);
	};

	const login = (email, password) => {
		setLoading(true);
		usersApi
			.login(email, password)
			.then((response) => {
				setUser(response.user);
				authenticationSuccesfull(response.jwt, 'giriş yaptınız');
			})
			.catch((responseError) => {
				setError(responseError);
				if (responseError.code === 'ERR_BAD_REQUEST') {
					toastify('error', 'Kullanıcı adı veya şifre hatalı.');
				} else {
					toast.error('error', 'Beklenmedik bir hata oluştu.');
				}
			})
			.finally(() => setLoading(false));
	};

	const register = (email, password) => {
		setLoading(true);
		usersApi
			.register(email, password)
			.then((response) => {
				setUser(response.user);
				authenticationSuccesfull(response.jwt, 'üye oldunuz');
			})
			.catch((responseError) => {
				setError(responseError);
				if (responseError.code === 'ERR_BAD_REQUEST') {
					toastify('error', 'Bu e-posta adresi kullanılıyor.');
				} else {
					toast('error', 'Beklenmedik bir hata oluştu.');
				}
			})
			.finally(() => setLoading(false));
	};

	const logout = () => {
		axios.defaults.headers.common.Authorization = ``;
		removeCookie('AUTH_TOKEN', { path: '/' });
	};

	const value = {
		user,
		loading,
		error,
		login,
		logout,
		register,
		setLoadingInitial,
	};

	return <AuthContext.Provider value={value}>{loadingInitial ? <FullPageSpinner /> : children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
