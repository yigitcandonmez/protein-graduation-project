/* eslint-disable react/destructuring-assignment */
import { Button, Heading, SubHeading, Card } from '../../components';
import styles from './Buy.module.css';

function Buy({ handleAccept, handleReject }) {
	return (
		<Card className={styles.popupCard}>
			<Heading text="Satın Al" className={styles.popupHeading} />
			<SubHeading className={styles.popupSubHeading}>Satın almak istiyor musunuz?</SubHeading>
			<div className={styles.popupRow}>
				<Button label="Vazgeç" handleClick={handleReject} />
				<Button primary label="Satın Al" handleClick={handleAccept} />
			</div>
		</Card>
	);
}

export default Buy;
