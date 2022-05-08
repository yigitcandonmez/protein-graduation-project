/* eslint-disable for-direction */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import loadable from '@loadable/component';
import { useSearchParams } from 'react-router-dom';
import { Header } from '../../layouts/Header';
import Banner from '../../assets/images/Banner.webp';
import styles from './Home.module.css';
import { Container, Image, Section } from '../../components';
import { Categories } from '../../containers/categories/Categories';

const Products = loadable(() => import(/* webpackPrefetch: true */ '../../containers/products/Products'));

function Home() {
	const [searchParams, setSearchParams] = useSearchParams();

	useEffect(() => {
		setSearchParams('categoryName=hepsi');
	}, []);

	return (
		<>
			<Header />
			<Container size="large">
				<Section sectionID="banner">
					<Image localSrc={Banner} alt="Home page banner" className={styles['home-banner-image']} />
				</Section>
				<Section sectionID="categories" className={styles['home-nav']}>
					<Categories type="home" justify="between" />
				</Section>
				<Section sectionID="products" className={styles.products}>
					<Products />
				</Section>
			</Container>
		</>
	);
}

export default Home;
