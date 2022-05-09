import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './Card.module.css';

function Card({ children, className }) {
	return <div className={cx(className, styles.card)}>{children}</div>;
}

Card.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};

Card.defaultProps = {
	className: '',
};

export { Card };
