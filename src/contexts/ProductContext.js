/* eslint-disable no-use-before-define */
import { createContext, useContext, useState, useEffect } from 'react';
import axios from '../axios';

const ProductContext = createContext({});

function ProductProvider({ children }) {
	const [categories, setCategories] = useState();
	const [products, setProducts] = useState();
	const [offers, setOffers] = useState();

	useEffect(() => {
		getAllCategories();
		getAllProducts();
		getMeOffers();
	}, []);

	const getAllCategories = async () => {
		try {
			const response = await axios({
				url: '/categories',
				method: 'GET',
			});

			setCategories(response.data);
		} catch (error) {
			console.error(error);
		}
	};

	const getAllProducts = async () => {
		try {
			const response = await axios({
				url: '/products',
				method: 'GET',
			});
			console.log('ÇALIŞTI');
			setProducts(response.data);
		} catch (error) {
			console.error(error);
		}
	};

	const getByProductId = (productID) => {
		return products?.find((e) => e.id === productID);
	};

	const getByCategoryName = (categoryName) => {
		return products?.filter((e) => e.category.name === categoryName);
	};

	const getMeOffers = async (userID) => {
		try {
			const response = await axios({
				url: `/offers/?users_permissions_user=${userID}`,
				method: 'GET',
			});
			setOffers(response.data);
		} catch (error) {
			console.error(error);
		}
	};

	const buyProductWithId = async (productID) => {
		const product = getByProductId(productID);
		const response = await axios({
			url: `/products/${productID}`,
			method: 'PUT',
			data: {
				...product,
				isOfferable: false,
				isSold: true,
			},
		}).then(() => getAllProducts());
		console.log(response);
	};

	const offerProductWithId = async (productID, userID) => {
		try {
			const response = await axios({
				url: `/offers`,
				method: 'POST',
				data: {
					users_permissions_user: userID,
					product: productID,
					offerPrice: 500,
				},
			}).then(() => getAllProducts());
			console.log(response);
		} catch (error) {
			console.log(error);
		}
	};

	// eslint-disable-next-line react/jsx-no-constructed-context-values
	const value = {
		categories,
		products,
		offers,
		getByProductId,
		getByCategoryName,
		getMeOffers,
		offerProductWithId,
		buyProductWithId,
	};

	return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
}

const useProduct = () => useContext(ProductContext);

export { ProductProvider, useProduct };
