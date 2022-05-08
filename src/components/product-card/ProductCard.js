/* eslint-disable react/jsx-props-no-spreading */
import { Card } from '../card';
import { Image } from '../image';
import { CustomLink } from '../link';
import { Span } from '../span';
import styles from './ProductCard.module.css';
import NotFound from '../../assets/images/notfound.webp';

function ProductCard({ product }) {
	const type = typeof product.image?.formats?.small?.url !== 'undefined' ? 'src' : 'localSrc';
	const srcFiledProps = {
		[type]: type === 'src' ? product.image?.formats?.small?.url : NotFound,
	};
	return (
		<CustomLink key={product.id} to={`/product/${product.id}`}>
			<Card className={styles.card}>
				<Image
					{...srcFiledProps}
					alt={product.name}
					loading="lazy"
					height="59.6%"
					width="100%"
					className={styles.image}
				/>
				<div className={styles['card-row']}>
					<div className={styles.flex}>
						<Span className={styles.brand}>{product.brand}</Span>
						<Span title="Renk:">{product.color}</Span>
					</div>
					<Span className={styles.price}>{product.price} TL</Span>
				</div>
			</Card>
		</CustomLink>
	);
}

export { ProductCard };
