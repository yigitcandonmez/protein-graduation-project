/* eslint-disable no-unused-vars */
import { Container, Logo, CustomLink } from '../components';
import styles from './Header.module.css';
import { useAuth } from '../contexts/AuthContext';

function Header() {
	const { user } = useAuth();
	return (
		<header className={styles.header}>
			<Container size="large">
				<div className={styles['header-wrapper']}>
					<div>
						<Logo size="small" />
					</div>
					<div>
						{Object.entries(user).length < 1 ? (
							<CustomLink label="Giriş Yap" to="/auth" />
						) : (
							<>
								<CustomLink label="Ürün Ekle" to="/" />
								<CustomLink label="Profilim" to="/auth" />
							</>
						)}
					</div>
				</div>
			</Container>
		</header>
	);
}

export { Header };
