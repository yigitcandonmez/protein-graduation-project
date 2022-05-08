/* eslint-disable no-unused-vars */
import { Container, Logo, CustomLink } from '../components';
import useWindowSize from '../hooks/useWindowSize';
import styles from './Header.module.css';
import { useAuth } from '../contexts/AuthContext';

function Header() {
	const { user } = useAuth();
	const { width } = useWindowSize();
	return (
		<header className={styles.header}>
			<Container>
				<div className={styles['header-wrapper']}>
					<div>
						<Logo size="small" />
					</div>
					<div>
						{Object.entries(user).length < 1 ? (
							<CustomLink label="Giriş Yap" to="/auth" />
						) : (
							<>
								{width > 768 ? <CustomLink label="Ürün Ekle" to="/product/newProduct" /> : null}
								<CustomLink label="Profilim" to="/profile" />
							</>
						)}
					</div>
				</div>
			</Container>
		</header>
	);
}

export { Header };
