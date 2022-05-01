import React from 'react';
import cx from 'classnames';
import styles from './Container.module.css';

function Container({ size, children, className }) {
	return <div className={cx(styles[`container-${size}`], className)}>{children}</div>;
}

export { Container };
