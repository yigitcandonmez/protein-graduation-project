import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://bootcamp.akbolat.net',
});

export default instance;
