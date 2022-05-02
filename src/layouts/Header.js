import { Container, Logo, CustomLink } from '../components';
import styles from './Header.module.css';
import { useAuth } from '../contexts/AuthContext';

function Header() {
	const { data } = useAuth();
	return (
		<header className={styles.header}>
			<Container size="large">
				<div className={styles['header-wrapper']}>
					<div>
						<Logo size="small" />
					</div>
					<div>
						{/* Objeye aktarılıcak. */}
						{Object.entries(data).length < 1 ? (
							<>
								<CustomLink label="Ürün Ekle" to="/" />
								<CustomLink label="Giriş Yap" to="/auth" />
							</>
						) : (
							<CustomLink label="Profilim" to="/auth" />
						)}
					</div>
				</div>
			</Container>
		</header>
	);
}

export { Header };
