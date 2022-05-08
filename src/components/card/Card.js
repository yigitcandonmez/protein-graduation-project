import cx from 'classnames';
import styles from './Card.module.css';

function Card({ children, className }) {
	return <div className={cx(className, styles.card)}>{children}</div>;
}

export { Card };
