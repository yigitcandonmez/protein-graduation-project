import styles from './Popup.module.css';

function Popup({ display = false, children }) {
	if (display) {
		return <div className={styles.popup}>{children}</div>;
	}
}

export { Popup };
