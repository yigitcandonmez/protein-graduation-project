/* eslint-disable consistent-return */
/* eslint-disable import/order */
import React, { useEffect } from 'react';
import styles from './Authentication.module.css';
import { Logo } from '../../components';
import { AuthForm } from '../../containers/auth-form/AuthForm';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

function Authentication() {
	const { user, setLoadingInitial } = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		if (user.id) {
			setLoadingInitial(true);
			navigate('/');
			setLoadingInitial(false);
		}
	}, []);

	return (
		<div className={styles.authPage}>
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
