import { useState } from 'react';

export const useInfiniteScroll = (start = 20, pace = 10) => {
	const [limit, setLimit] = useState(start);
	window.onscroll = () => {
		if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
			setLimit(limit + pace);
		}
	};
	return limit;
};
