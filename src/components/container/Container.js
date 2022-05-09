import React from 'react';
import cx from 'classnames';
import styles from './Container.module.css';

function Container({ children, className }) {
	return <div className={cx(styles.container, className)}>{children}</div>;
}

export { Container };
