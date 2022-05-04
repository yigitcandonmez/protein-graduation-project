import React from 'react';
import styles from './Authentication.module.css';
import { Logo } from '../../components';
import { AuthForm } from '../../containers/auth-form/AuthForm';

function Authentication() {
	return (
		<div className={styles.authPage}>
			<div className={styles['authPage-left']} />
			<div className={styles['authPage-right']}>
				<div className={styles['authPage-right-image']}>
					<Logo size="large" />
				</div>
				<AuthForm />
			</div>
		</div>
	);
}

export default Authentication;
