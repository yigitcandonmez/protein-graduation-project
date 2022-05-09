import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './Image.module.css';

const BASE_URL = 'https://bootcamp.akbolat.net/';

function Image({ localSrc, src, alt, loading, width, height, className, onLoad }) {
	return (
		<img
			src={!localSrc && typeof src !== 'undefined' ? `${BASE_URL}${src}` : localSrc}
			alt={alt}
			width={width}
			loading={loading}
			onLoad={onLoad}
			height={height}
			className={cx(styles.image, className)}
		/>
	);
}

Image.propTypes = {
	localSrc: PropTypes.string,
	src: PropTypes.string,
	alt: PropTypes.string,
	loading: PropTypes.string,
	width: PropTypes.string,
	height: PropTypes.string,
	className: PropTypes.string,
	onLoad: PropTypes.func,
};

Image.defaultProps = {
	localSrc: '',
	src: '',
	alt: '',
	loading: 'lazy',
	width: '100%',
	height: '100%',
	className: '',
	onLoad: () => {},
};

export { Image };
