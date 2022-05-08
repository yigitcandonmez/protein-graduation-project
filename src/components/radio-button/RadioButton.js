/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import cn from 'classnames';
import styles from './RadioButton.module.css';

function RadioButton({ id, label = '', value, form, field, disabled = false, productPrice, className }) {
	const currentFormValue = form.values.number;

	return (
		<div
			className={cn([
				styles['radio-input'],
				currentFormValue === field.value ? styles['radio-input-focus'] : '',
				className,
			])}
			role="none"
			onClick={() => {
				form.setFieldValue('number', value);
				form.setFieldValue('offer', (productPrice * value) / 100);
			}}
		>
			<input {...field} type="radio" checked={currentFormValue === field.value} id={id} disabled={disabled} />
			<label htmlFor={id}>{label}</label>
		</div>
	);
}

export { RadioButton };
