/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import cx from 'classnames';
import { useField } from 'formik';
import styles from './TextInput.module.css';

function TextInput({ label, className, ...props }) {
	const [field, meta] = useField(props);

	const checkValidate = meta.touched && meta.error ? 'input-error' : 'input-success';

	return (
		<div className={cx(styles.inputRow, className)}>
			<label className={styles.inputLabel} htmlFor={styles.inputLabel}>
				{label}
			</label>
			<input className={cx(styles.input, styles[`${checkValidate}`])} {...field} {...props} />
		</div>
	);
}

export { TextInput };
