import { ListItem } from '../../components';
import { useProduct } from '../../contexts/ProductContext';
import categoryLimiter from '../../utils/CategoryLimiter';
import styles from './Categories.module.css';

function Categories() {
	const { categories } = useProduct();
	const categoryItems = categories ? categoryLimiter(categories) : [{ name: 'Yükleniyor...' }];
	return (
		<ul className={styles['home-nav-list']}>
			<ListItem data={categoryItems} />
		</ul>
	);
}

export { Categories };
