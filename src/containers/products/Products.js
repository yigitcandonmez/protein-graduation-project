/* eslint-disable no-unused-vars */
import { useSearchParams } from 'react-router-dom';
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll';
import { useProduct } from '../../contexts/ProductContext';
import { ProductCard } from '../../components/product-card/ProductCard';
import { getByCategoryName } from '../../utils/ProductUtils';
import { Span } from '../../components/span';
import styles from './Products.module.css';

function Products() {
	const infinitieScroll = useInfiniteScroll();
	const { products, categories } = useProduct();

	const [searchParams, setSearchParams] = useSearchParams();
	const active = searchParams.get('categoryName') || 'hepsi';
	const filteredProducts = getByCategoryName(products, categories, active);

	if (filteredProducts?.length < 1) {
		return (
			<Span key="0" className={styles.productsSpan}>
				Aradığınız kategoride ürün bulunamadı.
			</Span>
		);
	}

	return filteredProducts?.slice(0, infinitieScroll).map((product) => <ProductCard product={product} />);
}

export { Products };
