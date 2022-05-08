/* eslint-disable no-restricted-syntax */
import axios from '../axios';

const ALL_CATEGORIES_ENDPOINT = '/categories';
const ALL_BRANDS_ENDPOINT = '/brands';
const ALL_COLORS_ENDPOINT = '/colors';
const ALL_USING_STATUS_ENDPOINT = '/using-statuses';
const ALL_PRODUCTS_ENDPOINT = '/products';
const USER_OFFERS_ENDPOINT = '/offers/?users_permissions_user=';
const USER_PRODUCTS_ENDPOINT = '/products/?users_permissions_user=';
const BUY_PRODUCT_ENDPOINT = '/products/';
const OFFER_PRODUCT_ENDPOINT = '/offers';
const CANCEL_OFFER_ENDPOINT = '/offers/';

export async function getAllCategories() {
	const response = await axios(ALL_CATEGORIES_ENDPOINT, { method: 'GET' });
	return response.data;
}

export async function getAllProducts() {
	const response = await axios(ALL_PRODUCTS_ENDPOINT, { method: 'GET' });
	return response.data;
}

export async function getBrands() {
	const response = await axios(ALL_BRANDS_ENDPOINT, { method: 'GET' });
	return response.data;
}

export async function getColors() {
	const response = await axios(ALL_COLORS_ENDPOINT, { method: 'GET' });
	return response.data;
}

export async function getUsingStatus() {
	const response = await axios(ALL_USING_STATUS_ENDPOINT, { method: 'GET' });
	return response.data;
}

export const getAllPromise = Promise.all([getAllCategories(), getAllProducts()]);
export const getSelectBoxItems = Promise.all([getBrands(), getColors(), getUsingStatus()]);

export async function getUserOffers(userID) {
	const response = await axios(`${USER_OFFERS_ENDPOINT}${userID}`, { method: 'GET' });
	return response.data;
}

export async function getUserProducts(userID) {
	const response = await axios(`${USER_PRODUCTS_ENDPOINT}${userID}`, {
		method: 'GET',
	});
	return response.data;
}

export async function fetchProduct(productID) {
	const response = await axios(`/products/${productID}`, { method: 'GET' });
	return response.data;
}

export async function buyProductWithId(productID) {
	const response = await axios(`${BUY_PRODUCT_ENDPOINT}${productID}`, {
		method: 'PUT',
		data: { isOfferable: false, isSold: true },
	});
	return response.data;
}

export async function responseOffer(offerID, type) {
	console.log(offerID, type);
	const response = await axios(`${CANCEL_OFFER_ENDPOINT}${offerID}`, {
		method: 'PUT',
		data: { isStatus: type === 'ACCEPT' },
	});
	return response.data;
}

export async function offerProductWithId(productID, userID, offerPrice) {
	const response = await axios(OFFER_PRODUCT_ENDPOINT, {
		method: 'POST',
		data: { users_permissions_user: userID, product: productID, offerPrice },
	});
	return response.data;
}

export async function cancelProductOfferWithId(offerID) {
	const response = await axios(`${CANCEL_OFFER_ENDPOINT}${offerID}`, { method: 'DELETE' });
	return response.data;
}

export async function addNewProduct(formData) {
	const response = await axios({
		url: '/products',
		method: 'post',
		data: formData,
		headers: { 'Content-Type': 'multipart/form-data' },
	});
	return response;
}

export async function deleteProduct(id) {
	const response = await axios(`/products/${id}`, { method: 'DELETE' });
	return response.data;
}
