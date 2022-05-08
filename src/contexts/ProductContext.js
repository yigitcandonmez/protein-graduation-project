/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useContext, useState, useEffect } from 'react';
import * as productsApi from '../services/api/products';
import Toastify from '../utils/Toastify';
import { FullPageSpinner } from '../components/full-page-spinner';
import { useAuth } from './AuthContext';

const ProductContext = createContext({});

function ProductProvider({ children }) {
	const { user } = useAuth();

	const [categories, setCategories] = useState();
	const [products, setProducts] = useState();
	const [offers, setOffers] = useState();
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		setLoading(true);
		productsApi.getAllPromise.then((response) => {
			setCategories(response[0]);
			setProducts(response[1]);
			setLoading(false);
		});
	}, []);

	useEffect(() => {
		if (user?.id) {
			productsApi.getUserOffers(user?.id).then((response) => {
				setOffers(response);
			});
		}
	}, [user]);

	const handleReRender = () => {
		productsApi.getAllProducts().then((response) => setProducts(response));
		productsApi.getUserOffers(user.id).then((response) => {
			setOffers(response);
		});
	};

	const getUserOffers = (userID) => {
		productsApi
			.getUserOffers(userID)
			.then((responseOffers) => {
				setOffers(responseOffers);
			})
			.catch((responseError) => setError(responseError));
	};

	const buyProductWithId = (productID) => {
		productsApi
			.buyProductWithId(productID)
			.then(() => {
				handleReRender();
				Toastify('success', 'Satın alındı!');
			})
			.catch((responseError) => setError(responseError));
	};

	const offerProductWithId = (productID, userID, offerPrice) => {
		productsApi
			.offerProductWithId(productID, userID, offerPrice)
			.then(() => {
				handleReRender();
				Toastify('success', 'Teklif verildi!');
			})
			.catch((responseError) => setError(responseError));
	};

	const cancelProductOfferWithId = (offerID) => {
		setLoading(true);
		productsApi
			.cancelProductOfferWithId(offerID)
			.then(() => {
				handleReRender();
				setLoading(false);
				Toastify('success', 'Teklif geri çekildi!');
			})
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
		handleReRender,
	};

	return <ProductContext.Provider value={value}>{loading ? <FullPageSpinner /> : children}</ProductContext.Provider>;
}

const useProduct = () => useContext(ProductContext);

export { ProductProvider, useProduct };
