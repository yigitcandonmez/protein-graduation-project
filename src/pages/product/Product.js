import { useParams } from 'react-router-dom';
import Helmet from 'react-helmet';
import styles from './Product.module.css';
import { Container, Card, Image, Heading, Button, Span, Section } from '../../components';
import { Header } from '../../layouts/Header';
import { useProduct } from '../../contexts/ProductContext';

function Product() {
	const { getByProductId } = useProduct();
	const { productID } = useParams();
	const product = getByProductId(+productID);

	return (
		<>
			<Helmet
				encodeSpecialCharacters
				titleTemplate="%s - İkinciElProject.com'a özel fırsatlarla! "
				defaultTitle="İkinciElProject"
			>
				<title>{product?.name}</title>
				<meta name="description" content={product?.description} />
				<meta property="og:description" content={product?.description} />
			</Helmet>
			<Header />
			<Section sectionID="single-product-card">
				<Container size="large">
					<Card className={styles.card}>
						<Image src={product?.image.url} className={styles['single-card-image']} />
						<div className={styles['single-card-content']}>
							<Heading text={`${product?.name}`} size="large" />
							<div className={styles['single-card-info']}>
								<Span title="Marka:">{product?.brand}</Span>
								<Span title="Renk:">{product?.color}</Span>
								<Span title="Kullanım Durumu:">{product?.status}</Span>
							</div>
							<div className={styles['single-card-prices']}>
								<Span className={styles['single-card-price']}>{product?.price} TL</Span>
								<Span className={styles['single-card-offer']} title="Verilen Teklif:">
									119.90 TL
								</Span>
							</div>
							<div className={styles['single-card-actions']}>
								<Button primary label="Satın Al" />
								<Button label="Teklifi Geri Çek" />
							</div>
						</div>
					</Card>
				</Container>
			</Section>
		</>
	);
}

export default Product;
