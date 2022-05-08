/* eslint-disable no-nested-ternary */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Helmet from 'react-helmet';
import styles from './ProductDetail.module.css';
import { Container, Card, Image, Heading, Button, Span, Section, FullPageSpinner } from '../../components';
import { Header } from '../../layouts/Header';
import { useProduct } from '../../contexts/ProductContext';
import { getProductById, getUserOffer } from '../../utils/ProductUtils';
import PopupModal from '../../containers/popup-modals/PopupModal';
import { fetchProduct } from '../../services/api/products';
import { useAuth } from '../../contexts/AuthContext';

function Product() {
	const { user } = useAuth();
	const [product, setProduct] = useState();

	const [popup, setPopup] = useState(false);
	const [popupType, setPopupType] = useState();

	const { products, offers, cancelProductOfferWithId } = useProduct();
	const { productID } = useParams();

	const offer = getUserOffer(offers, product?.id);

	useEffect(() => {
		const product = getProductById(products, +productID);
		setProduct(product);

		if (!product) {
			fetchProduct(productID).then((response) => setProduct(response));
		}
	}, [products]);

	const openPopup = (e) => {
		setPopupType(e.target.id);
		setPopup(true);
	};

	const closePopup = () => {
		setPopup(false);
	};

	const userIsOwner = () => {
		return user?.id === product?.users_permissions_user?.id;
	};

	if (typeof product === 'undefined') {
		return <FullPageSpinner />;
	}

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
			<Section sectionID="single-product-card">
				<Container size="large">
					<Card className={styles.card}>
						<Image src={product?.image?.url} className={styles['single-card-image']} />
						<div className={styles['single-card-content']}>
							<Heading text={`${product?.name}`} className={styles['single-card-heading']} />
							<div className={styles['row-reverse']}>
								<div className={styles['single-card-prices']}>
									<Span className={styles['single-card-price']}>{product?.price} TL</Span>
									{offer?.length > 0 && (
										<Span className={styles['single-card-offer']} title="Verilen Teklif:">
											{offer[0].offerPrice} TL
										</Span>
									)}
								</div>
								<div className={styles['single-card-info']}>
									<Span title="Marka:">{product?.brand}</Span>
									<Span title="Renk:">{product?.color}</Span>
									<Span title="Kullanım Durumu:">{product?.status}</Span>
								</div>
							</div>
							<div className={styles['single-card-actions']}>
								{userIsOwner() ? (
									<Span className={styles['description-heading']}>
										Kendi ürününüze teklif veremez & satın alamazsınız.
									</Span>
								) : !product?.isSold ? (
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
							<div className={styles['single-card-description']}>
								<Span className={styles['description-heading']}>Açıklama</Span>
								<Span className={styles['description-content']}>{product.description}</Span>
							</div>
						</div>
					</Card>
				</Container>
			</Section>
		</>
	);
}

export default Product;
