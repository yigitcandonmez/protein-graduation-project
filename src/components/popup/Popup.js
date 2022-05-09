import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import styles from './Popup.module.css';

function Popup({ display = false, children }) {
	const { user } = useAuth();
	const navigate = useNavigate();

	if (!user.id) {
		navigate('/auth', { replace: true });
	}

	if (display) {
		return <div className={styles.popup}>{children}</div>;
	}
}

export { Popup };
