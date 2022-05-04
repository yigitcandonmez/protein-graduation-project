/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useContext, useState, useEffect } from 'react';
import * as productsApi from '../services/api/products';

const ProductContext = createContext({});

function ProductProvider({ children }) {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [categories, setCategories] = useState();
	const [products, setProducts] = useState();
	const [offers, setOffers] = useState();

	useEffect(() => {
		setLoading(true);
		productsApi.getAllPromise.then((response) => {
			setCategories(response[0]);
			setProducts(response[1]);
			setLoading(false);
		});
	}, []);

	const handleReRender = () => {
		productsApi.getAllProducts().then((response) => setProducts(response));
	};

	const getUserOffers = (userID) => {
		productsApi
			.getUserOffers(userID)
			.then((responseOffers) => setOffers(responseOffers))
			.catch((responseError) => setError(responseError));
	};

	const buyProductWithId = (productID) => {
		productsApi
			.buyProductWithId(productID)
			.then(() => handleReRender())
			.catch((responseError) => setError(responseError));
	};

	const offerProductWithId = (productID, userID, offerPrice) => {
		productsApi
			.offerProductWithId(productID, userID, offerPrice)
			.then(() => handleReRender())
			.catch((responseError) => setError(responseError));
	};

	const cancelProductOfferWithId = (offerID) => {
		productsApi
			.cancelProductOfferWithId(offerID)
			.then(() => handleReRender())
			.catch((responseError) => setError(responseError));
	};

	const value = {
		categories,
		products,
		offers,
		loading,
		error,
		getUserOffers,
		buyProductWithId,
		offerProductWithId,
		cancelProductOfferWithId,
	};

	return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
}

const useProduct = () => useContext(ProductContext);

export { ProductProvider, useProduct };
