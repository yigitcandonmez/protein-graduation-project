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

export { Image };
