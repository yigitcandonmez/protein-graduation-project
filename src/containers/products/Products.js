import { useProduct } from '../../contexts/ProductContext';
import { Card, Image, CustomLink, Span } from '../../components';
import styles from './Products.module.css';

export default function Products() {
	const { products } = useProduct();

	return products?.map((el) => (
		<CustomLink key={el.id} to={`/product/${el.id}`}>
			<Card className={styles.card}>
				<Image src={el.image?.formats.small?.url} alt={el.name} height="80.6%" width="100%" className={styles.image} />
				<div className={styles['card-row']}>
					<div className={styles.flex}>
						<Span className={styles.brand}>{el.brand}</Span>
						<Span title="Renk:">{el.color}</Span>
					</div>
					<Span className={styles.price}>{el.price} TL</Span>
				</div>
			</Card>
		</CustomLink>
	));
}
