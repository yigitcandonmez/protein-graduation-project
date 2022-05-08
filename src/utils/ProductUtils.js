export function getProductById(products, productID) {
	return products?.find((e) => e.id === productID) || false;
}

export function getByCategoryName(products, categories, categoryName) {
	if (categoryName === 'hepsi') return products;
	if (categoryName === 'diğer') {
		const lastCateogires = categories.slice(13, categories.length);
		const otherProducts = products.filter((product) => {
			return product.category.name === lastCateogires[0].name && lastCateogires[1].name && lastCateogires[2].name;
		});
		return otherProducts;
	}
	return products?.filter((e) => e.category.name?.toLowerCase() === categoryName);
}

export function getUserOffer(offers, productID) {
	return offers?.filter((e) => e.product?.id === productID);
}
