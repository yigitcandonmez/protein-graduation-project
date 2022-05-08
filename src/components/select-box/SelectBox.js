/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-no-constructed-context-values */
import { useState, useRef } from 'react';
import cx from 'classnames';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import { SelectContext } from '../../contexts/SelectContext';
import styles from './SelectBox.module.css';
import { Span } from '../span';

function SelectBox({ children, defaultValue, placeholder, ...props }) {
	const [selectedOption, setSelectedOption] = useState(defaultValue || '');
	const [showDropdown, setShowDropdown] = useState(false);
	const selectPlaceholder = placeholder || 'Seçim yapın.';
	const selectContainerRef = useRef(null);

	const { field, form } = props;
	const { touched, errors } = form;

	const selectBoxValidate = touched[field.name] && errors[field.name] ? 'select-error' : 'select-success';

	const clickOutsideHandler = () => setShowDropdown(false);

	useOnClickOutside(selectContainerRef, clickOutsideHandler);

	const showDropdownHandler = () => {
		setShowDropdown(!showDropdown);
	};

	const updateSelectedOption = (option) => {
		setSelectedOption(option);
		form.setFieldValue(field.name, field.name === 'category' ? option.id : option.name);
		setShowDropdown(false);
	};

	return (
		<SelectContext.Provider value={{ selectedOption, changeSelectedOption: updateSelectedOption }}>
			<div className={styles.select}>
				<div className={cx(styles['select-container'], styles[`${selectBoxValidate}`])} ref={selectContainerRef}>
					<div
						className={cx(styles['selected-text'], showDropdown ? styles.active : null)}
						onClick={showDropdownHandler}
					>
						{typeof selectedOption === 'object' ? selectedOption?.name : selectPlaceholder}
					</div>
					<ul
						className={cx(
							styles['select-options'],
							showDropdown ? styles['show-dropdown-options'] : styles['hide-dropdown-options']
						)}
					>
						{children}
					</ul>
				</div>
				{touched[field.name] ? <Span className={styles.error}>{errors[field.name]}</Span> : null}
			</div>
		</SelectContext.Provider>
	);
}

export { SelectBox };
