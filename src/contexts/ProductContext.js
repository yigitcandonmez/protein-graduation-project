/* eslint-disable no-use-before-define */
import { createContext, useContext, useState, useEffect } from 'react';
import axios from '../axios';

const ProductContext = createContext({});

function ProductProvider({ children }) {
	const [categories, setCategories] = useState();
	const [products, setProducts] = useState();

	useEffect(() => {
		getAllCategories();
		getAllProducts();
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

	// eslint-disable-next-line react/jsx-no-constructed-context-values
	const value = {
		categories,
		products,
		getByProductId,
		getByCategoryName,
	};

	return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
}

const useProduct = () => useContext(ProductContext);

export { ProductProvider, useProduct };
