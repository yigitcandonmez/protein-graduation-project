import React from 'react';
import Banner from '../../assets/images/Banner.webp';
import styles from './Home.module.css';
import { Container, Image, Section } from '../../components';
import { Categories } from '../../containers/categories/Categories';
import { Products } from '../../containers/products/Products';

function Home() {
	return (
		<Container size="large">
			<Section sectionID="banner">
				<div className={styles.banner}>
					<Image localSrc={Banner} alt="Home page banner" width="100%" height="100%" />
				</div>
			</Section>
			<Section sectionID="categories" className={styles['home-nav']}>
				<Categories type="home" justify="between" />
			</Section>
			<Section sectionID="products" className={styles.products}>
				<Products />
			</Section>
		</Container>
	);
}

export default Home;
