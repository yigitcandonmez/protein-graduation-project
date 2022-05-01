/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import styles from './ListItem.module.css';

function ListItem({ data }) {
	const handleClick = () => {};
	return data?.map((e) => (
		<li onClick={handleClick} className={styles['list-item']}>
			{e.name}
		</li>
	));
}

export { ListItem };
