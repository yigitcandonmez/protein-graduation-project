import PropTypes from 'prop-types';
import cx from 'classnames';
import ProjectLogo from '../../assets/images/ProjectLogo.png';
import { CustomLink } from '../link';
import styles from './Logo.module.css';

function Logo({ size, className }) {
	return (
		<CustomLink to="/">
			<img src={ProjectLogo} alt="Project Logo" className={cx(styles[`logo-${size}`], className)} />
		</CustomLink>
	);
}

Logo.propTypes = {
	size: PropTypes.string.isRequired,
	className: PropTypes.string,
};

Logo.defaultProps = {
	className: '',
};

export { Logo };
