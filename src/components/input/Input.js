/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import cx from 'classnames';
import styles from './Input.module.css';
import { Span } from '../span';

function Input({
	rowClassName,
	labelClassName,
	inputClassName,
	type,
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
			<input
				className={cx(styles.input, styles[`${inputValidate}`], inputClassName)}
				type={type}
				{...field}
				{...props}
			/>
			{touched[field.name] && <Span className={styles.error}>{errors[field.name]}</Span>}
		</div>
	);
}

export { Input };
