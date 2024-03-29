/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-syntax */
/* eslint-disable prefer-const */
/* eslint-disable prefer-destructuring */
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useProduct } from '../../contexts/ProductContext';
import { Card, Container, Heading, Input, Section, TextArea, SelectBox, Button, Span } from '../../components';
import { addNewProduct, getSelectBoxItems } from '../../services/api/products';
import styles from './NewProduct.module.css';
import { ToggleSwitch } from '../../components/toggle';
import { useAuth } from '../../contexts/AuthContext';
import Option from '../../components/select-box/Option';
import { DropBox } from '../../components/drop-box/DropBox';

function NewProduct() {
	let formData = new FormData();
	let navigate = useNavigate();
	const { categories } = useProduct();
	const { user } = useAuth();
	const [image, setImage] = useState();
	const [selectItems, setSelectItems] = useState();

	const handleImage = (type) => {
		setImage(type);
	};

	console.log(image);

	useEffect(() => {
		const getAllSelectItems = async () => {
			await getSelectBoxItems
				.then((response) => {
					setSelectItems({
						brands: response[0],
						colors: response[1],
						status: response[2],
					});
				})
				.catch((responseError) => {
					console.error(responseError);
				});
		};
		getAllSelectItems();
	}, []);

	const newProductSchema = Yup.object().shape({
		name: Yup.string().max('100').required('Bu alan boş bırakılamaz.'),
		description: Yup.string().max('500').required('Bu alan boş bırakılamaz.'),
		category: Yup.number().required('Bu alan boş bırakılamaz.'),
		brand: Yup.string(),
		color: Yup.string(),
		status: Yup.string().required('Bu alan boş bırakılamaz.'),
		price: Yup.number().required('Bu alan boş bırakılamaz.'),
		files: Yup.array().required(),
	});

	return (
		<Section>
			<Container size="large">
				<Formik
					initialValues={{
						name: '',
						description: '',
						category: '',
						brand: '',
						color: '',
						status: '',
						price: '',
						isOfferable: false,
						isSold: false,
						users_permissions_user: user.id,
						files: [],
					}}
					validationSchema={newProductSchema}
					onSubmit={(values) => {
						formData.append('data', JSON.stringify(values));
						if (image) {
							addNewProduct(formData)
								.then((response) => {
									if (response.statusText === 'OK') {
										navigate(`/product/${response.data.id}`);
									}
								})
								.catch((error) => console.error(error));
						} else {
							toast.error('Fotoğraf eklemeniz gerekiyor');
						}
						formData.delete('data');
					}}
				>
					<Form>
						<Card className={styles.card}>
							<div className={styles['card-left']}>
								<Heading text="Ürün Detayları" className={styles['card-heading']} />
								<Field
									name="name"
									label="Ürün Adı"
									type="text"
									placeholder="Örnek: Iphone 12 Pro Max"
									component={Input}
									rowClassName={styles.inputRow}
								/>
								<Field
									name="description"
									label="Açıklama"
									placeholder="Ürün açıklamasını girin."
									component={TextArea}
									rowClassName={styles.textAreaRow}
								/>
								<div className={styles.flexRow}>
									<Field name="category" label="Kategori seç" placeholder="Kategori seç" component={SelectBox}>
										{categories?.map((e) => (
											<Option value={e}>{e.name}</Option>
										))}
									</Field>
									<Field name="brand" label="Marka seç" placeholder="Marka Seç" component={SelectBox}>
										{selectItems?.brands.map((e) => (
											<Option value={e}>{e.name}</Option>
										))}
									</Field>
								</div>
								<div className={styles.flexRow}>
									<Field name="color" label="Renk seç" placeholder="Renk seç" component={SelectBox}>
										{selectItems?.colors.map((e) => (
											<Option value={e}>{e.name}</Option>
										))}
									</Field>
									<Field
										name="status"
										label="Kullanım durumu seç"
										placeholder="Kullanım durumu seç"
										component={SelectBox}
									>
										{selectItems?.status.map((e) => (
											<Option value={e}>{e.name}</Option>
										))}
									</Field>
								</div>
								<Field
									name="price"
									label="Fiyat"
									type="number"
									placeholder="Bir fiyat girin"
									component={Input}
									rowClassName={styles.inputRow}
									inputClassName={styles.input}
								/>
								<Span className={styles.offerOption} title="Teklif Opsiyonu:">
									<Field name="isOfferable" component={ToggleSwitch} />
								</Span>
							</div>
							<div className={styles['card-right']}>
								<div>
									<Heading text="Ürün Görseli" className={styles['card-heading']} />
									<DropBox formData={formData} handleImage={handleImage} />
									<div>{formData.get('files.image')}</div>
								</div>
								<Button mode="primary" className={styles.saveButton} label="Kaydet" />
							</div>
						</Card>
					</Form>
				</Formik>
			</Container>
		</Section>
	);
}

export default NewProduct;
