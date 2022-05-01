import { Link } from 'react-router-dom';
import styles from './CustomLink.module.css';

function CustomLink({ key, label, to, children }) {
	return (
		<Link key={!key ? 'none' : key} to={to} className={label ? styles.customLink : ''}>
			{label}
			{children}
		</Link>
	);
}

export { CustomLink };
