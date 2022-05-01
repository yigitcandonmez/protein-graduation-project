import React from 'react';
import loadable from '@loadable/component';
import { Header } from '../../layouts/Header';
import Banner from '../../assets/images/Banner.png';
import styles from './Home.module.css';
import { Container, Image, Section } from '../../components';
import { Categories } from '../../containers/categories/Categories';
import useDocumentTitle from '../../hooks/useDocumentTitle';

const Products = loadable(() => import(/* webpackPrefetch: true */ '../../containers/products/Products'));

function Home() {
	useDocumentTitle('Ana Sayfa');
	return (
		<>
			<Header />
			<Container size="large">
				<Section sectionID="banner">
					<Image localSrc={Banner} alt="Home page banner" className={styles['home-banner-image']} />
				</Section>
				<Categories />
				<Products />
			</Container>
		</>
	);
}

export default Home;
