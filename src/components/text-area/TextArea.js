/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import cx from 'classnames';
import styles from './TextArea.module.css';
import { Span } from '../span';

function TextArea({ rowClassName, labelClassName, textAreaClassname, id, label, field, ...props }) {
	const {
		form: { touched, errors },
	} = props;

	const textAreaValidate = touched[field.name] && errors[field.name] ? 'textArea-error' : 'textArea-success';

	return (
		<div className={cx(styles.textAreaRow, rowClassName)}>
			<label className={cx(styles.label, labelClassName)} htmlFor={props.name}>
				{label}
			</label>
			<textarea
				className={cx(styles.textArea, textAreaClassname, styles[`${textAreaValidate}`])}
				{...field}
				{...props}
			/>
			{touched[field.name] ? <Span className={styles.error}>{errors[field.name]}</Span> : null}
		</div>
	);
}

export { TextArea };
