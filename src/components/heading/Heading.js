import React from 'react';
import cx from 'classnames';
import styles from './Heading.module.css';

function Heading({ text, size, className }) {
	return <h3 className={cx(styles.heading, styles[`heading-${size}`], className)}>{text}</h3>;
}

export { Heading };
