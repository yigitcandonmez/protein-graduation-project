import React from 'react';
import styles from './Authentication.module.css';
import { Logo } from '../../components';
import { AuthForm } from '../../containers/auth-form/AuthForm';
import { Toastify } from '../../components/toastify/Toastify';
import { useAuth } from '../../contexts/AuthContext';

function Authentication() {
	const { error } = useAuth();
	return (
		<div className={styles.authPage}>
			{error ? <Toastify error="Email veya şifreniz hatalı." /> : null}
			<div className={styles['authPage-left']} />
			<div className={styles['authPage-right']}>
				<div className={styles['authPage-right-logo']}>
					<Logo size="large" />
				</div>
				<AuthForm />
			</div>
		</div>
	);
}

export default Authentication;
