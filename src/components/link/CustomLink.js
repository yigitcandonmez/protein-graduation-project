import PropTypes from 'prop-types';
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

CustomLink.propTypes = {
	label: PropTypes.string,
	to: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
};

CustomLink.defaultProps = {
	label: '',
};

export { CustomLink };
