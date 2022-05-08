/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useSelectContext } from '../../contexts/SelectContext';
import styles from './SelectBox.module.css';

function Option({ children, value }) {
	const { changeSelectedOption } = useSelectContext();

	return (
		<li className={styles['select-option']} onClick={() => changeSelectedOption(value)}>
			{children}
		</li>
	);
}

export default Option;
