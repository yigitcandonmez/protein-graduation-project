import axios from '../axios';

const LOGIN_ENDPOINT = 'auth/local';
const REGISTER_ENDPONIT = 'auth/local/register';
const CHECK_AUTH_TOKEN_ENDPOINT = '/users/me';

export async function login(email, password) {
	const response = await axios(LOGIN_ENDPOINT, { method: 'POST', data: { identifier: email, password } });
	return response.data;
}

export async function register(email, password) {
	const response = await axios(REGISTER_ENDPONIT, { method: 'POST', data: { username: email, email, password } });
	return response.data;
}

export async function getCurrentUser() {
	const response = await axios(CHECK_AUTH_TOKEN_ENDPOINT, { method: 'GET' });
	return response.data;
}
