import React from 'react';
import styles from './FullPageSpinner.module.css';

function FullPageSpinner() {
	return (
		<div className={styles.full}>
			<div className={styles.spinner} />
		</div>
	);
}

export { FullPageSpinner };
