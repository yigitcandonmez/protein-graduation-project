/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import cx from 'classnames';
import styles from './Span.module.css';

// eslint-disable-next-line no-unused-vars
function Span({ children, className, title, handleClick }) {
	if (title) {
		return (
			<div className={cx(styles.spanwithtitle, className)}>
				<span className={cx(styles.spanTitle)}>{title}</span>
				<span className={cx(styles.spanContent)}>{children}</span>
			</div>
		);
	}
	return (
		<span className={cx(styles.span, className)} onClick={handleClick}>
			{children}
		</span>
	);
}

export { Span };
