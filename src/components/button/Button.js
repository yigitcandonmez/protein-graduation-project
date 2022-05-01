import React from 'react';
import cx from 'classnames';
import styles from './Button.module.css';

function Button({ label, primary, className }) {
	const mode = primary ? 'primary' : 'secondary';
	return (
		<button type="submit" className={cx(styles['button-submit'], styles[`button-${mode}`], className)}>
			{label}
		</button>
	);
}

export { Button };
