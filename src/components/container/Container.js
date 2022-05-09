import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './Container.module.css';

function Container({ children, className }) {
	return <div className={cx(styles.container, className)}>{children}</div>;
}

Container.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};

Container.defaultProps = {
	className: '',
};

export { Container };
