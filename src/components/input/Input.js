/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import cx from 'classnames';
import styles from './Input.module.css';

function Input({
	rowClassName,
	labelClassName,
	inputClassName,
	id,
	label,
	field,
	form: { touched, errors },
	...props
}) {
	const inputValidate = touched[field.name] && errors[field.name] ? 'input-error' : 'input-success';
	return (
		<div className={cx(styles.inputRow, rowClassName)}>
			<label className={cx(styles.label, labelClassName)} htmlFor={props.name}>
				{label}
			</label>
			<input className={cx(styles.input, inputClassName, styles[`${inputValidate}`])} {...field} {...props} />
		</div>
	);
}

export { Input };
