import PropTypes from 'prop-types';
import styles from './Icons.module.css';

function Svg({ children }) {
	return (
		<svg viewBox="0 0 18 14" className={styles.svg}>
			{children}
		</svg>
	);
}

export function PlusIcon() {
	return (
		<Svg>
			<g id="Group_6861" data-name="Group 6861" transform="translate(-4.1 -4.1)">
				<path
					id="Line_74"
					data-name="Line 74"
					d="M0,12.045a.9.9,0,0,1-.9-.9V0A.9.9,0,0,1,0-.9.9.9,0,0,1,.9,0V11.145A.9.9,0,0,1,0,12.045Z"
					transform="translate(10.572 5)"
					fill="#4b9ce2"
				/>
				<path
					id="Line_75"
					data-name="Line 75"
					d="M11.145.9H0A.9.9,0,0,1-.9,0,.9.9,0,0,1,0-.9H11.145a.9.9,0,0,1,.9.9A.9.9,0,0,1,11.145.9Z"
					transform="translate(5 10.572)"
					fill="#4b9ce2"
				/>
			</g>
		</Svg>
	);
}

export function UserIcon() {
	return (
		<Svg>
			<g id="Group_3045" data-name="Group 3045" transform="translate(-624.27 -292.023)">
				<path
					id="Ellipse_1110"
					data-name="Ellipse 1110"
					d="M3-.9A3.9,3.9,0,1,1-.9,3,3.906,3.906,0,0,1,3-.9Zm0,6A2.1,2.1,0,1,0,.9,3,2.1,2.1,0,0,0,3,5.1Z"
					transform="translate(627.477 292.923)"
					fill="#4b9ce2"
				/>
				<path
					id="Path_3887"
					data-name="Path 3887"
					d="M635.787,316.313a.9.9,0,0,1-.9-.9,4.409,4.409,0,1,0-8.817,0,.9.9,0,0,1-1.8,0,6.209,6.209,0,0,1,12.417,0A.9.9,0,0,1,635.787,316.313Z"
					transform="translate(0 -11.178)"
					fill="#4b9ce2"
				/>
			</g>
		</Svg>
	);
}

Svg.propTypes = {
	children: PropTypes.node.isRequired,
};
