/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Helmet from 'react-helmet';

import styles from './ProductDetail.module.css';

import { Container, Card, Image, Heading, Button, Span, Section } from '../../components';
import { Header } from '../../layouts/Header';
import { useProduct } from '../../contexts/ProductContext';
import { getProductById, getUserOffer } from '../../utils/ProductUtils';
import PopupModal from '../../containers/popup-modals/PopupModal';
import { useAuth } from '../../contexts/AuthContext';

function Product() {
	const [popup, setPopup] = useState(false);
	const [popupType, setPopupType] = useState();

	const { user } = useAuth();
	const { products, offers, getUserOffers, cancelProductOfferWithId } = useProduct();

	const { productID } = useParams();
	const product = getProductById(products, +productID);
	const offer = getUserOffer(offers, product?.id);

	console.log(offer);

	useEffect(() => {
		getUserOffers(user.id);
	}, [products]);

	const openPopup = (e) => {
		setPopupType(e.target.id);
		setPopup(true);
	};

	const closePopup = () => {
		setPopup(false);
	};

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
			<PopupModal
				type={popupType}
				popup={popup}
				closePopup={closePopup}
				productID={productID}
				productName={product?.name}
				productImage={product?.image?.url}
				productPrice={product?.price}
			/>
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
								{offer?.length > 0 && (
									<Span className={styles['single-card-offer']} title="Verilen Teklif:">
										{offer[0].offerPrice} TL
									</Span>
								)}
							</div>
							<div className={styles['single-card-actions']}>
								{!product?.isSold ? (
									<>
										<Button
											primary
											id="buyPopup"
											label="Satın Al"
											handleClick={(e) => {
												openPopup(e);
											}}
											className={styles.primaryButton}
										/>
										{offer?.length > 0 ? (
											<Button
												label="Teklifi Geri Çek"
												handleClick={() => {
													cancelProductOfferWithId(offer[0]?.id);
												}}
												className={styles.secondaryButton}
											/>
										) : (
											<Button
												id="offerPopup"
												label="Teklif Ver"
												handleClick={(e) => {
													openPopup(e);
												}}
												className={styles.secondaryButton}
											/>
										)}
									</>
								) : (
									<Button label="Bu Ürün Satışta Değil" className={styles.noneButton} />
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
