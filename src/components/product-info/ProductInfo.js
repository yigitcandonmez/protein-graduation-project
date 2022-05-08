/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import cx from 'classnames';
import { buyProductWithId, responseOffer } from '../../services/api/products';
import { Button } from '../button';
import { Heading } from '../heading';
import { Image } from '../image';
import { Span } from '../span';
import styles from './ProductInfo.module.css';

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
	const responseReceivedOffer = (offerID, type) => {
		responseOffer(offerID, type).then((res) => console.log(res));
	};

	const receivedOfferResponse = (e) => {
		let response;
		if (typeof e.isStatus === 'object') {
			response = (
				<>
					<Button primary label="Onayla" handleClick={() => responseReceivedOffer(e.id, 'ACCEPT')} />
					<Button label="Reddet" handleClick={() => responseReceivedOffer(e.id)} />
				</>
			);
		} else if (e.isStatus === true) {
			response = 'Onaylandı';
		} else {
			response = 'Reddedildi';
		}
		return response;
	};

	const givenOfferResponse = () => {
		let response;
		if (typeof isStatus === 'object') {
			response = 'Yanıt bekleniyor..';
		} else if (isStatus && !isSold) {
			response = (
				<>
					<Button
						primary
						label="Onayla"
						handleClick={() => {
							buyProductWithId(productID).then((response) => console.log(response));
						}}
					/>
					Onaylandı
				</>
			);
		} else if (isSold && isStatus) {
			response = 'Satın Alındı';
		} else {
			response = 'Reddedildi';
		}
		return response;
	};

	return receivedOffers ? (
		receivedOffers.map((e) => {
			return (
				<div className={cx(styles['product-info-wrapper'], wrapperClassName)}>
					<div style={{ display: 'flex' }}>
						<Image src={productImage} className={cx(styles['product-info-image'], imageClassName)} />
						<div style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px', justifyContent: 'center' }}>
							<Heading size="18" text={`${productName}`} />
							<Span className={cx(styles['single-card-offer'])} title="Verilen Teklif:">
								{e.offerPrice} TL
							</Span>
						</div>
					</div>
					<div>{receivedOfferResponse(e)}</div>
				</div>
			);
		})
	) : (
		<div className={cx(styles['product-info-wrapper'], wrapperClassName)}>
			<div style={{ display: 'flex' }}>
				<Image src={productImage} className={cx(styles['product-info-image'], imageClassName)} />
				<div style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px', justifyContent: 'center' }}>
					<Heading size="18" text={`${productName}`} />
					{type !== 'popup' ? (
						<Span className={cx(styles['single-card-offer'])} title="Verilen Teklif:">
							{offerPrice} TL
						</Span>
					) : null}
				</div>
			</div>
			<div>
				{type !== 'popup' ? (
					<Span className={styles['product-info-price']}>{givenOfferResponse()}</Span>
				) : (
					<Span className={styles['product-info-price']}>{productPrice} TL</Span>
				)}
			</div>
		</div>
	);
}

export { ProductInfo };
