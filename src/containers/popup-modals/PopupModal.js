/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Field, Form, Formik } from 'formik';
import styles from './PopupModal.module.css';
import { Button, Card, Heading, Input, Image, SubHeading, Popup } from '../../components';
import { useAuth } from '../../contexts/AuthContext';
import { useProduct } from '../../contexts/ProductContext';

function Buy({ handleReject, productID }) {
	const { buyProductWithId } = useProduct();
	return (
		<Card className={styles.popupCard}>
			<Heading text="Satın Al" className={styles.popupHeading} />
			<SubHeading className={styles.popupSubHeading}>Satın almak istiyor musunuz?</SubHeading>
			<div className={styles.popupRow}>
				<Button label="Vazgeç" handleClick={handleReject} />
				<Button
					primary
					label="Satın Al"
					handleClick={() => {
						buyProductWithId(productID);
						handleReject();
					}}
				/>
			</div>
		</Card>
	);
}

function Offer({ productImage, productName, productID, productPrice, handleReject }) {
	const { user } = useAuth();
	const { offerProductWithId } = useProduct();

	return (
		<Card className={styles.offerCard}>
			<Formik
				initialValues={{
					picked: '',
					number: '',
				}}
				onSubmit={(values) => {
					console.log(productID);
					offerProductWithId(+productID, user.id, values.number);
					handleReject();
				}}
			>
				{({ values, setValues }) => (
					<Form>
						<div className={styles.headingRow}>
							<Heading text="Teklif Ver" className={styles.offerHeading} />
							<span onClick={handleReject}>X</span>
						</div>
						<div className={styles.productRow}>
							<div className={styles.infoRow}>
								<Image src={productImage} className={styles.offerImage} />
								<SubHeading className={styles.subHeading}>{productName}</SubHeading>
							</div>
							<div>
								<Field
									label="20%'si Kadar Teklif Ver"
									value="20"
									name="picked"
									type="radio"
									component={Input}
									onClick={() => {
										setValues({ ...values, number: parseFloat(productPrice * 0.2) });
									}}
									rowClassName={styles.inputRow}
									labelClassName={styles.labelClassName}
									inputClassName={styles.inputClassName}
								/>
								<Field
									label="30%'u Kadar Teklif Ver"
									value="30"
									name="picked"
									type="radio"
									component={Input}
									onClick={() => {
										setValues({ ...values, number: parseFloat(productPrice * 0.3) });
									}}
									rowClassName={styles.inputRow}
									labelClassName={styles.labelClassName}
									inputClassName={styles.inputClassName}
								/>
								<Field
									label="40%'ı Kadar Teklif Ver"
									value="40"
									name="picked"
									type="radio"
									component={Input}
									onClick={() => {
										setValues({ ...values, number: parseFloat(productPrice * 0.4) });
									}}
									rowClassName={styles.inputRow}
									labelClassName={styles.labelClassName}
									inputClassName={styles.inputClassName}
								/>
							</div>
						</div>
						<Field
							name="number"
							type="number"
							placeholder="Teklif Belirle"
							component={Input}
							value={values.number}
							onClick={() => {
								setValues({ picked: '' });
							}}
						/>
						<div>
							<Button primary label="Onayla" className={styles.button} />
						</div>
					</Form>
				)}
			</Formik>
		</Card>
	);
}

function PopupModal({ type, popup, closePopup, productID, productName, productImage, productPrice }) {
	return (
		<Popup display={popup}>
			{type === 'buyPopup' ? (
				<Buy productID={productID} handleReject={closePopup} />
			) : (
				<Offer
					productID={productID}
					productName={productName}
					handleReject={closePopup}
					productImage={productImage}
					productPrice={productPrice}
				/>
			)}
		</Popup>
	);
}

export default PopupModal;
