/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect, useState } from 'react';
import styles from './Toggle.module.css';

function ToggleSwitch(props) {
	const [isToggled, setIsToggled] = useState(false);
	const { field, form } = props;

	useEffect(() => {
		form.setFieldValue(field.name, isToggled);
	}, [isToggled]);

	const onToggle = () => {
		setIsToggled(!isToggled);
	};

	return (
		<label className={styles['toggle-switch']}>
			<input type="checkbox" checked={isToggled} onChange={onToggle} />
			<span className={styles.switch} />
		</label>
	);
}

export { ToggleSwitch };
