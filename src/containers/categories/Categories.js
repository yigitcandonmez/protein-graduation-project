/* eslint-disable import/order */
/* eslint-disable no-unused-vars */
import cx from 'classnames';
import useWindowSize from '../../hooks/useWindowSize';
import { ListItem } from '../../components';
import { useProduct } from '../../contexts/ProductContext';
import categoryLimiter from '../../utils/CategoryLimiter';
import styles from './Categories.module.css';

const offers = [{ name: 'Teklif Aldıklarım' }, { name: 'Teklif Verdiklerim' }];

function CategoriesStartAndEnd({ width, type, children }) {
	if (type === 'offers') {
		return children;
	}

	return (
		<>
			<ListItem data={[{ name: 'Hepsi', id: 0 }]} />
			{children}
			{width > 768 ? <ListItem data={[{ name: 'Diğer', id: 14 }]} /> : null}
		</>
	);
}

function Categories({ type, justify }) {
	const { width } = useWindowSize();
	let isNeedLimit = false;
	let limitedData;
	const { categories } = type === 'offers' ? { categories: offers } : useProduct();

	if (type !== 'offers' && typeof categories !== 'undefined') {
		isNeedLimit = true;
		limitedData = width > 768 ? categoryLimiter(categories) : categories;
	}

	return (
		<ul className={cx(styles[`${type}-nav-list`], styles[`${justify}`])}>
			<CategoriesStartAndEnd type={type} width={width}>
				<ListItem data={isNeedLimit ? limitedData : categories} />
			</CategoriesStartAndEnd>
		</ul>
	);
}

export { Categories };
