/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import cx from 'classnames';
import { useSearchParams } from 'react-router-dom';
import styles from './ListItem.module.css';

function ListItem({ data }) {
	const [searchParams, setSearchParams] = useSearchParams();
	const active = searchParams.get('categoryName');

	const handleClick = (element) => {
		setSearchParams(`categoryName=${element.target.innerText.toLowerCase()}`);
	};

	return data?.map((e) => (
		<li
			onClick={(element) => {
				handleClick(element);
			}}
			className={cx(styles['list-item'], active === e.name.toLowerCase() ? styles.active : null)}
		>
			{e.name}
		</li>
	));
}

export { ListItem };
