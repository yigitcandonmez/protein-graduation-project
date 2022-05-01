import { useEffect } from 'react';

const useDocumentTitle = (initialValue = '') => {
	useEffect(() => {
		document.title = `İkinci El Project | ${initialValue}`;
	}, [initialValue]);
};

export default useDocumentTitle;
