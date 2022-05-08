import React from 'react';
import cx from 'classnames';
import styles from './Button.module.css';

function Button({ label, id, primary, className, handleClick, button }) {
	const mode = primary ? 'primary' : 'secondary';

	return (
		<button
			id={id}
			type={button ? 'button' : 'submit'}
			onClick={handleClick}
			className={cx(styles['button-submit'], styles[`button-${mode}`], className)}
		>
			{label}
		</button>
	);
}

export { Button };
