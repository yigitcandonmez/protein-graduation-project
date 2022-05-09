/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import cx from 'classnames';
import styles from './Input.module.css';
import { Span } from '../span';

function Input({ rowClassName, labelClassName, inputClassName, type, id, label, field, form, ...props }) {
	const inputValidate = form.touched[field.name] && form.errors[field.name] ? 'input-error' : 'input-success';

	return (
		<div className={cx(styles.inputRow, rowClassName)}>
			<label className={cx(styles.label, labelClassName)} htmlFor={props.name}>
				{label}
			</label>
			<input
				className={cx(styles[`${inputValidate}`], styles.input, inputClassName)}
				type={type}
				{...field}
				{...props}
			/>
			{form.touched[field.name] && <Span className={styles.error}>{form.errors[field.name]}</Span>}
		</div>
	);
}

export { Input };
