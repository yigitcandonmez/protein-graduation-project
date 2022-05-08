export function getProductById(products, productID) {
	return products?.find((e) => e.id === productID) || false;
}

export function getByCategoryName(products, categoryName) {
	if (categoryName === 'hepsi') return products;
	return products?.filter((e) => e.category.name?.toLowerCase() === categoryName);
}

export function getUserOffer(offers, productID) {
	return offers?.filter((e) => e.product?.id === productID);
}
