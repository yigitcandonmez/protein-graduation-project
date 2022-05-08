import { useEffect, useState } from 'react';
import styles from './Toastify.module.css';

function Toastify({ error }) {
	const [display, setDisplay] = useState();

	useEffect(() => {
		setTimeout(() => {
			setDisplay(false);
		}, 3000);
	}, [display]);

	return display ? (
		<div className={styles['toastify-tost']}>
			<div className={styles['toastify-body']}>
				<div className={styles['toastify-icon']}>{/* <svg>Buraya ikon gelicek</svg> */}</div>
				<div className={styles['toastify-text']}>{error}</div>
			</div>
		</div>
	) : null;
}

export { Toastify };
