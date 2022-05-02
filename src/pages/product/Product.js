/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Helmet from 'react-helmet';
import styles from './Product.module.css';
import { Container, Card, Image, Heading, Button, Span, Section, Popup } from '../../components';
import { Header } from '../../layouts/Header';
import { useProduct } from '../../contexts/ProductContext';
import Buy from '../../containers/popup-modals/Buy';

function Product() {
	const [popup, setPopup] = useState(false);
	const { getByProductId, buyProductWithId, offers } = useProduct();
	const { productID } = useParams();
	const product = getByProductId(+productID);

	return (
		<>
			<Helmet
				encodeSpecialCharacters
				titleTemplate="%s - İkinciElProject.com'a özel fırsatlarla!"
				defaultTitle="İkinciElProject"
			>
				<title>{product?.name}</title>
				<meta name="description" content={product?.description} />
				<meta property="og:description" content={product?.description} />
			</Helmet>
			<Popup display={popup}>
				<Buy
					handleAccept={() => {
						buyProductWithId(+productID).then(() => {
							setPopup(false);
						});
					}}
					handleReject={() => {
						setPopup(false);
					}}
				/>
			</Popup>
			<Header />
			<Section sectionID="single-product-card">
				<Container size="large">
					<Card className={styles.card}>
						<Image src={product?.image?.url} className={styles['single-card-image']} />
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
									119.90TL
								</Span>
							</div>
							<div className={styles['single-card-actions']}>
								{!product?.isSold ? (
									<>
										<Button
											primary
											label="Satın Al"
											handleClick={() => {
												setPopup(true);
											}}
										/>
										<Button
											label="Teklif Ver"
											handleClick={() => {
												setPopup(true);
											}}
										/>
									</>
								) : (
									<Button label="Bu Ürün Satışta Değil" />
								)}
							</div>
						</div>
					</Card>
				</Container>
			</Section>
		</>
	);
}

export default Product;
