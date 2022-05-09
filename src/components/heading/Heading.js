import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './Heading.module.css';

function Heading({ text, className }) {
	return <h3 className={cx(className, styles.heading)}>{text}</h3>;
}

Heading.propTypes = {
	text: PropTypes.string,
	className: PropTypes.string,
};

Heading.defaultProps = {
	text: 'Text girmeyi unuttunuz.',
	className: '',
};

export { Heading };
