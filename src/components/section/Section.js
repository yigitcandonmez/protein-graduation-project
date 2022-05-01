function Section({ sectionID, children, className }) {
	return (
		<section id={sectionID} className={className}>
			{children}
		</section>
	);
}

export { Section };
