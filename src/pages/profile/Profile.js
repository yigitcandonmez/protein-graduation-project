/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button, Card, Container, ProductInfo, Section, Span } from '../../components';
import { Categories } from '../../containers/categories/Categories';
import { useAuth } from '../../contexts/AuthContext';
import { useProduct } from '../../contexts/ProductContext';
import { getUserProducts } from '../../services/api/products';
import styles from './Profile.module.css';

function Profile() {
	const [receivedOffers, setReceivedOffers] = useState();
	const { user, logout } = useAuth();
	const { products, offers } = useProduct();

	const navigate = useNavigate();
	const [searchParams, setSearchParams] = useSearchParams();

	const categoryName = searchParams.get('categoryName');
	const mapData = categoryName === 'teklif verdiklerim' ? offers : receivedOffers;

	useEffect(() => {
		getUserProducts(user.id).then((response) => {
			setReceivedOffers(response.reverse());
		});
	}, [products]);

	const handleLogout = (e) => {
		navigate('/', { replace: false });
		e.preventDefault();
		logout();
	};

	return (
		<Section>
			<Container size="large">
				<Card className={styles['profile-top']}>
					<Span className={styles['user-info']}>{user.email}</Span>
					<Button
						className={styles['button-logout']}
						primary
						label="Çıkış Yap"
						handleClick={(e) => {
							handleLogout(e);
						}}
					/>
				</Card>
				<Card className={styles['profile-bottom']}>
					<div className={styles['profile-bottom-categories']}>
						<Categories type="offers" />
					</div>
					<div className={styles['profile-bottom-products']}>
						{mapData?.map((e) => {
							return (
								<ProductInfo
									productName={e.name || e.product?.name}
									productImage={e.image?.formats.small?.url || e.product?.image.url}
									productID={e.product?.id}
									receivedOffers={e.offers}
									offerPrice={e.offerPrice}
									isStatus={e.isStatus}
									isSold={e.product?.isSold}
									wrapperClassName={styles.wrapper}
									imageClassName={styles.image}
								/>
							);
						})}
					</div>
				</Card>
			</Container>
		</Section>
	);
}

export default Profile;
