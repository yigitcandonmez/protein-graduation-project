import { Link } from 'react-router-dom';
import styles from './CustomLink.module.css';

function CustomLink({ label, to, children }) {
	return (
		<Link to={to} className={label ? styles.customLink : ''}>
			<div className={styles['link-svg']}>{children}</div>
			<div className={styles['link-label']}>{label}</div>
		</Link>
	);
}

export { CustomLink };
