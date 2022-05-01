import React from 'react';
import cx from 'classnames';
import styles from './SubHeading.module.css';

function SubHeading({ children, className }) {
	return <h4 className={cx(styles.SubHeading, className)}>{children}</h4>;
}

export { SubHeading };
