import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

function Button({ label, id, mode, className, handleClick, button }) {
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

Button.propTypes = {
	label: PropTypes.string,
	id: PropTypes.number,
	mode: PropTypes.string,
	className: PropTypes.string,
	handleClick: PropTypes.func,
	button: PropTypes.bool,
};

Button.defaultProps = {
	label: '',
	id: 0,
	mode: '',
	className: '',
	handleClick: () => {},
	button: false,
};

export { Button };
