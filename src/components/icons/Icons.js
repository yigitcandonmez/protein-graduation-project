function Svg({ width, height, viewBox, children, className }) {
	return (
		<svg width={width} height={height} viewBox={viewBox} className={className}>
			{children}
		</svg>
	);
}

export function PlusIcon() {
	return (
		<Svg width={20} height={20} viewBox="0 0 18 16">
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
		<Svg width={20} height={20} viewBox="0 0 20 16">
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

export function DropIcon({ className }) {
	return (
		<Svg width={30} height={30} viewBox="0 0 30 30" className={className}>
			<g id="Group_6911" data-name="Group 6911" transform="translate(-324.023 -407.388)">
				<path
					id="Path_14464"
					data-name="Path 14464"
					d="M353.764,420.935a7.5,7.5,0,0,0-6.955-5.511h-1.17a10.96,10.96,0,0,0-20.429-1.881c-1.842,3.836-1.5,9.775.759,13.24a.7.7,0,0,0,1.172-.765c-1.989-3.047-2.294-8.483-.677-11.852a9.565,9.565,0,0,1,17.954,2.119.7.7,0,0,0,.682.539h1.678a6.091,6.091,0,0,1,5.625,4.439,6.86,6.86,0,0,1-.908,5.052.7.7,0,0,0,.223.965.687.687,0,0,0,.37.107.7.7,0,0,0,.6-.329A8.289,8.289,0,0,0,353.764,420.935Z"
					fill="#4b9ce2"
				/>
				<path
					id="Path_14465"
					data-name="Path 14465"
					d="M339.46,421.91a.72.72,0,0,0-.99,0l-5.7,5.706a.7.7,0,0,0,.99.99l4.515-4.516c0,.01,0,.018,0,.027v11.127a.7.7,0,1,0,1.4,0V424.117c0-.009-.005-.017-.005-.027l4.517,4.516a.7.7,0,0,0,.99-.99Zm-.495,1.507c-.01,0-.018.005-.027.005l.027-.026.027.026C338.982,423.422,338.974,423.417,338.965,423.417Z"
					fill="#4b9ce2"
				/>
			</g>
		</Svg>
	);
}
