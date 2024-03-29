/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import cx from 'classnames';
import { useSearchParams } from 'react-router-dom';
import styles from './ListItem.module.css';

function ListItem({ data }) {
	const [searchParams, setSearchParams] = useSearchParams();
	const active = searchParams.get('categoryName') || 'hepsi';

	const handleClick = (element) => {
		if (element.target.innerText !== 'Hepsi') {
			setSearchParams(`categoryName=${element.target.innerText.toLowerCase()}`);
		} else {
			setSearchParams({});
		}
	};

	return data?.map((e) => (
		<li
			key={e.id}
			onClick={(element) => {
				if (element.target.innerText.toLowerCase() === active) return;
				handleClick(element);
			}}
			className={cx(styles['list-item'], active === e.name.toLowerCase() ? styles.active : null)}
		>
			{e.name}
		</li>
	));
}

export { ListItem };
