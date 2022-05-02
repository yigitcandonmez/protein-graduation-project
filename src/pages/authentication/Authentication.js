import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Authentication.module.css';
import { Logo } from '../../components';
import { AuthForm } from '../../containers/auth-form/AuthForm';
import { useAuth } from '../../contexts/AuthContext';

function Authentication() {
	const { data } = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		if (data.id) {
			navigate('/', { replace: true });
		}
	}, [{ data }]);

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
