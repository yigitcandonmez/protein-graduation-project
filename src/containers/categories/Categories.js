import { ListItem, Section } from '../../components';
import { useProduct } from '../../contexts/ProductContext';
import categoryLimiter from '../../utils/CategoryLimiter';
import styles from './Categories.module.css';

function Categories() {
	const { categories } = useProduct();
	const categoryItems = categories ? categoryLimiter(categories) : [{ name: 'Loading...' }];

	return (
		<Section sectionID="categories" className={styles['home-nav']}>
			<ul className={styles['home-nav-list']}>
				<ListItem data={categoryItems} />
			</ul>
		</Section>
	);
}

export { Categories };
