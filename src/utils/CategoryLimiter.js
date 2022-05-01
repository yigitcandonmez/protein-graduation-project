const categoryLimiter = (data) => {
	const slicedData = data.slice(0, 13);
	slicedData.unshift({ name: 'Hepsi' });
	slicedData.push({ name: 'Diğer' });
	return slicedData;
};

export default categoryLimiter;
