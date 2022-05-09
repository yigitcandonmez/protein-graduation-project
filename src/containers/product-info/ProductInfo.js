/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import cx from 'classnames';
import { useState } from 'react';
import { useProduct } from '../../contexts/ProductContext';
import { Button } from '../../components/button';
import { Heading } from '../../components/heading';
import { Image } from '../../components/image';
import { Span } from '../../components/span';
import styles from './ProductInfo.module.css';
import PopupModal from '../popup-modals/PopupModal';

function ProductInfo({
	type,
	productImage,
	productName,
	productPrice,
	productID,
	offerPrice,
	isStatus,
	isSold,
	receivedOffers,
	wrapperClassName,
	imageClassName,
}) {
	const [popup, setPopup] = useState(false);
	const { responseOffer } = useProduct();

	const responseReceivedOffer = (offerID, type) => {
		responseOffer(offerID, type);
	};

	const closePopup = () => {
		setPopup(false);
	};

	const receivedOfferResponse = (e) => {
		let response;
		if (typeof e.isStatus === 'object') {
			response = (
				<>
					<Button
						mode="primary"
						className={styles.button}
						label="Onayla"
						handleClick={() => responseReceivedOffer(e.id, 'ACCEPT')}
					/>
					<Button
						mode="decline"
						className={styles.button}
						label="Reddet"
						handleClick={() => responseReceivedOffer(e.id)}
					/>
				</>
			);
		} else if (e.isStatus === true) {
			response = <Span className={styles.accept}>Onaylandı</Span>;
		} else {
			response = <Span className={styles.decline}>Reddedildi</Span>;
		}
		return response;
	};

	const givenOfferResponse = () => {
		let response;
		if (typeof isStatus === 'object') {
			response = <Span className={styles['wait-response']}>Yanıt bekleniyor..</Span>;
		} else if (isStatus && !isSold) {
			response = (
				<>
					<Button
						mode="primary"
						label="Satın Al"
						className={styles.button}
						handleClick={() => {
							setPopup(true);
						}}
					/>
					<Span className={styles.accept}>Onaylandı</Span>
				</>
			);
		} else if (isSold && isStatus) {
			response = <Span className={styles.success}>Satın Alındı</Span>;
		} else {
			response = <Span className={styles.decline}>Reddedildi</Span>;
		}
		return response;
	};

	return receivedOffers ? (
		receivedOffers.map((e) => {
			return (
				<div className={cx(styles['product-info-wrapper'], wrapperClassName)}>
					<div className={styles['product-info-left']}>
						<Image src={productImage} className={cx(styles['product-info-image'], imageClassName)} />
						<div
							style={{
								display: 'flex',
								flexDirection: 'column',
								marginLeft: '10px',
								justifyContent: 'center',
								width: '100%',
							}}
						>
							<Heading className={styles['single-card-heading']} text={`${productName}`} />
							<Span className={cx(styles['single-card-offer'])} title="Verilen Teklif:">
								{e.offerPrice} TL
							</Span>
						</div>
					</div>
					<div className={styles['product-info-right']}>{receivedOfferResponse(e)}</div>
				</div>
			);
		})
	) : (
		<>
			{' '}
			<PopupModal type="buyPopup" popup={popup} closePopup={closePopup} productID={productID} />
			<div className={cx(styles['product-info-wrapper'], wrapperClassName)}>
				<div className={styles['product-info-left']}>
					<Image src={productImage} className={cx(styles['product-info-image'], imageClassName)} />
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							marginLeft: '10px',
							justifyContent: 'center',
							width: '100%',
						}}
					>
						<Heading size="18" text={`${productName}`} />
						{type !== 'popup' ? (
							<Span className={cx(styles['single-card-offer'])} title="Verilen Teklif:">
								{offerPrice} TL
							</Span>
						) : null}
					</div>
				</div>
				<div className={styles['product-info-right']}>
					{type !== 'popup' ? (
						givenOfferResponse()
					) : (
						<Span className={styles['product-info-price']}>{productPrice} TL</Span>
					)}
				</div>
			</div>
		</>
	);
}

export { ProductInfo };
