const categoryLimiter = (data) => {
	const slicedData = data.slice(0, 13);
	return slicedData;
};

export default categoryLimiter;
