import cx from 'classnames';
import styles from './Card.module.css';

function Card({ children, className }) {
	return <div className={cx(styles.card, className)}>{children}</div>;
}

export { Card };
