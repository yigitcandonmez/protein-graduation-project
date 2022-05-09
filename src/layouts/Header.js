/* eslint-disable no-unused-vars */
import { Container, Logo, CustomLink, UserIcon, PlusIcon } from '../components';
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
						<Logo size={width > 768 ? 'small' : 'extra-small'} />
					</div>
					<div className={styles['header-navigation']}>
						{user && Object.entries(user).length < 1 ? (
							<CustomLink Icon={UserIcon} label="Giriş Yap" to="/auth">
								<UserIcon />
							</CustomLink>
						) : (
							<>
								<CustomLink label={width > 768 ? 'Ürün Ekle' : ' '} to="/product/newProduct">
									<PlusIcon />
								</CustomLink>
								<CustomLink label="Hesabım" to="/profile/?categoryName=teklif+aldıklarım">
									<UserIcon />
								</CustomLink>
							</>
						)}
					</div>
				</div>
			</Container>
		</header>
	);
}

export { Header };
